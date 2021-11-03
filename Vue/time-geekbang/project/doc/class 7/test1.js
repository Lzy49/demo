'use strict';
// 响应式实现
// 1 实现 a 依赖 b， b 更新时候 a 更新
function test1() {
  let a, b;
  function setA() {
    a = b * 2;
  }
  b = 10;
  setA();
  console.log(b, a);
  b = 20;
  setA();
  console.log(b, a);
}
// 2 实现 a 依赖 b ， b 更新时候 自动 a 更新 <vue 2 实现方案>
// 缺陷 删除  b ， a 依然存在
function test2() {
  let a;
  const tree = {};
  function setA() {
    a = tree.b * 2;
  }
  Object.defineProperty(tree, 'b', {
    get() {
      return tree._b;
    },
    set(v) {
      tree._b = v;
      setA();
    },
    configurable: true
  });
  tree.b = 10;
  console.log(a, tree.b);
  tree.b = 20;
  console.log(a, tree.b);
  delete tree.b;
  console.log(a, tree.b);
}

// 3 修补删除缺陷使用 Proxy <vue 3 实现方案>
function test3() {
  let a;
  const tree = { b: 10 };
  function setA() {
    a = tree.b * 2;
  }
  function reactive(obj) {
    return new Proxy(obj, {
      get(...args) {
        return Reflect.get(...args);
      },
      set(target, key, value) {
        Reflect.set(target, key, value);
        if (key === 'b') {
          setA();
        }
      },
      deleteProperty(target, key) {
        Reflect.deleteProperty(target, key);
        if (key === 'b') {
          setA();
        }
      }
    });
  }
  const treeProxy = reactive(tree);
  treeProxy.b = 10;
  console.log(treeProxy.b, a); // 10 , 20
  treeProxy.b = 20;
  console.log(treeProxy.b, a); // 20 , 40
  delete treeProxy.b;
  console.log(treeProxy.b, a); // undefined , NaN
}
test3();
