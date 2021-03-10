import React, { Component } from 'react';

import App from "./App";
import Form   from   "./components/form";
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';

export default class Routing extends Component {
    
    render() {

        return (
            <Router>
            <div>
            <ul className="App-header"> 
              <li> 
                <Link to="/">Home</Link> 
              </li> 
              <li> 
                <Link to="/add">Add</Link> 
              </li> 
             
            </ul> 
               <Switch>
<Route exact path="/"  component={  App} />

<Route exact path="/add"  component={Form} />

               </Switch>
            
            </div>
            </Router>
        )
}
}

