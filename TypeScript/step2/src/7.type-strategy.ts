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