function sumOfLowestNums(arr) {
	if (arr.length < 4) {
		return "This array is not long enough";
	}
	let smallestNumbers = [];
	while (smallestNumbers.length !== 2) {
		for (let i = 0; i < arr.length; i++) {
			smallerNum = arr[i];
			let numberCompared = 0;
			for (let n = 0; n < arr.length; n++) {
				numberCompared = arr[n];
				smallerNum = numberCompared < smallerNum ? numberCompared : smallerNum;
			}
		}
		arr.splice(arr.indexOf(smallerNum), 1);
		smallestNumbers.push(smallerNum);
	}
	return smallestNumbers[0] + smallestNumbers[1];
}
console.log(
	sumOfLowestNums([
		81, 51, 951, 844, 52, 8777, 224525, 3444, 8114, 984, 22243, 69, 18756,
	])
);
console.log(sumOfLowestNums([5, 6, 8]));
