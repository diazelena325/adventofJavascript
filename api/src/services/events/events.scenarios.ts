import type { Prisma, Event } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EventCreateArgs>({
  event: {
    one: {
      data: {
        name: 'String',
        date: '2023-12-06T20:41:15.875Z',
        updatedAt: '2023-12-06T20:41:15.875Z',
      },
    },
    two: {
      data: {
        name: 'String',
        date: '2023-12-06T20:41:15.875Z',
        updatedAt: '2023-12-06T20:41:15.875Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Event, 'event'>
