namespace mergeInterface {
  interface A {
    age: number;
    say(x: number): number;
  }
  interface A {
    // age:string  // 报错同名声明不能不同类型
    age: number;
    say(y: string): string; // 函数为重构
    say(y: string[]): string[];
    say(y: '1'): number;
  }
  let obj: A = {
    age: 10,
    say(y: any) {
      return y;
    }
  };
}
