import { ApolloClient, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from '@apollo/client/link/ws';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';

const wsLink = new WebSocketLink({
    uri: 'ws://wealthy-coral-64.hasura.app/v1/graphql',

    options: {
        reconnect: true,
        connectionParams: {
            headers: {
                'x-hasura-admin-secret': 'jAY4iUUoI6HwLXlO36DIdkPx8s2gdp7QBHn3dKungcsiAVrQKLVeVaG50aSYj2Wz'
            }
        },
    }
});

const httpLink = new HttpLink({
    uri: 'https://wealthy-coral-64.hasura.app/v1/graphql',
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