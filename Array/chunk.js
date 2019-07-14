/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */


// 官网源码参考

// function chunk(array, size) {
// 	size = Math.max(size, 0);
// 	const length = array == null ? 0 : array.length;
// 	if (!length || size < 1) {
// 		return [];
// 	}
// 	let index = 0;
// 	let resIndex = 0;
// 	const result = new Array(Math.ceil(length / size));

// 	while (index < length) {
// 		result[resIndex++] = slice(array, index, (index += size));
// 	}
// 	return result;
// }


function chunk(array, size) {
	// 将size值保证为数字
	// 前置的逻辑判断条件一致
	size = Math.max(size);
	const length = array == null ? 0 : array.length;
	if (!length || size < 1) {
		return [];
	}
	// 新建一个数组的长度为 数组长度 数组长度length / size 向上取整
	const result = new Array(Math.ceil(length / size));
	for (let i = 0; i < length; i+=size) {
		result[i] = array.slice(i, i + size);
	}

	// 去除数组当中的 空的数组内容
	const res = result.filter(itemArr => {
		return itemArr.length > 0;
	});
	return res;
}

chunk(['a', 'b', 'c', 'd'], 3);


export default chunk;
