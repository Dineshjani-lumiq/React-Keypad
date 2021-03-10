import React from 'react';
import './button.css'
export default class Keypad extends React.Component{
    buttonPressed=e=>{
        this.props.buttonPressed(e.target.name);

    }
    findname=()=>{
        this.props.findname();
        
    }

    render() {
        var indents = [];
        var key = [" ","abc","def", "ghi","jkl","mno","pqr","stu","vwx","yzk"];

for (var i = 0; i < 10; i++) {
  indents.push(<button className="button1" name={i} onClick={this.buttonPressed}>{i}<br/> {key[i]}</button>);}
        return (
            
              <div className="button">
                
                    {indents}
                

                    <button className="button1" name="CE" onClick={this.buttonPressed}>CE</button>
                    <button className="button1" name="Find"  onClick={this.findname}>Submit</button>
                
               
            </div>
        );
    }
}