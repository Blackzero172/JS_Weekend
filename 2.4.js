const uniqueCounter = {};
function findUnique(arr) {
	let string = arr.join("");
	for (let i = 0; i < string.length; i++) {
		let num = string.charAt(i);
		if (uniqueCounter[num]) {
			uniqueCounter[num]++;
		} else {
			uniqueCounter[num] = 1;
		}
	}
	for (let item in uniqueCounter) {
		item = Object.keys(uniqueCounter).find((key) => uniqueCounter[key] === 1);
		return item;
	}
}
console.log(findUnique([1, 1, 1, 5, 1]));
