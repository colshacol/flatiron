// import 'regenerator-runtime'
// // import '@utilities/fetch'
// import 'babel-polyfill'
// import './styles/index.css'

// const editor = ace.edit("editor");
import './styles/index.css'

document.querySelector('.expander').addEventListener('click', e => {
	console.log('xxx')
	document.querySelector('#navbar').classList.toggle('skinny')
	document.querySelector('#editor').classList.toggle('fat')
})






// const flask = new CodeFlask

// console.log('...?')
// flask.run('#editor', {
// 	language: 'json',
// 	lineNumbers: true
// })

// flask.onUpdate(function(code) {
// 	console.log("User's input code: " + code)
// })

// flask.update(`
// {
// 	"id": 1,
// 	"name": "Leanne Graham",
// 	"username": "Bret",
// 	"email": "Sincere@april.biz",
// 	"address": {
// 		"street": "Kulas Light",
// 		"suite": "Apt. 556",
// 		"city": "Gwenborough",
// 		"zipcode": "92998-3874",
// 		"geo": {
// 			"lat": "-37.3159",
// 			"lng": "81.1496"
// 		}
// 	},
// 	"phone": "1-770-736-8031 x56442",
// 	"website": "hildegard.org",
// 	"company": {
// 		"name": "Romaguera-Crona",
// 		"catchPhrase": "Multi-layered client-server neural-net",
// 		"bs": "harness real-time e-markets"
// 	}
// }
// `.trim())