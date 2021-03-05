import React from 'react';
import Modal from 'react-modal';
import  loadingImage from '../images/Infinity-1.3s-206px.gif';
import {connect} from 'react-redux';
import './style/style.css';

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
                <Modal    style={customStyles} isOpen={this.props.loadign}>
                    <div className="loadingModal">
                       <img src={loadingImage} />
                    </div>
                </Modal>
                {this.props.children}
            </div>
         );
    }
}
 function mapStateToProps(state){
     return{
         loadign:state.screen.loading
     }
 }
export default connect(mapStateToProps)(ScreenLayout);