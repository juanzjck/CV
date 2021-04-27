import React from 'react';
import Modal from 'react-modal';
import  loadingImage from '../images/Infinity-1.3s-206px.gif';
import {connect} from 'react-redux';
import './style/style.css';
import {Helmet} from "react-helmet";
const customStyles = {
    content : {
      top                   : '0%',
      left                  : '0%',
      right                 : '100%',
      marginRight           : '0%',
  
    }
  };
class ScreenLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{this.props.profile?this.props.profile.name:''}-{this.props.profile?this.props.profile.position:''}</title>
                    <meta name="description" 
                     content={this.props.profile?this.props.profile.meta_description?this.props.profile.meta_description:'A profecional cv':'A profecional cv'}/>
                    
                    
                        
                </Helmet>
                <Modal    style={customStyles} isOpen={this.props.loadign}>
                    <div className="loadingModal">
                       <img alt='loading' src={loadingImage} />
                    </div>
                </Modal>
                {this.props.children}
            </div>
         );
    }
}
 function mapStateToProps(state){
     return{
         loadign:state.screen.loading,
         profile:state.profile.profile
     }
 }
export default connect(mapStateToProps)(ScreenLayout);