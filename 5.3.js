function toCamelCase(string) {
	for (let i = 0; i < string.length; i++) {
		if (string[i] === "-") {
			string = string.replace(string[i + 1], string[i + 1].toUpperCase());
			string = string.replace("-", "");
		}
	}
	return string;
}
console.log(toCamelCase("the-stealth-warrior"));
