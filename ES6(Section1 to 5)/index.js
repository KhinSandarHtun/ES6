let x = 10;
if (x == 10) {
    let x = 20;
    console.log(x); // 20:  reference x inside the block
}
console.log(x);// 10: reference at the begining of the script


for (var i = 0; i < 5; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(j);
        }, 1000);
    })(i);
}

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 1000);
}
/*end test let keyword*/

/*test different between let and var*/
/*Variable scopes*/
for (var i = 0; i < 5; i++) {
    console.log("Inside the loop:", i);
}

console.log("Outside the loop:", i);

for (let i = 0; i < 5; i++) {
    console.log("Inside the loop:", i);
}

console.log("Outside the loop:", i);
/*Creating global properties */
var counter = 0;
console.log(window.counter); //  0

//  let counter = 0;
//  console.log(window.counter); // undefined

/*Redeclaration*/
var counter = 10;
var counter;
console.log(counter); // 10

/*const*/
const person = { age: 20 };
person.age = 30; // OK
console.log(person.age); // 30

const colors = ['red'];
colors.push('green');
console.log(colors); // ["red", "green"]

colors.pop();
colors.pop();
console.log(colors); // []

let scores = [75, 80, 95];

for (let score of scores) {
    console.log(score);
}

/*Default Parameters */
function say(message = 'Hi') {
    console.log(message);
}

say(); // 'Hi'
say(undefined); // 'Hi'
say('Hello'); // 'Hello'

/*Evaluating default parameters */
function put(toy, toyBox = []) {
    toyBox.push(toy);
    return toyBox;
}

console.log(put('Toy Car'));
// -> ['Toy Car']
console.log(put('Teddy Bear'));
// -> ['Teddy Bear'], not ['Toy Car','Teddy Bear']

/*Using other parameters in default values */
function add(x = 1, y = x, z = x + y) {
    return x + y + z;
}

console.log(add()); // 4

/*Using functions */
let taxRate = () => 0.1;
let getPrice = function (price, tax = price * taxRate()) {
    return price + tax;
}

let fullPrice = getPrice(100);
console.log(fullPrice); // 110

/*The arguments object */
function add(x, y = 1, z = 2) {
    console.log(arguments.length);
    return x + y + z;
}

add(10); // 1
add(10, 20); // 2
add(10, 20, 30); // 3

/*Rest Parameters*/

function sum(...args) {
    return args
        .filter(function (e) {
            return typeof e === 'number';
        })
        .reduce(function (prev, curr) {
            return prev + curr;
        });
}

let result = sum(10, 'Hi', null, undefined, 20);
console.log(result);

/*rest parameters and arrow function */
const combine = (...args) => {
    return args.reduce(function (prev, curr) {
        return prev + ' ' + curr;
    });
};

let message = combine('JavaScript', 'Rest', 'Parameters'); // =>
console.log(message); // JavaScript Rest Parameters

/* spread operator*/
const odd = [1, 3, 5];
const combined = [...odd, 2, 4, 6];
console.log(combined);

/*spread operator and apply() method */
function compare(a, b) {
    return a - b;
}
let cresult = compare.apply(null, [1, 2]);
console.log(cresult); // -1

/*Constructing array literal */
let initialChars = ['A', 'B'];
let chars = [...initialChars, 'C', 'D'];
console.log(chars); // ["A", "B", "C", "D"]

/*Concatenating arrays */
let numbers = [1, 2];
let moreNumbers = [3, 4];
let allNumbers = [...numbers, ...moreNumbers];
console.log(allNumbers); // [1, 2, 3, 4]

/*Copying an array */
let score = [80, 70, 90];
let copiedScores = [...score];
console.log(copiedScores); // [80, 70, 90]

/*Object Literal Syntax Extensions */
let name = 'machine name';
let machine = {
    [name]: 'server',
    'machine hours': 10000
};

console.log(machine[name]); // server
console.log(machine['machine hours']); // 10000

/*for…of Loop */

/*Iterating over arrays */
let loopscores = [80, 90, 70];

for (let score of loopscores) {
    score = score + 5;
    console.log(score);
}
/*destructuring with for…of */

// const ratings = [
//     {user: 'John',score: 3},
//     {user: 'Jane',score: 4},
//     {user: 'David',score: 5},
//     {user: 'Peter',score: 2},
// ];

//  let sum = 0;
//  for (const {score} of ratings) {
//      sum += score;
//  }

//  console.log(`Total scores: ${sum}`); // 14

/*Iterating over strings */
let str = 'abc';
for (let c of str) {
    console.log(c);
}

/*Iterating over Map objects */
let mcolors = new Map();

mcolors.set('red', '#ff0000');
mcolors.set('green', '#00ff00');
mcolors.set('blue', '#0000ff');

for (let color of mcolors) {
    console.log(color);
}

/*Iterating over set objects */
let fscores = [10, 20, 30];
fscores.message = 'Hi';

console.log("for...in:");
for (let score in fscores) {
    console.log(score);
}

console.log('for...of:');
for (let score of fscores) {
    console.log(score);
}

/*Octal and Binary Literals*/
let a = 051;
console.log(a); // 41

/*Binary literals*/
let e = parseInt('111', 2);
console.log(e); // 7

/*template literals */
let tstr = `Template literal in ES6`;

console.log(tstr);// Template literal in ES6
console.log(str.length); // 23
console.log(typeof tstr);// string

