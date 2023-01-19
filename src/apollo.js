import { ApolloClient, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from '@apollo/client/link/ws';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';

const wsLink = new WebSocketLink({
    uri: process.env.REACT_APP_WS_LINK,

    options: {
        reconnect: true,
        connectionParams: {
            headers: {
                'x-hasura-admin-secret': process.env.REACT_APP_X_HASURA_ADMIN_SECRET
            }
        },
    }
});

const httpLink = new HttpLink({
    uri: process.env.REACT_APP_HTTP_LINK,
})

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink
)

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache()
});

export default client;