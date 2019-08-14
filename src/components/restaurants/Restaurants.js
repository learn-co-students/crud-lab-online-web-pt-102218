import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  render() {

    const generateRestaurants = this.props.restaurants.map((restaurant) => {
    return <Restaurant restaurant={restaurant} key={restaurant.id} deleteRestaurant={this.props.deleteRestaurant}/>
    })
    
    return(
      <ul>
        {generateRestaurants}
      </ul>
    );
  }
};

export default Restaurants;