"use strict";

// 1. String concatienation (문자 연쇄)
console.log("my" + "cat");
console.log("1" + 2);
/* ` ` -> 중간에 '',"",줄 바꿈등이 알아서 나옴(변수도 마찬가지) */
console.log(`string literals : 
''""
1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation (제곱)

// 3. Increment and decrement operators
let counter = 2;

const preIncrement = ++counter;
/* counter = counter + 1;
   perIncrement = counter; */
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`);

const postIncrement = counter++;
/* postIncrement = counter;
   counter = counter + 1; */
console.log(`preIncrement : ${postIncrement}, counter : ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 < 6); // greater than
console.log(10 < 6); // greater than or equal

// 6. Logical operators : 