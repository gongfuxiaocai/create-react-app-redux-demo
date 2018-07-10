import { combineReducers } from 'redux';

import reactData from './react';
import reduxData from './redux';

const studyData = combineReducers( {
    reactData,
    reduxData
} );

export default studyData;