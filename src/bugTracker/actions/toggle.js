import * as bugApi from '../services/bugApi';

export function toggle(bugToToggle){
	return async function(dispatch, getState){
		let toggledBugData = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
		let toggledBug = await bugApi.save(toggledBugData);
		let action = { type : 'REPLACE', payload : toggledBug };
		dispatch(action);
	}
}