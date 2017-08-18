import {
    RESET_STATE,
    INITIALIZE_STATE
} from '../../actions/session';

// Initial state
const initialState = {
    isReady: true
};


export default function sessionReducer(state = initialState, action = {}) {
    switch (action.type) {
        case INITIALIZE_STATE:
        case RESET_STATE:
            return Object.assign({}, state, {isReady: true});

        default:
            return state;
    }
}
