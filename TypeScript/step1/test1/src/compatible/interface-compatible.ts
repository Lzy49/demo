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
