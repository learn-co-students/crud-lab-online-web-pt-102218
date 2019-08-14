import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor() {
    super() 
    this.state = {
      text: ''
    }
  }
  onChange = event => {
    this.setState({
      text: event.target.value 
    })
  }
  onSubmit = event => {
    event.preventDefault()
    this.props.addReview({text: this.state.text,  restaurantId: this.props.restaurantId})
    this.setState({
      text: ''
    })
    debugger 
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
        <input type="text" onChange={event => this.onChange(event)}></input>
        <input type="submit" ></input>
        </form> 
      </div>
    );
  }
};

export default ReviewInput;
