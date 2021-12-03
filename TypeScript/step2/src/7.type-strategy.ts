// 类型推断
(function () {
  // 1. 基本类型推断
  let a = 10;
  // a = '10' //error
  a = 20;
  // 2. 函数类型推断
  function sum(x: number, b: number) {
    return x + b;
  }
  let c: number = sum(1, 2); // ok
  // let d: string = sum(1,2) // error
});
// 类型断言
(function () {
  const arrayNumber: number[] = [1, 2, 3, 4];
  const greaterThan2: number = arrayNumber.find((num) => num > 2) as number;
  let a: any = '10';
  let b: number = a.length; // 此时不会提示 length 属性
  let c: number = (<string>a).length; // 此时会提示 length 属性
  let d: number = (a as string).length; // 此时会提示 length 属性
  // 非空断言
  let str: null | undefined | string;
  console.log(str!.toString());
  // 确定赋值断言
  let x: number;
  initialize();
  console.log(2 * x!); // Error
  function initialize() {
    x = 10;
  }
})();

(function () {
  // 字面量类型
  // let a: 100 = 10; // error
  let a: 100 = 100; // ok
  let b: 100 | 200 | '你好' | '哈哈' = '你好';
  b = a;
  // let c :string = b; // error
})();
