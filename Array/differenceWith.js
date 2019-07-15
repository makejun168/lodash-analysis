// 这个方法类似 _.difference
// ，除了它接受一个 comparator （比较器），它调用比较array，values中的元素。 结果值是从第一数组中选择。comparator 调用参数有两个：(arrVal, othVal)。
// Note: 不像 _.pullAllWith 这个方法会返回一个新数组。

/**
 * This method is like `difference` except that it accepts `comparator`
 * which is invoked to compare elements of `array` to `values`. The order and
 * references of result values are determined by the first array. The comparator
 * is invoked with two arguments: (arrVal, othVal).
 *
 * **Note:** Unlike `pullAllWith`, this method returns a new array.
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
 *
 * differenceWith(objects, [{ 'x': 1, 'y': 2 }], isEqual)
 * // => [{ 'x': 2, 'y': 1 }]
 */

function last(array) {
	const length = array == null ? 0 : array.length;
	return length ? array[length - 1] : undefined;
}

function differenceWith(array, ...values) {
	const res = [];
	arr.forEach(item => {
		const computed = iteratee == null ? item : iteratee(item);
		if (values.every(val => computed !== val)) {
			res.push(item);
		}
	});

	return res;
}

export default differenceWith;
