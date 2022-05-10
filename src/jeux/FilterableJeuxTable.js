/**
  * @author Timothé Gonin
  * Licence
  * Composant avec cycle de vie
*/
import React, {Component} from 'react';
import SearchCompo from './SearchCompo';
import JeuxTable from './JeuxTable';
import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';

class FilterableJeuxTable extends Component {
  constructor(props){
    super(props);
    console.log(`les jeux : ${props.jeux}`)
    this.state = {
      filterText:'',
      inStockOnly:false
    }
    this.handleFilterTextChange=this.handleFilterTextChange.bind(this);
    this.handleinStockChange=this.handleinStockChange.bind(this);
  }
  handleFilterTextChange(e){
    console.log(`Parent : ${e}`)
    this.setState({filterText:e})
  }
  handleinStockChange(e){
    console.log(`Parent : ${e}`)
    this.setState({inStockOnly:e})
  }
  render(){
    return(
      <div>
        FilterableJeuxTable
        <SearchCompo 
          filterText={this.state.filterText} 
          inStockOnly={this.state.inStockOnly}
          handleFilterTextChange={this.handleFilterTextChange}
          handleinStockChange={this.handleinStockChange}
        />
        <JeuxTable 
          jeux={this.props.jeux}
          filterText={this.state.filterText} 
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    )
  }
}
export default FilterableJeuxTable;