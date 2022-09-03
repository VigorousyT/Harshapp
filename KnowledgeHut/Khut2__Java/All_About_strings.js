/*Finding a String 
-----The includes() method that we saw in the case of Arrays is also available in the String prototype. Here it detects the presence of a string in another string and produces a Boolean result. 
Hands-on Exercise*/

'use strict';

const quotesFromContact = [
    'Had he merely announced his plans to the world, certain complications would ensue. If Hadden was frozen to four degrees Kelvin at ten billion kilometers from Earth, what exactly was his legal status?',
    'Gilgamesh was not equipped with a radio. He no longer wished to know what had happened to the five.',
];

const findString = (str, arr) => {
    let result = arr.filter((elem) => elem.toLowerCase().includes(str.toLowerCase()));
    return result && result.length > 1 ? result : result[0];
};

console.log(`FINDING "HADDEN": "${findString('hadden', quotesFromContact)}"`);

console.log(
    `FINDING "GILGAMESH": "${findString('gilgamesh', quotesFromContact)}"`
);



/* Repeating a String 
-------- When you want to repeat a character or a string, the String.repeat() method comes to the rescue. 
Hands-on Exercise */

'use strict';

const steps = 6;

for (let x = 1; x <= steps; x++) {
    console.log(`${' '.repeat(x)}${'*'.repeat(steps + 1 - x)}`);
}

for (let x = steps; x >= 1; x--) {
    console.log(`${' '.repeat(x)}${'*'.repeat(steps + 1 - x)}`);
}



/* Introduction to Regular Expressions
-------  Defining and processing text based on patterns is needed quite frequently in modern web applications. 
Hands-on Exercise */

'use strict';

const post =
    'This waffle is brilliant! #foodie #waffles #instafood #nutella #chocolate #hazelnut #icecream';

const getTags = (post) => {
    const pattern = /(?<=#)\w+/gi;
    const detectTags = post.match(pattern);
    return detectTags && detectTags && detectTags.length > 1 ? detectTags : detectTags[0];
};

console.log(getTags(post));





/* find and matching charactes
------- 
Hands-on Exercise */