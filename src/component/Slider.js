import React, {Component, Fragment} from 'react';
import perfil  from "../images/yo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
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
        //this.intervalId=  setInterval(this.fetchData(),5000);
    }
    componentWillUnmount(){
      //  clearInterval(this.intervalId);
    }
    fetchData=async ()=>{
            this.setState({loading:true,error:null});
            try{
             
                const result = await fetch('https://api.github.com/users/juanzjck/repos', { method: 'GET'});
                const data= await result.json();
                this.setState({loading:false,data:data });
                console.log(data);
             
            }catch(e){
                this.setState({loading:false, error:'Ocurrio un error'});
                console.log(e);
            }
            
    }
    isLoading=()=>{
            return this.state.loading===true? '...':'';
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
                                        "Developer, entrepreneur and game developer for fun."
                                </p>
                                <h2>GitHub Repositories</h2>
                                <div className="git">
                                   
                                   { this.state.data.map((doc,i)=>{
                                    return (
                                        <div key={i} className="git__item" >
                                            <a href={doc.html_url} target='Blank'>
                                            <p className="git--title">{doc.name} <FontAwesomeIcon className="eye" icon={faEye}/></p>
                                            <p className="git--description">
                                            {doc.description}
                                            </p>
                                            <p className="git--date">
                                            Last update {doc.updated_at}

                                            </p>
                                            </a>
                                        
                                        </div >
                                    )})}
                                 
                                </div>
                            </div>
                           
                            <div className="social">

                                    <a href="https://www.linkedin.com/in/juansalazarzuniga/" target="blank" className="social__link"><FontAwesomeIcon icon={faLinkedin}/>   </a>
                                    <a href="https://github.com/juanzjck" target="blank" className="social__link"><FontAwesomeIcon icon={ faGithub}/>   </a>
                                  
                            </div>
                        </div>
                </div> );
    }
}
 
export default Slider;