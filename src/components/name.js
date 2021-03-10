import React from 'react' ;
import './button.css'

export default class  extends React.Component {
    
    render() {

        return (
            <div>
                <p className="h1">{this.props.name}</p>
            
            </div>
   
        )
}
}