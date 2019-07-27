function join(arr, separator = ',') {
	const length = arr.length === 0 ? null : arr.length;
	if (length) {
		var str = '';
		for (var i = 0;i < arr.length; i++) {
			str += arr[i] + separator;
		}
		return str
	} else {
		return undefined;
	}
}

export default join;
