import React, {Component} from 'react';
import logo from '../images/logo.png';
import './style/main.css';

import { Link, animateScroll as scroll } from "react-scroll";
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <nav className="menu">
                    <Link to='/'><img className="menu__img" src={logo}></img></Link> 
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
                            to="blog"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="menu_link">
                                      My blog 
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