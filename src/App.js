import React, { Component } from 'react';
import './App.css';
class App extends Component {
  state={a:"",b:"",result:""};
  elementA=(e)=>{
    this.setState({a:e.target.value})
  }
  elementB=(e)=>{
    this.setState({b:e.target.value})
  }
  add=()=>{
    const res=parseInt(this.state.a)+parseInt(this.state.b);
    const final=<h4>{res}</h4>
     this.setState({result:final})    
  }
  sub=()=>{
    const res=parseInt(this.state.a)-parseInt(this.state.b);
    const final=<h4>{res}</h4>
     this.setState({result:final}) 
  }
  div=()=>{
    const res=parseInt(this.state.a)/parseInt(this.state.b);
    const final=<h4>{res}</h4>
     this.setState({result:final}) 
  }
  mul=()=>{
    const res=parseInt(this.state.a)*parseInt(this.state.b);
    const final=<h4>{res}</h4>
     this.setState({result:final}) 
  }
  render() {
    return (
      <div>
      <h2>Simple Calculator</h2>
      <div className="input">
      <input type="text" placeholder="Enter 1st Number" onChange={this.elementA}/>
      <input type="text" placeholder="Enter 2nd Number" onChange={this.elementB}/>
      </div>
      <br/>
      <div className="button">
      <button className="add" onClick={this.add}>ADD</button>
      <button className="sub" onClick={this.sub}>SUB</button>
      <button className="div" onClick={this.div}>DIV</button>
      <button className="mul" onClick={this.mul}>MUL</button>
      </div>
      <br/>
      <div className="result">{this.state.result}</div>
      </div>
    );
  }
}

export default App;
