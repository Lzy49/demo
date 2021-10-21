// 函数相关内容
// 1. 函数类型
let fun1: (x: number, y: number) => number;
fun1 = (a, b) => a + b;
fun1(1, 2);
// fun1('a',1) // 报错
// 2. 函数接口
interface Fun2 {
  (x: number, y: number): number;
}
let fun2: Fun2 = (x, y) => x + y;
fun2(1, 2);
// fun2('a',1) // 报错
// 2.2 类型别名
type Fun3 = (x: number, y: number) => number;
let fun3: Fun3 = (x, y) => x + y;
fun3(1, 2);
// fun3('a',1)
// 3 函数参数
// 3.1 函数类型
let fun4 = (x: number, y: number) => {
  return x + y; // 可以省略
};
// 联合类型
let fun5 = (x: string | number) => 1;
// fun4(fun5('你')) // 报错
fun4(fun5('1'), 4); // 可以执行
fun5(1);
fun5(2);
// 3.2 可选参数
let fun6 = (x: number, y: number, z?: number) => {
  // x+y+z; // 报错 因为 z 不是安全值
  if (z) {
    x + y + z; // 没问题因为前面有判断
  }
};
fun6(1, 2, 3);
fun6(1, 2);
// 3.3 参数默认值
let fun7 = (a = 1, b = 2, c: number, d?: number) => {
  return a + b + c;
};

// fun7(1, null, 2); // 报错 想要使用默认值需要传递undefined
fun7(1, undefined, 2);
// 3.4 剩余参数
let fun8 = (a = 1, b = 2, ...ags: any[]) => {
  return a + b + ags[0];
};
console.log(fun8(1, 2, 3, 4));
// 4. 函数重载
function fun9(arr: number[]): number;
function fun9(arr: string[]): string;
function fun9(arr: any[]): any {
  if (typeof arr[0] === 'number') {
    return 123;
  } else if (typeof arr[1] === 'string') {
    return '1';
  }
}
