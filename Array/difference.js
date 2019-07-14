// 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。
// （即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）
// 该方法使用 SameValueZero做相等比较。结果值的顺序是由第一个数组中的顺序确定。

function difference(arr, values) {
	const length = arr !== null ? arr.length : 0;
	const valLen = values !== null ? values.length : 0;
	if (!length || !valLen) {
		return [];
	}
	const res = [];
	arr.forEach(item => {
		if (values.every(val => item !== val)) {
			res.push(item);
		}
	});

	return res;
}

difference([3, 2, 1], [4, 2]);


export default difference;
