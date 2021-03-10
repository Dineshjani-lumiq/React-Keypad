import axios from 'axios';
import React from 'react' ;
import './button.css';


import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

import  { Redirect } from 'react-router-dom'

export default class Form extends React.Component {
    handleSubmit=(event)=> {
        event.preventDefault();
        
        const data = new FormData(event.target);
       
        const value = data.get('image');
        console.log(value);
        const value1 = data.get('number');
        console.log(value1);
  console.log({ value });
        axios.post('http://localhost:4585/add', 
          {number:value1,
          image:value}
        ).then((res)=>{
            console.log(res);
           
            <Redirect from="add" to={"/"}/> 
            
        })
       


      }
    
    render() {
        var panelStyle = {
            'max-width': '80%',
            margin: '0 auto',

        }
        return (
            <div className="form">
               
               <form  onSubmit={this.handleSubmit}>
        <label className="label"id="name">Enter Number</label>
        <input className="inputn" id="username" name="number" type="number" />

        <label className="label">Enter Image</label>
        <input className="input" id="email" name="image" type="url" />

        
        

        <button className="action1" variant="default" >Add </button>
      </form>
            </div>
   
        )
}
}