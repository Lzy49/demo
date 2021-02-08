/* 
new 操作思路

(1) 在内存中创建一个新对象。

(2) 这个新对象内部的[[Prototype]]特性被赋值为构造函数的prototype属性。

(3) 构造函数内部的this被赋值为这个新对象（即this指向新对象）。

(4) 执行构造函数内部的代码（给新对象添加属性）。

(5) 如果构造函数返回非空对象，则返回该对象；否则，返回刚创建的新对象。

*/
let Fun = function (name){
  this.name = name
  this.sayName = function(){
    console.log(this.name)
  }
}
let f = new Fun('name')
f.sayName()
function newFun(fun,...ags){
  let obj = {}
  obj.__proto__ = fun.prototype
  let r = fun.call(obj,...ags)
  return r instanceof Object ? f : obj
}
let b = newFun(Fun,'name')
b.sayName()
