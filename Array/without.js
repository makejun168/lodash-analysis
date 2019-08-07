function without (arr, ...values) {
	const length = arr.length == null ? null : arr.length;
	const valuesLength = values.length
	const result = [];
	if (!length) {
		return result
	}
	for (let value of array) {
		let valuesIndex = valuesLength;
			while (valuesIndex--) {
				if (values[valuesIndex] === value) {
					continue
				}
			}
			result.push(value)
	}
	return result
}


export default without;
