function centuryFromYear(year) {
	let century = Math.floor(year / 100) + 1;
	return century;
}
console.log(centuryFromYear(2220));
