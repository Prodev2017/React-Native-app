import {
    GET_TEST
} from '../../actions/test';

const initialState = {
    isFetching: false,
    isFulfilled: false,
    batch: []
};

function testReducer(state = initialState, action) {
    switch (action.type) {
        case `${GET_TEST}_PENDING`: {
            return Object.assign({}, state, {
                isFetching: true
            });
        }
        case `${GET_TEST}_FULFILLED`: {
            return {
                isFetching: false,
                isFulfilled: true,
                data: action.payload
            };
        }
        case `${GET_TEST}_REJECTED`: {
            return Object.assign({}, state, {
                isFetching: false,
                isRejected: true,
                errorMessage: action.payload
            });
        }
        default:
            return state;
    }
}

export default testReducer;