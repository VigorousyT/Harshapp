/* Using Date and Time - 
---------
Hands-on Exercise*/



/* Getter and Setter Methods 
--------------
--Hands-on-Exercise...*/
'use strict';

const date = new Date(2020, 2, 20);
date.setHours(15);
date.setMinutes(35);
date.setSeconds(23);
date.setMilliseconds(12);

const getDate = date.getDate();
const getDay = date.getDay();
const getMonth = date.getMonth();
const getFullYear = date.getFullYear();

const getHours = date.getHours();
const getMinutes = date.getMinutes();
const getSeconds = date.getSeconds();
const getMilliseconds = date.getMilliseconds();
const getTime = date.getTime();

console.log(`Date: ${date}`);
console.log(`The date: ${getDate}`);
console.log(`The day: ${getDay}`);
console.log(`The Month: ${getMonth}`);
console.log(`The year: ${getFullYear}`);
console.log(`Time: ${getHours}:${getMinutes}:${getSeconds}:${getMilliseconds}`);
console.log(`Time (ms since Epoch): ${getTime}`);




/* Formatting Date and Time
--------------
--Hands-on-Exercise...*/



/* Computing difference between dates worked M10...
--------------
--Hands-on-Exercise...*/
'use strict';

const dates = [
    ['10 Feb, 2021', '1 Mar, 2021'],
    ['25 Dec, 2020', '25 Dec, 1999'],
    ['1 Jan, 2021', '1 Jan, 1954'],
];

const dateDiff = (start, end, format = 'D') => {
    const diff = end - start;
    const suffix = diff <= 0 ? 'elapsed...' : 'left...';
    const days = `${(Math.abs(diff) / 86400000).toPrecision(5)} days`;
    const hours = `${Math.ceil(Math.abs(diff) / 3600000)} hours`;
    const minutes = `${Math.ceil(Math.abs(diff) / 60000)} minutes`;
    const seconds = `${Math.ceil(Math.abs(diff) / 1000)} seconds`;
    switch (format) {
        case 'D': {
            return `${days} ${suffix}`;
        }
        case 'H': {
            return `${hours} ${suffix}`;
        }
        case 'M': {
            return `${minutes} ${suffix}`;
        }
        case 'S': {
            return `${seconds} ${suffix}`;
        }
    }
};

dates.forEach(([d1, d2]) => {
    const dateD1 = new Date(d1);
    const dateD2 = new Date(d2);
    console.log(
        `Diff between ${d1} and ${d2} is ${dateDiff(dateD1, dateD2, 'D')}`
    );
});




/* Computing difference between dates worked M10...
--------------
--Hands-on-Exercise...*/
'use strict';

const date1 = new Date(2021, 4, 10);

const addDays = (dateObj, days = 0) => {
    const daysToMs = days * 864_00_000;
    return new Date(dateObj.getTime() + daysToMs)
};

console.log(`International Family Day is on ${addDays(date1, 5)}`);

