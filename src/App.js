import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {PureCompo,PureCompoProps } from './components/PureCompo';
import StateCompo from './components/StateCompo';
import CompoCycleDeVie from './components/CompoCycleDeVie';

// JEUX
import FilterableJeuxTable from './jeux/FilterableJeuxTable'

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
    // mesLabel.push("First")
    // mesLabel.push("Second")
    // mesLabel.push("Third")
    // mesLabel.push("Fourth")
    const JEUX = [];
    JEUX.push({category: 'FPS', price:'10€', stocked:true, name:'Counter Strike'});
    JEUX.push({category: 'FPS', price:'40€', stocked:false, name:'BattleField'});
    JEUX.push({category: 'FPS', price:'20€', stocked:true, name:'PUBG'});
    JEUX.push({category: 'Aventure', price:'10€', stocked:true, name:'Tomb raider'});
    JEUX.push({category: 'Aventure', price:'30€', stocked:false, name:'Uncharted'});
    JEUX.push({category: 'Aventure', price:'50€', stocked:true, name:'Zelda'});
    JEUX.push({category: 'RPG', price:'40€', stocked:true, name:'Wordl Of Warcart'});
    JEUX.push({category: 'RPG', price:'30€', stocked:false, name:'Elder Scroll'});
    return (
      <div className="App">
        <header className="App-header">
          {/* JEUX-start */}
          <FilterableJeuxTable jeux={JEUX}/>
          {/* JEUX-end */}

          {/* START */}
          {/* <CompoCycleDeVie/> */}
          {mesLabel.map((libelle)=> (
            <StateCompo key={libelle} label={libelle} onInputChange={this.onInputChange}/>
          ))}
          {/* <PureCompo /> */}
          {this.state.stateApp ? <PureCompoProps label={this.state.stateApp} age={2022}/> : null}
          {/* END */}

          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
      </div>
    );
  }
}

export default App;
