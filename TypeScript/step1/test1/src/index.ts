namespace B {
  export const age = 10;
}
namespace B {
  // export const age = 10; // 报错不能导出同名的东西
}
function C() {
  return '123';
}
namespace C {
  export const age = 10;
}
console.log(C.age);

class D {}
namespace D {
  export const age = 10;
}
console.log(D.age);

enum E {}
namespace E {
  export const age = 0;
}
console.log(E.age);
// E.age = 'nihao ';
