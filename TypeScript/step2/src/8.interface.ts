(function () {
  // 简单的 interface
  interface People {
    name: string;
    age: number;
  }
  let m: People = {
    name: '小敏',
    age: 19
  };
})();

(function () {
  // 只读
  interface people {
    name: string;
    readonly age: number;
  }
  let m: people = {
    name: '小敏',
    age: 19
  };
  // m.age = 20; // error
});

(function () {
  // 可选
  interface people {
    name: string;
    age?: number;
  }
  let m: people = {
    name: '小敏'
  };
  // m.age = 20; // error
});

(function () {
  interface people {
    name: string;
    [propertyName: string]: any;
  }
  let m: people = {
    name: '小明',
    age: 10,
    sex: '男'
  };
})();
// 鸭式辨形法
(function () {
  interface LabeledValue {
    label: string;
  }
  function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
  }
  // printLabel({ size: 10, label: 'Size 10 Object' }); // error
  let print1 = { size: 10, label: 'Size 10 Object' };
  printLabel(print1); // ok
  let print2 = { size: 10 };
  // printLabel(print2) // error 因为 没有 label
})();
// 断言
(function () {
  interface Props {
    name: string;
    age: number;
    money?: number;
  }

  let p: Props = {
    name: '兔神',
    age: 25,
    money: -100000,
    girl: false
  } as Props; // OK
});

(function () {
  interface Point {
    x: number;
    y: number;
  }
  interface SetPoint {
    (x: number, y: number): number;
  }
  const p: SetPoint = (x, y) => {
    return x + y;
  };
})();

(function () {
  type Point = {
    x: number;
    y: number;
  };
  type SetPoint = {
    (x: number, y: number): number;
  };
  const p: SetPoint = (x, y) => {
    return x + y;
  };
})();

(function () {
  // 扩展
  // - 多处定义同一接口
  interface a {
    name: string;
  }
  // let b: a = { // error
  //   name: '123'
  // };
  let b: a = {
    name: '123',
    age: 10
  };
  interface a {
    age: number;
  }
  // 使用继承扩展接口
  interface c extends a {
    sex: '男' | '女';
  }
  let d: c = {
    name: '123',
    age: 123,
    sex: '男'
  };
})();
