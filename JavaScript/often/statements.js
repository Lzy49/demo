/**
 * 常见语句
 */
// 循环 & 迭代 语句
{
  for (let v = 0; v < 10; v++) {
    console.log(v);
  }
}
{
  let v = 0;
  while (v < 5) {
    v++;
    console.log(v);
  }
}
{
  let v = 0;
  do {
    v++;
    console.log(v);
  } while (v < 5);
}
{
  for (const key in [1, 2, 3, 4]) {
    console.log(item);
  }
  for (const item of [1, 2, 3, 4, 5]) {
    console.log(item);
  }
  for await (const item of [1, 2, 3, 4]) {
    console.log(item);
  }
}
// 判断语句
{
  const v = 10;
  if (v === 10) {
    console.log('v == 10');
  }
}
{
  const v = 10;
  switch (v) {
    case 10:
      console.log(v == 10);
      break;

    default:
      console.log('v != 10');
      break;
  }
}
// 中断
{
  for (const item of [1, 2, 3, 4]) {
    if (item === 1) {
      break;
    }
    console.log(item)
  }
  for(const item of [1,2,3,4,5]){
    if(item === 1){
      continue;
    }
    console.log(item)
  }
  warpFor: for(const item of [1,2,3,[1,2,3],5]){
    if(Array.isArray(item)){
      for(const i of item){
        if(i === 1){
          break warpFor;
        }
      }
    }
    console.log(item)
  }
}

// 操作符 优先级
/*
括号
1 ()
取值
1 . [] ?. fun() 
2 new 
一元 运算符
1 后置 ++ --
2 前置 ++ --
3 - + ~ !
4 typeof void delete await
运算
1 **
2 * / %
3 + -
4 <<  >> <<<
判断
1 < > >= <= 
2 in instanceof
3 == ===  !== !==
4 & | ^ 
5 && || ?? 
三元
?:
赋值
1 = += -= 
异步
1 yield yield * 
解构
1 ...
逗号
,
*/