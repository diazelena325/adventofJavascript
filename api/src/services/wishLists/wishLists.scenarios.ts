import type { Prisma, WishList } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.WishListCreateArgs>({
  wishList: {
    one: {
      data: {
        name: 'String',
        url: 'String',
        updaterAt: '2023-12-06T20:42:03.095Z',
        user: {
          create: {
            email: 'String6582067',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-06T20:42:03.096Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2023-12-06T20:42:03.096Z',
            updatedAt: '2023-12-06T20:42:03.096Z',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        url: 'String',
        updaterAt: '2023-12-06T20:42:03.096Z',
        user: {
          create: {
            email: 'String4188633',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-06T20:42:03.096Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2023-12-06T20:42:03.096Z',
            updatedAt: '2023-12-06T20:42:03.096Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<WishList, 'wishList'>
