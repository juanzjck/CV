import React,{Component} from 'react';
import './style/form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
class ContactFrom extends Component {
    constructor(props) {
        super(props);
        this.state = { loading:false, error:null, mensaje:'' }
    }
    handleSubmit=e=>{
        this.onSubmit(e);
        this.setState({loading:true, error:null,mensaje:''});
        
        try{
            this.setState({loading:false, error:null,mensaje:'funca'});
        }catch(e){
            this.setState({loading:true, error:e,mensaje:''});
        }
    }
    onSubmit=(e)=>{
        e.preventDefault();
    }
    render() { 
        if(this.state.loading){
                return ('...');
        }
        return(
            <div className="ContactForm">
                <div className="ContactForm__container">
                    <h3 className="section__title">Get touch</h3>
                    {this.state.mensaje}
                   
                    <form onSubmit={(e)=>{this.handleSubmit(e)}}>
                        <div className="contactForm__field">
                                <label className="contactForm__field--label" >Correo</label>
                          <input  className="contactForm__field--field" type="text" />
                        </div>
                        <div className="contactForm__field">
                                <label className="contactForm__field--label" >Message</label>
                                <textarea   className="contactForm__field--field area"/>
                        </div>
                        <button className="contactForm__button--send" type="submit">Enviar<FontAwesomeIcon className="contactForm__button--send-icon" icon={faEnvelope} /></button>
                    </form>

                </div>
            </div>
        );
    }
}
 
export default ContactFrom;