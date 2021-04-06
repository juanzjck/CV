import { ApolloClient} from '@apollo/client';
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory';
const link = createHttpLink({
  uri: 'https://api.soyjp.com/admin/api'
});
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
  request:operation=>{
   
  },
  onError:error =>{
    
  }
});


export default client;