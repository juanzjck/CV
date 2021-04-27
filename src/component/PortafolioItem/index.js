
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const imagenPrueb = require('../../images/splashbutton.png')
const PortafolioItem = (props) => {

    const icons =() => {
      if(props.icons==undefined)return undefined
      props.icons.map(icon=>{
        return   <FontAwesomeIcon className="portafolios__icon-item" icon={icon}></FontAwesomeIcon>
      })
    }
 
        return ( 
            <div className="portafolio_card">
            <img className="portafolio_img" alt={`${props.title}'s photo`} src={props.backgroundimg?props.backgroundimg:imagenPrueb}></img>
            <div className="portafolio_content">
              <h3>
               {props.title}
              </h3>
              <p>
                {props.description}
              </p>
              <a href={`${props.link}`} target="blank">More....</a>
              <div className="portafolios__icons">

                {icons()}
              </div>
            </div>  
          </div>
        );
}
 
export default PortafolioItem;