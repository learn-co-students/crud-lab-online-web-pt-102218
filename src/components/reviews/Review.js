import React, { Component } from 'react';

class Review extends Component {

  handleOnClick(){
    this.props.deleteReview(this.props.review.id)
  }

  render() {

    return (
      <div>
        <li>
          {this.props.review.text}
        </li>
        <button onClick={(event) => this.handleOnClick(event)}> X </button>
      </div>
    );
  }

};

export default Review;
