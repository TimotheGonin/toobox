/**
  * @author Timothé Gonin
  * Licence
  * Composant avec cycle de vie
*/
import React, {Component} from 'react';

class CompoCycleDeVie extends Component {
  constructor(props){
    super(props);
    console.log("check constructor")
  }
  componentWillMount(){
    console.log('check componentWillMount')
  }
  render(){
    console.log('check Render')
    return(
      <div>
      </div>
    )
  }
  componentDidMount(){
    console.log('check componentDidMount')
  }
  componentWillReceiveProps(){
    console.log('check componentWillReceiveProps')
  }
  shouldComponentUpdate(){
    console.log('check shouldComponentUpdate')
  }
  componentWillUpdate(){
    console.log('check shouldComponentUpdate')
  }
  componentDidUpdate(){
    console.log('check componentDidUpdate')
  }
}
export default CompoCycleDeVie;