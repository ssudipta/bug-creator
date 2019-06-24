import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

/*function loggerMiddleware({ getState, dispatch}){
	return function (next){
		return function(action){
			console.group(action.type);
			console.log('before -> ', getState());
			next(action);
			console.log('after -> ', getState());
			console.groupEnd();
		}
	}
}*/

let loggerMiddleware = ({getState, dispatch}) => next => action => {
	if (typeof action !== 'object') return next(action);
	console.group(action.type);
	console.log('before -> ', getState());
	next(action);
	console.log('after -> ', getState());
	console.groupEnd();
}

/*let asyncMiddleware = ({getState, dispatch}) => next => action => {
	if (typeof action === 'function')
		return action(dispatch, getState);
	return next(action);
}

let appStore = createStore(rootReducer, applyMiddleware(loggerMiddleware, asyncMiddleware));*/

let appStore = createStore(rootReducer, applyMiddleware(loggerMiddleware, thunk));

export default appStore;


