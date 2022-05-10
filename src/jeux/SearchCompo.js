/**
  * @author Timothé Gonin
  * Licence
  * Composant avec cycle de vie
*/
import React, {Component} from 'react';

class SearchCompo extends Component {
  constructor(props){
    super(props);
    console.log(this.props.filterText)
    console.log(this.props.inStockOnly)
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleinStockChange = this.handleinStockChange.bind(this);
  }
  handleFilterTextChange(e){
    // console.log(e.target.value);
    this.props.handleFilterTextChange(e.target.value);
  }
  handleinStockChange(e){
    // console.log(e.target.checked);
    this.props.handleinStockChange(e.target.checked);
  }
  render(){
    return(
      <div>
        <input type="text"
          placeholder='Search'
          text={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        <input type="checkbox"
          checked={this.props.inStockOnly}
          onChange={this.handleinStockChange}
        />
        {' '}
        Produits en stock seulement
      </div>
    )
  }
}
export default SearchCompo;