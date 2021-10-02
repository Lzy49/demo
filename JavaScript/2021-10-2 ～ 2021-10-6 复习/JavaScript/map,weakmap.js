
// keys
const FUNKEY = () => 1;
const OBJKEY = { name: 'key', test: { name: '123' } };
// Map
// 创建
const map1 = new Map();
const map2 = new Map([
  ['key1', 'value1'],
  [FUNKEY, 'value2'],
  [OBJKEY, 'value3']
]);
// 设置&修改值
map1.set('key1', 'value');
map1.set(FUNKEY, 'value2');
// 访问值
console.log(map1.get(FUNKEY)); // value2
// 删除值
map1.delete('key1');
// 判断
console.log(map1.has('key1')); // false
// 清空值
map1.clear();
// 统计 map 中有多少值
console.log(map1.size); // 0
console.log(map2.size); // 3
// map 迭代
console.log(map1.keys())
console.log(map1.values())
console.log(map1.entries())
// weakmap
// 创建
const weakmap1 = new WeakMap();
const weakmap2 = new WeakMap([[OBJKEY.test, 'v2']]);
// 设置值
weakmap1.set(OBJKEY, 'v1');
// 访问值
console.log(weakmap1.get(OBJKEY)); // v1
// 删除值
weakmap1.delete(OBJKEY);
// 特性
// 1. key 必须是引用类型
// 2. key 销毁时，对应值也会销毁
// 3. 没有 size
console.log(weakmap2.get(OBJKEY.test));
delete OBJKEY.test;
console.log(weakmap2.get(OBJKEY.test));
