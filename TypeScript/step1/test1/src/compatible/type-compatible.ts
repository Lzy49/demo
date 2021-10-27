// 类型推断
// 基本类型断言
let ta = 1; //  ta 类别为 number
// ta = '1' // 报错
let tb = [1, 2, 3, 4]; // tb 类型为 number[]
// tb[0] = '1' // 报错
const tc = (a = 1) => {
  console.log(a);
};
// tc('1') // 报错 tc 的参数因为默认值被推断为 数字类型
const td = (a = 1) => a;
// let td1:string = td() // 报错因为 td 的返回值被推断为数字类型，不能赋值给字符串类型
// 最佳通用类型断言
let te = [1, '2'];
// te[0] = {} // 报错 因为 te 被推断为 最佳通用属性`number|string`
// 上下文类型推断
document.body.onclick = (e) => {
  // e.cc  = 1 // 报错 因为 onclick 事件所以 e被推断为使click 事件值，而该值中没有cc 这个值
};
