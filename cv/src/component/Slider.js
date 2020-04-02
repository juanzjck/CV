import React, {Component, Fragment} from 'react';
import perfil  from "../images/yo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
const fetch = require('node-fetch');
class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            loading:true,
            error:null,
            data:[]
        }
    }
    componentDidMount (){
        
        this.fetchData();
    }
    fetchData=async ()=>{
            this.setState({loading:true,error:null});
            try{
             
                const result = await fetch('https://api.github.com/repos/juanzjck/CV/commits', { method: 'GET'});
                const data= await result.json();
                this.setState({loading:false,data:data });
                console.log(data);
             
            }catch(e){
                this.setState({loading:false, error:'Ocurrio un error'});
                console.log(e);
            }
            
    }
    isLoading=()=>{
            return this.state.loading===true? '...': this.state.data.map((doc)=>{
                return (
                    <div className="git__item">
                        <p className="git--title">{doc.commit.message}</p>
                        <p>
                            {doc.commit.committer.name}
                        </p>
                        <p>
                            {doc.commit.committer.date}
                        </p>
                    </div >
                )
            }
        );
    }

    render() {
       
   
        return ( 
        <div className="slider">
                        <div className="slider__profile">
                                <img className="slider__image" src={perfil}></img>
                        </div>
                        <div className="badge">
                            <div className="badge__container">
                                <h1>Juan Pablo Salazar</h1>
                                <p>
                                    Developer
                                </p>
                                <p className="phrase">
                                        "Never giving up, just make it"
                                </p>
                                <div className="git">
                                    {this.isLoading()}
                                 
                                </div>
                            </div>
                           
                            <div className="social">
                                    <a href="#" className="social__link"><FontAwesomeIcon icon={faLinkedin}/>   </a>
                                    <a href="#" className="social__link"><FontAwesomeIcon icon={ faGithub}/>   </a>
                                  
                            </div>
                        </div>
                </div> );
    }
}
 
export default Slider;