
const app = document.querySelector('.app');
app && (app.innerHTML = hello);
// 类型
// 基本类型
let str: string = '123';
let number: number = 123;
let boolean: boolean = false;
// str = 123 报错
str = '234'; // 不报错
// 数组
let arr0: number[] = [1, 2, 3, 4, 5];
let arr1: Array<number> = [1, 3, 4, 5, 123];
let arr2: Array<number | string> = [1, 2, 3, 4, 5, '123'];
//- 元组
let arr3: [number, string] = [1, '2'];
// arr3[1] = 1 报错

// 函数
function add(x: number, y: number) {
  return x + y;
}
// add('1',2) // 报错
// - 定义一个函数类型
let compute: (x: number, y: number) => number;
// compute = (x, y) => String(x + y); // 报错
compute = (num1, num2) => num1 + num2;

// 定义一个对象
let o: { name: string; age: number } = { name: '', age: 19 };
o.name = '123'; //正确

// 定义一个 symbol
let s1 = Symbol();
let s2: symbol = Symbol();

// undefined & null
let un: undefined = undefined;
let nu: null = null;
let n: null | number = 1;
n = null;
// 枚举类型 - 数字枚举
enum Role {
  one,
  two,
  three
}
console.log(Role[0], Role['one']); // one  0
// 给数字枚举设置值
enum Role2 {
  one = 1,
  two = 3,
  three = 4
}
console.log(Role2); // 1 3 4
// 给数字枚举设置起始站，其后面的值会跟随其实值变化
enum Role3 {
  zero,
  one = 3,
  two,
  three
}
console.log(Role3); // 0 3 4 5
// 字符串枚举
enum RoleString {
  success = '成功',
  fail = '失败'
}
console.log(RoleString);

enum Role4 {
  num = 1,
  string = 'one'
}
console.log(Role4);
// 枚举成员
enum Char {
  // const
  a,
  b = Char.a,
  c = 1 + 3,
  // computed
  d = Math.random(),
  e = '123'.length
}
console.log(Char);

const enum Const {
  name = '张飞',
  age = '19'
}
// console.log(Const) // 报错
const arr = [Const.name];
console.log(arr);

// 枚举类型
// 数字枚举类型
enum E1 {
  a,
  b
}
enum E2 {
  a = 1,
  b = 4
}
// 数字枚举类型可以随便赋值
let e1: E1 = 1;
let e3: E1 = 3;
let e4: E2 = 2;
// 同类型才可以比较
// e1 === e4  // 报错
e1 === e3;
// 字符串枚举类型
enum E3 {
  a = 'name',
  b = 'age'
}
// let c1:E3 = 'name';  // 报错
let c1: E3 = E3.a; // 可行
// let c2: E3.a = E3.b // 报错
