// 类 与 接口
// 定义接口
interface BirdInterFace {
  name: string;
}
class Bird implements BirdInterFace {
  // name = 123; // 报错
  name = '123';
  private sex: string = '雌';
  protected color = 'red';
}
let bird = new Bird();
// 接口继承
interface BirdInterFace1 extends BirdInterFace {
  age: number;
}
class Bird1 implements BirdInterFace {
  age = 10;
  name = '123';
}
// 接口继承类
interface BirdInterFace2 extends Bird {
  age: number;
}
// class Brid2 implements BirdInterFace2 { // 报错因为 Bird 实现了 保护属性和静态属性所以必须是继承它的类才可以
//   age = 10;
//   name = '123';
// }
class Brid2_1 extends Bird implements BirdInterFace2 {
  age = 10;
}
// 多接口继承
interface BirdInterFace3 {
  fly: () => any;
}

class Brid3 extends Bird implements BirdInterFace3, BirdInterFace2 {
  age = 10;
  fly() {
    console.log('飞飞');
  }
}
