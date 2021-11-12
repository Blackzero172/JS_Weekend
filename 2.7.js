function basicMath(operation, number1, number2) {
	operation = operation.toString();
	switch (operation) {
		case "+":
			return number1 + number2;
		case "-":
			return number1 - number2;
		case "/":
			return number1 / number2;
		case "*":
			return number1 * number2;
	}
}
console.log(basicMath("+", 10, 5));
console.log(basicMath("-", 10, 5));
console.log(basicMath("*", 10, 5));
console.log(basicMath("/", 10, 5));
