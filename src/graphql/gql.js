import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { resolvers } from './resolvers.js'
import { typeDefs } from './typeDefs.js'

const server = new ApolloServer({
  typeDefs,
  resolvers
})

export async function setupServerGraphQL(port = 4000) {
  const { url } = await startStandaloneServer(server, {
    listen: { port }
  })

  console.log(`server ready at ${url}`)
}
