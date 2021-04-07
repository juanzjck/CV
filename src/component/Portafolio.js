import React from 'react';
import './style/portafolio.css';
import PortafolioItem from './PortafolioItem';
import gql from 'graphql-tag';
import { Query } from '@keystonejs/apollo-helpers';
import { withApollo } from 'react-apollo';
import { connect } from "react-redux";
import { Fragment } from 'react';
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
  
//images
class Portafolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    async componentDidMount(){
   
    }
    loadData(data){
        
        this.props.dispatch({
            type:'LOAD_ALL_PORTAFOLIO',
            payload:data.allPortafolios
        })
        this.props.dispatch({
            type:'LOADING',
            payload:false
        })
    }
    render() { 
        return (
            <div className="portafolio__container">
                <h3 className="section__title">Portfolio</h3>
                <div>
                    <Query fetchPolicy="no-cache"  query={GET_PORTAFOLIO}>
                        {({data,loading})=>{
                            if(loading)this.props.dispatch({
                                type:'LOADING',
                                payload:true
                            })
                            if(data) this.loadData(data)
                           
                            return <Fragment></Fragment>
                        }}
                    </Query>
                    <div className="portafolio_row">
                    {this.props.portafolioList?this.props.portafolioList.map((p)=>{
                            
                            return(
                                 <PortafolioItem key={p.title} backgroundimg={p.image.image.publicUrl} link={p.link} link={p.link}  title={p.title} description={p.description}></PortafolioItem>   
                            )
                    }):undefined}
                    </div>
                    
                
                </div>
            </div>  
        );
    }
}
function mapStateToProps(state){
    return{
        portafolioList:state.portafolio.portafolioList
    }
}
export default connect(mapStateToProps)(withApollo(Portafolio));
