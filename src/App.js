import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Keypad from "./components/keypad";
import Output from "./components/output";
import Send   from   "./components/send";
import Image   from   "./components/image";
import Form   from   "./components/form";

class App extends Component {
  state={
    result:" ",
    image: ""
  }
  buttonPressed=buttonName=>{
    if(buttonName === "CE"){
      this.backspace()
  }else{
    this.setState({
      result:this.state.result+buttonName
    });
  }
  };

  fetchthis=()=>{
    var p=this.state.result;
    /*    yha pe fetch karunga is result ke accoding ki ye id bhejunga or mujhe image url chhaiye */ 
     axios.post('http://localhost:4585/find',{p})
      .then(res => {
       
       if (res.data.message==undefined) {
          this.setState({
            image:""
          });
        }
        
      
        else{
          var q=res.data.message;
          
          this.setState({
            image:q
          });
        }

        console.log(res.data.message);
      })
      


  };

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
        <Send   fetchthis={this.fetchthis} result={this.state.result}/>
        <Keypad buttonPressed={this.buttonPressed}/>
        <Image  image={this.state.image}/>
        <br></br>
        <br></br>
        <br></br>

        <Form   form={this.formdata} />
        

      </div>
    );
  }
}

export default App;