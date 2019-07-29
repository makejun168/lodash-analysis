// 使用 value 值来填充（替换） array，
// 从start位置开始, 到end位置结束（但不包含end位置）。

// var array = [1, 2, 3];

// _.fill(array, 'a');
// console.log(array);
// // => ['a', 'a', 'a']

// _.fill(Array(3), 2);
// // => [2, 2, 2]

// _.fill([4, 6, 8, 10], '*', 1, 3);
// // => [4, '*', '*', 10]

function fill(arr, predicate, startIndex = 0, endIndex = arr.length) {
	let targetArr = arr;
	const length = targetArr.length == null ? null : targetArr.length;
	if (predicate) {
		if (length) {
			for (var i = 0; i < targetArr.length; i++) {
				if (i >= startIndex && i< endIndex) {
					targetArr[i] = predicate;
				}
			}
			return targetArr;
		} else {
			return undefined;
		}
	} else {
		return targetArr;
	}
}

export default fill;
