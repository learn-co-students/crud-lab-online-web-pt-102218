
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews: [] }, action) {
    switch (action.type) {
        case "ADD_RESTAURANT":
            let id = cuid();
            return { ...state, restaurants: [...state.restaurants, {...action.payload, id, reviews: []}]};
        case "DELETE_RESTAURANT":
            return { ...state, restaurants: [...state.restaurants.filter(r => r.id !== action.id)]}
        case "ADD_REVIEW":
            return { ...state, reviews: [...state.reviews, {...action.payload, id: cuid()}]};
        case "DELETE_REVIEW":
            return {...state, reviews: [...state.reviews.filter(r => r.id !== action.id)]};
        default:
            return state;
    }
}
