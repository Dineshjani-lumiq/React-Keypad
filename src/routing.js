import React, { Component } from 'react';
import './components/button.css';
import App from "./App";
import Form   from   "./components/form";
import List from "./components/list";
import Delete from "./components/delete";
import Update from "./components/update";
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';

export default class Routing extends Component {
    
    render() {

        return (
            <Router>
            <div className="topanv">
            <ul className="App-header"> 
              <li> 
                <Link style={{paddingLeft:8, textDecoration: 'inherit', color: 'inherit'}} to="/">Home</Link> 
              </li> 
            
             <li><Link style={{paddingLeft:8, textDecoration: 'inherit', color: 'inherit'
   }} to="/list">All List</Link> </li>
             <li><Link style={{paddingLeft:8,textDecoration: 'inherit', color: 'inherit'}} to="/add">Add</Link> </li>

            </ul> 
               <Switch>
<Route exact path="/"  component={  App} />

<Route exact path="/add"  component={Form} />

<Route exact path="/list"  component={List} />
<Route exact path="/delete"  component={Delete} />
<Route exact path="/update"  component={Update} />

               </Switch>
            
            </div>
            </Router>
        )
}
}

