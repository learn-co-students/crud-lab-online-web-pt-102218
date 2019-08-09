
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurant(state = {
  restaurants: []
}, action) {
  switch(action.type) {
    case 'ADD_RESTAURANT':

      const restaurant = {
        ...action.restaurant, id: cuid()
      }
      return {...state, restaurants: [...state.restaurants, restaurant]}

    case 'DELETE_RESTAURANT':
      return {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}

    default:
      return state

  }

}
