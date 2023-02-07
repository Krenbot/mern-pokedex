const path = require('path')
const express = require('express')
const connection = require('./config/connection')

const { ApolloServer } = require('@apollo/server')
const { expressMiddleware } = require('@apollo/server/express4')
const typeDefs = require('./schemas/typeDefs')
const resolvers = require('./schemas/resolvers')

const PORT = process.env.PORT || 3001
const app = express()

const apolloServer = new ApolloServer({ typeDefs, resolvers })

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '..', 'client', 'build')))
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
})

//mongoose function, runs only once when DB is opened
connection.once('open', async () => {
    await apolloServer.start()
    app.use('/graphql', expressMiddleware(apolloServer))

    app.listen(PORT, () => {
        console.log(`Express server listening on http://localhost:${PORT}`)
        console.log(`Apollo GraphQL playground available @ http://localhost:${PORT}/graphql`)
    })
})