import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {PureCompo,PureCompoProps } from './components/PureCompo';
import StateCompo from './components/StateCompo';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {stateApp:''}
  }
  onInputChange = (val) =>{
    console.log('val dans APP : ' + val);
    this.setState({stateApp: val})
  }
  render(){
    let mesLabel = [];
    mesLabel.push("First")
    mesLabel.push("Second")
    mesLabel.push("Third")
    mesLabel.push("Fourth")
    return (
      <div className="App">
        <header className="App-header">

          {/* START */}
          {mesLabel.map((libelle)=> (
            <StateCompo key={libelle} label={libelle} onInputChange={this.onInputChange}/>
          ))}
          <PureCompo />
          {this.state.stateApp ? <PureCompoProps label={this.state.stateApp} age={2022}/> : null}
          {/* END */}

          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
