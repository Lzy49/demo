// 泛型
// <T>  泛型函数定义
// value:T 表示函数接收泛型，
// :T 表示函数返回值为泛型
// 此时该函数的返回值与传入值的类型应当相同

function log<T>(value: T): T {
  // return value +' '; // 报错
  return value;
}
log(1);

// 泛型函数类型
type LogType = <T>(v: T) => T;
let log2: LogType = (x) => {
  // return x + 1 // 报错因为类型中定义了返回值为泛型类型所以不能设置值返回number类型
  return x;
};
// 泛型接口 （仅约束函数）
interface LogInterFace1 {
  <T>(value: T): T;
}
// 泛型接口 （约束所有值）
interface LogInterFace2<T> {
  (value: T): T;
}

// 利用泛型接口定义函数（仅约束函数）
let log31: LogInterFace1 = (value) => {
  return value;
};
// 利用泛型接口定义函数（约束该接口所有值，必须有默认类型）
let log32: LogInterFace2<string> = (value) => {
  // 在使用泛型接口定义函数时如果定义泛型时没有定义默认类型，则必须给函数定义默认类型
  return value;
};
// log32(123); // 报错
log32('123');

// 泛型类
class LogClass<T> {
  set(value: T) {
    return value;
  }
}
const logClass1 = new LogClass();
logClass1.set('123');
const logClass2 = new LogClass<number>();
// logClass2.set('123') // 报错因为限制了 number 类型
logClass2.set(123);

// 泛型约束
interface IsArray {
  length: number;
}
class LogClass3<D extends IsArray> {
  // static get(numb :D){ // 报错 静态成员不能引用类类型参数。

  // }
  set(arr: D) {
    return arr.length;
  }
}
let logClass3 = new LogClass3();
// logClass3.set(123) // 报错因为没有length
logClass3.set('123'); // 成功因为 string 类型有 length
