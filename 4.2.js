function tribonacciSequence(startingSequence, indexN) {
	if (!startingSequence.includes(0)) {
		return "Starting Sequence must include a zero";
	}
	let tribseq = [...startingSequence];
	for (let i = 0; i < indexN - 1; i++) {
		tribseq[i + 3] = tribseq[i] + tribseq[i + 1] + tribseq[i + 2];
	}
	return tribseq;
}
console.log(tribonacciSequence([0, 0, 1], 10));
