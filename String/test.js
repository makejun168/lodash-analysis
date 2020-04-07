let str = 'Consectetur pariatur nostrud incididunt ad magna non fugiat esse.'

const hasUnicodeWord = RegExp.prototype.test.bind(
	/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/
);

const asciiWords = RegExp.prototype.exec.bind(
    /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g
);

asciiWords(str);

console.log(asciiWords(str))
