import React,{useState} from 'react';
import '../style/form.css';
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

 const ContactFrom = (props) =>{
     const [loading,setLoading]=useState(false)
     const [error,setError]=useState(null)
     const [mensaje,setMensaje]=useState(null)
    const handleSubmit= async (e,email) =>{
        e.preventDefault();
        props.dispatch({
            type:'LOADING',
            payload:true
        })
        try{
            await email({variables:{message:props.message,email:props.email}})
        }catch(e){
           handleError(e)
        }
    }
    const handleError = (error) => {
        setTimeout(() => {
            props.dispatch({
                type:'LOADING',
                payload:false
            })
           
        }, 500);
    
    
        props.dispatch({
            type:'ERROR',
            payload:error
        })
    }
    const handleResult = async (data) =>{
        if(data!==null){
            console.log(data)
            props.dispatch({
                type:'CATCH_RESULT',
                payload:data.email.message
            })
            if(data.email.message!=='OK'){
               if(data.email.message==='400')handleError('Fill all the form')
               if(data.email.message==='500')handleError('Server responde with 500')
            }
            setTimeout(() => {
                props.dispatch({
                    type:'LOADING',
                    payload:false
                })
               
            }, 500);
        }
     
    }
    const onChangeEmail=(email)=>{
        props.dispatch({
            type:'SET_MESSAGE',
            payload:email.target.value
        })
    }
    const onChangeMessage = (message)=>{
        props.dispatch({
            type:'SET_EMAIL',
            payload:message.target.value
        })
    }
    return(
        <div className="ContactForm">
            <div className="ContactForm__container">
                <h3 className="section__title">Keep in touch</h3>
                {mensaje}
               <Mutation mutation={SEND_EMAIL}>
                   {(email,{data,loading})=>{
                       if(loading && data===null) return <h1>...</h1>
                       if(data!=null){
                           
                          handleResult(data)
                       }
                       if(props.status){
                           return(
                               <div>
                                    <div class="check"></div>
                                    <h1 className="text_success">Enviado</h1>
                                </div>
                           )
                       }
                       return(
                        <form onSubmit={(e)=>{handleSubmit(e,email)}}>
                            <div className="contactForm__field">
                                    <label className="contactForm__field--label" >Correo</label>
                            <input onChange={(e)=>onChangeEmail(e)}  className="contactForm__field--field" type="text" />
                            </div>
                            <div className="contactForm__field">
                                    <label className="contactForm__field--label" >Message</label>
                                    <textarea  onChange={(m)=>onChangeMessage(m)}  className="contactForm__field--field area"/>
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
function mapStateToProps(state){
    return{
        message:state.email.message,
        email:state.email.email,
        status:state.email.status
    }
}
export default  connect(mapStateToProps)(ContactFrom);