// 高级类型
(function () {
  // 交叉类型 &
  interface A {
    name: any;
    say: (v: string) => string;
  }
  interface B {
    name: any;
    log: (v: string) => string;
  }
  type C = A & B;
  let d: C = {
    name: 'nihao',
    say: (v) => v,
    log: (v) => v
  };
})();
