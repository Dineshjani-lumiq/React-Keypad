
import React, { Component } from 'react';
 import { Redirect } from "react-router";
import { useHistory ,Link} from 'react-router-dom';
import './button.css';
import axios from 'axios';

export default class List extends React.Component {
    state={
        indents : [],
         change:0,
         

    }
 

   deletecall=(e)=>{
      
      
       
 console.log(e.target.value);
        axios.delete('http://localhost:4123/delete', 
         
        {data:{name:e.target.value}}
        
        ).then((res)=>{
            
            this.setState({
              message:res.data.message
            });
            this.fetchlist();
            
        })
       
       
   }

   /*   edit   */
  handleSubmit=(event,p)=>{
      console.log("ram");
      event.preventDefault();
console.log(p);
console.log(event.target);
console.log("ram");


const data = new FormData(event.target);
       
const value = data.get('image');



axios.put('http://localhost:4123/update', 
 
{data:{name:p,image:value}}
).then((res)=>{
console.log(res);
this.setState({
message:res.data.message
});



})

  }


  editcall=()=>{
       
        
<Redirect to='/update' />
  }



    fetchlist=()=>{
        console.log("request send from frontend");
        this.setState({
            indents:[]
            })
        axios.post('http://localhost:4123/list').then((res)=>{
          
          let p=res.data.length;

const divStyle = {
    margin: '40px',
    border: '5px solid pink'
    
  };
  
          for(let i=0;i<p;i++){
             

              this.setState({
                indents:this.state.indents.concat(<div  className="divstyle" style={divStyle}> <h className="a1">{res.data[i].name}</h> <img className="a2" style={{
                   
                    height: 150,
                    width: 150,
                    marginLeft:200
                  }}
        src={res.data[i].sticker} alt="Logo" />
        <button className="a3" value={res.data[i].name} onClick={this.deletecall}>Delete</button>
         <Link  to={{
      pathname: '/add',
      Properties: {
       Name:res.data[i].name,
       Image:res.data[i].sticker
      }
   }}>
     <button className="a4" type="button">
          Edit
     </button>
 </Link>
        
        </div>
        )
              });
              
          }
         
      })
    
    }

    componentDidMount(){
    this.fetchlist();
  }
 componentDidUpdate(){
    return true;
 
 }

 
  
    render() {
        
        

        return (
            <div className>
              
               
               
     
                {this.state.indents}  
            
            </div>
   
        )
}
}