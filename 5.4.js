function toWeirdCase(string) {
	let words = string.split(" ");
	for (let w in words) {
		let word = words[w];
		for (let i = 0; i < word.length; i += 2) {
			word = word.replace(word[i], word[i].toUpperCase());
		}
		words[w] = word;
	}
	string = words.join(" ");
	return string;
}
console.log(toWeirdCase("weird string case"));
