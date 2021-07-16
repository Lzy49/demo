/**
 * 关于 Proxy 的一些操作
 * - Proxy 的作用是给一个对象 进行包裹抛出一个新对象。对新对象的操作，会被Proxy 监听到。
 * - Proxy 只能检测第一层对象内容，不能进行深入的检测。如果想要深入的检测，可以使用递归来给内部的对象进行包裹
 */
function proxyTest1() {
  const obj = {
    name: '张飞',
    info: {
      age: 19,
      sex: '男'
    }
  };
  let newObj = new Proxy(obj, {
    set(target, property, value, receiver) {
      console.log('set', property);
      return Reflect.set(...arguments);
    },
    get(target, property, receiver) {
      console.log('get', property);
      return Reflect.get(target, property);
    }
  });
  newObj.name = '二十先生';
  console.log(newObj.name);
  newObj.info.age = 20;
  console.log(newObj.info.age);
}
function proxyTest2() {
  function objToProxy(obj, handler) {
    for (index in obj) {
      const item = obj[index];
      obj[index] = typeof item === 'object' ? objToProxy(item, handler) : item;
    }
    return new Proxy(obj, handler);
  }
  const user = {
    name: '张飞',
    info: {
      age: 19,
      sex: '男',
      job: '工人'
    },
    skill: {
      sayHi() {
        console.log('你好');
      }
    }
  };
  const newUser = objToProxy(user, {
    get(target, property) {
      return Reflect.get(...arguments);
    },
    set(target, property, value) {
      if (property === 'age' && typeof value === 'number') {
        return Reflect.set(...arguments);
      }
      return undefined;
    }
  });
  newUser.info.age = '22';
  console.log(newUser.info.age);
  newUser.info.age = 22;
  console.log(newUser.info.age);
}
/**
 * 关于 handler 的一些配置项
 * - getPrototypeOf();
 */
function handlerObjectTest() {
  let user = {
    name: '张三',
    age: 19,
    sayHi() {
      console.log('你好');
    }
  };
  let newUser = new Proxy(user, {
    getPrototypeOf() {
      console.log('--- getPrototypeOf ---');
      return Reflect.getPrototypeOf(...arguments);
    },
    setPrototypeOf() {
      console.log('--- setPrototypeOf ---');
      return Reflect.setPrototypeOf(...arguments);
    },
    set() {
      console.log('--- set ---');
      return Reflect.set(...arguments);
    },
    get() {
      console.log('--- get ---');
      return Reflect.get(...arguments);
    },
    has() {
      console.log('--- has ---');
      return Reflect.has(...arguments);
    },
    deleteProperty() {
      console.log('--- deleteProperty ---');
      return Reflect.deleteProperty(...arguments);
    },
    ownKeys() {
      console.log('--- ownKeys ---');
      return Reflect.ownKeys(...arguments);
    },
    getOwnPropertyDescriptor() {
      console.log('--- getOwnPropertyDescriptor ---');
      return Reflect.getOwnPropertyDescriptor(...arguments);
    },
    defineProperty() {
      console.log('--- defineProperty ---');
      return Reflect.deleteProperty(...arguments);
    }
  });
  Object.setPrototypeOf(newUser, {});
  console.log(Object.getPrototypeOf(newUser) === Object.prototype);
  newUser.name = '刘备';
  console.log(newUser.name);
  console.log(Object.getOwnPropertyDescriptor(newUser, 'name'));
  Object.defineProperty(newUser, 'test', {
    value: '测试值',
    writable: true,
    configurable: true
  });
  console.log('test' in newUser);
  delete newUser.test;
  console.log(Object.getOwnPropertyNames(newUser));
}
handlerFunctionTest()
function handlerFunctionTest() {
  function User() {}
  const newUser = new Proxy(User, {
    apply() {
      console.log('--- apply ---')
      return Reflect.apply(...arguments);
    },
    construct() {
      console.log('--- construct --- ')
      return Reflect.construct(...arguments);
    }
  });
  let b = new newUser()
  newUser()
}
