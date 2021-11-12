function findNextSquare(num) {
	if (Number.isInteger(Math.sqrt(num))) {
		num++;
		while (!Number.isInteger(Math.sqrt(num))) {
			num++;
		}
		return `${num} is the next perfect square`;
	} else {
		return -1;
	}
}
console.log(findNextSquare(121));
