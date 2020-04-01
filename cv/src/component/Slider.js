import React, {Component} from 'react';
import perfil  from "../images/yo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="slider">
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