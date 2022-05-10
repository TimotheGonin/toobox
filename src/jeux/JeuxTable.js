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
    let lastCat;

    const rows = [];
    this.props.jeux.forEach(jeu => {
      if(jeu.name.toLowerCase().indexOf(filterText) === -1){
        return
      }
      if(inStockOnly && !jeu.stocked){
        return
      }
      if(jeu.category!== lastCat){
        rows.push(<JeuxCategory category={jeu.category}/>)
      }
      rows.push(<JeuxRow key={jeu.name} jeu={jeu}/>)
      lastCat = jeu.category;
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