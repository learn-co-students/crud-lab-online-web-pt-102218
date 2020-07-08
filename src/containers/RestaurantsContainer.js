import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {


  render() {
    debugger
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants restaurants={this.props.restaurants} removeRestaurant={this.props.removeRestaurant} />
      </div>
    )
  }
}

 

export default connect(({restaurants})=>({restaurants}),(dispatch)=>({
  addRestaurant:name=>dispatch({type:"ADD_RESTAURANT",name:name}),
  removeRestaurant:(id)=>dispatch({type:"REMOVE_RESTAURANT",id:id})
}))(RestaurantsContainer)
