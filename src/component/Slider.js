import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {connect} from 'react-redux';

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
    async fetchData(){
            this.setState({loading:true,error:null});
            try{
             
                const result = await fetch('https://api.github.com/users/juanzjck/repos', { method: 'GET'});
                const data= await result.json();
                this.setState({loading:false,data:data });
               
             
            }catch(e){
                this.setState({loading:false, error:'Ocurrio un error'});
            
            }
            
    }
    isLoading(){
            return this.state.loading===true? '...':'';
    }

    render() {
       
   
        return ( 
        <div className="slider">
         
                        <div className="slider__profile">
                            {this.props.profile&&<img height={'auto'} width={'70px'}  className="slider__image" alt={`${this.props.profile&&this.props.profile.name}'s perfil photo`} src={this.props.profile?this.props.profile.image.image.publicUrl:''}></img>}
                                
                        </div>
                        <div className="badge">
                            <div className="badge__container">
                                <h1>{this.props.profile&&this.props.profile.name}</h1>
                                <p>
                                   {this.props.profile&&this.props.profile.position}
                                </p>
                                <p className="phrase">
                                    {this.props.profile&&this.props.profile.phrase}
                                </p>
                                <h2 className="repositres__title">GitHub Repositories</h2>
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
                        <div className="backGround" >
           
            </div>
                </div> );
    }
}
 function mapStateToProps(state){
    return{
        profile:state.profile.profile
    }
 }
export default connect(mapStateToProps)(Slider);