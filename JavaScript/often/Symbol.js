/**
 * 关于 Symbol 的 方法和系统给定的 Symbol
 * - 创建
 *  - Symbol()
 *  - Symbol(tag)
 *  - Symbol.for(key)
 * - 特性
 *  - Symobl 不相等
 * - 创建 相等的 Symbol
 *  - Symbol.for(key)
 * - 获取 Symbol 的 key
 *  - Symbol.keyFor(Symbol)
 */
function setSymbol() {
  const s1 = Symbol();
  console.log(s1);
  const s2 = Symbol('标签');
  console.log(s2);
}
function characteristicFun() {
  const s1 = Symbol();
  const s2 = Symbol();
  console.log(s1 == s2);
}
function setEqSymbol() {
  const s1 = Symbol.for('key1');
  const s2 = Symbol.for('key2');
  const s3 = Symbol.for('key1');
  console.log(s1 === s2, s1 === s3); // => false , true
}
function getKey() {
  const s1 = Symbol.for('key1');
  console.log(Symbol.keyFor(s1)); //=> key1
}
/**
 * Symbols
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
iteratorFun();
async function iteratorFun() {
  // iterator
  let list = [1, 2, 3, 4];
  console.log(list[Symbol.iterator]);
  // asyncIterator
  class AsyncP {
    constructor(...ages) {
      this.list = [...ages];
    }
    [Symbol.asyncIterator] = function () {
      const that = this;
      return (function* () {
        for (let i in that.list) {
          yield new Promise((resolve) => {
            setTimeout(() => {
              resolve(that.list[i]);
            }, i * 500);
          });
        }
      })();
    };
  }
  let v1 = new AsyncP(1, 2, 3, 4, 5, 5);
  for await (let v of v1[Symbol.asyncIterator]()) {
    console.log(v);
  }
}
matchFun()

function matchFun() {
  const regexp1 = /foo/;
  regexp1[Symbol.match] = false;
  console.log('/foo/'.startsWith(regexp1));
  console.log('/baz/'.endsWith(regexp1))
}
function replaceFun(){
  class Replace1 {
    constructor(value) {
      this.value = value;
    }
    [Symbol.replace](string) {
      console.log(this.value)
      return `s/${string}/${this.value}/g`;
    }
  }
  
  console.log('foo'.replace(new Replace1('bar')));
  // expected output: "s/foo/bar/g"
  
}