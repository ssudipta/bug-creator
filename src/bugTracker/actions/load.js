import * as bugApi from '../services/bugApi';

export function load(){
	/*return function(dispatch, getState){
		bugApi.
			getAll()
			.then(bugs => {
				let action = { type : 'LOAD', payload : bugs };
				dispatch(action);		
			})
	}*/
	return async function(dispatch, getState){
		let bugs = await bugApi.getAll()
		let action = { type : 'LOAD', payload : bugs };
		dispatch(action);		
	}
}