
import cuid from 'cuid';
import { toUnicode } from 'punycode';
export const cuidFn = cuid;

export default function manageRestaurant(state = {
  restaurants: [], reviews: []
}, action) {
  switch(action.type) {
    case 'ADD_RESTAURANT':

      const restaurant = {
        ...action.restaurant, id: cuid(), reviews: []
      }
      return {...state, restaurants: [...state.restaurants, restaurant]}

    case 'DELETE_RESTAURANT':
      return {
        reviews: state.reviews.filter((review) => review.restaurantId !==action.id),
        restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)
      }

    case 'ADD_REVIEW':
      const review = {
        ...action.review, id: cuid()
      }
      return {...state, reviews: [...state.reviews, review]}

    case 'DELETE_REVIEW':
      return {...state, reviews: state.reviews.filter((review) => review.id !== action.id)}

    default:
      return state

  }

}
