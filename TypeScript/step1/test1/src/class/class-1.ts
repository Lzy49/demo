// 类成员
class Dog {
  constructor(name: string) {
    console.log(12);
    this.name = name; // 未定义默认值的属性必须添加初始化操作
  }
  name: string;
  age = 2;
  sex?: string; // 可选属性无需设置默认值也不必初始化
}
let dog = new Dog('狗');
console.log(dog);
// 类成员修饰符
class Cat {
  constructor(name: string) {
    console.log(this.species);
  }
  public name: string = 'cat'; // 公共成员，默认
  protected hunger: number = 100; // 保护成员，只能在类和子类中调用。
  private species: number = 100; // 私有成员，只能在类内部调用。
  readonly family = 'Felidae'; // 只读属性无法修改
  static bellow = () => {
    console.log('喵🐱喵🐱喵🐱喵🐱');
  };
}
class Ragdoll extends Cat {
  constructor(name: string) {
    super(name);
    // console.log(this.species) // 报错
    console.log(this.hunger); // 100
    console.log(this.family);
    // this.family = '' // 报错
    // this.bellow() // 报错
  }
}
let cat = new Cat('猫');
console.log(cat.family);
//  cat.hunger  // 报错：属性“hunger”受保护，只能在类“Cat”及其子类中访问
//  cat.species // 报错：属性“species”为私有属性，只能在类“Cat”中访问
//  cat.family = '' // 报错：无法分配到 "family" ，因为它是只读属性。

// cat.bellow() // 报错：属性“bellow”在类型“Cat”上不存在。你的意思是改为访问静态成员
Cat.bellow();
// 修饰符 修饰 constructor
// 1. 普通 类 （可继承，可实例化）
class CatPubilc extends Cat {
  public constructor(name: string) {
    super(name);
  }
}
let a = new CatPubilc('猫');
class CatPubilcChild extends CatPubilc {}
// 2. 保护 类 （可继承，不可实例化）
class CatProtected extends Cat {
  protected constructor(name: string) {
    super(name);
  }
}
// let a = new CatProtected('猫') // 报错
class CatProtectedChild extends CatProtected {}
// 3. 私有 类 （无法被继承无法被实例化）
class CatPrivate extends Cat {
  private constructor(name: string) {
    super(name);
  }
}
// class CatPrivateChild extends CatPrivate{} // 报错 ：无法扩展类“CatPrivate”。类构造函数标记为私有。
// let catProtected = new CatProtected(); // 报错：类“CatProtected”的构造函数是受保护的，仅可在类声明中访问。
CatProtected.bellow();

