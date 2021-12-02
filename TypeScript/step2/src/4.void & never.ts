// void
(function () {
  // let voidValue1: void = null; // error 不可赋值
  let voidValue: void;
  // let a: number = voidValue; // error 不可赋给其他值
  function fun(): void {} // 常用在函数无返回值
})();

// never
(function () {
  let val: never;
  function loopForever(): never {
    // OK
    while (true) {}
  }

  function err(msg: string): never {
    // OK
    throw new Error(msg);
  }

  type Foo = string | number | boolean;

  function controlFlowAnalysisWithNever(foo: Foo) {
    if (typeof foo === 'string') {
      // 这里 foo 被收窄为 string 类型
    } else if (typeof foo === 'number') {
      // 这里 foo 被收窄为 number 类型
    } else {
      // foo 在这里是 never
      const check: never = foo;
    }
  }
});
