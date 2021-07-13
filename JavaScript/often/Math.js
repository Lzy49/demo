/**
 * 关于 Math 的一些常用方法与属性
 */
/**
 * 静态属性
 * - Math.PI // π
 */
function attributeFun() {
  console.log(Math.PI); // => 3.141592653589793
}
/**
 * 静态方法
 * - 取整
 *  - ceil 向上取整
 *  - round 四舍五入取整
 *  - floor 正数 向下取整 ，负数 向下取整
 *  - trunc 正数 向下取整 ，负数 向上取整
 * - 比较
 *  - Math.max 取最大值
 *  - Math.min 取最小值
 * - 计算
 *  - pow 平方
 * - 特定值
 *  - random 生成一个 0 ～ 1 之间的随机值
 */
function rounding() {
  console.log(Math.ceil(10.22)); // => 11
  console.log(Math.round(10.22)); // => 10
  console.log(Math.round(10.5)); // => 11
  console.log(Math.round(-10.5)); // => -10
  console.log(Math.floor(-10.5)); // => -11
  console.log(Math.floor(10.33)); // => 10
}
random();
function getValue() {
  console.log(Math.max(1, 2, 3, 4, 5)); // => 5
  console.log(Math.min(1, 2, 3, 4, 5)); // => 1
}
function pow() {
  console.log(Math.pow(3, 3)); // => 27
  console.log(3 ** 3) // => 27
}

function random(){
  console.log(Math.random()) // => 0.4079390994377954
}