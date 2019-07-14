/**
 * Creates a new array concatenating `array` with any additional arrays
 * and/or values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to concatenate.
 * @param {...*} [values] The values to concatenate.
 * @returns {Array} Returns the new concatenated array.
 * @example
 *
 * var array = [1];
 * var other = _.concat(array, 2, [3], [[4]]);
 *
 * console.log(other);
 * // => [1, 2, 3, [4]]
 *
 * console.log(array);
 * // => [1]
 */

import copyArray from '../Utils/copyArray';
import baseFlatten from '../Utils/baseFlatten';
import arrayPush from '../Utils/arrayPush';

function concat() {
	var length = arguments.length;
	if (!length) {
		return [];
	}
	var args = Array(length - 1),
		array = arguments[0],
		index = length;

	while (index--) {
		args[index - 1] = arguments[index];
	}
	return arrayPush(
		Array.isArray(array) ? copyArray(array) : [array],
		baseFlatten(args, 1)
	);
}

var array = [1];
var other = concat(array, 2, [3], [[4]]);
console.log(other);

export default concat;
