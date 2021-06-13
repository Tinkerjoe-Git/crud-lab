import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews = this.props.reviews.map((review=> <Review review={review}/>))
    return (
      <ul>
        Reviews
        {reviews}
      </ul>
    );
  }
};

export default Reviews;