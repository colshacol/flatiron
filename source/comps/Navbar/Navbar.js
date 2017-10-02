import React from 'react'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'

import './styles/Navbar.css'

const Navbar = (props) => {
	const { EditorStore } = props
	return (
		<nav styleName='Navbar'>
			<div styleName='logo-box'>
				<p styleName='logo'>flatiron</p>
				<p styleName='slogan'>JSON FORMATTER/FLATTENER</p>
				<a href='https://git.io/vdnh5' styleName='git-link'>@github</a>
			</div>
			<div styleName='button-box'>
				<button onClick={props.EditorStore.flattenValue}>flatten</button>
				<button onClick={props.EditorStore.formatValue}>format</button>
				<If condition={EditorStore.allowLanguageSelect}>
					<select value={EditorStore.language} onChange={EditorStore.setLanguage}>
						<For each='language' of={EditorStore.languages} index='index'>
							<option>{language}</option>
						</For>
					</select>
				</If>
			</div>
		</nav>
	)
}

export default inject(
	'EditorStore'
)(observer(Navbar))
