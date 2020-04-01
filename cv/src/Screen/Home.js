import React, {Component, Fragment} from 'react';

import Skills from '../component/Skills';
import Slider from '../component/Slider';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){

        //setTimeout(()=>{alert('Hola')},3000);
    }
    render() { 
        return (<Fragment>
           
            <section>
              <Slider/>  
            </section> 
            <section>
              <Skills/>
            </section>
          </Fragment> 
         );
    }
}
 
export default Home;