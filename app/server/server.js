const { ApolloServer } = require("apollo-server");
const { importSchema } = require("graphql-import");
const typeDefs = importSchema("./src/schemas/Schemas.graphql");
const userService = require("./src/services/userService");
const loginService = require("./src/services/loginService");

const resolvers = {
  Query: {
    getUser(_, args) {
      return userService.getUserById(args.type, args.id);
    },
    loginUser(_, args){
      return loginService.signUserWithEmailAndPassword(args.email, args.password)
    }
  },
  Mutation: {
    newUser(_, args) {
      return userService.createNewUser(args.type, args);
    },
    updateUser(_, args) {
      return userService.updateUser(args.type, args.id, args.user);
    },
    deleteUser(_, args) {
      return userService.deleteUser(args.type, args.id);
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen();
