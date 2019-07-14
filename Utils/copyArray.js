/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */


function copyArray(source, array) {
	let index = -1;
	let length = source.length;

	array || (array = Array(length));

	// 这里判断 array 是否为 undefined，如果是就定义一个与 source 长度相等的数组。
	while (++index < length) {
		array[index] = source[index];
	}

	return array;
}

export default copyArray;
