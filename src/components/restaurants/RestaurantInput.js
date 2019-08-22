import React, { Component } from 'react';
import { connect } from 'react-redux';

class RestaurantInput extends Component {
  constructor() {
    super();
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  state = {
    restaurantName: ''
  }

  handleOnChange(event) {
    this.setState(
      {restaurantName: event.target.value}
    )
  }

  handleOnSubmit(event){
    event.preventDefault()
    this.props.addRestaurant(event.target.value)
    this.setState(
      {restaurantName: ""}
    )
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label for="name">Name: </label>
          <input type="text" name="name" value={this.state.restaurantName}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return { addRestaurant: payload => dispatch({ type: "ADD_RESTAURANT", payload })}
}
export default connect(null, mapDispatchToProps)(RestaurantInput);
