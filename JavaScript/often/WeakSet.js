/**
 * WeakSet
 * - 原型方法
 *  - add
 *  - get
 *  - delete
 */
let values = {
  key1: {},
  key2: {},
  key3: {},
};
let list = new WeakSet([values.key1, values.key2]);
function addFun() {
  list.add(values.key3);
}
function hasFun() {
  console.log(list.has(values.key1))
}
function deleteFun() {
  list.delete(values.key1);
}
function characteristicFun() {
  delete values.key2
  console.log(list.has(values.key2))
}
addFun()
hasFun()
deleteFun()
characteristicFun()