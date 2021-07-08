/**
 * 利用 class 写 Promise
 */

// promise 的 3 种 状态
const PENDING = 'pending'; // 执行中
const RESOLVED = 'resolved'; // 成功
const REJECTED = 'rejected'; // 失败

class MyPromise {
  constructor(fun) {
    this.value = '';
    this.resolveCallbacks = [];
    this.rejectCallbacks = [];
    this.finallyCallbacks = [];
    this.state = PENDING;
    try {
      fun(this.#resolve, this.#reject);
    } catch (res) {
      this.#reject(res);
    }
  }
  #resolve = (res) => {
    setTimeout(() => {
      this.state = RESOLVED;
      this.value = res;
      this.resolveCallbacks.forEach((item) => item());
      this.finallyCallbacks.forEach((item) => item());
    });
  };
  #reject = (res) => {
    setTimeout(() => {
      this.state = REJECTED;
      this.value = res;
      this.rejectCallbacks.forEach((item) => item());
      this.finallyCallbacks.forEach((item) => item());
    });
  };
  then(resolved, rejected) {
    /**
     * - 判断 状态
     * - 成功&失败状态  返回内容
     * - 进行状态 将 成功和失败函数 记入回调函数组中
     */
    const onResolve = typeof resolved !== 'function' ? (v) => v : resolved;
    const onReject = typeof rejected !== 'function' ? undefined : rejected;
    // 若现在还没在执行中则记录下
    if (this.state === PENDING) {
      return new MyPromise((resolve, reject) => {
        this.resolveCallbacks.push(() => {
          try {
            resolve(onResolve(this.value));
          } catch (res) {
            reject(res);
          }
        });
        this.rejectCallbacks.push(() => {
          try {
            if (onReject) {
              resolve(onReject(this.value));
            } else {
              reject(this.value);
            }
          } catch (res) {
            reject(res);
          }
        });
      });
    }
    if (this.state === RESOLVED) {
      return new MyPromise((resolve) => {
        resolve(onResolve(this.value));
      });
    }
    if (this.state === REJECTED) {
      return new MyPromise((resolve, reject) => {
        resolve(onReject(this.value));
      });
    }
  }
  finally(fun) {
    this.finallyCallbacks.push(() => {
      fun();
      return this;
    });
  }
  catch(fun) {
    return this.then(null, fun);
  }
  static all(list) {
    if (!Array.isArray(list)) {
      console.error('传入内容不正确');
      return false;
    }
    return new MyPromise((resolve, reject) => {
      let result = {};
      list.forEach((item, index) =>
        item
          .then((res) => {
            result[index] = res;
            let v = Object.values(result)
            if (list.length === v.length) {
              resolve(v);
            }
          })
          .catch(reject)
      );
    });
  }
}
/**
 * test
 */
let a = new MyPromise((resolve, reject) => {
  if (new Date().getTime() % 2 === 0) {
    resolve(true);
  } else {
    reject(false);
  }
})
  .then(
    (res) => {
      console.log('成功', res);
    }
    // (res) => {
    //   console.log('失败', res);
    // }
  )
  .catch((res) => {
    console.log('失败了！！', res);
  });

let b = new MyPromise((resolve, reject) => {
  setTimeout(function () {
    resolve('b');
  }, 3000);
});
let c = new MyPromise((resolve, reject) => {
  setTimeout(function () {
    resolve('c');
  }, 1000);
});

MyPromise.all([b, c])
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log(res);
  });
