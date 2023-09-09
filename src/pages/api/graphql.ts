import "reflect-metadata";
import {ApolloServer} from "@apollo/server";
import {startServerAndCreateNextHandler} from "@as-integrations/next";
import {Field, ObjectType, ID, Resolver, Query, buildSchema} from "type-graphql";
import {CharactersResolver} from "@/graphql/schema/RickAndMorty/characters.resolver";


const schema = await buildSchema({
    resolvers: [CharactersResolver]
});

const server = new ApolloServer({
    schema,
});



// export const config = {
//     api: {
//         bodyParser: false,
//     }
// }
export default startServerAndCreateNextHandler(server);