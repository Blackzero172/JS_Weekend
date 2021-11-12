function fibonnaciSeq(zeroStart, indexN) {
	let fibSeq = [0, 1];
	fibSeq[0] = zeroStart === true ? (fibSeq[0] = 0) : (fibSeq[0] = 1);
	fibSeq[1] = 1;
	for (let i = 0; i < indexN - 1; i++) {
		fibSeq[i + 2] = fibSeq[i] + fibSeq[i + 1];
	}
	return fibSeq;
}
console.log(fibonnaciSeq(false, 10));
console.log(fibonnaciSeq(true, 15));
console.log(fibonnaciSeq(false, 20));
