import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Keypad from "./components/keypad";
import Output from "./components/output";
import Send   from   "./components/send";
import Image   from   "./components/image";
import Form   from   "./components/form";
import Name   from   "./components/name";

class App extends Component {
  state={
    name:"",
    result:"",
    image: "",
    name:"No Superhero Image for this number"
  }
  buttonPressed=buttonName=>{
    if(buttonName === "CE"){
      this.backspace()
  }else{
    console.log(buttonName);
    this.setState({
      result:this.state.result+buttonName
    });
  }
  };
      
  findname=()=>{
    console.log("request send from frontend");
    axios.post('http://localhost:4123/findname', 
    {number:this.state.result}
  ).then((res)=>{
console.log(res);
      if(res.data.message!="error"){
        
        this.setState({
          
          
          name:res.data.data[0].Name,
          image:res.data.data[0].sticker
       });
      }
      else{
        this.setState({
          image:"",
          name:"No Superhero found for this number"
        });
      }
     
  })
  
}

  

  backspace = () => {
    this.setState({
        result: this.state.result.slice(0, -1)
    })
};
  render(){
    var panelStyle = {
      'max-width': '80%',
      margin: '0 auto'
    }
    return(
      <div className="App">
        
        <Output result={this.state.result} />
      
        <Keypad buttonPressed={this.buttonPressed} findname={this.findname}/>
        <br>
        </br>
        <br></br>
        <br>
        </br>
        <br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <Image  className="1" image={this.state.image}/>
        
        <br></br>


        <Name  className="2" name={this.state.name}/>

      </div>
    );
  }
}

export default App;