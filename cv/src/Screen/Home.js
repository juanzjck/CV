import React, {Component, Fragment} from 'react';
import ContactFrom from '../component/ContactForm';
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
            <section>
            <ContactFrom/>
            </section>
          </Fragment> 
         );
    }
}
 
export default Home;