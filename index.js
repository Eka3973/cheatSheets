// *********************
// *** clone an array ***
// 'arr' - is array

const clone = (arr) => arr.slice(0);
//or
const clone = (arr) => [...arr];
//or
const clone = (arr) => Array.from(arr);
//or
const clone = (arr) => arr.map((x) => x);
//or
const clone = (arr) => JSON.parse(JSON.stringify(arr));
//or
const clone = (arr) => arr.concat([]);


// *********************
// *** comparing two arrays independently of the order of their elements ***
// 'a' and 'b' - are arrays

const isEqual = (a, b) => {
    return JSON.stringify(a.sort()) === JSON.stringify(b.sort())
}

console.log(isEqual([1, 2, 3], [1, 2, 3]))    //true
console.log(isEqual([1, 2, 3], [1, 3, 2]))    //true
console.log(isEqual([1, 2, 3], [1, '2', 3]))  //false


// *********************
// *** multiple variable declaration ***

//long record

let a = 5;
let b = 8;
let c = 12;

//short record

let [a, b, c] = [5, 8, 12];


// *********************
// *** checking multiple conditions ***

//long record

if (value === 1 || value === 'one' || value === 2 || value === 'two') {};

//short record

if ([1, 'one', 2, 'two'].includes(value)) {};



// *********************
// *** maximum and minimum array element ***

const arr = [1, 12, 42, 38]

const max = Math.max(...arr) //42
const min = Math.min(...arr) //1



// *********************
// *** the value of the variable by condition ***

const str = 'Hello world';
let isValid;

// long record

if(str.length > 3){
    isValid = true
} else {
    isValid = false
}

// short record

isValid = str.length > 3
