/**
 * 关于 Object 的方法
 */
/**
 * Object 属性特性
 */
const properties = {
  value: '值',
  get: '计算属性 get',
  set: '计算属性 set',
  configurable: '可配置',
  enumerable: '可枚举',
  writable: '可编辑',
};
/**
 * 静态方法
 * - 拼接
 *  - assign(target,...sources) // => target
 * - 设置原型
 *  - Object.create(prototype,config) //=> new Object
 *  - Object.setPrototypeOf(target,prototype) //=> target
 * - 设置特性
 *  - Object.defineProperty(target,key,property)
 *  - Object.defineProperties(target,propertys)
 * - 获取特性
 *  - Object.getOwnPropertyDescriptor(object,key)
 * - 获取原型
 *  - Object.getPrototypeOf(object)
 * - 获取属性
 *  - Object.getOwnPropertyNames(object)
 *  - Onject.getOwnPropertySymbols(object)
 * - 迭代
 *  - Object.keys(object)
 *  - Object.value(object)
 *  - Object.entries(object)
 * - 冻结
 *  - Object.freeze(object)
 *  - Object.seal(object)
 *  - Object.preventExtensions
 * - 判断冻结
 *  - Object.isExtensible
 *  - Object.isFrozen
 *  - Object.isSealed
 * - 判断是否存在
 */
function assign() {
  let o = { name: '张三' };
  console.log(Object.assign(o, { age: 14 }, { sex: '男' }));
  console.log(o);
}
function create() {
  let o = { name: '我是原型' };
  let o1 = Object.create(o, {
    title: {
      value: 'name',
      writable: true,
      enumerable: true,
      configurable: true,
    },
  });
  console.log(o1);
}
function setPrototypeOf() {
  let o = { name: '我是本体' };
  let p = { name: '我是原型' };
  Object.setPrototypeOf(o, p);
  console.log(o, o.__proto__.name);
}
function defineProperty() {
  let o = {};
  Object.defineProperty(o, 'name', {
    value: '张三',
    enumerable: true,
    writable: true,
    configurable: true,
  });
  console.log(o);
}
function defineProperties() {
  let o = {};
  Object.defineProperties(o, {
    name: {
      value: '张三',
      writable: true,
      configurable: true,
      enumerable: true,
    },
    age: {
      value: '18',
      writable: true,
      enumerable: true,
      configurable: true,
    },
    six: {
      value: '男',
      writable: true,
      configurable: true,
      enumerable: true,
    },
    grade: {
      value: '三年级',
      writable: true,
      configurable: true,
      enumerable: true,
    },
    address: {
      value: '北京',
      writable: true,
      configurable: true,
      enumerable: true,
    },
  });
  console.log(o);
  // writable,enumerable,configurable,property
}
function getOwnPropertyDescriptor() {
  let o = { name: 10 };
  let descriptor = Object.getOwnPropertyDescriptor(o, 'name');
  console.log(o, descriptor);
}
function getProtypeOf() {
  let o = Object.create({ name: '我是原型' });
  console.log(Object.getPrototypeOf(o));
}
function getOwnPropertyNames() {
  let o = { name: '张三' };
  console.log(Object.getOwnPropertyNames(o));
}
function getOwnPropertySymbols() {
  let o = { name: '张三', age: '18', [Symbol()]: '您好' };
  console.log(Object.getOwnPropertySymbols(o));
}
function iterator() {
  let o = { name: '张三', age: '18', [Symbol()]: '您好' };
  console.log(Object.entries(o));
  console.log(Object.keys(o));
  console.log(Object.values(o));
}
function freeze() {
  let o = { name: '张三' };
  Object.freeze(o);
  console.log(Object.isFrozen(o));
  console.log(Object.getOwnPropertyDescriptors(o));
  /*
    name: {
      value: '张三',
      writable: false,
      configurable: false
      enumerable: true,
    }
   */
}
function seal() {
  let o = { name: '张三' };
  Object.seal(o);
  console.log(Object.isSealed(o));
  console.log(Object.getOwnPropertyDescriptors(o));
  /*
    name: {
      value: '张三',
      writable: true,
      enumerable: true,
      configurable: false
    }
  */
}
function preventExtensions() {
  let o = { name: '张三' };
  Object.preventExtensions(o);
  console.log(Object.isExtensible(o));
  console.log(Object.getOwnPropertyDescriptors(o));
  /*
    {
      name: { value: '张三', writable: true, enumerable: true, configurable: true }
    }
   */
}
function is() {
  let o = { name: '张三' };
  console.log(Object.is(o, o)); //=> true
  console.log(Object.is(o, { name: '张三' })); //=> false
}
/**
 * 原型方法
 * 判断是否存在
 *  - hasOwnProperty('key') //=> Boolean
 * 原型链查询
 *  - isPrototypeOf()
 * 特性
 *  - propertyIsEnumerable(key) //=> Boolean
 */
let obj = {
  name: '张三',
  age: 19,
};
function hasOwnProperty() {
  console.log(obj.hasOwnProperty('name')); //=> true
}
function isPrototypeOf() {
  console.log(Object.prototype.isPrototypeOf(obj)); //=> true
}
function propertyIsEnumerable() {
  console.log(obj.propertyIsEnumerable('name'));
}
function string(){
  console.log(obj.toString())
  console.log(obj.toLocaleString())
}