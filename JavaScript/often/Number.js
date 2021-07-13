/**
 * Number 相关的操作与属性
 */

/**
 * 静态属性
 */
// attributeFun();
function attributeFun() {
  console.log(Number.length);
  console.log(Number.EPSILON); // 差值
  console.log(Number.MAX_SAFE_INTEGER); // 最大安全整数
  console.log(Number.MAX_VALUE); // 最大有效值 不安全
  console.log(Number.MIN_SAFE_INTEGER); // 最小安全整数
  console.log(Number.MIN_VALUE); // 最小有值 不安全
  console.log(Number.NaN); // NaN
  console.log(Number.NEGATIVE_INFINITY); // -Infinity
  console.log(Number.POSITIVE_INFINITY); // Infinity
}
/**
 * 静态方法
 * - 判断
 *  - isNaN 判断是否是NaN
 *  - isFinite 判断无穷大
 *  - isInteger 判断是否是整数
 *  - isSafeInteger 判断值是不是一个安全值
 * - 转换
 *  - parseFloat 字符串转浮数
 *  - parseInt 字符串转数字
 */
function functions() {
  console.log(Number.isNaN(NaN)); // => true
  console.log(Number.isFinite(10)); // => true
  console.log(Number.isFinite(Number.POSITIVE_INFINITY)); // =>  false
  console.log(Number.isInteger(10)); // =>  true
  console.log(Number.isInteger(1.2)); // =>  false
  console.log(Number.isSafeInteger(10)); // => true
  console.log(Number.isSafeInteger(Number.MIN_VALUE)); // => false
  console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)); // => true
  console.log(Number.parseFloat('10.00')); // => 10
  console.log(Number.parseFloat('10.10')); // => 10.1
  console.log(Number.parseInt('10.6')); // => 10
  console.log(Number.parseInt('a')); // => NaN
}

/**
 * 原型方法
 * - 转换
 *  - toExponential  // 转为科学计数法
 *  - toFixed(digits) // 转为小数保留 digits 位小数
 *  - toPrecision(precision) // 转为 指定有效整数长度为`precision` 的 科学计数法数字
 */
prototypeFuns();
function prototypeFuns() {
  const n = 1000.23;
  console.log(n.toExponential()); // => 1.00023e+3
  console.log(n.toFixed(2)); // => 1000.23
  console.log(n.toPrecision(10)) // => 1000.230000
  console.log(n.toPrecision(1)) // => 1e+3
}
