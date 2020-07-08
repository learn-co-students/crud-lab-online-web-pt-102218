import React, { Component } from 'react';

class Review extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    this.props.delete(this.props.review.id)
  }

  render() {
    const { review } = this.props


    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={this.handleClick}> X </button>
      </div>
    );
  }

};

export default Review;
