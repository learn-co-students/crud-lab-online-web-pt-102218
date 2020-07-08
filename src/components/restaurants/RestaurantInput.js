import React, { Component } from 'react';
import { connect } from 'react-redux';

export class RestaurantInput extends Component {
  constructor() {
    super();
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  state = {
    text: ''
  }

  handleOnChange(event) {
    this.setState(
      {text: event.target.value}
    )
  }

  handleOnSubmit(event){
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState(
      {text: ""}
    )
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" value={this.state.text} onChange={this.handleOnChange} />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return { addRestaurant: payload => dispatch({ type: "ADD_RESTAURANT", payload: {text: payload} })}
}
export default connect(null, mapDispatchToProps)(RestaurantInput);
