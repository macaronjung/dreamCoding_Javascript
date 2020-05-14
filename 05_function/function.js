
// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing (한개의 함수는 한개의 일만 수행하도록 작성)
// function naming: doSomething, command, verb
// 함수는 이름을 세분화하여 작성하는 것이 좋음
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello() {
  console.log("Hello");
}
printHello();

/* 파라미터로 메세지를 전달 */
/* JS는 type이 없기 때문에 message가 string을 전하는지 number를 전하는지 모름 */
function log(message) {
  console.log(message);
}
log("Hi");
log(1234);
/* TS 예시 */
/* function log(message : string) : number {
  console.log(message);
  return 0;
} */

// 2. Parameters
// premitive parameters: passed by value
// object prarameters: passed by reference
function changerName(obj) {
  obj.name = "coder";
}
/* 오브젝트에 할당 시킴 -> 메모리에 레퍼런스가 저장됨 -> 레퍼런스가 오브젝트를 가리킴 */
const ellie = { name: "ellie"};
changerName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = "unknown") {
  /* if(from === undefined) {
    from = "unknown"
  } */ /* -> 예전방식 */
  console.log(`${message} by ${from}`);
}
showMessage("Hello~");

// 4. Rest parameters (added in ES6)
function printAll(...args) { /* ... -> 배열 형태로 전달 */
  for( let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  /* 간단하게 출력하기 */
  for(const arg of args) { /* args의 값들이 하나씩 arg에 지정됨 */
    console.log(arg);
  }

  /* 더 간단하게 출력하기 */
  args.forEach((arg) => console.log(arg));
}
printAll("dream", "coding", "ellie");

// 5. Local scope
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다
let globalMessage = "global"; // global variable
function printMesseage() {
  let message = "hello";
  console.log(message); // local variable
  console.log(globalMessage);

  function printAnother() {
    /* 자식은 부모에게서 정의된 값을 확인 가능 */
    console.log(message);
    /* 자식안에 정의된 값은 부모(상위)에서 확인 불가능 */
    let childMessage = "hoho";
  }
  /* console.log(childMessage); */ /* -> 에러발생 */
  /* return underfined -> 이게 생략된거임 */
}
printMesseage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum : ${sum(1,2)}`);