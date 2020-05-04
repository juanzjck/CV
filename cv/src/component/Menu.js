import React, {Component} from 'react';
import logo from '../images/logo.png';
import './style/main.css';
import { Link } from 'react-router-dom';
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
                                Conóceme
                        </li>
                        <li className="menu__item">
                                Que hago
                        </li>
                        <li className="menu__item">
                                Que hago
                        </li>
                    </ul>
                </nav>  );
    }
}
 
export default Menu;