class C1 {
  age = 10
  name = '你好'
  private sex = '女'
}
class C2 {
  age = 10
  name = '你好'
  private sex = '男'
}
class C3 {
  age = 10
  name = '你好'
}
let c_1 = new C1();
let c_2 = new C2();
let c_3 = new C3();
// c_1 = c_2 // 报错 私有变量不兼容
// c_2 = c_1 // 报错 私有变量不兼容
c_3 = c_2  // 没有私有变量则比较公有变量