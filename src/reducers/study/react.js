import { combineReducers } from 'redux';

import { INPUT_CHANGE } from '../../actions/study/react';

const searchData = ( state = { name: "" }, action ) => {
    switch (action.type) {
        case INPUT_CHANGE: {
            return {
                ...state,
                [ action.name ]: action.value
            }
        }
        default: {
            return state;
        }
    }
};

const reactData = combineReducers({
    searchData
});

export default reactData;