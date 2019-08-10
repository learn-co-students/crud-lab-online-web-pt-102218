
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurant(state = {
  restaurants: []
}, action) {
  switch(action.type) {
    case 'ADD_RESTAURANT':

      const restaurant = {
        ...action.restaurant, id: cuid(), reviews: []
      }
      return {...state, restaurants: [...state.restaurants, restaurant]}

    case 'DELETE_RESTAURANT':
      return {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}

    case 'ADD_REVIEW':
      const review = {
        ...action.review, id: cuid()
      }
      console.log(review)
      const rest = state.restaurants.filter(restaurant => restaurant.id === review.restaurantId)
      console.log(rest)
      const listWithoutRest = state.restaurants.filter(rest => rest.id !== review.restaurantId)
      console.log('The list without current restaurant is', listWithoutRest)
      return {...state, restaurants: listWithoutRest.concat([{...rest[0], reviews: [...rest[0].reviews, review]}])}

    default:
      return state

  }

}
