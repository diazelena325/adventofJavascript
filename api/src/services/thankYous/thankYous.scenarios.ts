import type { Prisma, ThankYou } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ThankYouCreateArgs>({
  thankYou: {
    one: {
      data: {
        message: 'String',
        event: {
          create: {
            name: 'String',
            date: '2023-12-06T20:42:44.323Z',
            updatedAt: '2023-12-06T20:42:44.323Z',
          },
        },
        user: {
          create: {
            email: 'String25118',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-06T20:42:44.323Z',
          },
        },
        toUser: {
          create: {
            email: 'String9106616',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-06T20:42:44.323Z',
          },
        },
      },
    },
    two: {
      data: {
        message: 'String',
        event: {
          create: {
            name: 'String',
            date: '2023-12-06T20:42:44.323Z',
            updatedAt: '2023-12-06T20:42:44.323Z',
          },
        },
        user: {
          create: {
            email: 'String2661203',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-06T20:42:44.324Z',
          },
        },
        toUser: {
          create: {
            email: 'String1167761',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-06T20:42:44.324Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<ThankYou, 'thankYou'>
