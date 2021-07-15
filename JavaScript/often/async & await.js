/**
 * async 和 await
 * - 定义 async 的函数是一个异步函数，在该函数中可以使用 await 来等待 Promise 执行完毕，再继续向下执行。
 * - await 只能 在 async 函数中使用
 * - await 等待的 Promise 返回结果如果是 reject 就会停止执行下面的所有代码，并在最近的 catch 被捕捉
 */
// test();
async function test() {
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
  let rejectP = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('我是错误信息');
    }, 1000);
  });
  try {
    let res2 = await rejectP;
    let res1 = await p;
    console.log(res1);
  } catch (res) {
    console.log(res);
  }
}
/**
 * 简单实现 async 和 await
 * - 在每一个 Promise resolve 以后 执行 下一个 Promise
 * - 当有 Promise reject 则 抛出错误
 */
test2();
function test2() {
  function myAsync(generator) {
    // 得到 迭代器
    let iterator = generator();
    // 对 迭代器进行一个
    handle(iterator.next());

    function handle(result) {
      if (result.done === true) {
        return;
      }
      result.value
        .then((res) => {
          handle(iterator.next(res));
        })
        .catch((err) => {
          iterator.throw(err);
        });
    }
  }
  myAsync(function* () {
    try {
      let v1 = yield new Promise((resolve) =>
        setTimeout(() => {
          resolve(1);
        }, 1000)
      );
      let v2 = yield new Promise((resolve) =>
        setTimeout(() => {
          resolve(2);
        }, 2000)
      );
      let v3 = yield new Promise((resolve) =>
        setTimeout(() => {
          resolve(3);
        }, 3000)
      );
      let v4 = yield new Promise((resolve) =>
        setTimeout(() => {
          resolve(4);
        }, 4000)
      );
      console.log(v1, v2, v3, v4);
      let v5 = yield new Promise((resolve) =>
        setTimeout(() => {
          reject(5);
        }, 4000)
      );
      console.log(v1, v2, v3, v4, v5);
    } catch (res) {
      console.log('报错了', res);
    }
  });
}
