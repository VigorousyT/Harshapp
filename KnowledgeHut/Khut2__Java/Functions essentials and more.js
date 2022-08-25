/* Function Declarations   - Hands-on Exercise
code example:-  */

'use strict';

let tempInFahrenheit = 77;

function tocelsius(fahrenheit) {
return (5 / 9) * (fahrenheit - 32);
}

console.log(`${tempInFahrenheit} degrees Fahrenheit is `, tocelsius(tempInFahrenheit),'degrees celsius');


/* Function Expressions - Hands-on Exercise
code example:-  */

'use strict';

let seconds = 3829019;
const secondsToDays = function(seconds) {
    return Math.floor(Number(seconds) / (3600*24));
;}

console.log(`${seconds} seconds is equal to ${secondsToDays(seconds)} days`);


/* The 'this' Keyword & Function Execution Context - Hands-on Exercise
code example:-  */

'use strict';

let user = {
  name: 'Rob Williams',
  age: 22,
  livesIn: 'New Jersey',
  introduction: function(){
      return `Hi, my name is ${this.name}. I'm ${this.age} years old and I live in ${this.livesIn}`
  },
};
console.log(user.introduction());


/* Arrow Functions - Hands-on Exercise
code example:-  */

'use strict';

const rectangle = {
  width: 20,
  area() {
    return (length) =>  this.width * length;
  },
};

try {
  const areaOfRectangle = rectangle.area();
  console.log(`Area: ${areaOfRectangle(50)}`);
} catch (error) {
  console.log(error.message);
}



/* Constructor Function - Hands-on Exercise
code example:-  */

'use strict';
const Person = function (firstname, lastname, age, email) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.age = age;
    this.email = email;
    this.introduction = () => `${this.firstName} is ${this.age} years old`;
    this.canDrive = () => (this.age >= 18 ? 'Yes' : 'No');
  };


  const Joe = new Person('Joe', 'Mason', 17, 'joe.m@mycorp.com');
console.log(Joe.introduction());
console.log(`Can the user drive? ${Joe.canDrive()}`);
const Jane = new Person('Jane', 'Mandenga', 28, 'jane@mycorp.com');
console.log(Jane.introduction());
console.log(`Can the user drive? ${Jane.canDrive()}`);



