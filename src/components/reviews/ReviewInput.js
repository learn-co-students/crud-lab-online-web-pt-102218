import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleOnChange = event => {
    this.setState(
      { text: event.target.value }
    )
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addReview(this.state.text, this.props.restaurantId)
    this.setState({ text: '' })
  }
  render() {
    return (
      <div>
        Review Input:
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor='text'>Enter a Review:</label>
          <input type='text' name='text' value={this.state.text} onChange={this.handleOnChange} />
          <input type='submit' value='Submit Review' />
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return { addReview: ( text, restaurantId ) => dispatch({ type: "ADD_REVIEW", payload: {text, restaurantId}}) }
}
export default connect(null, mapDispatchToProps)( ReviewInput );
