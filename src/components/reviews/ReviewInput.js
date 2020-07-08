import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      restaurantId: this.props.restaurantId
    }
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addReview(this.state)
    this.setState({
      text: '',
      restaurantId: this.props.restaurantId
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>New Review</label>
          <input onChange={this.handleChange} value={this.state.text}/>
          <input type='submit' value='Add Review'/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
