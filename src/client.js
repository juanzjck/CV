import { ApolloClient} from '@apollo/client';
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory';
const client = new ApolloClient({
  uri: 'http://localhost:3000/admin/api',
  cache: new InMemoryCache()
});


export default client;