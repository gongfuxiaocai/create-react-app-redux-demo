import { combineReducers } from 'redux';
import appData from './app';

// import homeData from './home';
import studyData from './study';


const rootReducer = combineReducers({
    appData,
    // homeData,
    studyData
});

export default rootReducer;
