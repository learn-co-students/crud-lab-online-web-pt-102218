import React, { Component } from 'react';
import Restaurant from './Restaurant'
class Restaurants extends Component {

  generateRestaurants() {
    return this.props.restaurants.map((rest) => <Restaurant restaurant={rest} delete={this.props.delete}/>)
  }
  render() {
    return(
      <ul>
        {this.generateRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;
