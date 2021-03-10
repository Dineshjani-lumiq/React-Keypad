import React from 'react' ;
import './button.css'

export default class Output extends React.Component {
    
    render() {

        return (
            <div>
                <p className="para">{this.props.result}</p>
            
            </div>
   
        )
}
}