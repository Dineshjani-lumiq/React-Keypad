import React from 'react' ;
import logo from './logo.png';
export default class Image extends React.Component {
    
    render() {
        
        

        return (
            <div>
               
                   {this.props.image==""&&<h>No superhero Here</h>}
               
              
                  {this.props.image!==""&&<img src={this.props.image} />}
               
            
            </div>
   
        )
}
}