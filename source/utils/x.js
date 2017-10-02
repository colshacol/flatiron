
// const formatEditorValue = (editor) => {
// 	editor.executeEdits(
// 		'format',
// 		[
// 			{
// 				range: getCompleteRange(editor),
// 				text: beautify(
// 					editor.getValue(),
// 					{ /* beautify options */ }
// 				)
// 			}
// 		]
// 	)
// }

// const explicitlySetValue = (editor, value) => {
// 	editor.executeEdits(
// 		'set',
// 		[
// 			{
// 				range: getCompleteRange(editor),
// 				text: value
// 			}
// 		]
// 	)
// }

// const flattenEditorValue = (editor) => {
// 	editor.executeEdits(
// 		'flatten',
// 		[
// 			{ range: getCompleteRange(editor),
// 				text: beautify(
// 					JSON.stringify(
// 						flatten(
// 							JSON.parse(editor.getValue())
// 						)
// 					),
// 					{ /* beautify options */ }
// 				)
// 			}
// 		]
// 	)
// }

// require(["vs/editor/editor.main"], () => {

// 	monaco.editor.defineTheme('myCustomTheme', {
// 		base: 'vs-dark',
// 		inherit: true,
// 		rules: [
// 			{ token: 'comment', foreground: 'b3b3ff', fontStyle: 'italic underline' },
// 			{ token: 'comment.js', foreground: 'b3b3ff', fontStyle: 'bold underline' },
// 			{ token: 'comment.css', foreground: '0000ff' }
// 		]
// 	});

// 	let editor = monaco.editor.create(document.getElementById('editor'), {
// 		theme: 'myCustomTheme',
// 		language: 'json',
// 		value: [`\
// {
// "street": "Douglas Extension",
// "suite": "Suite 847",
// "city": "McKenziehaven",
// "zipcode": "59590-4157",
// "geo": {
// "lat": "-68.6102",
// "lng": "-47.0653"
// }
// }
// `].join('\n'),
// 		language: 'json'
// 	});

// 	// setTimeout(() => {
// 	// 	editor.setValue(sampleJSON)
// 	// 	console.log('......----')
// 	// }, 1200);

// 	setTimeout(() => {

// 		editor.executeEdits('replaceeng', [
// 			{ range: getCompleteRange(editor), text: sampleJSON }
// 		])


// 	}, 1000);
// });

// sampleJSON = JSON.stringify(flatten(JSON.parse()))