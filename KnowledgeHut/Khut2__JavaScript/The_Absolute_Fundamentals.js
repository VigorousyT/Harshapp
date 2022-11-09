    // Number and Numeric Operators


'use strict';
   var costofItem = 2000;
  var discount = 250;
  var totalCost = costofItem - discount;

  console.log('Total Cost: ', + totalCost); 

    // BigInt Operators

'use strict';

var septillion = 1_000_000_000_000_000_000_000_000n;
var plusOne = septillion + 1n; 

console.log('septillion plus one is equal to', plusOne);

    // STRING OPERATORS

'use strict';
 var myQuote = 'Best friends are like a mirror';

 var author = ' Joe Mockery';
 var fullQuote = myQuote + ' --'+author;
 var lengthOfString = fullQuote.length;
 console.log(fullQuote);
 console.log('Length of the Quote: ', lengthOfString);

    //  BOOLEAN OPERATIONS

'use strict';

 var ageOfJoe = 19;
 var eligibeForVoting = ageOfJoe > 18;
 var isJoeASeniorCitizen = ageOfJoe > 60;

 console.log('Joe can vote. true or false?', eligibeForVoting);
 console.log('Joe is a senior citizen. true or false?', isJoeASeniorCitizen);

    //  OBJECTS OPERATIONS

'use strict'

 var user = {
    name: 'Michelle Roberts',
    age: 28,
    location: {
        city: 'New York',
        country: 'US',
    },
 };

 user.isAdmin = false;

 console.log('User: ', user.name);
 console.log('City: ', user.location.city);
 console.log('Age: ', user.age);
 console.log('Is User an Administrator?', user.isAdmin);

    // BASIC ARRAYS OPERATORS.
'use strict';
 var bestsellers = [
    'Contact',
    'Deception Point',
    'Digital Fortress',
    'Jurassic Park',
    'Shantaram',
  ];
  bestsellers.push('Freakonomics');
  bestsellers[1] = 'The Lord of the Rings';

  console.log('Bestsellers: ', bestsellers.toString());

    //Equality vs Inequality Operator
'use strict';

var costOfToothbrush = 10;
var printedCost = '10';
var advertisedCost = 10.5;

console.log('Are both costs same? (Equality Operator)', costOfToothbrush == printedCost);

console.log('Are both costs same? (Strict Equality Operator)', costOfToothbrush === printedCost);

console.log('The advertised cost is not the same as the actual cost: ', advertisedCost !== costOfToothbrush);

    //Using Relational Operators
'use strict';

    var waterTemperature = 55;
    var isItBoiling = waterTemperature >= 100;
    var isItFrozen = waterTemperature <= 0;
    var isItWarm = waterTemperature > 30 && waterTemperature < 60;
    
    console.log('Is the water boiling?', isItBoiling);
    console.log('Is the water frozen?', isItFrozen);
    console.log('Is it warm?', isItWarm);

    //Handling Exception
'use strict';

    var costOfProduct = 1000;
    var discount = 1200;
    
    'use strict';
    try {
        if (costOfProduct <= discount)
          throw new Error(
            'Cost of the product should be higher than the discount value'
          );
        var totalCost = costOfProduct - discount;
        console.log('Total Cost: ${totalCost}');
      } catch (error) {
        console.log('Oops! We have an error: ', error.message);
      } finally {
        console.log('Thank you for using the app!');
      } 
    
   
    
    

