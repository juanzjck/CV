import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style/skills.css';
class Skill extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="corousel-item">
                <div className="corousel-item__container">
                        <div className="corousel-item--icone"  alt="">
                            <FontAwesomeIcon icon={this.props.icon }/> 
                        </div>
                                        
                        <div className="corousel-item__description">
                            <div className="corousel-item__header">
                                <p className="corousel-item__description--title">{this.props.title} </p>
                                <p>{this.props.category}</p>
                            </div>
                      
                            <p> 
                                {this.props.description}
                            </p>
                        </div>
                            
                </div>
             
            </div>       
         );
    }
}
 
export default Skill;