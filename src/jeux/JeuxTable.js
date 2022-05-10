/**
  * @author Timothé Gonin
  * Licence
  * Composant avec cycle de vie
*/
import React, {Component} from 'react';
import JeuxCategory from './JeuxCategory';
import JeuxRow from './JeuxRow';

class JeuxTable extends Component {
  constructor(props){
    super(props);
    console.log(`JeuxTable les jeux : ${props.jeux}`)
  }
  render(){
    const rows = [];
    this.props.jeux.forEach(jeu => {
      console.log(`jeu : ${jeu.name}`)
      rows.push(<JeuxRow key={jeu.name} jeu={jeu}/>)
    });
    return(
      <div style={{'backgroundColor' : 'violet'}}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          {rows}
        </table>
      </div>
    )
  }
}
export default JeuxTable;