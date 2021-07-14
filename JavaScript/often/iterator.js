/**
 * 迭代器 和 生成器
 * - 生成器 用来生成迭代器的方法
 * - 迭代器 可以一次次迭代的值
 *  - 迭代器的方法
 *  - prototpye.next(value) // 传递 value 到迭代器内部，yield 接收。 抛出一个对象 {value,done}
 *  - prototype.return(value) // 结束迭代器罪恶的一生 抛入最后一个值 value
 *  - prototype.throw(value) // 结束迭代器罪恶的一生 并抛入一个错误，如果该错误被 catch 信息是 value
 */
function iteratorTest() {
  function* Iterator() {
    try {
      let v = yield 1;
      console.log('当然，我是接收过来的值' + v);
      yield 2;
    } catch (res) {
      console.log(res);
    }
  }
  let iterator = Iterator();
  console.log(iterator.next()); // 第一个 next 没办法传值，因为第一个是从函数头走到函数 第一个 yield 的，没的接收，但是第一个值可以直接通过初始化传入
  console.log(iterator.next('先生们你们好呀'));
  console.log(iterator.throw('你有毛病'));
  console.log(iterator.return('你完了'));
}
/**
 * yield 可以抛出每次迭代的值，他紧跟着的是 迭代器 next 的 value
 * yield * 是 yield 是同胞兄弟。但是 yield * 是用来抛出一组 迭代值的。它接收一个迭代器，并一个一个抛出它的每一次迭代
 */
// yieldTest();
function yieldTest() {
  function* sonIterator() {
    yield 1;
    yield 2;
    yield 3;
  }
  function* dadIterator() {
    yield 0;
    yield* sonIterator();
    return 4;
  }
  let iterator = dadIterator();
  console.log(iterator.next()); // => 0
  console.log(iterator.next()); // => 1
  console.log(iterator.next()); // => 2
  console.log(iterator.next()); // => 3
  console.log(iterator.next()); // => 4
  for (item of dadIterator()) {
    console.log(item); // 0 1 2 3
  }
}

/**
 * 简单模拟 迭代器
 * - 迭代器 可以执行 无数子 next 方法，该方法 返回两个值 value 和 done ，done 表示的是否有值。其实迭代器就是有一个next 方法的对象
 */
// iteratorFun();
function iteratorFun() {
  class MyIterator {
    constructor() {
      this.maxValue = 100;
      this.value = 0;
    }
    #value = undefined;
    next() {
      if (++this.value < this.maxValue) {
        return { value: this.value, done: false };
      }
      return { value: this.#value, done: true };
    }
    [Symbol.iterator]() {
      return this;
    }
  }
  let myIterator = new MyIterator();
  let can = true;
  while (can) {
    let value = myIterator.next();
    console.log(value);
    can = !value.done;
  }
  for (const item of new MyIterator()) {
    console.log(item);
  }
}