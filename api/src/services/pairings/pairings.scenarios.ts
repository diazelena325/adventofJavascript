import type { Prisma, Pairing } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PairingCreateArgs>({
  pairing: {
    one: {
      data: {
        updaterAt: '2023-12-06T20:41:33.815Z',
        event: {
          create: {
            name: 'String',
            date: '2023-12-06T20:41:33.815Z',
            updatedAt: '2023-12-06T20:41:33.815Z',
          },
        },
        santa: {
          create: {
            email: 'String5861026',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-06T20:41:33.815Z',
          },
        },
        person: {
          create: {
            email: 'String6935793',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-06T20:41:33.815Z',
          },
        },
      },
    },
    two: {
      data: {
        updaterAt: '2023-12-06T20:41:33.815Z',
        event: {
          create: {
            name: 'String',
            date: '2023-12-06T20:41:33.815Z',
            updatedAt: '2023-12-06T20:41:33.815Z',
          },
        },
        santa: {
          create: {
            email: 'String4598756',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-06T20:41:33.816Z',
          },
        },
        person: {
          create: {
            email: 'String2288145',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-06T20:41:33.816Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Pairing, 'pairing'>
