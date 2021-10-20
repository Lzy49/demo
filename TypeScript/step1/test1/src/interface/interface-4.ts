// 类型断言
interface List4 {
  name: String;
  age: Number;
}
interface Result4 {
  data: List4[];
}
function reader4(result: Result4) {
  result.data.forEach((item) => {
    console.log(item.age);
  });
}
reader4({
  data: [
    {
      age: 19,
      name: '王哥',
      sex: '男'
    } as List4, // 关键代码 这里声明我们已经知道了这个值是 List4 接口值
    <List4>{  // 关键代码 这里声明我们已经知道了这个值是 List4 接口值
      age: 19,
      name: '王哥',
      sex: '男'
    } 
  ]
});