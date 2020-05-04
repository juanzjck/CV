import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ScrollToTop(props){
    useEffect(()=>{
        window.scrollTo(0,0)
    });
    return props.children
}
export default ScrollToTop;