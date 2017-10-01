export const adjustOnResize = (editor) => {
	window.addEventListener('resize', (event) => {
		editor.layout();
	})
}