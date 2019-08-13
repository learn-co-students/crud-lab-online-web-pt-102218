import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  generateRestaurants = () => {
    return this.props.restaurants.map(restaurant => {
     return <Restaurant {...restaurant} deleteRestaurant={this.props.deleteRestaurant}/>
    })
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