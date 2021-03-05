import React, {Component} from 'react';
import logo from '../images/logo.png';
import './style/main.css';

import { Link, animateScroll as scroll,scrollSpy, scroller,Events,  Element } from "react-scroll";
import ModalLayout from './ModalLayout';


 class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal:false
          }
    }
    componentDidMount(){
        Events.scrollEvent.register('begin', function(to, element) {
            console.log('begin', arguments);
          });
          
      }
      componentWillUnmount(){
          window.removeEventListener('scroll', this.handleScroll);
      }
      handleScroll=(event)=> {
          let scrollTop = event.srcElement.body,
              itemTranslate = Math.min(0, scrollTop/3 - 60);    
          this.setState({
            transform: itemTranslate
          });
          
      }
    render() { 

        return ( <nav className={`menu`}>
                    <Link className="brand_button" to='/'><img className="menu__img" src={logo}></img></Link> 
                    <Link className="brand_button--mobile" to='/'><img className="menu__img--mobile" src={logo}></img></Link> 
                    <div className="mobile_menu">
                        
                           <div onClick={()=>this.setState({modal:true})} className="menu_icone">
                                    <div className="menu_bar"></div>
                                    <div className="menu_bar"></div>
                                    <div className="menu_bar"></div>
                           </div>
                            <ModalLayout isOpen={this.state.modal}>
                               <div className="menu_option">
                                   <div onClick={()=>this.setState({modal:false})} className="menu_close">
                                       X
                                   </div>
                                   <div className="menu_button">
                                    <Link  
                                        onClick={()=>this.setState({modal:false})}  
                                        activeClass="active"
                                        to="whoAmI"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        className="menu_link">
                                                        Who I am? 
                                        </Link>            
                                    </div>                     
                                    <div  className="menu_button">
                                    <Link  
                                     onClick={()=>this.setState({modal:false})}  
                                    activeClass="active"
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="menu_link">
                                            Skills and knowledge
                                        </Link>           
                                    </div>
                                    <div className="menu_button">
                                        <Link    
                                         onClick={()=>this.setState({modal:false})}
                                        activeClass="active"
                                        to="portafolio"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        className="menu_link">
                                                    Portafolio
                                        </Link>  
                                    </div> 
                                    <div className="menu_button">
                                        <Link    
                                            onClick={()=>this.setState({modal:false})}
                                            activeClass="active"
                                            to="myvision"
                                            spy={true}
                                            smooth={true}
                                            offset={-80}
                                            duration={500}
                                            className="menu_link">
                                                    My vision
                                        </Link> 
                                    
                                    </div>    
                                            
                                    <div className="menu_button">
                                        <Link    
                                        onClick={()=>this.setState({modal:false})}
                                        activeClass="active"
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        className="menu_link">
                                                    Keep touch
                                        </Link>
                                    </div>
                            
                               </div>
                            </ModalLayout>
                    </div>
                    <ul>
                   
                        <li className="menu__item">
                              
                        <Link    
                            activeClass="active"
                            to="whoAmI"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="menu_link">
                                            Who I am? 
                         </Link> 
                        </li>

                        <li className="menu__item">
                        
                            
                            <Link    
                                activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="menu_link">
                                    Skills and knowledge
                                </Link> 
                          

                        </li>
                        <li className="menu__item">
                        <Link    
                                activeClass="active"
                            to="portafolio"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="menu_link">
                                     Portafolio
                        </Link>       
                        </li>
                        <li className="menu__item">
                        <Link    
                                activeClass="active"
                                to="myvision"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="menu_link">
                                     My vision
                        </Link> 
                
                              
                        </li>
                        <li className="menu__item">
                        <Link    
                                activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="menu_link">
                                     Keep touch
                                </Link>        
                        </li>

                    </ul>
                </nav>  );
    }
}
 
export default Menu;