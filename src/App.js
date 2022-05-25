
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar'
import Home from './components/Home'
import Fact1 from './components/fact1'
import Fact2 from './components/fact2'
import Fact3 from './components/fact3'


class App extends Component {
  render() {
    return (
     
      <BrowserRouter>
        <div className='App'>
        <Home />
          <Navbar />
          <Switch>
            <Route path='/Home' component={Home} />
            <Route path='/fact1' component={Fact1} />
            <Route path='/fact2' component={Fact2} />
            <Route path='/fact3' component={Fact3} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }

}



export default App;
