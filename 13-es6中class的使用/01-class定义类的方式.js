
//类的声明
class Person{

}
//类的表达式
// var Animal = class {

// }
//函数声明
// function foo(){

// }
//函数表达式
// var foo = function(){

// }

//研究一下类的特点

console.log(Person.prototype);
console.log(Person.prototype.__proto__);
console.log(Person.prototype.constructor);
console.log(typeof Person);

var p = new Person()
console.log(p.__proto__ === Person.prototype);