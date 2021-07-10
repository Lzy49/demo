/**
 * WeakMap
 * - 原型方法
 *  - set
 *  - has
 *  - delete
 *  - get
 */
let keys = {
  key1: {},
  key2: {},
  key3: {},
  key4: {},
};
let list = new WeakMap([
  [keys.key2, '2'],
  [keys.key3, '3'],
  [keys.key4, '4'],
]);
function setFun() {
  list.set(keys.key1, '1');
}
function getFun() {
  console.log(list.get(keys.key1));
}
function deleteFun() {
  list.delete(keys.key2);
}
function characteristicFun() {
  delete keys.key1;
  console.log(list.get(keys.key1));
}
