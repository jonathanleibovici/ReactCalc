import React, { Component } from 'react';
import Button from './components/Button';
import "./css/style.css";
class App extends Component{
  //now we instant the state 
  constructor(props)
  {
    super(props); //always inst the super class


    this.state = {
      current: '0',
      previous: [],
      nextIsReset: false
    };
  }
      //create a reset function 
      reset = () =>{
        //to set the state we do 
        this.setState({current:'0',previous:[],nextIsReset: false });
      }
      addToCurrent = (symbol) =>{
        //now we need to create an array //this is going to test
        if(["/","-","+","*"].indexOf(symbol)> -1){
          //going to do something we are going to take the current  and add this to the prev array 

          let { previous } = this.state;
          previous.push(this.state.current + symbol);
          this.setState({previous,nextIsReset: true});
        }else
        {
          if((this.state.current === "0" && symbol !== ".")||this.state.nextIsReset)
          {
            this.setState({current: symbol, nextIsReset: false});//this adds to the current 
          } else{
            this.setState({current: this.state.current + symbol});
          }
        }
      }
      calculate = (symbol) => {
        let{ current, previous , nextIsReset} = this.state;
        //we need to do somechecking if there is a previous
        if(previous.length > 0 ){
          current = eval(String(previous[previous.length - 1] + current));
          this.setState({current,previous: [],nextIsReset: true});
        }
      }

  render(){
    
    const buttons =[//this is going to hold the array of buttons
      {symbol: 'C',cols:  3, action: this.reset},
      {symbol: '/',cols:  1, action: this.addToCurrent},
      {symbol: '7',cols:  1, action: this.addToCurrent},
      {symbol: '8',cols:  1, action: this.addToCurrent},
      {symbol: '9',cols:  1, action: this.addToCurrent},
      {symbol: '*',cols:  1, action: this.addToCurrent},
      {symbol: '4',cols:  1, action: this.addToCurrent},
      {symbol: '5',cols:  1, action: this.addToCurrent},
      {symbol: '6',cols:  1, action: this.addToCurrent},
      {symbol: '-',cols:  1, action: this.addToCurrent},
      {symbol: '1',cols:  1, action: this.addToCurrent},
      {symbol: '2',cols:  1, action: this.addToCurrent},
      {symbol: '3',cols:  1, action: this.addToCurrent},
      {symbol: '+',cols:  1, action: this.addToCurrent},
      {symbol: '0',cols:  2, action: this.addToCurrent},
      {symbol: '.',cols:  1, action: this.addToCurrent},
      {symbol: '=',cols:  1, action: this.calculate}
      ];
//the buttons.map is a method that map through an array in js
//line 52 here is a condition 
    return (
      <div className="App">

        {this.state.previous.length > 0 ?
        <div className="floaty-last">{this.state.previous[this.state.previous.length -1 ]}</div>
        :null}

        <input className="result" type="text" value={ this.state.current } />
       {buttons.map(( btn, i) => {
         return <Button key={i} symbol={btn.symbol} cols={btn.cols} action={(symbol) => btn.action(symbol)}/>
       })}

      </div>
    );
    }

}
export default App;




















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//export default App;
