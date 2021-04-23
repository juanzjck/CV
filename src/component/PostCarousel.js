import React from 'react';
import './style/carousel.css';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
//import Icon from 'react-fa';
import imagenPrueba from '../images/post.jpg';
import { Link } from 'react-router-dom';

function PostCarousel(props){
    const array=['d','d','d','d','d'];
    return(
            <div className="carousel">
                <h3 className="section__title">News posts</h3>

                <Carousel
                         //arrowLeft={<Icon className="icon-example" name="arrow-left" />}
                        // arrowRight={<Icon className="icon-example" name="arrow-right" />}
                         addArrowClickHandler
                         className="carousel__container"
                        >
                                {array.map((doc,i)=>{
                                    return(
                                    <div key={i}>
                                    <Link to="/post/123112">
                                        <div  key={i} className="carousel__item">
                                        <img alt='imagen post' className="carousel__img" src={imagenPrueba}/>
                                        <h3 className="carousel__item--title">Titulo</h3>
                                        <p className="carousel__item--summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue feugiat purus sed elementum. Aliquam faucibus magna vehicula arcu commodo, in vulputate justo aliquet. Quisque accumsan bibendum nulla, eu commodo.</p>
                                        </div>
                                    </Link>
                                    <Link to="/post/123112">
                                        <div  key={i} className="carousel__item">
                                        <img alt='imagen post' className="carousel__img" src={imagenPrueba}/>
                                        <h3 className="carousel__item--title">Titulo</h3>
                                        <p className="carousel__item--summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue feugiat purus sed elementum. Aliquam faucibus magna vehicula arcu commodo, in vulputate justo aliquet. Quisque accumsan bibendum nulla, eu commodo.</p>
                                        </div>
                                    </Link>
                                    <Link to="/post/123112">
                                        <div  key={i} className="carousel__item">
                                        <img alt='imagen post' className="carousel__img" src={imagenPrueba}/>
                                        <h3 className="carousel__item--title">Titulo</h3>
                                        <p className="carousel__item--summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue feugiat purus sed elementum. Aliquam faucibus magna vehicula arcu commodo, in vulputate justo aliquet. Quisque accumsan bibendum nulla, eu commodo.</p>
                                        </div>
                                    </Link>

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