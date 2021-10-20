// 只读值
interface List2 {
  readonly id: Number; // 关键代码 定义值为只读值
  name: String;
  age?: Number; 
}
interface Result2 {
  data: List2[];
}
function reader2(result: Result2) {
  result.data.forEach((item) => {
    console.log(item.age);
    // item.id = 123 // 报错
  });
}
reader2({
  data: [
    {
      id: 1,
      age: 19,
      name: '王哥'
    },
    {
      id: 2,
      name: '张哥'
    }
  ]
});
