(function () {
  interface obj {
    name: string;
    age: number;
    sex: string;
  }
  // 1. 只读
  type readonlyObj = Readonly<obj>;
  let o: readonlyObj = {
    name: '张飞',
    age: 19,
    sex: '男'
  };
  // o.name = '关羽' // 报错 name 只读
  // 2. 截取
  type pickObj = Pick<obj, 'name' | 'age'>;
  let o2: pickObj = {
    name: '张飞',
    age: 19
  };
  // 3. 可选
  type partialObj = Partial<obj>;
  let o3: partialObj = {};
  // 4. 记录
  type recordObj = Record<'x' | 'y', obj>;
  let o4: recordObj = {
    // x:{} // 报错
    x: { name: '张飞', age: 19, sex: '男' },
    y: { name: '关羽', age: 19, sex: '男' }
  };
  
})();
