// 转换整个string字符串的字符为大写，类似 String#toUpperCase.

const toUpper = (str) => {
	if (!str) {
		return ''
	}
	return `${str}`.toLocaleUpperCase()
}

console.log(toUpper('123,4123uuu'));
// => '123,4123UUU'

console.log(toUpper())
