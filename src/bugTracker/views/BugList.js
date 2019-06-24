import React, { Component } from 'react';
import BugItem from './BugItem';

class BugList extends Component{
	render(){
		let { bugs, toggle, removeClosed } = this.props,
			listItems = bugs.map((bug, index) => (
				<BugItem bug={bug} key={index} toggle={toggle}/>
			));
		return(
			<section className="list">
				<ol>
					{listItems}
				</ol>
				<input type="button" value="Remove Closed" onClick={ () => removeClosed() }/>
			</section>
		)
	}
}

export default BugList;