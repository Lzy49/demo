const symbol1 = Symbol(10);
const symbol2 = Symbol(10);
console.log(symbol1 === symbol2); // false
console.log(symbol1 === symbol1); // true
const symbol3 = Symbol.for(10);
const symbol4 = Symbol.for(10);
console.log(symbol3 === symbol4); // true
console.log(Symbol.keyFor(symbol4)); // 10
console.log(Symbol.keyFor(symbol1)); // undfined

/**
 * * Symbols
 * - 系统自带的一些Symbol
 *  - 存放迭代器的 Symbol // 注意 抛出的应该是个迭代器而不是生成器
 *   - Symobl.iterator
 *   - Symbol.asyncIterator
 *  - 正则 这些属性一般定义在 RegExp
 *   - Symbol.match => Boolean // 表示该字符串是不是一个正则
 *   - Symbol.replace => function // 返回一个 字符串，在 字符串调用 replace时，调用
 *   - Symbol.search => function // 返会一个 Number，在 字符串调用 search 时，调用
 *   - Symbol.split=> function // 返回一个数组 在字符串调用 split 时 调用
 *  - 其他
 *   -Symbol.hasInstance => function  // 判断某对象是否为某构造器的实例
 *   -Symbol.isConcatSpreadable => Boolean // 在 数组调用 concat 时是否被 打平
 *   -Symbol.unscopables => function // 是否被 with
 *   -Symbol.species => Function // 是个函数值属性，其被构造函数用以创建派生对象。
 *   -Symbol.toPrimitive => String //  返回字符串形式的内容，被默认转换时调用
 *   -Symbol.toStringTag => String // 在转换 为 字符串时使用 例如 [object String]
 */
