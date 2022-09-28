/*Promises */

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
      ]);
    }, 1000);
  });
}

function onFulfilled(users) {
  console.log(users);
}

const promise = getUsers();
promise.then(onFulfilled);

/*Promise chaining*/
/*Returning a Promise*/
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3 * 100);
});

p.then((result) => {
  console.log(result);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result * 2);
    }, 3 * 1000);
  });
}).then((result) => {
  console.log(result);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result * 3);
    }, 3 * 1000);
  });
}).then(result => console.log(result));

/*Promise.all() method */
/*Resolved promises */

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The first promise has resolved');
    resolve(10);
  }, 1 * 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The second promise has resolved');
    resolve(20);
  }, 2 * 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The third promise has resolved');
    resolve(30);
  }, 3 * 1000);
});

Promise.all([p1, p2, p3]).then((results) => {
  const total = results.reduce((p, c) => p + c);

  console.log(`Results: ${results}`);
  console.log(`Total: ${total}`);
});


/*Rejected promises */
const q1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The first promise has resolved');
    resolve(10);
  }, 1 * 1000);

});
const q2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The second promise has rejected');
    reject('Failed');
  }, 2 * 1000);
});
const q3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The third promise has resolved');
    resolve(30);
  }, 3 * 1000);
});


Promise.all([q1, q2, q3])
  .then(console.log) // never execute
  .catch(console.log);

/* Promise.race()*/
const r1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The first promise has resolved');
    resolve(10);
  }, 1 * 1000);

});

const r2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The second promise has resolved');
    resolve(20);
  }, 2 * 1000);
});


Promise.race([r1, r2])
  .then(value => console.log(`Resolved: ${value}`))
  .catch(reason => console.log(`Rejected: ${reason}`));

/*Missing the catch() method*/

function getUserById(id) {
  return new Promise((resolve, reject) => {
    if (!authorized) {
      reject('Unauthorized access to the user data');
    }
    resolve({
      id: id,
      username: 'admin'
    });
  });
}

try {
  getUserById(10)
    .then(user => console.log(user.username));
  // the following code will not execute
  console.log('next');

} catch (error) {
  console.log(`Caught by try/catch ${error}`);
}

/*Section 9*/
/* ES6 collections */
/*Iterate over map values*/
let john = { name: 'John Doe' },
  lily = { name: 'Lily Bush' },
  peter = { name: 'Peter Drucker' };

let userRoles = new Map([
  [john, 'admin'],
  [lily, 'editor'],
  [peter, 'subscriber'],
]);

for (let role of userRoles.values()) {
  console.log(role);
}

/*Looping the elements of a JavaScript Set */
let roles = new Set();
roles.add('admin')
  .add('editor')
  .add('subscriber');

for (let role of roles) {
  console.log(role);
}

/*Section 10*/
/* Array extensions */
/*Array.of() method */
let numbers = Array.of(3);
console.log(numbers.length); // 1
console.log(numbers[0]); // 3

let chars = Array.of('A', 'B', 'C');
console.log(chars.length); // 3
console.log(chars); // ['A','B','C']

/*array from an array-like object */
function arrayFromArgs() {
  return Array.from(arguments);
}

console.log(arrayFromArgs(1, 'A'));

/*Array.from() with a mapping function */
function addOne() {
  return Array.from(arguments, x => x + 1);
}
console.log(addOne(1, 2, 3));

/*Array.from() with a this value */
let doubler = {
  factor: 2,
  double(x) {
    return x * this.factor;
  }
}
let scores = [5, 6, 7];
let newScores = Array.from(scores, doubler.double, doubler);
console.log(newScores);

/*array from an iterable object */
let even = {
  *[Symbol.iterator]() {
    for (let i = 0; i < 10; i += 2) {
      yield i;
    }
  }
};
let evenNumbers = Array.from(even);
console.log(evenNumbers);

/*Array find() method */
let customers = [{
  name: 'ABC Inc',
  credit: 100
}, {
  name: 'ACME Corp',
  credit: 200
}, {
  name: 'IoT AG',
  credit: 300
}];

console.log(customers.find(c => c.credit > 100));

/*Array findIndex() method with an array of objects */
const products = [
  { name: 'Phone', price: 999 },
  { name: 'Computer', price: 1999 },
  { name: 'Tablet', price: 995 },
];

const index = products.findIndex(product => product.price > 1000);

console.log(index); // 1

/*Section 11*/
/* Object extensions*/
/*Object.assign() to merge objects*/
let box = {
  height: 10,
  width: 20
};

let style = {
  color: 'Red',
  borderStyle: 'solid'
};

let styleBox = Object.assign({}, box, style);

console.log(styleBox);

/*Object.is()*/
let amount = +0,
  volume = -0;
console.log(Object.is(amount, volume));


/*Section 12*/
/* String extensions*/
/*String startsWith() method */
const starttitle = 'Jack and Jill Went Up the Hill';

console.log(starttitle.startsWith('Jack'));
console.log(starttitle.startsWith('jack'));
console.log(starttitle.startsWith('Jill', 9));

/*String endsWith() method  */
const endtitle = 'Jack and Jill Went Up the Hill';

console.log(endtitle.endsWith('Hill'));
console.log(endtitle.endsWith('hill'));
console.log(endtitle.endsWith('Up', 21));

/*String includes() */
let str1 = 'JavaScript String';
console.log(str1.includes('Script'));
let str2 = 'JavaScript String';
console.log(str2.includes('Script', 5));
let email = 'admin@example.com';
console.log(email.includes('@'));