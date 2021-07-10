/**
 * 关于 set 的方法
 * - 属性
 * - size => Number
 * - 原型 方法
 *  - add => Set
 *  - has => Boolean
 *  - delate => Boolean
 *  - clear
 *   - 迭代器方法
 *    - values() => iterator
 *    - keys() => iterator
 *    - entries() => iterator
 *    - Symbol.iterator => iterator
 */
let list = new Set([1,2,3,4]);
function addFun(){
  console.log(list.add('一'))
}
function hasFun(){
  console.log(list.has(1))
}
function deleteFun(){
  console.log(list.delete(1))
}
function clearFun(){
  list.clear()
  console.log(list.size)
}
iteratorFun()
function iteratorFun(){
  console.log(list.keys())
  console.log(list.values())
  console.log(list.entries())
  console.log(list[Symbol.iterator]())
}