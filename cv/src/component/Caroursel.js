import React,{Fragment} from 'react';
import './style/carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight,faArrowLeft } from '@fortawesome/free-solid-svg-icons';
let distance=0;
let speed=300;
let max=300;
const rightArrow= async (e,i)=>{
    if(distance<=max){
        
        let lastDistance=distance;
        distance=distance+speed;
        await animation(lastDistance,distance);
            
    }
  
}
const animation=async (i,to)=>{
    if(i<=to){
        i=i+1;
        setTimeout(() => {}, 20);
        await document.getElementsByClassName('carousel__container')[0].scroll(i,0); 
        i=animation(i,to);
        console.log(i);
    }
    return i;

}
const rightArrowScroll=(i)=>{
   

}
const leftArrow=(e,i)=>{
    if(distance<speed){

    }else{
        i=i-100;
        distance=distance-speed;
        document.getElementsByClassName('carousel__container')[0].scroll(distance,0);
    }
    
}
function Carousel(props){
    const array=['d','d','d','d','d'];
    return(
        <div className="carousel">
            <div onClick={e=>leftArrow(e,0)} className="carousel__arrow left-arrow">
                <FontAwesomeIcon icon={faArrowLeft}/>
            </div>
            <div className="carousel__container">
            {
                array.map((doc,i)=>{
                    return(
                    <div  key={i} className="carousel__item">
                        <img src=''/>
                        <h3 className="carousel__item--title">Titulo</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue feugiat purus sed elementum. Aliquam faucibus magna vehicula arcu commodo, in vulputate justo aliquet. Quisque accumsan bibendum nulla, eu commodo.</p>
                     </div>
                    );
                })
            }
               
         
            </div>
            <div onClick={e=>rightArrow(e,0)} className="carousel__arrow right-arrow">
                <FontAwesomeIcon icon={faArrowRight}/>
            </div>
        </div>
    )
}
//https://popmotion.io/pose/learn/dynamic-props/
export default Carousel;