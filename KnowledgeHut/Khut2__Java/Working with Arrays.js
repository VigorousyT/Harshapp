/* Reversing an Array - Hands-on Exercise
code example:-  */ 1-- // The contents of an Array can be reversed by using the Array.reverse() method which does an in-place replacement. In a nutshell, the last element becomes the first and vice-versa.

'use strict';

const weapons = [
  {
    item: 'Red Orbs',
    cost: 240,
  },
  {
    item: 'Green Orbs',
    cost: 194,
  },
  {
    item: 'Yellow Orbs',
    cost: 154,
  },
  {
    item: 'Kill Machine',
    cost: 80,
  },
];

const displayWeapons = (arr) => {
  for (const elem of arr) {
    console.log(`${elem.item}:`, `$${elem.cost}`);
  }
};

displayWeapons(weapons.reverse());



/* Reversing an Array - Hands-on Exercise
code example:-  */

'use strict';

const weaponss = `1,Red Orbs,240
                 2,Green Orbs,194
                 3,Yellow Orbs,154
                 4,Kill Machine,80`;


  const displayWeaponss = function (str) {
    const breakByLine = str.split('\n');
    for (const item of breakByLine) {
      let elements = item.split(',');
      console.log(`${elements[0]}. ${elements[1]} -- $${elements[2]}`);
    }
  };

displayWeaponss(weaponss);



/* Iteration using forEach() - Hands-on Exercise
code example:-  */

'use strict';

const books = [
  {
    id: 1,
    title: 'Freakonomics',
  },
  {
    id: 2,
    title: 'The Design of Everyday Things',
  },
  {
    id: 3,
    title: 'Shantaram',
  },
  {
    id: 4,
    title: 'Contact',
  },
];
console.log('My Favourite Books');
books.forEach((elem, index)=> console.log(`${index + 1}. ${elem.title}`));




/* Finding an Element in an Array  - Hands-on Exercise
Defination--------Out of the many ways of finding elements in Arrays, there are two that are quite intuitive and extremely useful. the find() method allows you to implement a search function that can test for a condition to validate and find the very first matching element from an Array. 
On the other hand, the includes() method tests for the presence of an element in an Array and can be smartly used to test multiple conditions without implementing a complicated if/switch conditional logic.  
code example:- */


'use strict';
const Books = [
  {
    id: 1,
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    formats: ['Paperback', 'Hardbound', 'eBook'],
  },
  {
    id: 2,
    title: 'No Logo',
    author: 'Naomi Klein',
    formats: ['Paperback', 'eBook'],
  },
  {
    id: 3,
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    formats: ['Paperback', 'eBook'],
  },
  {
    id: 4,
    title: 'Gold',
    author: 'Isaac Asimov',
    formats: ['Hardbound', 'eBook'],
  },
];

const isAvailable = (title, format, arr) => {
  const getBook = arr.find((book) => book.title === title);
  return getBook && getBook.formats.includes(format);
};

console.log(
  `No Logo by Naomi Klein (Paperback): ${
    isAvailable('No Logo', 'Paperback', books) ? 'Available' : 'Not Available'
  }`
);

console.log(
  `The Da Vinci Code by Dan Brown (Hardbound): ${
    isAvailable('The Da Vinci Code', 'Hardbound', books)
      ? 'Available'
      : 'Not Available'
  }`
);



/* Creating Arrays using Array.of() and Array.from()  - Hands-on Exercise
  The Array.from() method creates a shallow copy of Array, transforming the source in the process. When used correctly, it provides an intuitive way to generate dynamically transformed arrays from scratch.
code example:- */

'use strict';

const genStars = (count) => Array.from(Array(count), () => '*');

for (let i = 1; i <= 6; i++) {
  console.log(genStars(i));
}

for (let i = 6; i >= 1; i--) {
  console.log(genStars(i));
}




/* Destructuring Assignment - Hands-on Exercise
code example:- */

'use strict';

const Weapons = `1,Red Orbs, $240
2,Green Orbs, $194
3,Yellow Orbs, $154
4,Kill Machine, $80`;

