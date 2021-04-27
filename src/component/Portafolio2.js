import React from 'react';
import './style/portafolio.css';
import PortafolioItem from './PortafolioItem';
import { withApollo } from 'react-apollo';
import { connect } from "react-redux";
import { PortafolioContainer } from '../containers/PortafolioContainer';
import { Fragment } from 'react';

//images
class Portafolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
       console.log('mount')
    }
 
    loadData(data){
    
        //format array
        
        const row=[]
        let auxColums=[]
        let i=0
        let j=1
        new Promise((resolver, rechazar)=>{
            try {
                data.allPortafolios.map(item=>{
                    i++;
            
                    auxColums.push(item)
                    if(i>3){
                        row.push(auxColums) 
                        auxColums=[]
                        i=0;
                    }
                   
        
                    
                })
    
                setTimeout(()=> resolver(''),1000)
            } catch (error) {
                rechazar(error)
            }
           
           
        }).then(()=> {
    
            this.props.dispatch({
                type:'LOAD_ALL_PORTAFOLIO',
                payload:row
            })
            this.props.dispatch({
                type:'LOADING',
                payload:false
            }) 
        }
            
        )
    }
    render() { 
        return (
            <div className="portafolio__container">
                <h3 className="section__title">Portfolio</h3>
                <div>
                    <PortafolioContainer>
                        {
                            ( data,loading)=>{
                                if(loading) this.props.dispatch({
                                    type:'LOADING',
                                    payload:true
                                }) 
                               // if(data)console.log(data.data)
                                if(data)this.loadData(data.data)
                                if(this.props.portafolioLis)console.log(this.props.portafolioLis)
                                return(<></>)
                            }
                        }
                    </PortafolioContainer>
                    {this.props.portafolioList&&this.props.portafolioList.map(row=>{
                        
                        return (
                        <div className="portafolio_row">
                           <Fragment>
                                {
                                 row.map(pi=>{
                                    return <PortafolioItem link={pi.link} backgroundimg={pi.image.image.publicUrl} description={pi.description} title={pi.title}/>
                                
                                 })   
                                }
                           </Fragment>  
                        </div> )
                    })}
                     
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
