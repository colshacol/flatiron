export const adjustOnWindowResize = (editor) => {
	window.addEventListener('resize', (event) => {
		editor.layout();
	})
}