const displayweapons = function (str) {
  const breakByLine = str.split('\n');
  for (const item of breakByLine) {
    const [id, weapon, cost] = item.split(',');
    console.log(`${weapon} costs $${cost}`);
  }
};

displayWeapons(weapons);




/* Spread Syntax - Hands-on Exercise
code example:- */

'use strict';

const scoreCards = [
  {
    id: 1,
    student: 'Joe M',
    scores: [54, 76, 65],
  },
  {
    id: 2,
    student: 'Jane K',
    scores: [68, 85, 74],
  },
  {
    id: 3,
    student: 'Chris P',
    scores: [55, 88, 80],
  },
];

const calculatePercentile = function (english, compSc, mathematics) {
  return (((english + compSc + mathematics) / 300) * 100).toPrecision(4);
};

for (let x of scoreCards) {
    let scoreArray = x.scores;
    console.log (`${x.student} has scored ${calculatePercentile(...scoreArray)}%`);
}



/* Remapping Arrays - Hands-on Exercise
--------The Array.map() method allows you to transform the contents of an array easily. The method iterates through every item, runs a transform function and returns a new array. This way it doesn’t mutate the original.
code example:- */

'use strict';

const citizens = [
  {
    id: 1,
    name: 'John Smith',
    age: 65,
  },
  {
    id: 2,
    name: 'Roger McShane',
    age: 68,
  },
  {
    id: 3,
    name: 'Dolly McShane',
    age: 55,
  },
  {
    id: 4,
    name: 'Joan Mockery',
    age: 61,
  },
];

const seniorCitizens = citizens.map(function (person){
    person.isSeniorCitizen = person.age >= 60;
    return person;
})

console.log(seniorCitizens);




/* Sorting Arrays - Hands-on Exercise
--------Arrays can be sorted in place using the Array.sort() method which implements a sorting function that allows you to express the sorting logic manually. So let’s work through an example to understand how the sort method works.
code example:- */

'use strict';

const perfumes = [
  {
    id: 1,
    brand: 'Fruity by Kiwi 50ml',
    cost: 300,
  },
  {
    id: 2,
    brand: 'Silly Smelly',
    cost: 575,
  },
  {
    id: 3,
    brand: 'Ocean Mist by Ventuo',
    cost: 1243,
  },
  {
    id: 4,
    brand: 'Spotlight',
    cost: 991,
  },
  {
    id: 5,
    brand: 'Horrendous by Britney',
    cost: 230,
  },
];

const mostExpensive = ([...perfumes].sort ((a,b) => b.cost -a.cost) [0] );
const cheapest = ([...perfumes].sort ((a, b) => a.cost - b.cost)[0]);

console.log(`Most Expensive: ${mostExpensive.brand} at $${mostExpensive.cost}`);
console.log(`Cheapest: ${cheapest.brand} at $${cheapest.cost}`);




/* Slice and splice - Hands-on Exercise
--------The splice method allows you to remove a number of elements, starting with a given index number. The splice method mutates the array in place and it also returns the removed element(s). At the same time, it also allows you to insert new elements in lieu of the ones removed.
--------On the other hand, slice() allows you to remove elements from a given location (index number) in an Array.
code example:- */

'use strict';

const hollywoodDirectors = [
  'Martin Scorsese',
  'David Dhawan',
  'Steven Spielberg',
  'Christopher Nolan',
  'Quentin Tarantino',
  'James Cameron',
];

const removeAndInsert = (arr, elem, newElem) => {
    const findElem = arr.findIndex((e) => e === elem);
    const tempArray = [...arr];
    tempArray.splice(findElem, 1, newElem);
    return tempArray;
};

const topThree = (arr) => arr.splice(0,3);

const revisedList = removeAndInsert(hollywoodDirectors, 'David Dhawan', 'David Lean');
const directors = topThree(revisedList)

console.log(`Hollywood Masterclass featuring ${directors}`);





/* Filtering Arrays - Hands-on Exercise
------Filtering arrays couldn’t have been easier. You use the Array.filter() method which provides with a function to implement the filtering logic. The outcome is a new array with the filtered elements.
code Example  */ 

