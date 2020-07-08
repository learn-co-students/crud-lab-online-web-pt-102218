import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleOnChange(event) {
    console.log(this.state)
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addReview(this.state.text, this.props.restaurant.id)
  }

  render() {
    return (
      <div>
        Review Input
        <form onSubmit={(e) => this.handleOnSubmit(e)}>
          <input type="text" id="text" onChange={(e) => this.handleOnChange(e)}></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
