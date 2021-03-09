import axios from 'axios';
import React from 'react' ;

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
        })
      }
    
    render() {
        var panelStyle = {
            'max-width': '80%',
            margin: '0 auto',

        }
        return (
            <div style={panelStyle}>
               
               <form onSubmit={this.handleSubmit}>
        <label id="name">Enter number</label>
        <input id="username" name="number" type="text" />

        <label >Enter Image</label>
        <input id="email" name="image" type="string" />

        
        

        <button variant="default" style={{ color: "white", background: "silver",width:100,padding: 8,margin: 0}}>Add </button>
      </form>
            </div>
   
        )
}
}