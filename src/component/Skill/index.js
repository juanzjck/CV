import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../style/skills.css';
const Skill = (props) => {
   

 
        return ( 
            <div className="corousel-item">
                <div className="corousel-item__container">
                        <div className="corousel-item--icone"  alt="">
                           {typeof props.icon=='function'?<props.icon/>:<FontAwesomeIcon icon={props.icon}/> }
                        </div>
                     
                        <div className="corousel-item__description">
                            <div className="corousel-item__header">
                                <p className="corousel-item__description--title">{props.title} </p>
                                <p>{props.category}</p>
                            </div>
                      
                            <p> 
                                {props.description}
                            </p>
                        </div>
                            
                </div>
             
            </div>       
         );
    
}
 
export default Skill;