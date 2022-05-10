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
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];
    this.props.jeux.forEach(jeu => {
      console.log(`jeu : ${jeu.name}`)
      console.log(`entrée : ${filterText}`)
      if(jeu.name.indexOf(filterText) === -1){
        return
      }
      if(inStockOnly && !jeu.stocked){
        return
      }
      rows.push(<JeuxRow key={jeu.name} jeu={jeu}/>)
    });
    return(
      <div>
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