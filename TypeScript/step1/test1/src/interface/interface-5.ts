// 类型可选值
interface List5 {
  name: String;
  age?: Number; // 关键代码：定义 age 为可选属性
}
interface Result5 {
  data: List5[];
}
function reader5(result: Result5) {
  result.data.forEach((item) => {
    console.log(item.age);
  });
}
reader5({
  data: [
    {
      age: 19,
      name: '王哥'
    },
    {
      name: '张哥'
    }
  ]
});
