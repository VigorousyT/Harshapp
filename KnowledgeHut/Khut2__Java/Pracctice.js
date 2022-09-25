const string = 'Health is Wealth';
const array = string.split("is");
console.log(array);
// -----------------------//

const DateObj = new Date('September 19, 1996');
const minutes = DateObj.getMinutes();
console.log(minutes)

// --------------------//

const d = Date.UTC(2020, 5, 1);
console.log(d);

//------------------------------//

const str = 'I am lazy, because i am tired. ';
const splitting = str.split(' ', 4);
console.log(splitting);

//-----------------------------//

const str1 = 'sakshi loves dancing';
const str2 = str1.replace(/loves/g, 'likes');
console.log(str2);

//-----------------------------//

const date = new Date('November 32,1996');
const month = date.getMonth();
console.log(month);