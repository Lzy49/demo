/**
 * 关于 map 的常用操作
 *  - 属性
 *  - size => Number
 * - 原型方法
 *  - set(key,value) => Map
 *  - get(key) => vlaue
 *  - had(key) => Boolean
 *  - delete(key) => Boolean
 *  - clear() => undefined
 *  - 迭代器方法
 *   - keys() => iterator
 *   - values() => iterator
 *   - entries() => iterator
 *   - Symobl.iterator => iterator
 */
const m = new Map([
  [1,'一'],[2,'二']
])
function setFun(){
  console.log( m.set(3,'三')) //=> Map(3) { 1 => '一', 2 => '二', 3 => '三' }
  console.log(m.size)
}
function getFun(){
  console.log(m.get(2))
}
function deleteFun(){
  console.log(m.delete(1))
  console.log(m.size)
}
function clearFun(){
  console.log(m.size)
}
function hasFun(){
  console.log(m.has(1))
}
function iteratorFun(){
  console.log(m.keys())
  console.log(m.values())
  console.log(m.entries)
  console.log(m[Symbol.iterator])
}