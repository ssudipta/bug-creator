import { combineReducers } from 'redux'

import bugsReducer from '../bugTracker/reducer';
import { spinnerReducer } from '../spinner';

let rootReducer = combineReducers({
	bugState : bugsReducer,
	spinnerState : spinnerReducer
});

export default rootReducer;
