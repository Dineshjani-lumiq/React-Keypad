import axios from 'axios';
import React from 'react' ;
import './button.css';


import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

import  { Redirect } from 'react-router-dom'

export default class Form extends React.Component {
  state={
    message:"",
    Name:this.props.location.Properties?this.props.location.Properties.Name:" ",
    Image:this.props.location.Properties?this.props.location.Properties.Image:" "
  }
  keyPressed=(e)=>{
    console.log("ram");
    console.log(this.state.Name)
    console.log(e.target.value);
    
    if(e.keycode ===8){
      this.backspace();
  }else{
    this.setState({
      Name:e.target.value
    });
  }
  };
   backspace = () => {
    this.setState({
        Name: this.state.Name.slice(0, -1)
    })
}

key1Pressed=(e)=>{
    
   
    
    if(e.keycode ===8){
      this.back1space();
  }else{
    this.setState({
      Image:e.target.value
    });
  }
  };
   back1space = () => {
    this.setState({
        Image: this.state.Image.slice(0, -1)
    })
}
    handleSubmit=(event)=> {
      console.log(this.props.location.properties);
        event.preventDefault();
        
        const data = new FormData(event.target);
       
        const value = data.get('image');
        console.log(value);
        const value1 = data.get('name');
        console.log(value1);
  console.log({ value });
        axios.post('http://localhost:4123/update', 
          {name:value1,
          image:value}
        ).then((res)=>{
            console.log(res);
            this.setState({
              message:res.data.message
            });
         this.setState({
              change:this.state.change
            })
            
        })
       


      }

    handletSubmit=(event)=> {
      console.log(this.props.location.properties);
        event.preventDefault();
        
        const data = new FormData(event.target);
       
        const value = data.get('image');
        console.log(value);
        const value1 = data.get('name');
        console.log(value1);
  console.log({ value });
        axios.post('http://localhost:4123/add', 
          {name:value1,
          image:value}
        ).then((res)=>{
            console.log(res);
            this.setState({
              message:res.data.message
            });
         this.setState({
              change:this.state.change
            })
            
        })
       


      }

    render() {
      var p=this.props.location.Properties;
      console.log(p);
 var count=0;
 if(typeof(p)=='undefined'){
   console.log("inside");
   count=0;
 }
 else{
   count=1;
 }
        var panelStyle = {
            'max-width': '80%',
            margin: '0 auto',

        }
        return (
            <div className="form">
              {count && <form  className="form" onSubmit={this.handleSubmit}>

        <label className="label"id="name">Enter Name</label>
        <input className="inputn" id="username" name="name" type="string"  onChange={this.keyPressed}value={this.state.Name} />

        <label className="label">Enter Image</label>
        <input className="input" id="email" name="image" type="url" onChange={this.key1Pressed} value={this.state.Image} />

        
        

        <button className="action1" variant="default" >Update </button>
      </form> 
              }
                {!count && <form  className="form" onSubmit={this.handletSubmit}>

        <label className="label"id="name">Enter Name</label>
        <input className="inputn" id="username" name="name" type="string" />

        <label className="label">Enter Image</label>
        <input className="input" id="email" name="image" type="url"  />

        
        

        <button className="action1" variant="default" >Add </button>
      </form> 
    }
      <h>{this.state.message}</h>
            </div>
   
        )
}
}