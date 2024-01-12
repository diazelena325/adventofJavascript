import type { Prisma, Invite } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.InviteCreateArgs>({
  invite: {
    one: {
      data: {
        status: 'INVITED',
        email: 'String',
        name: 'String',
        event: {
          create: {
            name: 'String',
            date: '2023-12-20T22:11:49.481Z',
            updatedAt: '2023-12-20T22:11:49.481Z',
          },
        },
      },
    },
    two: {
      data: {
        status: 'INVITED',
        email: 'String',
        name: 'String',
        event: {
          create: {
            name: 'String',
            date: '2023-12-20T22:11:49.481Z',
            updatedAt: '2023-12-20T22:11:49.481Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Invite, 'invite'>
