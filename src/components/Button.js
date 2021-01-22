import React, { Component } from 'react';
//we need to import the button 



class Button extends Component{
  

    
    // we need a render method 
       render(){
        //here we are going to retrun html/css
       
        return(
            <div className={`column-${this.props.cols}`}>
                <button className="calc-button" onClick={() => this.props.action(this.props.symbol)}>{ this.props.symbol }</button>
            </div>
        )
    }
}
export default Button;