/*Multiline strings */
let msg = 'Multiline \n\
string';

console.log(msg);
//Multiline
//string
/*Variable and expression substitutions */
let price = 8.99,
    tax = 0.1;

let netPrice = `Net Price:$${(price * (1 + tax)).toFixed(2)}`;

console.log(netPrice); // netPrice:$9.89


/*Section2 */
/*Destructuring */

function getScores() {
    return [70, 80, 90, 100];
}

let [p, q, r] = getScores();

console.log(p); // 70
console.log(q); // 80
console.log(r); // 90

let [s, t, ...args] = getScores();
console.log(s); // 70
console.log(t); // 80
console.log(args); // [90, 100]

function getItems() {
    return null;
}


/*Swapping variables */
let c = 10,
    b = 20;

[c, b] = [b, c];

console.log(c); // 20
console.log(b); // 10

/*Functions that return multiple values */
function stat(e, f) {
    return [
        e + f,
        (e + f) / 2,
        e - f
    ]
}
let [sum1, average, difference] = stat(20, 10);
console.log(sum1, average, difference); // 30, 15, 10

/*Object Destructuring */
let objperson = {
    firstName: 'John',
    lastName: 'Doe',
    middleName: 'C.',
    currentAge: 28
};

let { firstName, lastName, middleName = '', currentAge: age = 18 } = objperson;

console.log(middleName); // 'C.'
console.log(age); // 28

/*Section 3*/
/*ES6 Modules */
/*import {a, b, result, sum, multiply } from './helper.js';
sum();
console.log(result); // 30

multiply();
console.log(result); // 200

/*Section 4*/
/*ES6 Classes*/
/*classes*/
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
};

var john = new Person("John Doe");
console.log(john.getName());

/*Getters and Setters */
class gsPerson {
    constructor(name) {
        this.setName(name);
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this.name = newName;
    }
}

let gsperson = new gsPerson('Jane Doe');
console.log(gsperson); // Jane Doe

gsperson.setName('Jane Smith');
console.log(gsperson.getName()); // Jane Smith

/*Using getter in an object literal*/
let meeting = {
    attendees: [],
    add(attendee) {
        console.log(`${attendee} joined the meeting.`);
        this.attendees.push(attendee);
        return this;
    },
    get latest() {
        let count = this.attendees.length;
        return count == 0 ? undefined : this.attendees[count - 1];
    }
};

meeting.add('John').add('Jane').add('Peter');
console.log(`The latest attendee is ${meeting.latest}.`);

/*class expressions*/
/*First-class citizen */
function factory(aClass) {
    return new aClass();
}

let greeting = factory(class {
    sayHi() { console.log('Hi'); }
});

greeting.sayHi(); // 'Hi'

/*Singleton */
let app = new class {
    constructor(name) {
        this.name = name;
    }
    start() {
        console.log(`Starting the ${this.name}...`);
    }
}('Awesome App');

app.start(); // Starting the Awesome App...

/*static methods */
class sPerson {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    static createAnonymous(gender) {
        let name = gender == "male" ? "John Doe" : "Jane Doe";
        return new sPerson(name);
    }
}
let anonymous = sPerson.createAnonymous("male");

/* static properties*/
class Item {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
        this.constructor.count++;
    }
    static count = 0;
    static getCount() {
        return Item.count;
    }
}

let pen = new Item('Pen', 5);
let notebook = new Item('notebook', 10);

console.log(Item.getCount()); // 2

/*Computed Property*/
let propName = 'c';

const rank = {
    a: 1,
    b: 2,
    [propName]: 3,
};

console.log(rank.c); // 3

/*extends and super*/
class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log('walking on ' + this.legs + ' legs');
    }
}

class Bird extends Animal {
    constructor(legs) {
        super(legs);
    }
    fly() {
        console.log('flying');
    }
}


let bird = new Bird(2);

bird.walk();
bird.fly();

/* Shadowing methods*/
class Dog extends Animal {
    constructor() {
        super(4);
    }
    walk() {
        super.walk();
        console.log(`go walking`);
    }
}

let bingo = new Dog();
bingo.walk();
// walking on 4 legs
// go walking

/*new.target*/
class tPerson {
    constructor(name) {
        this.name = name;
        console.log(new.target.name);
    }
}

class Employee extends tPerson {
    constructor(name, title) {
        super(name);
        this.title = title;
    }
}

let johnn = new tPerson('John Doe'); // Person
let lily = new Employee('Lily Bush', 'Programmer'); // Employee

/*Section 5*/
/* Arrow Functions*/
/*arrow functions with multiple parameters*/
let expnumbers = [4,2,6];
expnumbers.sort((a,b) => b - a);
console.log(expnumbers); // [6,4,2]

/*arrow functions with a single parameter*/
let names = ['John', 'Mac', 'Peter'];
let lengths = names.map(name => name.length);

console.log(lengths);

/*arrow functions with no parameter*/
let logDoc = () => console.log(window.document);
logDoc();

/*arrow functions and this value */
function Car() {
    this.speed = 0;

    this.speedUp = function (speed) {
        this.speed = speed;
        setTimeout(
            () => console.log(this.speed),
            1000);

    };
}

let car = new Car();
car.speedUp(50); // 50;

/*Object methods */
const counter1 = {
    count: 0,
    next() {
        return ++this.count;
    },
    current() {
        return this.count;
    }
};
console.log(counter1.next()); // 1


