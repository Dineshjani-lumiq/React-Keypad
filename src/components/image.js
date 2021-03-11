import React from 'react' ;
import logo from './logo.png';
import './button.css'


export default class Image extends React.Component {
    
    render() {
        
        

        return (
            <div className="h">
               
                   {this.props.image==""&&<h style={{fontSize: "28px"}}>No superhero Here</h>}
               
              
                  {this.props.image!==""&&<img src={this.props.image} />}
               
            
            </div>
   
        )
}
}