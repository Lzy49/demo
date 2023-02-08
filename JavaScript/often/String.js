/**
 * 关于 String 的方法
 */
let string = '你说';
/**
 * 静态方法
 * - String.fromCharCode(Unicode) //=> String
 * - String.fromCodePoint(CodePoint) //=> String
 * - String.raw //=> String
 */
function staticFun() {
  console.log(String.fromCharCode('1234')); //=> Ӓ
  console.log(String.fromCodePoint('1234')); //=> Ӓ
  console.log(String.raw`这是一句${string}的话`); //=> 这是一句你说的话
  console.log(String.raw({ raw: ['这是一句', '话'] }, '垃圾')); //=> 这是一句垃圾话
}
/**
 * 原型方法
 * - 字符 编码 码点 码元
 *  - String.prototype.charAt(index) //=> String
 *  - String.prototype.charCodeAt(index) //=> Unicode
 *  - String.prototype.codePointAt(index) //=> CodePoint
 *  - String.prototype.normalize(form) //=> from 规范的字符串。
 * - 拼接
 *  - concat(...values) //=> String
 * - 判断
 *  - String.prototype.includes(String) //=> Boolean
 *  - String.prototype.endsWith(String) //=> Boolean
 *  - String.prototype.startsWith(String) //=> Boolean
 * - 正则
 *  - String.prototype.match(regex) //=> Array
 *  - String.prototype.replace(regexp|substr,newSubStr|function) //=> String
 *  - String.prototype.search(regexp) //=>index
 * - 填充
 *  - String.prototype.padEnd(targetLength,String) //=> String
 *  - String.prototype.padStart(targetLength,String) //=> String
 * - 拷贝
 *  - String.prototype.repeat(num); //=> String
 * - 截取
 *  - String.prototype.slice(startIndex,endIndex) //=> String
 *  - String.prototype.substr(startIndex,length) //=> String
 *  - String.prototype.substring(startIndex,endIndex) //=> String
 *  - String.prototype.split(separator,limit) //=> Array
 * - 大小写
 *  - String.prototype.toLocaleLowerCase() //=> String
 *  - String.prototype.toLocaleUpperCase() //=> String
 *  - String.prototype.toLowerCase() //=> String
 *  - String.prototype.toUpperCase() //==> String
 * - 去空格
 *  - String.prototype.trim() //=> String
 *  - String.prototype.trimStart() //=> String
 *  - String.prototype.trimEnd() //=> String
 */
trimFun();
function chart() {
  console.log(string.charAt(1));
  console.log(string.charCodeAt(0));
  console.log(string.codePointAt(0));
  console.log(string.normalize('NFC'));
}
function concat() {
  console.log(string.concat('文字1', '文字2'));
}
function withText() {
  console.log(string.includes('你'));
  console.log(string.endsWith('你'));
  console.log(string.startsWith('你'));
}
function regexFun() {
  console.log(string.replace(/你/, '我')); //=> 我说
  console.log(string.search('你')); //=> 0
  console.log(string.match(/你/)); //=> [ '你', index: 0, input: '你说', groups: undefined ]
}
function padFun() {
  console.log(string.padEnd(9, 'abc')); //=> 你说abcabca
  console.log(string.padStart(9, 'abc')); //=> abcabca你说
}
function copy() {
  console.log(string.repeat(5)); //=> 你说你说你说你说你说
}
function sliceFun() {
  let l = string.repeat(5);
  console.log(l.substr(1, 4)); //=> 说你说你
  console.log(l.substring(1, 4)); //=>说你说
  console.log(l.slice(1, 2)); //=> 说
  console.log(l.split('')); //=> [ '你', '说', '你', '说', '你', '说', '你', '说', '你', '说']
}

function caseFun() {
  let l = 'ABCDEf';
  console.log(l.toLocaleLowerCase()); //=> abcdef
  console.log(l.toLocaleUpperCase()); //=> ABCDEF
  console.log(l.toLowerCase()); //=> abcdef
  console.log(l.toUpperCase()); //==> ABCDEF
}
function trimFun() {
  let l = '  你好   ';
  console.log(l.trimEnd()); //=>  你好
  console.log(l.trimStart()); //=>你好
  console.log(l.trim()); //=>你好
}
