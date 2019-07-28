/**
 * Gets the first element of `array`.
 *
 * @since 0.1.0
 * @alias first
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @see last
 * @example
 *
 * head([1, 2, 3])
 * // => 1
 *
 * head([])
 * // => undefined
 */

// arr[0]

function head(arr) {
	const length = arr.length === 0 ? null : arr.length;
	return length ? [...arr.splice(0, 1)] : undefined;
}

export default head;
