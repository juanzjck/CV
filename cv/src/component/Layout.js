import React, {Fragment} from 'react';
import Menu from '../component/Menu';
function Layaout(props){
    const  children= props.children;
        return(
            <Fragment>
                <header>
                  <Menu/>
                </header>
                {children}
            </Fragment>
          
        );
}
export default Layaout;