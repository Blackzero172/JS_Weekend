function longestWords(string) {
	let words = string.split(" ");
	let longestWord;
	for (let word of words) {
		if (longestWord === undefined || longestWord < word.length) {
			longestWord = word.length;
		}
	}
	return longestWord;
}
console.log(longestWords("This is a string"));
