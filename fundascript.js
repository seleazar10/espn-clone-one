'use strict';

console.log(`script linked`);

let colum = `jameson`;

if (colum) {
	console.log(`variable is defined`);
} else {
	console.log(`not defined`);
}

//function with two arguments
function foodprocess(apples, oranges) {
	console.log(`food processor ${apples} and ${oranges}`);

	let juice = `juice with ${apples} apples and ${oranges} oranges`;
	console.log(juice);
	return juice;
}

const applejuice = foodprocess(5, 0);
console.log(applejuice);

const appleOrangeJuice = foodprocess(2, 3);

function tellTime() {
	let now = new Date();
	let theHr = now.getHours();
	let theMin = now.getMinutes();
	let theSec = now.getSeconds();

	let currtime = `${theHr} : ${theMin} : ${theSec}`;
	console.log(currtime);
	return currtime;
}

tellTime();

// Age Calculator

function calcAge(birthYear) {
	let userAge = 2021 - birthYear;
	console.log(userAge);
	return userAge;
}

let stamAge = calcAge(1991);
console.log(`my age is ${stamAge}`);

const calcAge2 = function (birthYear) {
	return 2021 - birthYear;
};

let luAge = calcAge2(1990);
console.log(luAge);

///
function typeDrive(car) {
	let userCarPref = `My favorite car is ${car}`;
	return userCarPref;
}

console.log(typeDrive('Honda'));

let carType = (car) => {
	let jim = `My fave is ${car}`;
	return jim;
};

console.log(carType('Toyota'));

//winner check

let justina = [44, 23, 71];
let christin = [65, 54, 49];
let justinaAvg;
let christinAvg;

justina = [23, 34, 10];
christin = [23, 34, 400];

let findAvg = (arr) => {
	let arrTotal = 0;
	let avg;

	for (let i = 0; i < arr.length; i++) {
		arrTotal += arr[i];
		avg = arrTotal / arr.length;
	}
	return avg;
};

justinaAvg = findAvg(justina);
christinAvg = findAvg(christin);

console.log(`the avg for justina is ${justinaAvg}`);

console.log(`the avg for christin is ${christinAvg}`);

let checkWinner = (firstScore, secondScore, firstName, secondName) => {
	if (firstScore >= secondScore * 2 || secondScore >= firstScore * 2) {
		console.log(`we have a winner`);

		if (firstScore > secondScore) {
			console.log(
				`${firstName} is the winner with a score of ${firstScore} vs. ${secondScore}`
			);
		} else if (firstScore < secondScore) {
			console.log(
				`${secondName} is the winner with a score of ${secondScore} vs. ${firstScore}`
			);
		}
	} else {
		console.log(`we have not doubled yet, no winner`);
	}
};

// console.log(justinaAvg[0], christinAvg[0]);

checkWinner(justinaAvg, christinAvg, `Justina`, `Christin`);

/////Arrays

let friends = ['john', 'wes', 'cj', 'ashley'];
console.log(friends);

let addNewLast = friends.push('May');
console.log(friends);

let removeLast = friends.pop();
console.log(friends);

let addNewFirst = friends.unshift('Luc');
console.log(friends);

let removeFirst = friends.shift();
console.log(friends);
