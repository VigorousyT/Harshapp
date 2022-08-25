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



/*   - Hands-on Exercise
code example:- */

