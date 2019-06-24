let defaultState = {
	filtered : false,
	bugs : []
};

function bugsReducer(currentState = defaultState, action){
	if (action.type === 'LOAD'){
		let newState = { ...currentState, bugs : action.payload};
		return newState;
	}
	if (action.type === 'ADD_NEW'){
		let newState = { ...currentState, bugs : [...currentState.bugs, action.payload]}
		return newState;
	}
	if (action.type === 'REPLACE'){
		let bugToReplace = action.payload;
		let newState = { ...currentState, bugs : currentState.bugs.map(bug => bug.id === bugToReplace.id ? bugToReplace : bug)} ;
		return newState;
	}
	if (action.type === 'REMOVE_ALL'){
		let bugsToRemove = action.payload;
		let newState = {...currentState, bugs : currentState.bugs.filter(bug => bugsToRemove.indexOf(bug) === -1)};
		return newState;
	}
	if (action.type === 'REMOVE'){
		let bugToRemove = action.payload;
		let newState = {...currentState, bugs : currentState.bugs.filter(bug => bug.id !== bugToRemove.id)};
		return newState;
	}
	if (action.type === 'TOGGLE_FILTER'){
		let newState = { ...currentState , filtered : !currentState.filtered };
		return newState;
	}
	return currentState;
}
export default bugsReducer;