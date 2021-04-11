import React from 'react'
import gql from 'graphql-tag';
import { Query } from '@keystonejs/apollo-helpers';

const GET_PORTAFOLIO=gql`query{
    allPortafolios{
      title
      description
      isShow
      link
      image{
        image{
          filename
          publicUrl
        }
      }
    }
  }`;
  

export const PortafolioContainer = ({children}) =>{
    return(
        <Query  query={GET_PORTAFOLIO}>
            {children}
        </Query>
    )
}