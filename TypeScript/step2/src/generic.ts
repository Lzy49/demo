(function () {
  function identity<T>(arg: T): T {
    return arg;
  }
  // identity<string>(123) // error
  identity<string>('123'); // ok
})();

// 双抽象值
(function () {
  function identity<T, K>(array: T, key: K): Boolean {
    return false;
  }
  // identity<string[], number>([1, 2, 3, 4], 1); //error
  identity<number[], number>([1, 2, 3, 4], 1); //ok
});
// 类型推测
(function () {
  function identity<T, K>(array: T, key: K): K {
    return key;
  }
  identity([1, 2, 3, 4], 1); //ok
});
// 类型约束
(function () {
  interface Sizeable {
    size: number;
  }
  function identity<T extends Sizeable>(queue: T): unknown {
    console.log(queue.size);
    return;
  }
  // identity(new Array()) // error
  identity(new Map()); // ok
  identity(new Set()); // ok
  identity({
    // ok
    size: 10
  });
});
// 泛型工具
// - typeof
(function () {
  const People = {
    name: '张飞',
    age: 19
  };
  interface IPeople {
    nackname: string;
    age: number;
  }
  function logInfo<T extends typeof People | IPeople>(people: T) {
    console.log(people);
  }
  logInfo({
    name: '张飞',
    age: 19
  });
  logInfo({
    nackname: '张飞',
    age: 19
  });
  type LogInfoType = typeof logInfo;
  let logInfo2: LogInfoType = (v) => {
    console.log(v.age);
  };
})();
// - keyof 获取某种类型的所有 key，返回一个联合类型
(function () {
  interface User {
    name: string;
    age: number;
    sex: '男' | '女';
  }
  function logUserInfo<T extends keyof User>(key: T, info: User) {
    console.log(info[key]);
  }
  logUserInfo('age', {
    name: '张三丰',
    age: 19,
    sex: '男'
  });
  // logUserInfo('cc', { // error
  //   name: '张三丰',
  //   age: 19,
  //   sex: '男'
  // });
})();
