export const schema = gql`
  type Invite {
    id: String!
    eventId: String!
    event: Event!
    userId: Int
    user: User
    status: Status!
    email: String!
    name: String!
  }

  enum Status {
    INVITED
    DECLINED
    ACCEPTED
  }

  type Query {
    invites: [Invite!]! @skipAuth
    invite(id: String!): Invite @skipAuth
  }

  input CreateInviteInput {
    eventId: String!
    userId: Int
    status: Status!
    email: String!
    name: String!
  }

  input UpdateInviteInput {
    eventId: String
    userId: Int
    status: Status
    email: String
    name: String
  }

  type Mutation {
    createInvite(input: CreateInviteInput!): Invite! @skipAuth
    updateInvite(id: String!, input: UpdateInviteInput!): Invite! @skipAuth
    deleteInvite(id: String!): Invite! @skipAuth
  }
`
