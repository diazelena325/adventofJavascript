import type { Prisma, UserStatus } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserStatusCreateArgs>({
  userStatus: {
    one: {
      data: {
        status: 'INVITED',
        event: {
          create: {
            name: 'String',
            date: '2023-12-06T20:40:49.503Z',
            updatedAt: '2023-12-06T20:40:49.503Z',
          },
        },
        user: {
          create: {
            email: 'String8775147',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-06T20:40:49.503Z',
          },
        },
      },
    },
    two: {
      data: {
        status: 'INVITED',
        event: {
          create: {
            name: 'String',
            date: '2023-12-06T20:40:49.503Z',
            updatedAt: '2023-12-06T20:40:49.503Z',
          },
        },
        user: {
          create: {
            email: 'String7551608',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-06T20:40:49.503Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<UserStatus, 'userStatus'>
