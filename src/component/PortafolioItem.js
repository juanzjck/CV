import React from 'react';

import { faReact, faUnity, faNodeJs, faDocker,faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const imagenPrueb = require('../images/splashbutton.png')
class PortafolioItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    icons(){
      if(this.props.icons==undefined)return undefined
      this.props.icons.map(icon=>{
        return   <FontAwesomeIcon className="portafolios__icon-item" icon={icon}></FontAwesomeIcon>
      })
    }
    render() { 
        return ( 
            <div className="portafolio_card">
            <img className="portafolio_img" src={this.props.backgroundimg?this.props.backgroundimg:imagenPrueb}></img>
            <div className="portafolio_content">
              <h3>
               {this.props.title}
              </h3>
              <p>
              {this.props.description}
              </p>
              <div className="portafolios__icons">
                
             {this.icons()}
              </div>
            </div>  
          </div>
        );
    }
}
 
export default PortafolioItem;