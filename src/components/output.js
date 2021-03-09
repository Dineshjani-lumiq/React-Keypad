import React from 'react' ;

export default class Output extends React.Component {
    
    render() {

        return (
            <div>
                <p>{this.props.result}</p>
            
            </div>
   
        )
}
}