let hello: string = 'Helle TypeScript';
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
let s2:symbol = Symbol();

// undefined & null
let un:undefined = undefined;
let nu:null = null;
let n:null|number = 1;
n = null;