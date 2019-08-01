// 获取数组array中除了最后一个元素之外的所有元素（去除数组array中的最后一个元素）。
// _.initial([1, 2, 3]);
// => [1, 2]

function initial(arr) {
	const { length } = arr;
	return length ? arr.slice(0, -1) : undefined;
}

export default initial;
