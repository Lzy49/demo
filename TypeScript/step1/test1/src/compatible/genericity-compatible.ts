// 泛型 - 接口 使用了泛型。同类型兼容，不同类型不兼容。
interface F_1<T> {
  state: T;
}
let f1_1: F_1<number> = {
  state: 1
};
let f1_2: F_1<string> = {
  state: '2'
};
// f1_1 = f1_2  // 不兼容
let f1_3: F_1<number> = {
  state: 2
};

f1_1 = f1_3; // 兼容
// 泛型 - 接口 未使用泛型 不受泛型影响
interface F_2<T> {}
let f2_1: F_2<number> = {};
let f2_2: F_2<string> = {};
f2_1 = f2_2;

// 泛型 - 函数
let F_3 = <T>(state: T): T => {
  return state;
};
let F_4 = <O>(state: O): O => {
  return state;
};
F_3 = F_4;
