import { makeExecutableSchema } from 'graphql-tools';
import UsersList from '../utils/mocks';

const users: any[] = UsersList(3);

const typeDefs = `
    type User {
        id: ID!
        name: String!
        email: String!
    }
    type Query{
        allUsers: [User!]!
    }
    type Mutation {
        createUser (name: String!, email:String!): User
    }
`;

const resolvers = {
    User: {
        id: (user): number => user.id,
        name: (user): string => user.name,
        email: (user): string => user.email,
    },
    Query: {
        allUsers: (): Array<any> => users,
    },
    Mutation: {
        createUser: (parent, args) => {
            const newUser = { id: users.length + 1, ...args };
            users.push(newUser);
            return newUser;
        },
    },
};

export default makeExecutableSchema({ typeDefs, resolvers });
