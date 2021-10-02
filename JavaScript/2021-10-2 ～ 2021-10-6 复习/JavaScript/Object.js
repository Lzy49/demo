{
  // 对象拼接
  const obj1 = { name: 'obj1' };
  const obj2 = { name: 'obj2' };
  Object.assign(obj1, obj2);
  // 创建对象
  const obj3 = Object.create(obj1, {
    name: {
      writable: true,
      configurable: true,
      enumerable: true,
      value: 'obj3'
    }
  });
  console.log(obj3);
  // 设置原型
  Object.setPrototypeOf(obj3, Object.prototype);
  // 获取 对象原型
  console.log(Object.getPrototypeOf(obj3));
}
{
  // 修改特性
  const obj = {};
  Object.defineProperty(obj, 'name', {
    value: 'obj',
    enumerable: true,
    writable: true,
    configurable: true
  });
  const obj2 = {};
  Object.defineProperties(obj2, {
    name: {
      value: 'obj2',
      enumerable: true,
      writable: true,
      configurable: true
    }
  });
  // 获取特性
  console.log(Object.getOwnPropertyDescriptor(obj2, 'name'));
  // 获取所有值的特性
  console.log(Object.getOwnPropertyDescriptors(obj2));
}
{
  // 获取对象属性
  const SYMBOL = Symbol(10);
  const user = Object.create(Object, {
    username: {
      value: 'name',
      enumerable: true,
      writable: true,
      configurable: true
    },
    password: {
      value: '12345'
    },
    [SYMBOL]: {
      value: 'sysbol'
    }
  });
  console.log(user);
  console.log(Object.getOwnPropertyNames(user));
  console.log(Object.keys(user));
  console.log(Object.getOwnPropertySymbols(user));
  console.log(user.hasOwnProperty('username')); //true
  console.log(user.hasOwnProperty('password')); //true
  console.log(user.hasOwnProperty(SYMBOL)); //true
}
{
  // 迭代器
  const obj = { name: 'obj', age: 19 };
  console.log(Object.keys(obj));
  console.log(Object.values(obj));
  console.log(Object.entries(obj));
}
{
  // 冻结数组
  const obj = { name: 'obj', age: 18 };

  //级别1 -- 对象不可添加
  Object.preventExtensions(obj);
  console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
  // { value: 'obj', writable: true, enumerable: true, configurable: true }
  console.log(Object.isExtensible(obj)); // false
  //级别2 -- 对象不可配置
  Object.seal(obj);
  console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
  // { value: 'obj', writable: true, enumerable: true, configurable: false }
  console.log(Object.isSealed(obj)); // true
  //级别3 -- 对象不可添加，不可修改，不可枚举
  Object.freeze(obj);
  console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
  console.log(Object.isFrozen(obj)); // true
  //  {value: 'obj', writable: false, enumerable: true, configurable: false}
}
{
  const obj = { name: '张飞' };
  // 原型链查询
  console.log(Object.isPrototypeOf(obj)); //false
  console.log(Object.prototype.isPrototypeOf(obj)); //true
  // 属性是否可枚举
  console.log(obj.propertyIsEnumerable('name')); // true
}
