// javascript
let arr = [1, 2, 3, 4];
/**
 * 静态方法
 * - 判断
 *  - Array.isArray
 * - 创建
 *  - Array.from()
 *  - Array.of()
 */
{
  // 判断变量是不是一个数组
  Array.isArray(arr); // => true
}

{
  // 创建新数组
  let set = new Set([1, 2, 3, 4, 5]);
  let arr1 = Array.from(set);
  let arr2 = Array.of(...set);
}
/**
 * 原型方法 之
 * - 迭代器
 *  - keys(); //=>Iterator
 *  - values(); //=>Iterator
 *  - entries(); //=>Iterator
 *  - Symbol.iterator(); //=Iterator
 * - 循环
 *  - forEach(fun,this); //=>undefined
 *  - map(fun,this); //=>Array
 * - 查询
 *  - find(fun,this) //=>item
 *  - findIndex(fun,this) //=> index
 *  - filter(fun,this) //=> Array
 * - 下标
 *  - indexOf(item) //=>Number
 *  - lastIndexOf(item)  //=> Number
 * - 转换
 *  - join(separator) //=> String
 *  - toString() //=> String
 *  - toLocaleString() //=> String
 * - 断言
 *  - includes(item) //=> Boolean
 *  - some(function,thisValue) //=> Boolean
 *  - every(function,thisValue) //=> Boolean
 * - 截取
 *  - slice(startIndex,lastIndex) // => Array
 * - 合计
 *  - reduce(function(result,value,key,array),result) => result
 *  - reduceRight(function(result,value,key,array),result) => result
 * - 拼接
 *  - concat(array) // => Array
 */
{
  let iterator1 = arr.keys();
  let iterator2 = arr.values();
  let iterator3 = arr.entries();
  let iterator4 = arr[Symbol.iterator]();
}
{
  // 循环
  // forEach
  arr.forEach((item) => {}, { thisValue: 'this' });
  // map
  let arr1 = arr.map(
    (item) => {
      return 'is_' + item;
    },
    { thisValue: 'this' }
  );
}
{
  // 查找
  arr.find((item) => item === 1, { thisValue: 'this' });
  arr.findIndex((item) => item === 1, { thisValue: 'this' });
  arr.filter((item) => item > 1, { thisValue: 'this' });
}
{
  // 下标
  arr.lastIndexOf(1);
  arr.includes(1);
}
{
  // 转换
  arr.join('-');
  arr.toString();
  arr.toLocaleString();
}
{
  // 断言
  arr.indexOf(1);
  arr.some((item) => item === 1, { thisValue: 'this' });
  arr.every((item) => item === 1, { thisValue: 'this' });
}
{
  // 截取
  let b = arr.slice(1, 2);
  console.log(b, arr);
}
{
  // 合计
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let v = arr.reduce((result, value, key, array) => {
    return result + value;
  }, 0);
  let v2 = arr.reduceRight((result, value, key, array) => result + value, 0);
}
{
  // 拼接
  let b = arr.concat([1,2,3,4,5,[6,7]])
  console.log(b,arr)
}
/**
 * 原型方法 之 修改器方法
 * - 栈
 *  - push(item) //=> Array.length
 *  - pop //=> endItem
 *  - unshift //=> Array.length
 *  - shift //=> startItem
 * - 裁切
 *  - splice(index,length,...newItem) //=> Array
 * - 复制
 *  - copyWithin(startIndex,strStartIndex,strEndIndex) //=> Array
 * - 填充
 *  - fill(value,start,end) //=> Array
 * - 排序
 *  - reverse() //=> Array
 *  - sort(function(v1,v2)) //=>Array
 */
{
  // 栈
  let arr1 = [1, 2, 3, 4];
  arr1.push(5);
  arr1.pop();
  arr1.unshift(0);
  arr1.shift();
}
{
  // 裁切
  let arr1 = [1, 2, 3, 4, 5];
  arr1.splice(1, 2, '二', '三');
  console.log(arr1);
}
{
  // 复制
  let arr1 = [1,2,3,4,5,6]
  let b = arr1.copyWithin(1,5,6)
  console.log(b,arr1)
}
{
  // 填充
  let arr1 = [1,2,3,4,5,6]
  let b = arr1.fill('一',0,10)
  console.log(b,arr1)
}
{
  // 排序
  let arr1 = [1,2,3,4,5]
  let b = arr1.sort((item1, item2) => item2 - item1);
  let c = arr1.reverse();
}
