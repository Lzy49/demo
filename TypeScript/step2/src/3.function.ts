// 定义
// - 方案 1
function sum(x: number, y: number): number {
  return x + y;
}
console.log(sum(1, 1));

// - 方案 2
let sum2: (x: number, y: number) => number;
sum2 = function (x, y) {
  // return x + y + ''; // error
  return x + y;
};

// - 方案 3
interface sum3interface {
  (x: number, y: number): number;
}

const sum3: sum3interface = (x, y) => {
  return x + y;
};

// 参数
// - 可选参数
function sum4(x: number, y?: number): number {
  return x + (y ? y : 0);
}
console.log(sum4(1));
// - 参数默认值
function sum5(x: number, y: number = 10): number {
  return y;
}
// - 剩余参数
function sum6(x: number, y: number, ...ags: number[]) {
  return ags.reduce((result, item, key) => result + item, x + y);
}
// sum6(1, 2, 3, 4, 5, 6, 7, '123'); // error
console.log(sum6(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// 函数重载
function ta(x: number, y: number): number;
function ta(x: string, y: string): string;
function ta(x: number | string, y: number | string) {
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y;
  }
  if (typeof x === 'string' && typeof y === 'string') {
    return x + y;
  }
}
