import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Icon from 'react-fa';
import imagenPrueba from '../images/post.jpg';
import './style/carousel.css';
class ProyectCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        let array=[1,1,1,1,1]
        return (
            <Carousel
            
            arrowLeft={<Icon className="icon-example" name="arrow-left" />}
            arrowRight={<Icon className="icon-example" name="arrow-right" />}
            addArrowClickHandler
          >
              
              {array.map((doc)=>{
                  return(<div className="proyects__item">
                  <div className="col proyect__first">
                      <img className="proyect__first-img" src={imagenPrueba}/>
                      <div className="proyect__first-content">
                          <h2>dsf</h2>
                      </div>
                  </div>
                  <div className="col proyect__second">
                    <div className="proyect__second-item --first">
                        <img className="proyect__second-img" src={imagenPrueba}/>
                        <div className="proyect__second-content">
                         <h2>dsf</h2>
                        </div>
                    </div>
                    <div className="proyect__second-item --first">
                        <img className="proyect__second-img" src={imagenPrueba}/>
                        <div className="proyect__second-content">
                            <h2>dsasdasf</h2>
                        </div>
                    </div>
                  </div>
                </div>);
              })}
            

          </Carousel>
         );
    }
}
 
export default ProyectCarousel;