import React from 'react';
import './App.css';
import Layaout from './component/Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Screen/Home';
import createHistory from "history/createBrowserHistory"
import { ScrollingProvider} from 'react-scroll-section';

const history = createHistory()

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidUpdate(prevProps){
    if (this.props.location !== prevProps.location){ 
      window.scrollTo(0,0)
    }
  }

  render() { 
    return (  
      
        <BrowserRouter   onUpdate={() => console.log('hola')}  history={history}>
            
              <ScrollingProvider>
                  <Layaout>
                      <Switch>                  
                            <Route exact path="/" component={Home}/>
                        
                      </Switch> 
                    </Layaout>
              </ScrollingProvider>
                
        </BrowserRouter>
   

     );
  }
}
 //
export default App;