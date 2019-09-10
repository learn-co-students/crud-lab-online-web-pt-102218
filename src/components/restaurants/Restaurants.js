import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  genRestaurants() {
    return this.props.list.map(restaurant => <li><Restaurant restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant}/></li>)
  }
  
  render() {
    return(
      <ul>
        {this.genRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;