

// 函数类型别名
interface Add1 {
  (x: number, y: number): number;
}
// 类型别名
type Add2 = (x: number, y: number) => number;

let addfun: Add2 = (a1, a2) => {
  // return 'str'; // 报错
  return 1;
};
console.log(addfun(1, 2));

// 定义一个混合 接口
interface Mix {
  (): any;
  versions: Number;
  sayHi: () => any;
}
function getMix() {
  let m: Mix = (() => {}) as Mix;
  m.versions = 1.1;
  m.sayHi = () => {
    console.log('你好');
  };
  return m
}
const m1 = getMix();
m1.sayHi();
