import React, { Component } from 'react';
import Restaurant from './Restaurant'
import { connect } from 'react-redux'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map(r => {
          return <Restaurant key={r.id} restaurant={r} deleteRestaurant={this.props.deleteRestaurant} />
        })}
      </ul>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return { deleteRestaurant: id => dispatch({ type: 'DELETE_RESTAURANT', id})}
}

const mapStateToProps = state => {
  return { restaurants: state.restaurants }
}

export default connect(mapStateToProps, mapDispatchToProps)( Restaurants );