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
  interface Article1 {
    [key: string]: string;
  }
  type keys1 = keyof Article1;
  let k1: keys1 = '1';
  let k2: keys1 = 1;
  interface Article2 {
    [key: number]: string;
  }
  type keys2 = keyof Article2;
  // let k3: keys2 = '1'; // error
  let k4: keys2 = 1;
})();

(function () {
  // - keyof 获取基本类型 key
  let K1: keyof boolean;
  K1 = 'valueOf'; // ok
})();

// in
(function () {
  type Keys = 'name' | 'age' | 'sex';
  type User = {
    [key in Keys]: any;
  };
});

// infer
(function () {
  type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
  // let b: ReturnType<() => string> = 13; // error
  let c: ReturnType<() => string> = '13'; // ok
  type ArrayTypes<T> = T extends (infer E)[] ? E : any;
  let d: ArrayTypes<['a', 'b', 1, string]>; // d 的类型为 string | 1
  type Bar<T> = T extends { a: (x: infer U) => void; b: (x: infer U) => void }
    ? U
    : never;
  type T21 = Bar<{ a: (x: number) => void; b: (x: number) => void }>;
  let e: T21 = 123;
});

// extends
(function () {
  type User = {
    age: number;
    name: string;
  };
  function test<T extends User>(user: T) {
    console.log(user.age);
  }
  test({
    age: 19,
    name: '张二狗'
  });
});

// Partial
(function () {
  type User = {
    name: string;
    info: {
      age: number;
    };
  };
  function test<T extends Partial<User>>(user: T) {
    console.log(user.name);
  }
  test({ name: '张三', info: { age: 19 } }); // ok
  // test({ name: '张三', info: {} }); // error
})();

// Required
(function () {
  type User = {
    name: string;
    age?: number;
  };
  function test<T extends Required<User>>(user: T) {
    console.log(user.age);
  }
  // test({ name: '张三' }); // error
  test({ name: '章三', age: 10 }); // ok
});
// Readonly
(function () {
  type User = {
    name: string;
    age: number;
  };
  function test<T extends Readonly<User>>(user: T) {
    console.log(user.age);
    // user.age = 10 // error
  }
})();
// Pick
(function () {
  type User = {
    name: string;
    age: number;
    sex: '男' | '女';
  };
  type Man = Pick<User, 'name' | 'age'>;
  const m: Man = {
    name: '张二狗',
    age: 19
    // sex: '男' // error
  };
})();

// Record
(function () {
  interface PageInfo {
    title: string;
  }

  type Page = 'home' | 'about' | 'contact';

  const x: Record<Page, PageInfo> = {
    about: { title: 'about' },
    contact: { title: 'contact' },
    home: { title: 'home' }
  };
  const y: Record<Page, string> = {
    about: 'test',
    contact: 'test',
    home: 'test'
  };
})();

// ReturnType
(function () {
  type Func = (value: number) => string;
  const foo: ReturnType<Func> = '1';
  type c<T, N> = T extends N ? T : never;
  let a: c<string | number, string> = '123';
})();
// Exclude
(function () {
  type T0 = Exclude<'a' | 'b' | 'c', 'a'>; // "b" | "c"
  type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>; // "c"
  type T2 = Exclude<string | number | (() => void), Function>; // string | number
})();
// Extract
(function () {
  type T0 = Extract<'a' | 'b' | 'c', 'a' | 'f'>; // "a"
  type T1 = Extract<string | number | (() => void), Function>; // () =>void
})();
// NonNullable
(function () {
  type T0 = NonNullable<string | number | undefined>; // string | number
  type T1 = NonNullable<string[] | null | undefined>; // string[]
})();
// Parameters
(function () {
  type arrayType = (name: string, age: number) => any;
  type TO = Parameters<arrayType>;
  let a: TO = ['123', 12];
});
