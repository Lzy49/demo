
(function () {
  // 联合类型 ｜
  let a: number | string;
  a = 10;
  // 联合字面量类型
  let b: '1' | '2' | '3';
  // b = 3 // 报错
  b = '3'; //
  // 联合对象类型
  interface A {
    valueType: 'A';
    aName: string;
  }
  interface B {
    valueType: 'B';
    bName: string;
  }
  interface C {
    valueType: 'C';
    cName: string;
  }
  type types = A | B | C;
  function test(o: types) {
    console.log(o.valueType); // 此时只能访问 type 因为类型未确定
    switch (o.valueType) {
      case 'A':
        console.log(o.aName);
        return o.aName;
      case 'B':
        console.log(o.bName);
        return o.bName;
      case 'C':
        console.log(o.cName);
        return o.cName;
      default:
        ((e: never) => {
          throw new Error(e);
        })(o); // 当缺少定义时此处会报错
    }
  }

  test({
    valueType: 'C',
    cName: 'Cname'
  });
})();