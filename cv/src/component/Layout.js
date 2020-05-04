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
                <footer className="footer">
                    <p>© 2020 Copyright:
                      Juan Pablo Salazar
                    </p>
                </footer>
            </Fragment>
          
        );
}
export default Layaout;