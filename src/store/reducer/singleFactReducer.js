import { GET_SINGLE_FACTS_REQUEST, GET_SINGLE_FACTS_SUCCESS, GET_SINGLE_FACTS_FAIL } from '../actions';

const INITIAL_STATE = {
    data: {},
    isLoading: false,
};

const factsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_SINGLE_FACTS_REQUEST:
            return {
                ...state, isLoading: true
            }
        case GET_SINGLE_FACTS_SUCCESS:
            return {
                ...state, data: action.payload, isLoading: false
            };
        case GET_SINGLE_FACTS_FAIL: {
            return {
                ...state, isLoading: false
            }
        }
        default:
            return state;
    }
};

export default factsReducer;