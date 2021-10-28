(function () {
  // 泛型 与 索引类型结合
  let obj = {
    a: '1',
    b: '2',
    c: '3'
  };
  function getValue<T, U extends keyof T>(obj: T, keys: U[]) {
    return keys.map((k) => obj[k]);
  }
  // getValue(obj,[1,2]) // 报错 不能将类型“number”分配给类型“"a" | "b" | "c"”
  getValue(obj, ['a', 'b', 'c']);
  // 接口与索引类型结合
  interface A {
    name: string;
    age: number;
  }
  // let key:keyof A = 1; // 报错
  let key: keyof A = 'name';
})();
