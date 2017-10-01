import React from 'react'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'

import './index.css'

const Navbar = (props) => {
	const { EditorStore } = props
	return (
		<nav class='navbar'>
			<p>flatiron</p>
			<button onClick={props.EditorStore.flattenValue}>flatten</button>
			<button onClick={props.EditorStore.formatValue}>format</button>
			<select value={EditorStore.language} onChange={EditorStore.setLanguage}>
				<option>javascript</option>
				<option>json</option>
			</select>
		</nav>
	)
}

export default inject(
	'EditorStore'
)(observer(Navbar))