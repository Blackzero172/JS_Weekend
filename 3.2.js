function busStopCalculator(busStops) {
	let peopleLeft = 0;
	for (let i in busStops) {
		peopleLeft += busStops[i][0];
		peopleLeft -= busStops[i][1];
	}

	peopleLeft = peopleLeft < 0 ? 0 : peopleLeft;
	return peopleLeft;
}
console.log(
	busStopCalculator([
		[10, 0],
		[8, 5],
		[15, 6],
		[14, 1],
		[0, 5],
	])
);
