import React, { Component } from 'react';

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
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label for="name">Name: </label>
          <input type="text" name="name" value={this.state.restaurantName}/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
