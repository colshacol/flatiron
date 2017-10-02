import { observable, action } from 'mobx'
import beautify from 'js-beautify'
import flatten from 'flat'

import { adjustOnResize } from '@utils/editor'

export default class EditorStore {
	@observable allowLanguageSelect: boolean = false
	@observable formattingOptions: Object = {}
	@observable language: string = 'json'
	@observable value: string = '{\n\t"foo": [0, 1, "dog", { "bar": "baz" }]\n}'

	@observable editorOptions = {
		selectOnLineNumbers: true
	}

	editor = {}
	monaco = {}

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

	formatValue = () => {
		console.log(111)
		this.setValue(
			beautify(
				this.value,
				this.formattingOptions
			)
		)
	}

	flattenValue = () => {
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
		applyFlattenCommand(
			this.flattenValue,
			editor,
			monaco
		)
		this.editor = editor
		this.monaco = monaco
		editor.focus()
	}
}

const applyFlattenCommand = (fn, editor, monaco) => {
	// editor.addCommand(monaco.KeyCode.F9, function() {
	// 	alert('F9 pressed!');
	// });
	editor.addAction({
		// An unique identifier of the contributed action.
		id: '_flatten',

		// A label of the action that will be presented to the user.
		label: 'Flatten JSON',

		// An optional array of keybindings for the action.
		// keybindings: [
		// 	monaco.KeyMod.CtrlCmd | monaco.KeyCode.F10,
		// 	// chord
		// 	monaco.KeyMod.chord(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_K, monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_M)
		// ],

		// A precondition for this action.
		precondition: null,

		// A rule to evaluate on top of the precondition in order to dispatch the keybindings.
		keybindingContext: null,

		contextMenuGroupId: 'navigation',

		contextMenuOrder: 1.5,

		// Method that will be executed when the action is triggered.
		// @param editor The editor instance is passed in as a convinience
		run(editor) {
			fn()
		}
	});
}




