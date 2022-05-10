/**
  * @author Timothé Gonin
  * Licence
  * Premier composant avec state
*/
import React, {Component} from 'react';
import '../styles/StateCompo.css'

class StateCompo extends Component {
  constructor(props){
    super(props);
    console.log(`label : ${props.label}`);
    this.state = {nom:''};
    // this.handleChange = this.handleChange.bind(this);
  }
  // handleChange(){
  //   this.setState({nom : 'new value'})
  // }
  handleChange = (e) => {
    const value = e.target.value;
    console.log(`value : ${value}`)
    this.setState({nom : value})
  }
  render(){
    return(
      <div>
        <h6 className='state-h6'>Compo State</h6>
        <input type="text" value={this.state.nom} onChange={this.handleChange}></input>
      </div>
    )
  }
}
export default StateCompo;