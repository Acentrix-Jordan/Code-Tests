function solution(A) {
	let oddNumber = 0;
	let sortedArray = A.sort();
	for (let count = 0; count < sortedArray.length; count += 2) {
		if (sortedArray[count] !== sortedArray[count + 1]) {
			oddNumber = sortedArray[count];
			break;
		}
	}
	return oddNumber;
}
