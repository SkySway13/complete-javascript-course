/* var firstName = 'John'
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

 */

/* var firstName = 'John';
var age = 28;
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;
var ms
function CheckMarrigeStatus() {
    if (isMarried == false) {
        ms = 'No'
    }
    else {
        ms = 'Yes'
    }
};

CheckMarrigeStatus();

console.log(firstName + ' is a ' + age + ' years old '
    + job + '. Is he married? ' + ms);

age = 'Zero';
job = 'Who knows'; */

/* var lastName = prompt('Test');
console.log(lastName); */

/* 
var currentYear = 2020;
var birthYear = currentYear - 28;
console.log(birthYear);

var a = 10;
var b = 200;

var isLarger = a > b;

console.log(isLarger);
console.log(typeof a);
console.log(typeof isLarger);
console.log(typeof 1);
console.log(typeof 'test')
var x;
console.log(typeof x);

var adultAge = 18;

var isAdult = currentYear = birthYear >= adultAge;
console.log(isAdult);

var avg = (a + b) / 2;
console.log(avg);

var x1, y1;
x1 = y1 =  (3 + 5) * 4 - 6;

x1 += 10;
x1 *= 2;
x1++;
console.log(x1); */

// CC1

var m1, m2, h1, h2, bmi1, bmi2;

m1 = prompt('P1`s weight(in kg)');
h1 = prompt('P1`s height(in meter)');

m2 = prompt('P2`s Weight(in kg)');
h2 = prompt('P2`s height(in meter)');

bmi1 = m1/(h1 *= h1);
bmi2 = m2/(m2 *= h2);

var result = bmi1 > bmi2;
console.log(bmi1 + ' , ' + bmi2);
console.log('Is P1`s BMI higher than P2`s ?' + result);
