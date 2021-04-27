import React from 'react';
import '../style/portafolio.css';
import PortafolioItem from '../PortafolioItem';
import { withApollo } from 'react-apollo';
import { connect } from "react-redux";
import PortafolioContainer from '../../containers/PortafolioContainer';
import { Fragment } from 'react';

//images
const Portafolio = (props) => {


    const formatItems = (itmes,mod) => {
        let i=0;
        const calculateRows= () =>{
         
         return itmes.length%mod===0?itmes.length/mod
            :itmes.length%mod<2?((itmes.length/mod)+1):Math.round(itmes.length/mod)
        }
        const CreateInitialArrray = () =>{
            return    new Array(calculateRows()).fill([])
        }

        const reducer = (acumulative,value,indice) =>{
            if(acumulative[0]===undefined){
                acumulative=CreateInitialArrray()
            }
            
            const index=()=>{
                i++;
                return i
            }
            const CurrentIndex=()=>{
                return indice%(mod)!=0?i:index()
            }
            const iAux=CurrentIndex()
            if(acumulative[iAux]!=undefined)acumulative[iAux].push(value)
            
        
            return acumulative
        }
       return itmes.reduce(reducer)
       
    }
   const loadData = (data) => {
    
  
        //console.log(formatItems(data.allPortafolios,4))
     
        let auxColums=[]
        let i=0
        let j=0
        let row
        new Promise((resolver, rechazar)=>{
            try {
                
                const calculateRows= () =>{
         
                    return data.allPortafolios.length%4===0?data.allPortafolios.length/4
                       :data.allPortafolios.length%4<2?((data.allPortafolios.length/4)+1):Math.round(data.allPortafolios.length/4)
                }
                const CreateInitialArrray = () =>{
                    return    new Array(calculateRows()).fill([])
                }
                 row=CreateInitialArrray()
                data.allPortafolios.map(item=>{
                    j++;
                    const index=()=>{
                        i++;
                        return i
                    }
                
                    const CurrentIndex=()=>{
                        return j%(4)!=0?i:index()
                    }
                    const iAux=CurrentIndex()
                    if(row[iAux]!=undefined)row[iAux].push(item)
                  
                })
    
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

        return (
            <div className="portafolio__container">
                <h3 className="section__title">Portfolio</h3>
                <div>
                    <PortafolioContainer>
                        {props.portafolioList&&props.portafolioList.map(row=>{
                            
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
                    </PortafolioContainer>
                    
                     
                </div>
            </div>  
        );
    
}


function mapStateToProps(state){
    return{
        portafolioList:state.portafolio.portafolioList
    }
}
export default connect(mapStateToProps)(withApollo(Portafolio));