'use strict';

const users = [
  {
    name: 'John M',
    isVerified: true,
  },
  {
    name: 'Jane S',
    isVerified: false,
  },
  {
    name: 'Wanda M',
    isVerified: true,
  },
  {
    name: 'Tony S',
    isVerified: false,
  },
  {
    name: 'Emilio Q',
    isVerified: true,
  },
  {
    name: 'Jonathan W',
    isVerified: false,
  },
];

const isVerified = users.filter(({ isVerified }) => isVerified).map(({name}) =>name);
const notVerified = users.filter(({isVerified}) => !isVerified).map(({ name }) => name);

console.log(`Verified: ${isVerified}`);
console.log(`Not Verified: ${notVerified}`);


/* Filtering Arrays - Hands-on Exercise
------Flattening the array refers to the process of concatenating together contents from all sub-arrays at one common level. This can be achieved using the Array.flat() method. There is also the Array.flatMap() method which runs a filter function before flattening the resultant array.
code Example  */ 

'use strict';

const coords = [
  [
    [2, 5],
    [6, 4],
  ],
  [
    [3, 2],
    [5, 2],
  ],
  [
    [5, 12],
    [15, 3],
  ],
  [
    [4, 12],
    [13, 5],
  ],
];

const calcDistance = ([x1, y1], [x2, y2]) =>
  Number(Math.hypot(x2 - x1, y2 - y1).toPrecision(5));

const findEven = coords.flat(2).filter((elem) => elem % 2===0);
const computeDistance = coords.flatMap(([p1, p2]) => calcDistance(p1, p2));

console.log(`Even Coordinates: ${findEven}`);
console.log(`Distance between points: ${computeDistance}`);

// That’s it. You’ve just used Array.flat() and Array.flatMap().



/* Reducing Arrays - Hands-on Exercise
------Reducing arrays refers to computing down an array full of data to a single value. The reducer function implements the logic while the Array.reduce() method iterates over an array full of data.
code example:- */

'use strict';

const perFumes = [
  {
    id: 1,
    brand: 'Fruity by Kiwi 50ml',
    cost: 300,
    stock: 10,
  },
  {
    id: 2,
    brand: 'Silly Smelly',
    cost: 575,
    stock: 12,
  },
  {
    id: 3,
    brand: 'Ocean Mist by Ventuo',
    cost: 1243,
    stock: 5,
  },
  {
    id: 4,
    brand: 'Spotlight',
    cost: 991,
    stock: 8,
  },
  {
    id: 5,
    brand: 'Horrendous by Britney',
    cost: 230,
    stock: 2,
  },
];

const totalInStock = perFumes.reduce((perv, curr) => perv + curr.stock, 0);

const totalWorth = perFumes.reduce ((perv, curr) => perv + curr.cost *curr.stock, 0);

console.log(`Total items in stock: ${totalInStock}`);
console.log(`Total stock worth: $${totalWorth}`);




/* Comparing Arrays - Hands-on Exercise
------Two arrays can be compared in multiple ways. The most fundamental way to compare two arrays is to turn the arrays into strings and then do an equality comparison. But this doesn’t work if the order of elements is different in both the arrays.
code example:- */

'use strict';

const shoppingList = ['Apples', 'Milk', 'Pasta', 'Cheese Cubes', 'Coke Zero'];
const itemsBought = ['Cheese Cubes', 'Pasta', 'Milk', 'Coke Zero', 'Apples'];

const hasSameContents = (arrA, arrB) => {
    const stringA = arrA.map((el) => JSON.stringify(el));
    const stringB = arrB.map((el) => JSON.stringify(el));
   
    return [
      arrA.length === arrB.length,
      ...stringA.map((el) => stringB.includes(el)),
      ...stringB.map((el) => stringA.includes(el)),
    ].every((el) => el);
  };

console.log(
  hasSameContents(shoppingList, itemsBought)
    ? 'All items bought'
    : 'Items missing...'
);



// ------------------------------------------------------------------------------------------------------------THE END----------------------------------------------------------------------------------------------------------------------------------------