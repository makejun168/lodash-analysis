// 获得 Unix 纪元 (1 January 1970 00:00:00 UTC) 直到现在的毫秒数。
// 类似于 getTime方法

function now () {
	const date = new Date();
	return date.getTime();
}

// console.log(now());

export default now;
