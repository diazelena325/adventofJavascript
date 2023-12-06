export const schema = gql`
  type UserStatus {
    id: Int!
    eventId: String!
    event: Event!
    userId: Int!
    user: User!
    status: Status!
  }

  enum Status {
    INVITED
    DECLINED
    ACCEPTED
  }

  type Query {
    userStatuses: [UserStatus!]! @requireAuth
    userStatus(id: Int!): UserStatus @requireAuth
  }

  input CreateUserStatusInput {
    eventId: String!
    userId: Int!
    status: Status!
  }

  input UpdateUserStatusInput {
    eventId: String
    userId: Int
    status: Status
  }

  type Mutation {
    createUserStatus(input: CreateUserStatusInput!): UserStatus! @requireAuth
    updateUserStatus(id: Int!, input: UpdateUserStatusInput!): UserStatus!
      @requireAuth
    deleteUserStatus(id: Int!): UserStatus! @requireAuth
  }
`
