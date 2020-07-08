import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {
  
  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants restaurants={this.props.restaurants} delete={this.props.delete}/>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  addRestaurant: text => dispatch({type: 'ADD_RESTAURANT', text}),
  delete: id => dispatch({type: 'DELETE_RESTAURANT', id })
})

const mapStateToProps = state => ({ restaurants: state.restaurants}) 

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer) 
