const { ApolloServer } = require("apollo-server")

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
        getUser(username: String) : User
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
        newUser(user: UserInput) : User 
        updateUser(user: UserInput) : User 
        deleteUser(id: String) : Boolean 
    }
`

const users = [
    {
        id: 'uIxae2',
        name: 'Bruno Freire',
        birthDate: '1996-09-12',
        gender: 'Male',
        email: 'bruno.freire967@gmail.com',
        phone: '5521982708770',
        username: 'Burnin',
        password: '123456',
        cpf: '11111111111'
    },
    {
        id: 'uIxae3',
        name: 'Vinicius Teixeira',
        birthDate: '1994-08-01',
        gender: 'Male',
        email: 'vta.amaral@gmail.com',
        phone: '5521980808080',
        username: 'Vinin',
        password: 'lololololo',
        cpf: '222222222222'
    }
]

const resolvers = {
    Query:{
        getUser(_,args){
            return users.filter(user => user.username == args.username)[0]
        },
    },
    Mutation:{
        newUser(_,args){
            users.push(args)
            return true
        },
        updateUser(_,args){
            let usr  = users.find(item => item.id === args.id)
            return true
        },
        deleteUser(_,args){
            let usr  = users.find(item => item.id === args.id)
            if (usr){
                users.splice(users.indexOf(usr), 1)
                return true
            } 
            return false
        }
    }
}

const server = new ApolloServer({typeDefs, resolvers})
server.listen()