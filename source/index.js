import MonacoEditor from 'react-monaco-editor'
import ReactDOM from 'react-dom'
import React from 'react'
import { observer, Provider, inject } from 'mobx-react'

import EditorStore from '@stores/EditorStore'
import { Navbar } from '@comps/Navbar'
import './styles/index.css'

const App = inject('EditorStore')(observer((props) => {
	const { EditorStore } = props
	return [
			<Navbar key='navbar'/>,
			<div styleName='editor' key='editor'>
				<MonacoEditor
					theme='vs-dark'
					value={EditorStore.value}
					onChange={EditorStore.setValue}
					language={EditorStore.language}
					options={EditorStore.editorOptions}
					editorDidMount={EditorStore.setEditor}
				/>
			</div>
	]
}))

ReactDOM.render(
	<Provider EditorStore={new EditorStore}>
		<App />
	</Provider>,
  document.querySelector('mount')
)