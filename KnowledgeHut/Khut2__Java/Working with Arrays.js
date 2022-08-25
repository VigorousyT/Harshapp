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




/* - Hands-on Exercise
code example:-  */

