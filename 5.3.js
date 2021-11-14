function toCamelCase(string) {
	for (let i = 0; i < string.length; i++) {
		let regEx = /[-_]/;
		if (regEx.test(string[i])) {
			string = string.replace(string[i + 1], string[i + 1].toUpperCase());
			string = string.replace(regEx, "");
		}
	}
	return string;
}
console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("the_stealth_warrior"));
