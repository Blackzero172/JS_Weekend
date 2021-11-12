function convertFromBinary(arr) {
	let binaryCode = arr.join("");
	return parseInt(binaryCode, 2);
}
console.log(convertFromBinary([0, 0, 1, 1, 1, 0, 1, 1, 0]));
