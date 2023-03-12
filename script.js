// 2- What will be the result for these expressions?

// 5 > 4
// "apple" > "pineapple"
// "2" > "12"
// undefined == null
// undefined === null
// null == "\n0\n"
// null === +"\n0\n"

var a = 5 > 4
var b = "apple" > "pineapple"
var c = "2" > "12"
var d = undefined == null
var e = undefined === null
var f = null == "\n0\n"
var g = null === +"\n0\n"

console.log(a); // true
console.log(b); // false
console.log(c); // true
console.log(d); // true
console.log(e); // false
console.log(f); // false
console.log(g); // false


// 3-What are the final values of all variables a, b, c and d after the code below?
// let a = 1, b = 1;
// let c = ++a; 
// let d = b++; 
{
    var a = 1, b = 1;
    var c = ++a;
    var d = b++;

    console.log(a); // 2
    console.log(b); // 2
    console.log(c); // 2
    console.log(d); //1
}

// 4-What are the values of a and x after the code below?
// let a = 2;
// let x = 1 + (a *= 2);
{
    let a = 2;
    let x = 1 + (a *= 2);
    console.log(a); // 4
    console.log(x); // 5
}

// 5-Here’s a code that asks the user for two numbers and shows their sum.
// It works incorrectly. The output in the example below is 12 (for default prompt values).
// Why? Fix it. The result should be 3.

// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

// alert(a + b); // 12
{
    let a = parseInt(prompt("First number?", 1));
    let b = parseInt(prompt("Second number?", 2));

    alert(a + b); // we use parseInt for correct answer
}

// 6- Rewrite this if using the conditional operator '?':
// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }
{
    let a = 2;
    let b = 3;
    let c = (a + b < 4) ? "Below" : "Over";
    alert(c); // answer is over
}


// 7- Rewrite 'if..else' into '?'
// Rewrite if..else using multiple ternary operators '?'.
// For readability, it’s recommended to split the code into multiple lines.
// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }
{
    var login = prompt("Enter your Message")
    var b = (login == "Employee") ? alert("Hello") :
        (login == "Director") ? alert("Greating") :
            (login == "") ? alert("NO login") : alert("invalid Status")
}


// 8-What is the code below going to output?

// alert( null || 2 || undefined );

alert(null || 2 || undefined); // 2


// 9-What will the code below output?

// alert( alert(1) || 2 || alert(3) );
{
    alert(alert(1) || 2 || alert(3)); // first 1 and second 2
}

// 10-What is this code going to show?

// alert( 1 && null && 2 );
{
    alert(1 && null && 2); // null
}


// 11-What will this code show?

// alert( alert(1) && alert(2) );
{
    alert(alert(1) && alert(2)); // 1
}

// 12-What will the result be?

// alert( null || 2 && 3 || 4 );
{
    alert(null || 2 && 3 || 4); // undefined annd second 3
}


// 13-Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it
// {
// if ( !(age >=14 && age <=90) );
// if (age >=14 || age <=90);
// }

// 14-Which of these alerts are going to execute?
// What will the results of the expressions be inside if(...)?

// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );
{
    if (-1 || 0) alert('first');
    if (-1 && 0) alert('second');
    if (null || -1 && 1) alert('third'); // answer is first and third
}


// 15-Write the code using if..else which would correspond to the following switch:

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

{
    let browser = prompt("Enter Your Status")
    if (browser == "Edge") {
        alert("You've got the Edge!")
    } else if (browser == "Chorme", "Firefox", "Safari", "Opera") {
        alert('Okay we support these browsers too')
    } else {
        alert('We hope that this page looks ok!');
    }
}

// 16-Rewrite the code below using a single switch statement:

// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }
{
    let a = +prompt('a?', '');
    switch (a) {
        case (a == 0):
            alert(0);
            break;
        case (a == 1):
            alert(1)
            break;
        case (a == 2 || a == 3):
            alert("2,3")
        default:
            break;
    }

}











