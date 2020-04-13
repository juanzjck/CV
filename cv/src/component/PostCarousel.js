import React,{Fragment} from 'react';
import './style/carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight,faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Icon from 'react-fa';
import imagenPrueba from '../images/post.jpg';

import Title from './Title';
function PostCarousel(props){
    const array=['d','d','d','d','d'];
    return(
            <div className="carousel">
               <Title text="Nuevos"/>
                <Carousel
                            arrowLeft={<Icon className="icon-example" name="arrow-left" />}
                            arrowRight={<Icon className="icon-example" name="arrow-right" />}
                            addArrowClickHandler
                            className="carousel__container"
                        >
                                {array.map((doc,i)=>{
                                    return(
                                    <div>
                                    <div  key={i} className="carousel__item">
                                        <img className="carousel__img" src={imagenPrueba}/>
                                        <h3 className="carousel__item--title">Titulo</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue feugiat purus sed elementum. Aliquam faucibus magna vehicula arcu commodo, in vulputate justo aliquet. Quisque accumsan bibendum nulla, eu commodo.</p>
                                    </div>
                                    <div  key={i} className="carousel__item">
                                         <img className="carousel__img" src={imagenPrueba}/>
                                        <h3 className="carousel__item--title">Titulo</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue feugiat purus sed elementum. Aliquam faucibus magna vehicula arcu commodo, in vulputate justo aliquet. Quisque accumsan bibendum nulla, eu commodo.</p>
                                    </div>
                                    <div  key={i} className="carousel__item">
                                        <img className="carousel__img" src={imagenPrueba}/>
                                        <h3 className="carousel__item--title">Titulo</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue feugiat purus sed elementum. Aliquam faucibus magna vehicula arcu commodo, in vulputate justo aliquet. Quisque accumsan bibendum nulla, eu commodo.</p>
                                    </div>
                                    </div>

                                    );
                                })
                            }
                        </Carousel>
            </div>
            

               

    )
}
//https://popmotion.io/pose/learn/dynamic-props/
export default PostCarousel;