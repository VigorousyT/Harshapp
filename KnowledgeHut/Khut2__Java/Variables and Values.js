    // Understanding Of Variables.
    'use strict';

    var lengthOfRectangle = 10;
    var breadthOfRectangle = 0;
     function computeArea() {
       var breadthOfRectangle = 20;
       function area() {
         return lengthOfRectangle * breadthOfRectangle;
       }
    console.log(`Area of Rectangle: ${area()}`);
    }
    computeArea();
    console.log(`Length of Rectangle: ${lengthOfRectangle}`);
    console.log(`Breadth of Rectangle: ${breadthOfRectangle}`);
   
   /*Q-1  Variables declared within a JavaScript function become__Local and can be accessed only inside the function.*/
   
   /*Q-2  What will be the output of following?
     function printYourFavLanguage() {
       var favLanguage = 'JavaScript';
       console.log(`I love ${favLanguage} - coming from inside the function`);
   }
    printYourFavLanguage(); 
    console.log(`I love ${favLanguage} - coming from outside the function`); */
   //solution: I love JavaScript - coming from outside the function.
   //          Reference error.fav launguage is not defined.
   
   /*Q-3 What will the value of a if?
    var a = `5`
    console.log(a);
    var a =`10`
   //solution: 5 */
   
    
   //Block Scoped Variables with let.


'use strict';
   let x = 200;
   for(let x = 0; x < 10; x++){
   console.log(`The number is ${x}`);
   }
   console.log(`original Number: ${x}`);   

  /*What will be the output of following?
let x = 10
console.log('outside', x)
{
    let x = 2
    console.log('inside', x)
}
 console.log('outside', x)
     Solution: outside 10
           inside2
           outside 10   */


   // Creating Constants with Const


'use strict';
 const PI = 3.1412;
 const circle = {radius:5.2,};
 circle.radius = 6.4

 const circumference = 2 * PI * circle.radius;
 console.log(`Circumference of the circle: ${circumference}`);

    // Type Conversion

'use strict';

    const dataSet = [
      {
        id: 1,
        class: 'Basic Calculus',
        numOfStudents: '23',
      },
      {
        id: 2,
        class: 'Fundamentals of Computing',
        numOfStudents: '18',
      },
      {
        id: 3,
        class: 'Science 101',
        numOfStudents: '15',
      },
    ];
    
    const totalStudents =
      Number(dataSet[0].numOfStudents) +
      Number(dataSet[1].numOfStudents) +
      Number(dataSet[2].numOfStudents);
    
    console.log(`Total Students in School: ${totalStudents}`);


/*                                THE END                                     */