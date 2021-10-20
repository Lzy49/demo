let hello: string = 'Helle TypeScript';
interface List {
  name: String;
  age: Number;
}
interface Result {
  data: List[];
}
function reader(result: Result) {
  result.data.forEach((item) => {
    console.log(item.age);
  });
}
reader({
  data: [
    {
      age: 19,
      name: '王哥',
      sex: '男'
    } as List, // 关键代码 这里声明我们已经知道了这个值是 List 接口值
    <List>{  // 关键代码 这里声明我们已经知道了这个值是 List 接口值
      age: 19,
      name: '王哥',
      sex: '男'
    } 
  ]
});