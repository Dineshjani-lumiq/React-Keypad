import React, { Component } from 'react';

import App from "./App";
import Form   from   "./components/form";
import List from "./components/list";
import Delete from "./components/delete";
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
             <li><Link to="/list">All List</Link> </li>
             <li><Link to="/delete">Delete</Link> </li>
            </ul> 
               <Switch>
<Route exact path="/"  component={  App} />

<Route exact path="/add"  component={Form} />

<Route exact path="/list"  component={List} />
<Route exact path="/delete"  component={Delete} />

               </Switch>
            
            </div>
            </Router>
        )
}
}

