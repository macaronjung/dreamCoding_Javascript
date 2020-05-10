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

// 6. Logical operators : \\ (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// \\ (or) -> 세개 중에 하나라도 ture 면 ture 리턴
// or -> finds the first truthy value -> 첫번째 값이 true 면 연산 종료
// 실무에선 check() 같은 무거운 함수등을 앞에 두지 않음!(간단한 변수를 앞으로)
console.log(`or : ${value1 || value2 || check()}`);

function check() {
   for(let i = 0; i < 10; i++ ) {
      //wasting time
   console.log('hi~');
   }
   return true;
}

// && (and) -> 세개 중에 하나라도 false 면 false 리턴
// and -> finds the first falsy value -> 첫번째 값이 false 면 연산 종료
console.log(`and : ${value1 && value2 && check()}`);
function check() {
   for(let i = 0; i < 10; i++ ) {
      //wasting time
   console.log('hi~');
   }
   return true;
}
// 오브젝트의 값이 null 인지 아닌지 체크할 때도 사용(뒤에 연산이 미실행되기 때문에)
// often used to compress long if-statement
// nullableObject && nullableObject.something
/* if (nullableObject != null) {
   nullableObject.something;
} */

// ! (not) -> 값을 반대로
console.log(!value1);

//7. Equality
const stringFive = '5';
const numberFive = 5;

// == -> loose equality, with type conversion -> 타입을 변경해서 검사
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === -> strict equality, no type conversion -> 타입을 변경하지 않고 검사
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference -> 신경써서 작성할 것!!!
// object는 메모리에 탑재될 때 reference 형태로 저장됨
const ellie1 = {name : "ellie"};
const ellie2 = {name : "ellie"};
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // 다른 레퍼런스를 참조하므로 false
console.log(ellie1 === ellie2); // 같든 타입이든 아니든 다른 레퍼런스를 참조하므로 false
console.log(ellie1 === ellie3); // 같은 value를 할당하였기 때문에 true

// equality - puzzler
console.log(0 == false);
console.log(0 === false); // 0 != boorean type -> false
console.log('' == false);
console.log('' === false); // '' != boorean type -> false
console.log(null == undefined);
console.log(null === undefined); // 둘은 다른 타입 -> false

// 8. Conditional operators : if
// if, else if, else
const name = "choco";
if (name === "choco") {
   console.log("welcome Choco!!!");
} else if (name === "coder") {
   console.log("You are amazing coder~!");
} else {
   console.log("unkwon user...");
}

// 9. Ternary operator : ?
// condition ? value1 : value2;
// 앞에 조건이 ture니? -> 맞으면 x 출력 : 아니면 no 출력
// 간단하게 사용할때는 좋지만 nesting 해서 사용하면 코드 가독성이 떨어지니까 조심
console.log(name === "choco" ? "yes" : "no");

// 10. Swich statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks is TS
const brower = "IE";
switch (brower) {
   case "IE":
      console.log("go away!");
      break;

   case "Chrome":
   case "Firefox": // 출력 값이 같을 경우 이렇게 작성 가능   
      console.log("love you!");
      break;

   default:
      console.log("same all~");
      break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) { // 조건이 false가 될때까지 무한 반복
   console.log(`while : ${i}`);
   i--;
}

// do whlie loop, body code is executed first,
// then check the condition.
do { // do 블럭을 먼저 실행 후 뒤에 조건이 맞는지 검사
   console.log(`do whlie : ${i}`);
   i--;
} while (i > 0);

// for loop, for(begin; condition; step)
// begin -> 맨 처음 실행시에만 실행
for (i = 3; i > 0; i--) {
   console.log(`for : ${i}`);
}

// 조건문안에 지역변수를 설정하여 작성하는 것도 괜찮음
for ( let i = 3; i > 0; i = i - 2) {
   // inline variable declaration
   console.log(`inline variable for : ${i}`);
}

// nested loops -> 컴퓨터에 부담이 가므로 되도록 사용하지는 말 것
for (let i = 0; i < 5; i++) {
   for(let j = 0; j < 5; j++) {
      console.log(`i : ${i}, j : ${j}`);
   }/* for in */
}/* for out */

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (i = 0; i <= 10; i++) {
   if(i % 2 == 0) {
      console.log(`i : ${i}`);
      continue;
   }
}

// Q1.1 -> 연습문제로 만들었기 때문에 이렇게 작성한 것(원래는 true로 만드는 것이 편함)
for (let i = 0; i < 11; i++) {
   if (i % 2 !==0) {
      continue; // console.log 가 출력되지 않도록 처리
   }
   console.log(`Q1 : ${i}`);
}

// Q1.2
for (let i = 0; i < 11; i++) {
   if(i % 2 === 0) {
      console.log(`Q1 i : ${i}`);
   }
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (i = 0; i <= 10; i++) {
   if (i == 8) {
      break;
   }
   console.log(`i : ${i}`);
}

// Q2
for (i = 0; i < 11; i++) {
   if (i > 8) {
      break;
   }
   console.log(`Q2 : ${i}`);
}