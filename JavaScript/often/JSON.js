/**
 * 关于 JSON 的方法练习
 * - JSON.stringify
 *  - json 对象
 *  - 数组 或者 函数
 *  - 格式符 或 数字 空格数
 */
const obj = {
  name: '张飞',
  info: {
    job: {
      name: '开发者'
    }
  }
};
function stringify() {
  const jsonString1 = JSON.stringify(obj);
  console.log(jsonString1); // {"name":"张飞","info":{"job":{"name":"开发者"}}}
  const jsonString2 = JSON.stringify(obj, ['name']);
  console.log(jsonString2); // {"name":"张飞"}
  const jsonString3 = JSON.stringify(obj, ['name', 'info']);
  console.log(jsonString3); // {"name":"张飞","info":{}}
  const jsonString4 = JSON.stringify(obj, ['name', 'info', 'job'], '…………');
  console.log(jsonString4);
  /*
  {
  …………"name": "张飞",
  …………"info": {
  ……………………"job": {
  ………………………………"name": "开发者"
  ……………………}
  …………}
  }
  */
  const jsonString5 = JSON.stringify(obj, ['name', 'info', 'job'], 4);
  console.log(jsonString5);
  /*
  {
      "name": "张飞",
      "info": {
          "job": {
              "name": "开发者"
          }
      }
  }
  */
  const jsonString6 = JSON.stringify(obj, function (k, v) {
    console.log('-', k, v);
    return v;
  });
  console.log(jsonString6);
}

/**
 * JSON.parse
 *
 */
function parse() {
  const jsonStr = JSON.stringify(obj);
  const jsonObj1 = JSON.parse(jsonStr);
  console.log(jsonObj1); // { name: '张飞', info: { job: { name: '开发者' } } }
  const jsonObj2 = JSON.parse(jsonStr, function (key, value) {
    console.log(`-`, key, value);
    return value;
  });
  console.log(jsonObj2);
}
