///////////////////////////////////////
// Lecture: Hoisting
/* calculateAge(1998);
function calculateAge(year) {
    console.log(2020 - year);
}


var retireYearLeft = function (year) {
    console.log(65 - (2016 - year));
    console.log(arguments);
}

retireYearLeft(1990);

console.log(age);
var age = 23;



 

 */






///////////////////////////////////////
// Lecture: Scoping


// First scoping example


/* var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
} */




// Example to show the differece between execution stack and scope chain


/* var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
 */



///////////////////////////////////////
// Lecture: The this keyword

/* console.log(this);

test(1998);

function test(i) {
    console.log(2020 - i);
    console.log(this);
}
 */


//Function --> Window | Method --> Object

var a = new Object();
a.name = 'test';
a.yob = 1998;
a.test2 = function () {
    console.log(this);
    
    function innerFunc() {
        console.log(this);
    }
    innerFunc();

}

a.test2();

// var a, var b(both obj) --> a.func = b.func |method borrowing 