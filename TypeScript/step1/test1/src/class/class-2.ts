// 抽象类
abstract class Person {
  constructor() {}
  abstract say(): any;
}
class Chinese extends Person {
  say() {
    console.log('你好');
  }
}
// new Person() // 报错
// 多态
class Japanese extends Person {
  say() {
    console.log('こんにちは');
  }
}

const p: Person[] = [new Chinese(), new Japanese()];
p.forEach((item) => item.say());
// this 链
class V1 {
  step1() {
    return this;
  }
  step2() {
    return this;
  }
}
class V2 extends V1 {
  next() {
    return this;
  }
}
const b = new V2();
b.next().step1().step1();
