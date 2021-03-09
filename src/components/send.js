import React from 'react' ;

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
                
                <button style={myStyle}  onClick={this.fetchthis}>Send</button>
            </div>
   
        )
}
}