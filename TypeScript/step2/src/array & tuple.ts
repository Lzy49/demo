// 数组
let arr1: string[];
// arr1 = [1,2,3,4] // error
arr1 = ['1', '2', '3'];
let arr2: Array<string>;
// arr2 = [1,2,3,4] // error
arr2 = ['1', '2', '3'];

interface man {
  name: string;
  age: number;
}
let arr3: man[] = [
  {
    age: 10,
    name: '名字'
  }
];
(function () {
  // 元组
  // - 定义
  let tuple: [number, string];
  // tuple = []; // error
  tuple = [10, '10'];
  // - 解构
  const [age, name] = tuple;
  // const [age, nanme , sex] = tuple; // error
  // tuple.push(1) // 可以但是不要这么做
  // - 元组 可选值
  type tupleType = [number, string, number?];
  const tuple2: tupleType = [1, '章三']; // ok
  const tuple3: tupleType = [1, '章三', 2]; // ok
  // const tuple4: tupleType = [1, '章三', 3, 4]; // error
  // - 元组 额外值
  type tupleType2 = [number, ...string[]];
  // const tuple4: tupleType2 = [1, '张飞', 2]; // error
  const tuple4: tupleType2 = [1, '张飞', '男'];
  // - 只读
  let v: readonly [number, string] = [10, '你好']; // ok
  // let v2: readonly tupleType = [10, '你好']; // error
})();
