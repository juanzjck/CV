import React, {Component, Fragment} from 'react';
import ContactFrom from '../component/ContactForm';
import Skills from '../component/Skills';
import Slider from '../component/Slider';
import PostCarousel from '../component/PostCarousel';
import ProyectCarousel from '../component/ProyectCarousel';
import TextSection from '../component/TextSection';
import Portafolio from '../component/Portafolio';
import { Query } from '@keystonejs/apollo-helpers';
import gql from 'graphql-tag';
import ScreenLayout from '../Layout/SreenLayout';
import { withApollo } from 'react-apollo';
import {connect} from 'react-redux';
const GET_PROFILE=gql`query{
  allProfiles{
     name
     position
     about
     vision
     whyJavascript
     phrase
     image{
       image{
         publicUrl
       }
     }
   }
 }`;



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
  
    componentDidMount(){
       
        //setTimeout(()=>{alert('Hola')},3000);
    }
    loadData=(data)=>{
        this.props.dispatch({
          type:'LOAD_INFO',
          payload:data
        });
        this.props.dispatch({
          type:'LOADING',
          payload:false
        })
    }
    render() { 
        return (
          <ScreenLayout>
            <Fragment>
              <Query query={GET_PROFILE}>
                {(data, loading)=>{
                  if(loading)this.props.dispatch({
                    type:'LOADING',
                    payload:true
                  })
                  if(data.data!=null){this.loadData(data.data.allProfiles[0]);}
                  return <></>
                }}
              </Query>
                <section>
                    <Slider />
                </section>
                <section id="whoAmI">
                    <TextSection title="Who am I?">
                        {this.props.profile?this.props.profile.about:''}
                    </TextSection>
                </section>
                <section id="skills">
                    <Skills />
                </section>
                <section id="portafolio">
                    <Portafolio></Portafolio>
                </section>
                <section>
                    <TextSection title="Why javascript?">
                       {this.props.profile?this.props.profile.whyJavascript:''}
                    </TextSection>
                </section>
                <section id="myvision">
                    <TextSection styleTitle={{ color: "white" }} style={{ background: "#00ACE4", color: "white" }} title="My vision">
                        "Use my knowledge to Build solutions to make more easy and happiest our lives."
                        <br />
                        -jp
                    </TextSection>
                </section>
            
                <section id="contact">
                    <ContactFrom />
                </section>
            </Fragment>
          </ScreenLayout>
           
         );
    }
}
function mapStateToProps(state){
  return{
    profile:state.profile.profile
  }
}
export default connect(mapStateToProps)(withApollo(Home));