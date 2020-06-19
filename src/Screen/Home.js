import React, {Component, Fragment} from 'react';
import ContactFrom from '../component/ContactForm';
import Skills from '../component/Skills';
import Slider from '../component/Slider';
import PostCarousel from '../component/PostCarousel';
import ProyectCarousel from '../component/ProyectCarousel';
import TextSection from '../component/TextSection';
import api from '../api';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    listPost=async ()=>{
      let listPost= await api.post.list();
      console.log(listPost);
    }
    componentDidMount(){
        this.listPost();
        //setTimeout(()=>{alert('Hola')},3000);
    }
    render() { 
        return (<Fragment>
           
            <section>
              <Slider/>  
            </section> 
            <section id="whoAmI">
              <TextSection title="Who am I?">
              I'm a javascript developer, I focus on develop technologies in order to solve needs, extend and adapt business to internet.
              
              If you or your organization need adopt new technologies to extend or sell your services or product on internet, I can help with that cases.
      
              </TextSection>
            </section>
            <section id="skills">
              <Skills/>
            </section>
           
            <section >
              <TextSection title="Why javascript?">
              javascript is a powerful language to build scalable and beautiful web app or mobile app.
              <br/>
              Javascript have the advantage to use just one lenguaje to build back end and front end, so you team can understand just one lenguaje.
             <br/>
              Javascript have a lot of libraries and framework, for example: React.js, React Native, Angular, Node.js, GraphQL, and others. 
              </TextSection>
            </section>
            <section id="blog">
            <PostCarousel>
            </PostCarousel>
            </section>
            <section id="contact">
            <ContactFrom/>
            </section>
          </Fragment> 
         );
    }
}
 
export default Home;