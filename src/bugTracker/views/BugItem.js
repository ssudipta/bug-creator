import React from 'react';

let BugItem = ({bug, toggle}) => (
	<li>
		<span className={'bugname ' + (bug.isClosed ? 'closed' : '')} onClick={() => toggle(bug)}>
			{JSON.stringify(bug)}
		</span>
		<div className="datetime">[Created At]</div>
	</li>
);

export default BugItem;