import axios from 'axios';
import React from 'react' ;
import './button.css';


import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

import  { Redirect } from 'react-router-dom'

export default class Form extends React.Component {
  state={
    message:""
  }
    handleSubmit=(event)=> {
        event.preventDefault();
        
        const data = new FormData(event.target);
       
        const value = data.get('image');
        
        const value1 = data.get('name');
    
  axios.put('http://localhost:4123/update', 
         
  {data:{name:value1,image:value}}
  ).then((res)=>{
      console.log(res);
      this.setState({
        message:res.data.message
      });
      
      

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
        <label className="label"id="name">Enter Name</label>
        <input className="inputn" id="username" name="name" type="name" />

        <label className="label">Enter Image</label>
        <input className="input" id="email" name="image" type="url" />

        
        

        <button className="large" variant="default" >Update</button>
      </form>
      <h>{this.state.message}</h>
            </div>
   
        )
}
}