import React from 'react';
import './style/portafolio.css';
class Portafolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="portafolio__container">
                <h3 className="section__title">Portafolio</h3>
                <div className="row">
                    <div id="content">
                     Creating slideshows PHP
                    </div>

                    <div id="line">
                    
                    </div>
                </div>
                <div className="row">
                    <div id="content">
                     Creating slideshows PHP
                    </div>

                    <div id="line">
                        
                    </div>
                </div>
                <div className="row">
                    <div id="content">
                     2016
                    </div>

                </div>
            </div>  
        );
    }
}
 
    export default Portafolio;
