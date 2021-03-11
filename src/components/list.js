import React from 'react' ;

import axios from 'axios';

export default class List extends React.Component {
    state={
        indents : [],

    }
   
    fetchlist=()=>{
        console.log("request send from frontend");
        axios.post('http://localhost:4585/list').then((res)=>{
          
          let p=res.data.length;

const divStyle = {
    margin: '40px',
    border: '5px solid pink'
  };
          for(let i=0;i<p;i++){
              console.log(res.data[i].sticker)
              this.setState({
                indents:this.state.indents.concat(<div style={divStyle}> <h>{res.data[i].id}</h> <img style={{
                    resizeMode: "center",
                    height: 100,
                    width: 200,
                    marginLeft:550
                  }}
        src={res.data[i].sticker} alt="Logo" /><br/></div>)
              });
              
          }
         
      })
    
    }

    
    render() {
        
        

        return (
            <div className>
                <h style={{fontSize: "28px"}}>All List of superhero is here </h>
               
                <button onClick={this.fetchlist}>List</button>
                {this.state.indents}
            
            </div>
   
        )
}
}