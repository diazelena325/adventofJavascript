import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String303377',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2023-12-06T20:40:01.251Z',
      },
    },
    two: {
      data: {
        email: 'String1376890',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2023-12-06T20:40:01.251Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
