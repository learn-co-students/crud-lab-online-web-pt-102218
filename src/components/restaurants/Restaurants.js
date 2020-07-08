import React, { Component } from 'react';
import Restaurant from './Restaurant'
class Restaurants extends Component {
   
  render() {
    const allRestaurants = this.props.restaurants.map((restaurant) => (<Restaurant delete={this.props.delete} restaurant={restaurant} key={restaurant.id}/> ))
    return(
      
      <ul>
        {allRestaurants}
      </ul>
    );
  }
};

export default Restaurants;