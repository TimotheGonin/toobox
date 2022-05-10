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

          {/* START */}
          <StateCompo label={'me'} onInputChange={this.onInputChange}/>
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
