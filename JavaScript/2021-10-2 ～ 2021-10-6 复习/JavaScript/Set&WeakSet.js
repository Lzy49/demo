// Set
const OBJKEY = {
  name: 'key',
  test: {}
};
// 创建
const set = new Set([1, 2, 3, 4, 5, 6]);
const set2 = new Set();
// 统计 Set 中 有多少内容
console.log(set.size) // 6
// 判断
console.log(set.has(OBJKEY.test)) // false 
// 新增
set.add(10)
// 删除
set.delete(10)
// 迭代
set.keys();
set.values();
set.entries();
// 清空
set.clear();
// weak Set
const weakSet = new WeakSet();
// 新增
weakSet.add(OBJKEY.test)
// 判断
weakSet.has(OBJKEY.test)
// 删除
weakSet.delete(OBJKEY.test)
// 特性
// 1. Set 不可能存储相同的值 
// 2. weakSet 不能存非引用类型值
// 3. weakSet 中的值被回收时，weakSet 中的也会被回收
weakSet.add(OBJKEY.test)
console.log(weakSet.has(OBJKEY.test)) // true
delete OBJKEY.test
console.log(weakSet.has(OBJKEY.test)) // false 
