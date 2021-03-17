import React from 'react' ;

import axios from 'axios';

export default class List extends React.Component {
    state={
        message:""
      }
    handleSubmit=(event)=> {
        event.preventDefault();
        
        const data = new FormData(event.target);
       
        
        const value1 = data.get('number');
        console.log(value1);
 
        axios.delete('http://localhost:4123/delete', 
         
        {data:{number:value1}}
        ).then((res)=>{
            console.log(res);
            this.setState({
              message:res.data.message
            });
            
            
        })
       
        

      }
   
    
    render() {
        
        

        return (
            <div className>
                
                <form  onSubmit={this.handleSubmit}>
        <label className="label"id="name">Enter Number</label>
        <input className="inputn" id="username" name="number" type="number" />

        
        

        <button className="action1" variant="default" >Delete </button>
      </form>
      <h style={{fontSize: "28px"}}>{this.state.message}</h> 
            </div>
   
        )
}
}