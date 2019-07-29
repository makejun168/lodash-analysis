// 该方法类似 _.find，
// 区别是该方法返回第一个通过
// predicate 判断为真值的元素的索引值（index），而不是元素本身。
// fromIndex The index to search from
function isObjectValueEqual(a, b) {
    // Of course, we can do it use for in
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    return true;
}


function findIndex(arr, predicate, fromIndex = 0) {
	const length = arr.length === null ? null : arr.length;
	const type = typeof predicate;
	if (length) {
		let resIndex = undefined;
		for (var i = 0; i < arr.length; i++) {
			if (i >= fromIndex) {
				if (type === 'function') {
					console.log(arr[i]);
					if (predicate(arr[i])) {
						resIndex = i;
						break;
					}
				} else if (type === 'object') {
					if (Array.isArray(predicate)) {
						const target = predicate[0];
						if (arr[i][target] === predicate[1]) {
							resIndex = i;
							break;
						}
					} else {
						if (isObjectValueEqual(arr[i], predicate)) {
							resIndex = i;
							break;
						}
					}
				} else if (type === 'string') {
					if (arr[i][predicate]) {
						resIndex = i;
						break;
					}
				}
			}
		}
		return resIndex;
	} else {
		return undefined;
	}
}

export default findIndex;
