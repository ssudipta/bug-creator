import React from 'react';

let BugStats =	function({ bugs }){
	let closedCount = bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	return(
		<section className="stats">
			<span className="span closed">{closedCount}</span>
			<span> / </span>
			<span>{bugs.length}</span>
		</section>
	)
};
export default BugStats;