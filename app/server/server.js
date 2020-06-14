const { ApolloServer } = require("apollo-server");
const service = require("./services/service");

const typeDefs = `
    type User {
        id: ID,
        name: String,
        birthDate: String,
        gender: String,
        email: String,
        phone: String,
        username: String,
        password: String,
        cpf: String
    }

    type Query {
        getUser(username: String) : User,
        getTrainer(id: ID): User
    }

    input UserInput {
        name: String,
        birthDate: String,
        gender: String,
        email: String,
        phone: String,
        username: String,
        password: String,
        cpf: String
    }

    type Mutation {
        newUser(user: UserInput) : ID 
        updateUser(id: ID,user: UserInput) : Boolean 
        deleteUser(id: String) : Boolean 
    }
`;

const users = [
  {
    id: "uIxae2",
    name: "Bruno Freire",
    birthDate: "1996-09-12",
    gender: "Male",
    email: "bruno.freire967@gmail.com",
    phone: "5521982708770",
    username: "Burnin",
    password: "123456",
    cpf: "11111111111",
  },
  {
    id: "uIxae3",
    name: "Vinicius Teixeira",
    birthDate: "1994-08-01",
    gender: "Male",
    email: "vta.amaral@gmail.com",
    phone: "5521980808080",
    username: "Vinin",
    password: "lololololo",
    cpf: "222222222222",
  },
];

const resolvers = {
  Query: {
    getUser(_, args) {
      return service.getTrainerById(args.id);
    },
  },
  Mutation: {
    newUser(_, args) {
      return service.createNewTrainer(args);
    },
    updateUser(_, args) {
      return service.updateTrainer(args.id, args.user);
    },
    deleteUser(_, args) {
      return service.deleteTrainer(args.id);
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen();
