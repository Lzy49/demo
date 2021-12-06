// 类型推断
(function () {
  // 1. 基本类型推断
  let a = 10;
  // a = '10' //error
  a = 20;
  // 2. 函数类型推断
  function sum(x: number, b: number) {
    return x + b;
  }
  let c: number = sum(1, 2); // ok
  // let d: string = sum(1,2) // error
});
// 类型断言
(function () {
  const arrayNumber: number[] = [1, 2, 3, 4];
  const greaterThan2: number = arrayNumber.find((num) => num > 2) as number;
  let a: any = '10';
  let b: number = a.length; // 此时不会提示 length 属性
  let c: number = (<string>a).length; // 此时会提示 length 属性
  let d: number = (a as string).length; // 此时会提示 length 属性
  // 非空断言
  let str: null | undefined | string;
  console.log(str!.toString());
  // 确定赋值断言
  let x: number;
  initialize();
  console.log(2 * x!); // Error
  function initialize() {
    x = 10;
  }
  // const 断言
  let obj = {
    x: 10 as const,
    y: 10
  };
  // obj.x = 100 // error
  obj.y = 100; // ok
  let obj2 = {
    x: 10,
    y: 11
  } as const;
  // obj2.x = 100 // error
  // obj2.c = 100 // error
})();

(function () {
  // 字面量类型
  // let a: 100 = 10; // error
  let a: 100 = 100; // ok
  let b: 100 | 200 | '你好' | '哈哈' = '你好';
  b = a;
  // let c :string = b; // error
})();

(function () {
  // 类型拓宽
  // - let 也 coust
  let b = 'string';
  b = '123'; // ok
  // b = 123 ; // error
  function c(a = '123') {
    return 123;
  }
  c('234'); // ok
  // c(123) // error
  const d = 123;
  let e = d;
  // e = '123' // error
  e = 234; // ok
  // - undefined  和 null
  let undefinedValue = undefined;
  undefinedValue = 123; // ok
  let nullValue = null;
  nullValue = 123; // ok
  function testnull(v = null) {
    return typeof v;
  }
  // testnull(123) // error
  testnull(undefined); // ok
})();

(function () {
  // 类型缩小
  let a: number | string;
  a = 123;
  function dodo(v: number | string) {
    if (typeof v === 'number') {
      v.toFixed();
    } else {
      v.slice(1, 10);
    }
    if (v === '123') {
      v.slice(0, 1);
    }
  }
  dodo(a);
  // - 小问题
  const el = document.getElementById('foo'); // Type is HTMLElement | null
  if (typeof el === 'object') {
    el; // Type is HTMLElement | null
  }
  // 可辨识标签
  interface UploadEvent {
    type: 'upload';
    filename: string;
    contents: string;
  }

  interface DownloadEvent {
    type: 'download';
    filename: string;
  }

  type AppEvent = UploadEvent | DownloadEvent;

  function handleEvent(e: AppEvent) {
    switch (e.type) {
      case 'download':
        e; // Type is DownloadEvent
        break;
      case 'upload':
        e; // Type is UploadEvent
        break;
    }
  }
});

(function () {
  // 交叉类型
  type type1 = {
    name: string;
    age: number;
  };
  type type2 = {
    sex: '男' | '女';
  };
  type person = type1 & type2;
  let a: person;
  // a = {
  //   name: '123'
  // }; // error
  a = {
    name: '123',
    age: 19,
    sex: '男'
  }; // ok
})();
