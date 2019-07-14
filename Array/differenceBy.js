// differenceBy 这个方法类似 _.difference ，
// 除了它接受一个 iteratee （迭代器），
// 调用 array 和 values 中的每个元素以产生比较的标准。
// 结果值是从第一数组中选择。iteratee 会调用一个参数：(value)
// （首先使用迭代器分别迭代 array 和 values中的每个元素，返回的值作为比较值）。


function differenceBy(arr, values, iteratee) {
	const length = arr !== null ? arr.length : 0;
	const valLen = values !== null ? values.length : 0;
	if (!length || !valLen) {
		return [];
	}
	if (iteratee) {
		values = values.map(val => {
			return iteratee(val);
		});
		console.log(values);
	}
	const res = [];
	arr.forEach(item => {
		const computed = iteratee == null ? item : iteratee(item);
		if (values.every(val => computed !== val)) {
			res.push(item);
		}
	});

	return res;
}

differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor);


export default differenceBy;
