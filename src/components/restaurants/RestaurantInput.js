import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new restaurants">Add New Restaurant</label>
          <input type="text" value={this.state.text} 
           onChange={this.handleChange} />
           <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
