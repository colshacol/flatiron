const positiveValueMatch = /(string|boolean|object|function)/

let i = 0
const flatten = (data = {}) => {
	const dataType = typeof(data)

	if (dataType === 'string') {
		console.log(i++, 'string', data)
		return flattenFromString(data)
	} else if (dataType === 'object') {
		console.log(i++, 'object', data)
		return flattenFromObject(data)
	}

	console.log(i++, 'other')
	return flattenFromOther(data)
}

const flattenFromString = (data) => {
	console.log('flattenFromString', typeof data)
	try {
		const object = JSON.parse(data)
		return flattenFromObject(object)
	} catch(error) {
		console.log('Failed to JSON.parse data.', error)
	} finally {
		console.log('returning ', data)
		return data
	}
}

const flattenFromOther = (data) => {
	return data
}

const flattenFromObject = (data) => {
	const dataIsArray = Array.isArray(data)
	if (dataIsArray) {
		return flattenFromArray(data)
	}

	return Object.entries(data).reduce((final, [key, value]) => {
		final[key] = flatten(value)
		return final
	}, {})
}

const flattenFromArray = (data) => {
	return data.map(item => {
		return flatten(item)
	})
}





export default flatten