import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addRestaurant(this.state)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Restaurant Name:</label>
          <input onChange={this.handleChange} value={this.state.text}/>
          <input type='submit' name='submit'/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
