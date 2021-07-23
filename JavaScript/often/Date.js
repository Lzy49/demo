/**
 * Date
 * - Date.now() // => Number
 * - Date.parse(dateString) // =>
 * - Date.UTC(year,mothIndex,day,hours,minutes,seconds,millisecond)
 * - new Date() // 传入参数可以是时间戳，Date.parse 传入值 或 UTC 传入值
 */
console.log(Date.now());
console.log(Date.parse('2021-10-9 9:10:10 UTC')); // 1633770610000
console.log(Date.UTC(2021, 9, 9, 9, 10, 10)); // 1633770610000

/**
 * Date
 * - 获取
 * - 设置
 */
setDateItem();
function getDateItem() {
  const date = new Date();
  console.log(date.getFullYear());
  console.log(date.getMonth() + 1);
  console.log(date.getDate());
  console.log(date.getHours());
  console.log(date.getMinutes());
  console.log(date.getSeconds());
  console.log(date.getMilliseconds());
  console.log(date.getTime())
}
function setDateItem() {
  const date = new Date();
  date.setFullYear('1996');
  date.setMonth('04');
  date.setDate('09');
  date.setHours('5');
  date.setMinutes('14');
  date.setSeconds('19');
  console.log(date.toString());
}
