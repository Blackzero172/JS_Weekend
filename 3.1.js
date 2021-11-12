function growthOfPop(basePop, percent, inPop, desiredPop) {
	let yearsNeeded = 0;
	let currentPop = basePop;
	percent = percent > 1 ? percent / 100 : percent;
	while (currentPop < desiredPop) {
		currentPop += Math.round(basePop * percent + inPop);
		yearsNeeded++;
	}
	return `You Need ${yearsNeeded} Years to get from ${basePop} to ${desiredPop} or more`;
}
console.log(growthOfPop(1000, 0.02, 5, 1200));
console.log(growthOfPop(800, 2, 50, 1500));
console.log(growthOfPop(1000, 0.1, 200, 1400));
console.log(growthOfPop(200, 10, 500, 10000));
