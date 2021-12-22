//BMI Calculation

const now = 2021;
const eleazarAge = now - 1991;

console.log(now);
console.log('Eleazar is ' + eleazarAge + ' years old');

//name of subjects
// const mark;
// const john;

//individual masses
const johnMass = 78;
const markMass = 192;

//individual heights
let johnHeight = 1.69;
let markHeight = 1.95;

// johnHeight = 1;
//equations for BMI
const johnBMI = johnMass / (johnHeight * johnHeight);
const markBMI = markMass / (markHeight * markHeight);

//display data in console

console.log("Mark's BMI is " + markBMI);
console.log(`John BMI is ${johnBMI}`);

if (markBMI > johnBMI) {
	console.log(`Mark has a higher BMI than John`);
} else {
	console.log(`John has a higher BMI than Mark`);
}

//Age Verification Activity

//user birth Year

let userAnswer = 2000;
// let userAnswer = prompt(`What year were you born?`);

console.log(userAnswer);
let userBirthYear = 1800;
userBirthYear = userAnswer;

//current Year
const currentYear = 2021;

//user Age
const userAge = currentYear - userBirthYear;
console.log(userAge);
console.log(typeof userAge);

if (userAge >= 21) {
	console.log(`you can drive! Congrata`);
} else {
	console.log(`you are not old enough yet`);
}

const nextYear = '2022';
console.log(typeof nextYear);

console.log(Number(nextYear));
console.log(String(nextYear));

//truthy & falsy

let knicks;

const stam = 'love';

if (stam) {
	console.log('truth - defined');
} else {
	console.log('false');
}

if (knicks) {
	console.log('knicks is found');
} else {
	console.log('bmm');
}

switch (stam) {
	case 'hate':
		console.log(`too much hate`);
		break;

	case `love`:
		console.log(`yes to love`);
		break;
}

let samNumb = '1990';

console.log(samNumb);
console.log(Number(samNumb));

let warriors = true;
let lakers = false;

console.log(warriors && lakers);
console.log(warriors || lakers);

console.log(`--------------`);

//winner winner

let dolphins = [96, 108, 89];
let koalas = [88, 91, 110];
let dolphinsAvg = 0;
let koalasAvg = 0;

dolphins = [97, 112, 101];
koalas = [109, 95, 106];

for (let i = 0; i < dolphins.length; i++) {
	console.log(dolphins[i]);
	dolphinsAvg = (dolphinsAvg + dolphins[i]) / 3;
	console.log(dolphinsAvg);
}

console.log(`--------------------------`);

for (let i = 0; i < koalas.length; i++) {
	console.log(koalas[i]);
	koalasAvg = (koalasAvg + koalas[i]) / 3;
	console.log(koalasAvg);
}

if (dolphinsAvg < koalasAvg) {
	console.log(
		`dolphins avg of ${dolphinsAvg} is smaller than Koalas of ${koalasAvg}`
	);
} else if (dolphinsAvg === koalasAvg) {
	console.log(
		`dolphins' avg ${dolphinsAvg} is equal to koala's of ${koalasAvg}`
	);
} else {
	console.log(
		`dolphins' avg ${dolphinsAvg} is larger than koala's of ${koalasAvg}`
	);
}

//Bonus-one

let toWin = 100;

if (dolphinsAvg >= toWin || koalasAvg >= toWin) {
	console.log(`one of the team has scored more than 100`);

	if (dolphinsAvg < koalasAvg) {
		console.log(
			`dolphins avg of ${dolphinsAvg} is smaller than Koalas of ${koalasAvg}`
		);
	} else if (dolphinsAvg === koalasAvg) {
		console.log(
			`dolphins' avg ${dolphinsAvg} is equal to koala's of ${koalasAvg}`
		);
	} else {
		console.log(
			`dolphins' avg ${dolphinsAvg} is larger than koala's of ${koalasAvg}`
		);
	}
} else {
	console.log(`neither are at 100`);
}

//swtich statment

let day = 'monday';

switch (day) {
	case `monday`:
		console.log(`it's monday`);
		break;
	case `tuesday`:
		console.log(`it's tuesday`);
		break;
	case `wednesday`:
		console.log(`it's wed`);
		break;
}

//tip calculator
console.log(15 / 100);

//two tip amounts we will use
tipAmountOne = 0.15;
tipAmountTwo = 0.2;

let bills = [275, 40, 430];

for (let i = 0; i < bills.length; i++) {
	console.log(bills[i]);

	let amountToTip = bills[i] * tipAmountOne;
	console.log(`the tip is ${amountToTip}`);
}

let currBills = Number(prompt(`How much did you pay?`));
let tip;
console.log(`${currBills} is a ${typeof currBills}`);

if (currBills >= 50 && currBills <= 300) {
	tip = currBills * tipAmountOne;
	console.log(`the tip to pay is ${tip}`);
} else {
	tip = currBills * tipAmountTwo;
	console.log(tip);
}

// var age = 26;
// var beverage = (age >= 21) ? "Beer" : "Juice";
// console.log(beverage); // "Beer"

let twoTip =
	currBills >= 50 && currBills <= 300
		? currBills * tipAmountOne
		: currBills * tipAmountTwo;

console.log(`the tio is ${twoTip}`);

//// nfl sunday

let possibleWins = [7, 14, 21];

let winningScore = 3;

for (let i = 0; i <= possibleWins.length; i++) {
	console.log(`current item is ${possibleWins[i]}`);
	winningScore += possibleWins[i];
	console.log(`the winning score is ${winningScore}`);

	if (winningScore >= 21) {
		console.log(`we have a winner`);
	} else {
		console.log(`not at 21 yet`);
	}
}
