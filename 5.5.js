function abbrevToInit(name) {
	if (name.match(/ /gi).length > 1) {
		return "Name has more than 2 words";
	}
	let words = name.split(" ");
	let initials = [];
	for (let i = 0; i < words.length; i++) {
		initials[i] = words[i][0].toUpperCase();
	}
	initials = initials.join(".");
	return initials;
}
console.log(abbrevToInit("sam harris"));
console.log(abbrevToInit("John Doe"));
console.log(abbrevToInit("Ali Mhajna"));
