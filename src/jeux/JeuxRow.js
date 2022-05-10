/**
  * @author Timothé Gonin
  * Licence
  * Composant avec cycle de vie
*/
import React, {Component} from 'react';

class JeuxRow extends Component {
  constructor(props){
    super(props);
    console.log(props.jeu)
  }
  render(){
    let name;
    this.props.jeu.stocked ? name=this.props.jeu.name : name = <span style={{'color':'red'}}>{this.props.jeu.name}</span> ;
    return(
      <tr>
        <td>{name}</td>
        <td>{this.props.jeu.price}</td>
      </tr>
    )
  }
}
export default JeuxRow;