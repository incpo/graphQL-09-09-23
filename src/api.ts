import {getSdk} from "@/generated/graphql";

import {QueryClient} from "react-query";
import {GraphQLClient} from "graphql-request";

const gqlClient = new GraphQLClient("http://localhost:3000/api/graphql");
export const {getCharacters, getCharacterByName} = getSdk(gqlClient);

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
        },
    },
});