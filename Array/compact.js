/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * compact([0, 1, false, 2, '', 3])
 * // => [1, 2, 3]
 */

// 创建一个新数组，包含原数组中所有的非假值元素。例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。

// 源码参考
// function compact(array) {
// 	let resIndex = 0;
// 	const result = [];

// 	if (array == null) {
// 		return result;
// 	}

// 	for (const value of array) {
// 		if (value) {
// 			result[resIndex++] = value;
// 		}
// 	}

// 	return result;
// }

function compact(array) {
	const length = array == null ? 0 : array.length;
	if (!length) {
		return [];
	}
	// array.filter 有兼容性问题
	const resArr = array.filter(item => {
		if (item !== false && item !== null && item !== 0 && item !== void(0) && item !== '') {
			return item;
		}
	});
	return resArr;
}

compact([0, 1, false, 2, '', 3]);


export default compact;
