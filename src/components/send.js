import React from 'react' ;
import './button.css'

export default class Send extends React.Component {
    fetchthis=()=>{
   
        this.props.fetchthis();

    }
    
    render() {
        var myStyle = {
            width:450
         }
        return (
           
            <div>
                
                <button className="action" style={myStyle}  onClick={this.fetchthis}>Send</button>
            </div>
   
        )
}
}