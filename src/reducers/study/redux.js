import { combineReducers } from 'redux';

import { SELECTED_CHANGE } from '../../actions/study/redux';

const searchData = ( state = { grade: "" }, action ) => {
    switch (action.type) {
        case SELECTED_CHANGE: {
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

const reduxData = combineReducers( {
    searchData
} );

export default reduxData;