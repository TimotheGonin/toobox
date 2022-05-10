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
    return (
      <div className="App">
        <header className="App-header">
          <StateCompo label={'me'} onInputChange={this.onInputChange}/>
          <PureCompo />
          <PureCompoProps label={this.state.stateApp} age={2022}/>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
