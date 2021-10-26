// 兼容
// 接口兼容
interface f_a {
  name: string;
  age: number;
  sex: string;
}
interface f_a_ {
  name: string;
  age: number;
}
let fa: f_a = { name: 'Jestin', age: 19, sex: '男' };
let fa_: f_a_ = fa;
// let fa_1:f_a = fa_; // 不兼容因为 少一个 sex
// 函数兼容
let f_b_0 = (age:string, name:string, sex:string) => {
  return true;
};
let f_b_1 = (age:string, name:string, sex?: string) => {
  return true
};
let f_b_2 = (...args:string[]){
  return true
}
f_b_0 = f_b_1 
f_b_0 = f_b_2
// f_b_1 = f_b_0 // 不兼容因为 可选不兼容一切
// f_b_1 = f_b_2 // 不兼容因为 可选不兼容一切
f_b_2 = f_b_1 
f_b_2 = f_b_0