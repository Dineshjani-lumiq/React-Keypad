
import React, { Component } from 'react';
 import { Redirect } from "react-router";
import { useHistory ,Link} from 'react-router-dom';
import './button.css';
import axios from 'axios';

export default class List extends React.Component {
    state={
        indents : [],
         
         currentpage:1,
         imageperpage:3
         

    }
 handleClick=(event)=>{
   console.log(this.state.indents.length);
   console.log("handler");
   this.setState({currentpage:Number(event.target.id)});
   this.fetchlist();
       
       
 }

   deletecall=(e)=>{
      
      
       
 
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
        axios.post('http://localhost:4123/pagination', 
         
        {data:this.state.currentpage}).then((res)=>{
          
          let p=res.data.data.length;

const divStyle = {
    margin: '40px',
    border: '5px solid pink'
    
  };
  
          for(let i=0;i<p;i++){
             

              this.setState({
                indents:this.state.indents.concat(<div  className="divstyle" style={divStyle}> <h className="a1">{res.data.data[i].name}</h> <img className="a2" style={{
                   
                    height: 150,
                    width: 150,
                    marginLeft:200
                  }}
        src={res.data.data[i].sticker} alt="Logo" />
        <button className="a3" value={res.data.data[i].name} onClick={this.deletecall}>Delete</button>
         <Link  to={{
      pathname: '/add',
      Properties: {
       Name:res.data.data[i].name,
       Image:res.data.data[i].sticker
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
       var p=this.state.length;
       const pageNumbers = [];
       for (let i = 1; i <= Math.ceil(3); i++) {
         pageNumbers.push(i);
       }  
       const renderPageNumbers = pageNumbers.map(number => {
        return (
          <li
            key={number}
            id={number}
            onClick={this.handleClick}
          >
            {number}
          </li>
        );
      });

        return (
           
          <div>
          <ul>
            {this.state.indents}
          </ul>
          <ul className="page-numbers">
            {renderPageNumbers}
          </ul>
        </div>
        )
}
}