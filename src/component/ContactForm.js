import React,{Component} from 'react';
import './style/form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import gql from 'graphql-tag';
import { Mutation } from '@keystonejs/apollo-helpers';
import {connect} from 'react-redux';

const SEND_EMAIL=gql`mutation($message:String,$email:String){
    email(message:$message,email:$email){
       message
   } 
}`;
  
class ContactFrom extends Component {
    constructor(props) {
        super(props);
        this.state = { loading:false, error:null, mensaje:'' }
    }
    async handleSubmit(e,email){
        e.preventDefault();
        this.props.dispatch({
            type:'LOADING',
            payload:true
        })
        try{
            await email({variables:{message:this.props.message,email:this.props.email}})
        }catch(e){
           this.handleError(e)
        }
    }
    handleError(error){
        setTimeout(() => {
            this.props.dispatch({
                type:'LOADING',
                payload:false
            })
           
        }, 500);
    
    
        this.props.dispatch({
            type:'ERROR',
            payload:error
        })
    }
    async handleResult(data){
        if(data!==null){
            console.log(data)
            this.props.dispatch({
                type:'CATCH_RESULT',
                payload:data.email.message
            })
            if(data.email.message!=='OK'){
               if(data.email.message==='400')this.handleError('Fill all the form')
               if(data.email.message==='500')this.handleError('Server responde with 500')
            }
            setTimeout(() => {
                this.props.dispatch({
                    type:'LOADING',
                    payload:false
                })
               
            }, 500);
        }
     
    }
    onChangeEmail(email){
        this.props.dispatch({
            type:'SET_MESSAGE',
            payload:email.target.value
        })
    }
    onChangeMessage(message){
        this.props.dispatch({
            type:'SET_EMAIL',
            payload:message.target.value
        })
    }
    render() {
        return(
            <div className="ContactForm">
                <div className="ContactForm__container">
                    <h3 className="section__title">Keep touch</h3>
                    {this.state.mensaje}
                   <Mutation mutation={SEND_EMAIL}>
                       {(email,{data,loading})=>{
                           if(loading && data===null) return <h1>...</h1>
                           if(data!=null){
                               
                              this.handleResult(data)
                           }
                           if(this.props.status){
                               return(
                                   <div>
                                        <div class="check"></div>
                                        <h1 className="text_success">Enviado</h1>
                                    </div>
                               )
                           }
                           return(
                            <form onSubmit={(e)=>{this.handleSubmit(e,email)}}>
                                <div className="contactForm__field">
                                        <label className="contactForm__field--label" >Correo</label>
                                <input onChange={(e)=>this.onChangeEmail(e)}  className="contactForm__field--field" type="text" />
                                </div>
                                <div className="contactForm__field">
                                        <label className="contactForm__field--label" >Message</label>
                                        <textarea  onChange={(m)=>this.onChangeMessage(m)}  className="contactForm__field--field area"/>
                                </div>
                                <button  className="contactForm__button--send" type="submit">Enviar<FontAwesomeIcon className="contactForm__button--send-icon" icon={faEnvelope} /></button>
                            </form>
                 
                           )
                       }}
                   </Mutation>
                  

                  

                </div>
            </div>
        );
    }
}
 
function mapStateToProps(state){
    return{
        message:state.email.message,
        email:state.email.email,
        status:state.email.status
    }
}
export default  connect(mapStateToProps)(ContactFrom);