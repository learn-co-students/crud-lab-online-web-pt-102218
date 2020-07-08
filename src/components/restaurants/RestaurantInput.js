import React, { Component } from 'react';

class RestaurantInput extends Component {

    state = {
      text: ''
    }

    handleOnChange(event) {
      this.setState({
        [event.target.id]: event.target.value
      })
    }

    handleOnSubmit(event) {
      event.preventDefault();
      this.props.addRestaurant(this.state.text)
    }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleOnSubmit(e)}>
          <input type="text" id="text" onChange={(e) => this.handleOnChange(e)}></input>
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
