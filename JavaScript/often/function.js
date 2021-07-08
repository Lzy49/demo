/**
 * 关于 function 的一些操作
 */
/**
 * 原型方法
 * - apply(thisvalue,[...ags]) => return
 * - call(thisvalue,...ages) => return
 * - bind(thisvalue,...ages) => function
 */
function prototypeFun() {
  function fun(age) {
    console.log(`${this.name} 今年 ${age}`);
  }
  fun.apply({ name: '张三' }, [19]);
  fun.call({ name: '李四' }, 19);
  const newfun = fun.bind({ name: '王五' }, 19);
  newfun();
}
/**
 * arguments
 * - callee(this,...ages) //=> function
 * - length -> Number
 * - Symbol.iterator -> iterator
 */
function argumentsFun() {
  function fun() {
    console.log(Array.from(arguments)); //=>[ 1, 2, 3, 4, 5, 6 ]
    console.log(arguments.length); //=>6
    console.log(arguments[Symbol.iterator]); //=>[Function: values]
    let i = arguments[Symbol.iterator](); //=>{ value: 1, done: false }
    console.log(i.next());
  }
  fun(1, 2, 3, 4, 5, 6);
}
// argumentsFun();