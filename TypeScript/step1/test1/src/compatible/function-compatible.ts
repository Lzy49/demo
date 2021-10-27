// 函数兼容
// 1. 参数形式 固定，多余兼容一切，可选不兼容一切
let f_b_0 = (age: string, name: string, sex: string) => {
  return true;
};
let f_b_1 = (age: string, name: string, sex?: string) => {
  return true;
};
let f_b_2 = (...args: string[]) => {
  return true;
};
f_b_0 = f_b_1;
f_b_0 = f_b_2;
// f_b_1 = f_b_0 // 不兼容因为 可选不兼容一切
// f_b_1 = f_b_2 // 不兼容因为 可选不兼容一切
f_b_2 = f_b_1;
f_b_2 = f_b_0;
// 2. 参数个数 多兼容少
let f_b_3 = (age1: string, age2: string, age3: string) => {};
let f_b_4 = (age1: string, age2: string, age3: string, age4: string) => {};
// f_b_3 = f_b_4; // 不兼容 多兼容少
f_b_4 = f_b_3; //
// 3.1 参数类型 基本类型不同不兼容，any兼容一切类型
let f_b_5 = (age1: string, age2: number) => {};
let f_b_6 = (age1: number, age2: any) => {};
let f_b_7 = (age1: any, age2: any) => {};
// f_b_5 = f_b_6;
// f_b_6 = f_b_5;
f_b_7 = f_b_5;
f_b_5 = f_b_7;
// 3.2 参数类型 对象类型 多兼容少,缺少关键key完全不兼容
let f_b_8 = (ages: { name: string; age: number }) => {
  return true;
};
let f_b_9 = (ages: { name: string; age: number; sex: string }) => {
  return true;
};
// f_b_8 = f_b_9; 不兼容
f_b_9 = f_b_8;
// 4 返回值 类型必须兼容
let f_b_10 = () => 10;
let f_b_11 = () => '10';
// f_b_10 = f_b_11; // 不兼容

// 5 重载 参数少兼容参数多
function f_b_12(age: number): number;
function f_b_12(age: string): string;
// function f_b_12(age: any, sex: string) { // 报错
//   return age;
// }
function f_b_12(age: any) {
  // 报错
  return age;
}
