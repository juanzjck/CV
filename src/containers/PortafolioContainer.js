import React from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo'
import { connect } from "react-redux";
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
  

const PortafolioContainer = (props) =>{
   
  const loadData = (data) => {
    let i=0
    let j=0
    let row
    new Promise((resolver, rechazar)=>{
        try {
          Object.defineProperty(Array.prototype, 'chunk_inefficient', {
            value: function(chunkSize) {
              
              var array = this;
              return [].concat.apply([],
                array.map(function(elem, i) {
                  return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
                })
              );
            }
          });
          row=data.allPortafolios.chunk_inefficient(4)
       
            setTimeout(()=> {
                resolver(''); 
          
               
            },1000)
        } catch (error) {
            console.log(error);
            rechazar(error)
        }
       
    }).then(()=> {

        props.dispatch({
            type:'LOAD_ALL_PORTAFOLIO',
            payload:row
        })
    
        props.dispatch({
            type:'LOADING',
            payload:false
        }) 
    }
        
    )
}
   return(<>
      <Query fetchPolicy="no-cache" onCompleted={(data)=>loadData(data)}  query={GET_PORTAFOLIO}>
          {
                          ( data,loading)=>{
                              if(loading) props.dispatch({
                                  type:'LOADING',
                                  payload:true
                              }) 
                              if(loading ) return <h1>..d..</h1>
                              // if(data)console.log(data.data)
                              if(data)
                          
                              return( 
                                  <>
                                      
                                  </>

                              )
                          }
                      }
      </Query>
      {props.portafolioList&&props.portafolioList.map(row=>{
                            
                            return <> {props.children} </>
        })}

    </>
       
    )
}
function mapStateToProps(state){
  return{
      portafolioList:state.portafolio.portafolioList
  }
}
export  default connect(mapStateToProps)(PortafolioContainer)