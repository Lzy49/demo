// 创建 Promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(true);
  }, 1000);
});
const resolvePromise = Promise.resolve('result');
const rejectPromise = Promise.reject('result');

rejectPromise.catch((res) => {
  console.log(res);
});
// promise prototype 方法
promise.then(
  (res) => {
    console.log('成功回调', res);
  },
  (res) => {
    console.log('失败回调');
  }
);
promise.catch((res) => console.log('失败回调'));
promise.finally((res) => {
  console.log('不管怎么样都会掉调');
});
// promise 链
// promise 的 then 和 catch 都会返回一个 Prmise 。该Prmise 依据 then ，catch 方法的返回值形成
// - 如果是一个非Promise 则会返回一个 Promise.resolve();
// - 如果返回一个 Promise 则返回这个 Promise
// 好处： 1. 避免回调地狱
promise
  .then(
    (res) =>
      new Promise((resolve, reject) => {
        resolve();
      })
  )
  .then((res) => 123);
// 对一堆 Promise 的处理
const promiseQueue = [
  new Promise((resolve, reject) => {
    reject('失败');
  }),
  new Promise((resolve, reject) => {
    resolve('成功-1');
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('成功-2');
    }, 1000);
  })
];
// Promise.all 所有成功返回成功数组，失败一个返回失败
Promise.all(promiseQueue)
  .then((res) => {
    console.log('promise.all 成功', res);
  })
  .catch((res) => {
    console.log('promise.all 失败', res);
  });
// Promise.allSettled 所有 都执行完毕后返回一个成功，数组中每一个内容都有状态
Promise.allSettled(promiseQueue)
  .then((res) => {
    console.log('promise.allSettled 成功', res);
  })
  .catch((res) => {
    console.log('promise.allSettled 失败', res);
  });
// Promise.any 返回第一个成功的
Promise.any(promiseQueue).then(res=>{
  console.log('promise.any',res)
})
// Promise.race 返回第一个执行完毕的
Promise.race(promiseQueue)
  .then((res) => {
    console.log('promise.race 成功', res);
  })
  .catch((res) => {
    console.log('promise.race 失败', res);
  });
