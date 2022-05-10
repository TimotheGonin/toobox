/**
  * @author Timothé Gonin
  * Licence
  * Composant avec cycle de vie
*/
import React, {Component} from 'react';
import SearchCompo from './SearchCompo';
import JeuxTable from './JeuxTable';

class FilterableJeuxTable extends Component {
  constructor(props){
    super(props);
    console.log(`les jeux : ${props.jeux}`)
  }
  render(){
    return(
      <div style={{'backgroundColor' : 'blue'}}>
        FilterableJeuxTable
        <SearchCompo/>
        <JeuxTable jeux={this.props.jeux}/>
      </div>
    )
  }
}
export default FilterableJeuxTable;