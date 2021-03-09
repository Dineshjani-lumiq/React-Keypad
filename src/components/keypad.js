import React from 'react';

export default class Keypad extends React.Component{
    buttonPressed=e=>{
        this.props.buttonPressed(e.target.name);

    }

    render() {
        var indents = [];
for (var i = 0; i < 10; i++) {
  indents.push(<button name={i} onClick={this.buttonPressed}>{i}</button>);}
        return (
            
            
            <div className="button">
                
                    {indents}
                


                
                <button style={{width:300}}name="CE" onClick={this.buttonPressed}>CE</button>
               
            </div>
        );
    }
}