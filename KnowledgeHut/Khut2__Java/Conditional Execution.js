/* 1 - if-else
code Example */

'use strict';
let temperature = 20;
if (temperature < 15) {
    console.log("It's cold outside");
}else {
    console.log("It's warm outside");
}



/* Else - if 
code example */

'use strict';
let grade;
let percentage = 85;
// Insert your code here, right before the console.log() statement

if (percentage <= 100 && percentage >= 91) {
    grade = 'A+';
  } else if (percentage <= 90 && percentage >= 81) {
    grade = 'B+';
  } else if (percentage <= 80 && percentage >= 71) {
    grade = 'C+';
  } else if (percentage <= 70 && percentage >= 61) {
    grade = 'D+';
  } else {
    grade = 'Fail';
  }

console.log(`The student has secured ${grade}`);



/* Switch conditional statement 
Code Example */
'use strict';

let item = 'Lettuce';
let type;
// Insert your code here, before the console.log() statement

switch(item){
    case 'Apple':
    case 'Banana':
    case 'Kiwi':
    case 'Strawberry':
        type = 'fruit';
        break;
    case 'Lettuce':
    case 'Potato':
    case 'Celery':
    case 'Eggplant':
        type = 'vegetable';
        break;

    default: {
        throw new Error ('Unable to identify item...');
    }
}
console.log(`${item} is a ${type}`);



/* Ternary Operator conditional statement 
Code Example */
'use strict';

const today = 'Thursday';
const typeOfDay = today === 'Saturday' || today === 'Sunday'
?'Weekend'
: today === 'Wednesday'
? 'Hump Day'
: 'Weekday' ;

console.log(`${today} - ${typeOfDay}`);


/*Binary Logical Operators conditional statement
code Example */

'use strict';

let inputUsername = 'joe';
let inputPassword = 'joe@901';

const database = {
  joe: {
    user: 'Joe Mockery',
    password: 'joe@901',
  },
};
let checkPassword = database[inputUsername].password === inputPassword;

checkPassword && 
console.log (`${database[inputUsername].user || `User`} is logged in...`)


/* Nullish Coalescing Operator conditional statement
code Example */

'use strict';

let tempData = {
  location: 'Lake Eastwood',
  sensor1: 0,
  sensor2: null,
  sensor3: 1.8,
};

console.log(
  `${tempData.location}: ${
    tempData.sensor1 || tempData.sensor2 || tempData.sensor3
  } degrees`
);

console.log(
    `${tempData.location}: ${
      tempData.sensor1 ?? tempData.sensor2 ?? tempData.sensor3
    } degrees`
  );



/* Optional Chaining Operator conditional statement
code Example */

'use strict';

const users = [
  {
    name: 'Joe',
    address: {
      home: '212, River Drive',
      city: 'New York',
      country: 'US',
    },
  },
  {
    name: 'Jane',
  },
];

try {
  console.log(`${users[0].name} lives in ${users[0].address.city}`);
  console.log(`${users[1].name} lives in ${users[1].address?.city ?? 'a big city'}`);
} catch (error) {
  console.log(error.message);
}
