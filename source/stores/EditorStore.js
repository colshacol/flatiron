import { observable, action } from 'mobx'
import beautify from 'js-beautify'
import flatten from 'flat'

import { adjustOnResize } from '@utils/editor'

export default class EditorStore {
	@observable formattingOptions: Object = {}
	@observable language: string = 'json'
	@observable value: string = ''

	@observable editorOptions = {
		selectOnLineNumbers: true
	}

	defaultValue = '// your code here'
	editor = {}
	monaco = {}

	get value() {
		return (this.value || this.defaultValue)
	}

	get language() {
		return this.language
	}

	@action setFormattingOptions = (options) => {
		this.formattingOptions = {
			...this.formattingOptions,
			...options
		}
	}

	@action setLanguage = (event, language) => {
		this.language = event.target.value
	}

	@action setValue = (value) => {
		this.value = value
	}

	@action formatValue = () => {
		console.log(111)
		this.setValue(
			beautify(
				this.value,
				this.formattingOptions
			)
		)
	}

	@action flattenValue = () => {
		console.log(222)
		this.setValue(
			beautify(
				JSON.stringify(
					flatten(
						JSON.parse(this.value)
					)
				),
				this.formattingOptions
			)
		)
	}

	setEditor = (editor, monaco) => {
		adjustOnResize(editor)
		this.editor = editor
		this.monaco = monaco
		editor.focus()
	}
}