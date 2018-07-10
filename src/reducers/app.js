import { combineReducers } from 'redux';

import { APP_INPUT_CHANGE } from '../actions/app';

const operateData = {
    name: "",
    age: "",
};

const getOperateData = ( state = operateData, action ) => {
    switch( action.type ) {
        case APP_INPUT_CHANGE: {
            return {
                ...state,
                [ action.name ]: action.value
            }
        }
        default:
            return state;
    }
};

const appData = combineReducers( {
    operateData: getOperateData
} );

export default appData;