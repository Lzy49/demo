// 定义
{
  const arr1 = new Array(1);
  const arr2 = new Array('1');
  const arr3 = [1];
}
// 转换
{
  const arr1 = Array.of(1, 2, 3, 4, 5, 6);
  const arr2 = Array.from(new Set([1, 2, 3, 4, 5]));
  const arr3 = [1, 2, 3, 4, [1, 2, 3, 4, [1, 2, 3, 4]]].flat(3);
  const string1 = [1, 2, 3, 4, 5].join('-');
  arr1.toString();
  arr1.toLocaleString();
}
{
  const arr = [1, 2, 3, 4, 5];
  const thisValue = { name: 'thisValue' };
  const RESULT = 10;
  // 迭代器
  arr.keys();
  arr.entries();
  arr.values();
  arr[Symbol.iterator];
  // 迭代方法
  arr.map((item, key) => item, thisValue);
  arr.forEach((item, key) => item, thisValue);
  // 搜索
  arr.filter((item, key) => item, thisValue);
  arr.find((item, index, array) => item === 3, thisValue);
  arr.findIndex((item, index, array) => item === 3, thisValue);
  arr.indexOf(1);
  arr.lastIndexOf(1);
  // 断言
  arr.includes(1);
  arr.some((itme, key, array) => item === 1, thisValue);
  arr.every((item, key, array) => item > -2, thisValue);
  // 累计
  arr.reduce((result, item, key, array) => result + item, RESULT);
  arr.reduceRight((result, item, key, array) => result + item, RESULT);
  // 截取，修改
  arr.splice(0, 1, ...[0, 1]);
  arr.slice(0, 3);
  arr.concat([123]);
  // 堆栈
  arr.push(6);
  arr.pop();
  arr.unshift(-1);
  arr.shift();
  // 排序
  arr.reverse();
  arr.sort((value1, value2) => value1);
  // 复制
  const startIndex = 1,
    strStartIndex = 3,
    strEndIndex = 4;
  arr.copyWithin(startIndex, strStartIndex, strEndIndex);
}
// 其他
{
  Array.isArray([1, 2, 3, 4]);
}
