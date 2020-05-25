
// class -> 청사진, 틀 만 정의(한번만 선언)
// template - declare once - no data in

// object -> 실제 데이터가 들어가는 곳(클래스를 이용해 새로운 인스턴스 생성)
// instance of a class - created many times - data in

"use strict";

// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// 이전에는 클래스 정의없이 바로 오브젝트를 생성 가능
// - syntactical sugar over prototype-based inheritance
// 기존에 존재하던 것에 간단한 문법이 추가된 것(문법상으로 달달한 각각의 편의성 추구)

// 1. Class declarations
class Person {
  // constructor
  constructor(name, age) {
    // fields
    // 전달된 데이터를 바로 할당
    this.name = name;
    this.age = age;
  }
  
  // method
  speak() {
    console.log(`${this.name}: Hello!`);
  }
}


