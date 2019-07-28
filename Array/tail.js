/**
 * Gets all but the first element of `array`.
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * tail([1, 2, 3])
 * // => [2, 3]
 */

// 源码解法
// const [, ...result] = array
// return result

function tail(arr) {
	const length = arr.length === 0 ? null : arr.length;
	return length ? arr.splice(1, arr.length) : [];
}

export default tail;
