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

/* var m1, m2, h1, h2, bmi1, bmi2;

m1 = prompt('P1`s weight(in kg)');
h1 = prompt('P1`s height(in meter)');

m2 = prompt('P2`s Weight(in kg)');
h2 = prompt('P2`s height(in meter)');

bmi1 = m1/(h1 *= h1);
bmi2 = m2/(h2 *= h2);

var result = bmi1 > bmi2;
console.log(bmi1 + ' , ' + bmi2);
console.log('Is P1`s BMI higher than P2`s ? ' + result); */

/* var age = 16;

if (age < 13) {
    console.log('1');
}
else if (age >= 13 && age < 18) {
    console.log('2');
}
else {
    console.log('3');
}
 */

//ternary/conditional operator

/* var firstName = 'John';
var age = 26;
 */
// condition ? <if(){}> : <else(){}>
/* age >= 18 ? console.log(firstName + ' is an adult')
    : console.log(firstName + ' is not yet an adult');

var adult = age > 18 ? 'adult' : 'not adult';
console.log(adult); */

var age = 16;
var testbool = true
switch (testbool) {
    case age >= 18:
        console.log('adult');
        break;
    case age < 18:
        console.log('not adult')
        break;

    default:
        console.log('unknown');
        break;
}

//switch - looking for a match,excute matched case`s followed code, if there is no match, excute default
//key can be any value/variable, no error will be reported by IDE. It is simply a ref for match.
/* switch (key[can be boolean]) {
    case value:
        
        break;

    default:
        break;
} */
/* var licenseClass = 'c1'
switch (licenseClass) {
    case 'c1':
    case 'c2':
        console.log('c1');
        break;
    case 'a2':
        console.log('a2');
        break;
    default:
        console.log('undefined');
}

 */