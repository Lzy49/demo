// 索引签名
interface List {
  name: String;
  age: Number;
  [xx: string]: any; // 关键代码
}
interface Result {
  data: List[];
}
function reader3(result: Result) {
  result.data.forEach((item) => {
    console.log(item.age);
  });
}
reader3({
  data: [
    {
      age: 19,
      name: '王哥',
      sex: '男'
    }
  ]
});
