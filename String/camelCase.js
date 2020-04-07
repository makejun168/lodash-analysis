/**
 *
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * camelCase('Foo Bar')
 * // => 'fooBar'
 *
 * camelCase('--foo-bar--')
 * // => 'fooBar'
 *
 * camelCase('__FOO_BAR__')
 * // => 'fooBar'
 */

const camelCase = (string) => (
	words(`${string}`.replace(/['\u2019]/g, '')).reduce((result, word, index) => {
		word = word.toLowerCase();
		console.log('result', result)
		console.log('word', word)
		return result + word
	}, '')
)

camelCase("--foo-bar--")

// console.log(camelCase("--foo-bar--"));

// export default camelCase;
