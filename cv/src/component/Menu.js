import React, {Component} from 'react';
import logo from '../logo.svg';
import './style/main.css';
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <nav className="menu">
                    <img className="menu__img" src={logo}></img>
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