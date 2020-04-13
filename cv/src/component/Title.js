import React,{ Fragment} from 'react';
import './style/text.css';
class Text extends React.Component {
    state = {  }
    render() { 
        return ( <Fragment>
            <h3 className="title">{this.props.text}</h3>
        </Fragment> );
    }
}
 
export default Text;