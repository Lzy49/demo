// 增加通用性
// 处理依赖
let subscriber = null; // 订阅方法
class Dep {
  constructor() {
    this.subscribers = new Set(); // 所有订阅
  }
  // 收集依赖
  depend() {
    subscriber && this.subscribers.add(subscriber);
  }
  // 执行所有订阅
  notice() {
    this.subscribers.forEach((item) => item());
  }
}
const targetMap = new WeakMap();
const getDep = (target, key) => {
  // 给整个树创建一个 依赖
  let depMap = targetMap.get(target);
  if (!depMap) {
    depMap = new Map();
    targetMap.set(target, depMap);
  }
  // 树的每一个值都创建一个依赖
  let dep = depMap.get(key);
  if (!dep) {
    dep = new Dep();
    depMap.set(key, dep);
  }
  return dep;
};
const reactive = (property) => {
  return new Proxy(property, {
    get(target, key) {
      const dep = getDep(target, key);
      dep.depend();
      return Reflect.get(target, key);
    },
    set(target, key, value) {
      const result = Reflect.set(target, key, value);
      const dep = getDep(target, key);
      dep.notice();
      return result;
    },
  });
};

const watchEffect = (fun) => {
  subscriber = fun;
  fun();
  subscriber = null;
};

// 试验
const tree = reactive({
  a: 10
});
let b = 0;
watchEffect(() => {
  b = tree.a * 10;
  console.log(b);
});
