/**
 * Promise
 * - 静态方法
 * - 创建
 * - Promise.resolve 创建成功的Promise
 * - Promise.reject 创建失败的Promise
 * - 多 Promise 处理
 * - Promise.all([...Promises]) => Promise // 所有都成功返回成功
 * - Promise.allSettled([...Promises]) => Promise.resolve // 所有都运行完毕返回成功同时返回各自状态
 * - Promise.any([...Promises]) => Promise // 只要有一个成功就返回成功的那个
 * - Promise.race([...Promises]) => Promise // 只要有一个运行完毕就返回运行完毕的那个
 */
function resolve() {
  let p = Promise.resolve(true);
  p.then(
    (res) => {
      console.log('成功', res);
    },
    (res) => {
      console.log('失败', res);
    }
  );
}
function reject() {
  let p = Promise.reject(false);
  p.then(
    (res) => {
      console.log('成功', res);
    },
    (res) => {
      console.log('失败', res);
    }
  );
}
function all() {
  const p1 = Promise.resolve('成功-1');
  const p2 = Promise.reject('失败');
  const p3 = Promise.resolve('成功-2');
  Promise.all([p1, p2, p3])
    .then((res) => {
      console.log('-成功-', res);
    })
    .catch((res) => {
      console.log('-失败-', res);
    });
  Promise.all([p1, p3])
    .then((res) => {
      console.log('-成功-', res);
    })
    .catch((res) => {
      console.log('-失败-', res);
    });
}
function allSettled() {
  const p1 = Promise.resolve('成功-1');
  const p2 = Promise.reject('失败');
  const p3 = Promise.resolve('成功-2');
  Promise.allSettled([p1, p2, p3]).then((res) => {
    console.log(res);
  });
}
function any() {
  const p1 = Promise.resolve('成功-1');
  const p2 = Promise.reject('失败');
  const p3 = Promise.resolve('成功-2');
  Promise.any([p1, p2, p3]).then((res) => {
    console.log(res);
  });
}
function race() {
  const p2 = Promise.reject('失败');
  const p1 = Promise.resolve('成功-1');
  const p3 = Promise.resolve('成功-2');
  Promise.race([p2, p1, p3])
    .then((res) => {
      console.log('-成功-', res);
    })
    .catch((res) => {
      console.log('-失败-', res);
    });
}
/**
 * 原型方法
 * - then(resolved,rejected)
 * - catch(rejected)
 * - finally(fun)
 * 当 Promise 抛出失败后，被catch 后会抛出一个成功，如果没有被catch 则会一直返回上一个 Promise直到被catch，finally 有多少个都会执行。
 */
promiseThen();
function promiseThen() {
  let p = new Promise((resolve, reject) => {
    reject(false);
  });
  p.then(
    (res) => {
      console.log('成功', res);
    },
    (res) => {
      console.log('失败', res);
    }
  ).finally(res=>{
    console.log('我依然会执行')
  })
    .then((res) => {
      console.log('我是一个成功的Promise');
    })
    .catch((res) => {
      console.log('我是一个失败的Promise');
    }).finally(res=>{
      console.log('我依然会执行')
    })
}
function promiseCatch() {
  let p = Promise.reject(false);
  let d = p.catch((res) => {
    console.log('失败', res);
  });
  d.then((res) => {
    console.log('我是一个成功的Promise');
  });
}
function promiseFinally() {
  let p = Promise.reject(false);
  p.finally((res) => {
    console.log('我永远会执行', res);
  });
  let p2 = Promise.resolve(true);
  p2.finally((res) => {
    console.log('我永远会执行', res);
  });
}
