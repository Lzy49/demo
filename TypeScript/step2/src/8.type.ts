// 类型别名
(function () {
  // 基础定义
  type o = number | string;
  let a: o = 10;
  a = '123';
})();

(function () {
  // 定义 函数
  // - 1
  type fun = (x: number) => number;
  // let f:fun = (x)=>x + '1' // error
  let f: fun = (x) => x + 10; // ok
  // - 2
  type fun2 = {
    (x: number): number;
  };
  let f2: fun2 = (x) => x;
})();

(function () {
  // typeof
  let a: number | string = 123;
  type t = typeof a;
  // let d:t = false // error
  let d: t = 123; //ok
})();

(function () {
  // 字面量
  type a = '你好呀';
  // let b:a = '233' // error
  let b: a = '你好呀';
})();
(function () {
  // 实现交集
  type a = {
    age: 10;
  };
  type b = a & {
    sex: '男' | '女';
  };
  let c: b = {
    // age:100, // error
    age: 10,
    sex: '男'
  };
});
