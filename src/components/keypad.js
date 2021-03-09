import React from 'react';

export default class Keypad extends React.Component{
    buttonPressed=e=>{
        this.props.buttonPressed(e.target.name);

    }
    findname=()=>{
        this.props.findname();
        
    }

    render() {
        var indents = [];
for (var i = 0; i < 10; i++) {
  indents.push(<button name={i} onClick={this.buttonPressed}>{i}</button>);}
        return (
            
            
            <div className="button">
                
                    {indents}
                

                    <button name="CE" onClick={this.buttonPressed}>CE</button>
                    <button name="Find" onClick={this.findname}>Submit</button>
                
               
            </div>
        );
    }
}