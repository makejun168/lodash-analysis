// _.indexOf([1, 2, 1, 2], 2);
// => 1

// Search from the `fromIndex`.
// _.indexOf([1, 2, 1, 2], 2, 2);
// => 3

/**
 * A specialized version of `indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */

// example
// function strictIndexOf(array, value, fromIndex) {
// 	let index = fromIndex - 1
// 	const { length } = array

// 	while (++index < length) {
// 		if (array[index] === value) {
// 			return index
// 		}
// 	}
// 	return -1
// }


function indexOf (arr, value, fromIndex = 0) {
	const length = arr.length === null ? null : arr.length;
	if (length) {
		let resIndex = -1;
		for (var i = 0; i < length; i++) {
			if (i >= fromIndex) {
				if (arr[i] === value) {
					res = i;
					break
				}
			}
		}
		return resIndex;
	} else {
		return undefined;
	}
}

export default indexOf;
