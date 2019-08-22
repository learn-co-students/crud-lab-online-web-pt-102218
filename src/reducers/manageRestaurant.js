
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {}, action) {
    switch (action.type) {
        case "ADD_RESTAURANT":
            return state;
        default:
            return state;
    }
}
