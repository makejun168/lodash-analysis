function steamroller(arr) {
	// 1.创建一个新数组，保存扁平后的数据
	var newArr = [];
	// 2.for循环原数组
	for (var i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			// 如果是数组，调用steamroller 将其扁平化
			// 然后在push 到newArr中
			newArr.push.apply(newArr, steamroller(arr[i]));
		} else {
			// 反之 不是数组，直接push进newArr
			newArr.push(arr[i]);
		}
	}
	// 3.返回新的数组
	return newArr;
}

export default steamroller;
