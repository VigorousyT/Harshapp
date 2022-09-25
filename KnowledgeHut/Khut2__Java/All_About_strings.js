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

const getags = (post) => {
    const pattern = /(?<=#)\w+/gi;
    const detectTags = post.match(pattern);
    return detectTags && detectTags && detectTags.length > 1 ? detectTags : detectTags[0];
};

console.log(getags(post));





/* find and matching charactes
------- 
No--Hands-on Exercise But Taking some Examples 
---the Find Matching characters cosnsits of four statements*/
//---1st one is text()method--pattern(text)syntax.
const text = 'Thank you... Krishna for giving me life. I want to cme to your adobe as soon as possible.'
const pattern = /Kris?na?/g;
let results;
while ((results = pattern.exec(text)) !== null) {
    console.log(results[0]);
}
const supreme = 'Thank you... Krishna for giving me life. I want to cme to your adobe as soon as possible.'
const findSupreme = (str, supreme) => {
    const pattern = new RegExp(supreme, 'gi')
    return pattern.test(str);
}
console.log(findSupreme(supreme, 'Krishna'));
const str = 'My email address is :- harshyadav082000@gmail.com';
const getEmails = (str) => {
    const pattern = /[a-z0-9._]+@[a-z0-9-]+\.[a-z.]{2,6}/gi;
    const detect = str.match(pattern);
    return detect;
};
console.log(getEmails(str));
//--- Match() method.-
const Universe = 'all #existing #matter and #space considered as a #whole; the #cosmos. The #universe is believed to be at least 10 #billion light years in diameter and contains a vast number of #galaxies; it has been expanding since its #creation by the breathe of #MAHA #VISHNU about 13 billion years ago. it is created by our beloved #Krishna with love and affection.'
const getTags = post => {
    const pattern = /(?<=#)\w+/gi;
    const detect = post.match(pattern);
    return detect && detect.length > 1 ? detect : detect[0];
}
console.log(getTags(Universe));


/* Replacing Text 
------- 
No--Hands-on Exercise. */
'use strict';

const words = ['Civic:', 'Seltos', 'Car', 'Noon', 'Refer', 'Tenet', 'Design'];

const isPalindrome = (str) => {
    const strAProc = str
        .toLowerCase()
        .replaceAll(/\s/g, '')
        .replaceAll(/[:;'"!@#$%^&*]/g, '');


    const strBProc = str
        .toLowerCase()
        .replaceAll(/\s/g, '')
        .replaceAll(/[:;'"!@#$%^&*]/g, '')
        .split('')
        .reverse()
        .join('');

    return strAProc === strBProc;
};
words.forEach((w) => {
    console.log(`${w} ${isPalindrome(w) ? 'is' : 'is not'} a palindrome`);
});



/* Extracting Text using Substring()
------- 
No--Hands-on Exercise. */

'use strict';

const strd = 'name:James Dean ,age:45,profession:Actor,location:Hollywood';

const fullName = str.substring(str.search('name') + 5, str.search('age') - 1);
const profession = str.substring(str.search('profession') + 11, str.search('location') - 1)


console.log(`${fullName} was an ${profession}`);



/* 
-------
No-Hands-on Exercise. */