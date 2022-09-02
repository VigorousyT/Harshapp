/* Object Destructing - Hands-on Exercise
------Destructuring assignment allows you to assign the properties of an object to variables using syntax that looks similar to object literals.
code example:-  */

'use strict';

const apple = {
    id: 209891,
    company: 'Apple Inc',
    exchange: 'NASDAQ',
    symbol: 'AAPL',
    currPrice: 120.07,
    details: {
        ceo: 'Tim Cook',
        hq: 'Cupertino, California, US',
    },
};

// Write your code below this line
const {
    company,
    exchange,
    currPrice,
    details: { ceo },
} = apple;

// Write your code above this line
try {
    console.log(
        `${company} headed by ${ceo} was trading for $${currPrice} on ${exchange}`
    );
} catch (error) {
    console.log('Stock data could not be accessed...');
}



/* Adding and Composing Properties - Hands-on Exercise
------Objects are stored by reference which means that if you have to update a property’s value, you have to keep in mind that the object may have been referenced elsewhere in your code and it might affect some other part of the application inadvertently.
code example:-  */

'use strict';

const userDb = [
    {
        id: 1,
        name: 'Dmitri Mishkov',
        email: 'dmitri.m@sprintserve.co',
        password: 'tempPass',
    },
    {
        id: 2,
        name: 'Jimmy McIntyre',
        email: 'jimmymc@whatmail.com',
        password: 'tempPass',
    },
    {
        id: 3,
        name: 'David Adams',
        email: 'adams@whatmail.com',
        password: 'tempPass',
    },
];

const userPriveleges = {
    profile: true,
    admin: false,
    billing: true,
};

const genPassword = (name) =>
    name.replace(/\s/, '-').toLowerCase().split('').reverse().join('');

// Write your code here...

const configureUsers = userDb.map((user) => ({ ...user, password: genPassword(user.name), ...userPriveleges, }));

console.log(configureUsers);



/* Creating Custom Properties 
--------The Object.defineProperty() and Object.defineProperties() methods allow us to define custom behavior for an object’s properties. You can do everything from preventing enumeration which means the property will not show up but would be accessible. You can also pre-set a value when the object is created and also define custom getters and setters.
- Hands-on Exercise */

'use strict';

const Car = function () {
    let brand = '';
    let model = '';
    let transmission = '';
    let color = '';
    let changeLog = [];
    Object.defineProperties(this, {
        id: {
            enumerable: true,
            value: `CAR-012X-DB1`,
        },
        brand: {
            enumerable: true,
            set(val) {
                changeLog.push(`Brand changed to ${val}`);
                brand = val;
            },
            get() {
                return brand;
            },
        },
        model: {
            enumerable: true,
            set(val) {
                changeLog.push(`Model changed to ${val}`);
                model = val;
            },
            get() {
                return model;
            },
        },
        transmission: {
            enumerable: true,
            set(val) {
                changeLog.push(`Transmission changed to ${val}`);
                transmission = val;
            },
            get() {
                return transmission;
            },
        },
        color: {
            enumerable: true,
            set(val) {
                changeLog.push(`Color changed to ${val}`);
                color = val;
            },
            get() {
                return color;
            },
        },
        changeLog: {
            enumerable: false,
            get() {
                return changeLog;
            },
        },
    });
};

const Civic = new Car();

Civic.brand = 'Honda';
Civic.model = 'Civic';
Civic.transmission = 'AT';
Civic.color = 'Galaxy Grey';

Civic.model = 'Civic 1.8S';
Civic.color = 'Pearl White';

for (let prop in Civic) {
    console.log(`${prop}: ${Civic[prop]}`);
}

console.log(Civic.changeLog);





/*  Shallow Copying vs. Deep Copying
--------Objects are referenced which is why they cannot be passed as literals when you want to create a clone. And when cloning objects, it becomes important to consider nested properties and arrays because they may still end up as references if not dealt with when cloning objects.
- Hands-on Exercise */

'use strict';

const productA = {
    category: 'Air Conditioners',
    brand: 'Samsung',
    model: 'XTR-15-5S',
    type: 'Split',
    cost: 1200,
    wiFiEnabled: false,
    details: {
        compressor: 'Tecumseh',
        capacity: 1.5,
        powerConsumption: 1200,
        type: 'Rotary',
    },
};
// Write your code below this line
const deepCopy = function (obj) {
    let tempObj = {};
    for (let key in obj) {
        tempObj = {
            ...tempObj, [key]:
                typeof obj[key] === 'object' && !Array.isArray(obj[key]) ? {
                    ...deepCopy(obj[key])
                } : typeof obj[key] === 'object' && !Array.isArray(obj[key]) ? [...obj[key]] : obj[key],
        };
    }
    return tempObj;
}

// Write your code above this line
let productB = deepCopy(productA);
productB.model = 'XJR-20W';
productB.type = 'Window';
productB.cost = 800;
productB.details.compressor = 'Samsung';

console.log(`Product A | Model: ${productA.model}`);
console.log(`Product A | Type: ${productA.type}`);
console.log(`Product A | Cost: ${productA.cost}`);
console.log(`Product A | Compressor: ${productA.details.compressor}`);

console.log(`Product B | Model: ${productB.model}`);
console.log(`Product B | Type: ${productB.type}`);
console.log(`Product B | Cost: ${productB.cost}`);
console.log(`Product B | Compressor: ${productB.details.compressor}`);
console.log(
    `CONCLUSION: ${Object.is(productA, productB)
        ? 'Both objects are still the same. productB has mutated productA'
        : 'productB is now a deep clone of productA'
    }`
);





/*  Detecting the Presence of Properties
--------When accessing a property or a method from an object in a function or in a situation where the shape of the objects is not guaranteed, it becomes important to implement checks to ensure properties being accessed exist and if not, then their absence is carefully handled so as not to produce errors.
- Hands-on Exercise */

'use strict';

const rectangles = [
    {
        id: 'Rectangle - 01',
        width: 129.2,
        height: 80.9,
    },
    {
        id: 'Rectangle - 02',
        width: 342,
        height: 120,
        area() {
            return this.width * this.height;
        },
    },
];

// Your Code Goes Here 
const calcArea = function () {
    return this.width * this.height;
};

try {
    rectangles.forEach((rect) =>
        console.log(
            `${rect.id} : ${rect.hasOwnProperty('area') ? rect.area() : calcArea.call(rect)
            }`
        )
    );
} catch (error) {
    console.log(error.message);
}




/* Getting Properties & Values-------- [  Object.keys() , object.values() , object.entries()  ]   
--------
- Hands-on Exercise */

'use strict';

const book = {
    isbn: '0-671-00410-7',
    title: 'Contact',
    author: 'Carl Sagan',
    publisher: 'Pocket Books',
};

const findKey = (val, obj) => Object.keys(obj).includes(val);
console.log(`ISBN: ${findKey('isbn', book) ? 'Yes' : 'No'}`);

const findValue = (val, obj) => Object.values(obj).includes(val);
console.log(
    `Did Carl Sagan write the book? ${findValue('Carl Sagan', book) ? 'Yes' : 'No'
    }`
);

for (const [key, value] of Object.entries(book)) {
    console.log(`${key}: ${value}`);
}





/* Sealing & Freezing--- [  object.seal() , object.values()]
--------It is quite easy for one part of your application to overwrite the contents of an object that was created or stored elsewhere in your application. Data that must not be mutated must be secured, which is why we have the Object.seal() and Object.freeze() methods
- Hands-on Exercise */




