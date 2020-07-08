import React, { Component } from 'react';

class ReviewInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
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
    this.props.addReview({ text: this.state.text, restaurantId: this.props.restaurantId});
    this.setState({
      text: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>Add Review</label>
        <input type="text" value={this.state.text}
        onChange={this.handleChange} />
        <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
