import React, { Component } from 'react';

class Restaurants extends Component {
  const allRestaurants = this.props.restaurants.map((restaurant) => (<Restaurant restaurant={restaurant} key={restaurant.id}/> ))
  render() {
    return(
      <ul>
        Restaurants Component
      </ul>
    );
  }
};

export default Restaurants;