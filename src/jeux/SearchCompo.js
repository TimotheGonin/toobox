/**
  * @author Timothé Gonin
  * Licence
  * Composant avec cycle de vie
*/
import React, {Component} from 'react';

class SearchCompo extends Component {
  constructor(props){
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleinStockChange = this.handleinStockChange.bind(this);
  }
  handleFilterTextChange(e){
    console.log(e.target.value)
  }
  handleinStockChange(e){
    console.log(e.target.checked)
  }
  render(){
    return(
      <div style={{'backgroundColor' : 'red'}}>
        <input type="text"
          placeholder='Search'
          onChange={this.handleFilterTextChange}
        />
        <input type="checkbox"
          onChange={this.handleinStockChange}
        />
        {' '}
        Produits en stock seulement
      </div>
    )
  }
}
export default SearchCompo;