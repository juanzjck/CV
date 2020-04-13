import React from 'react';

import './App.css';
import Layaout from './component/Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Screen/Home';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <BrowserRouter>
        <Layaout>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/posts" component={Home}/>
            <Route exact path="/post/:id" component={Home}/>
          </Switch>
        </Layaout>
      
      </BrowserRouter>
     );
  }
}
 
export default App;