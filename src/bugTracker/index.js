import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BugStats from './views/BugStats';
import BugSort from './views/BugSort';
import BugEdit from './views/BugEdit';
import BugList from './views/BugList';

import bugActionsCreator from './actions';

class BugTracker extends Component{
	componentDidMount(){
		this.props.load();
	}
	render(){
		let { bugs, addNew, toggle, removeClosed, toggleFilter, filtered} = this.props;
			return(
			<div>
				<BugStats bugs={bugs} />
				<BugSort />
				<BugEdit addNew={addNew} />
				<div>
					<label>Apply Filter :</label>
					<input type="checkbox" checked={filtered} onChange={toggleFilter} />
				</div>
				<BugList {...{bugs, toggle, removeClosed}} />
			</div>
		)
	}
}

/*
function mapStateToBugTrackerProps(storeState){
	let bugs = storeState.bugState;
	return { bugs : bugs };
}

function mapDispatchToBugTrackerProps(dispatch){
	var bugActionDispatchers = bindActionCreators(bugActionsCreator, dispatch);
	return bugActionDispatchers;
}

export default connect(
	mapStateToBugTrackerProps,
	mapDispatchToBugTrackerProps
)(BugTracker);

*/

export default connect(
	({bugState, spinnerState}) => {
		let currentBugs = bugState.bugs,
			filtered = bugState.filtered;
		if (filtered){
			return { filtered, bugs : currentBugs.filter((bug, index) => index % 2 === spinnerState % 2)}
		} else {
			return { filtered, bugs : currentBugs};
		}
	},
	(dispatch) => bindActionCreators(bugActionsCreator, dispatch)
)(BugTracker);

