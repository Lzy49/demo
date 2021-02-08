/* 首先思考 原生 Promise 有那些内容 */
// 基础的Promise
let a = new Promise((resolve,reject)=>{
  let name = '成功a'
  setTimeout(()=>{
    resolve(name)
  },2000)
  console.log('resolve 之后')
})
let a2 = Promise.resolve(a)
a.then(res=>{
  console.log('then',res)
}).catch(res=>{
  console.log('catch',res)
}).finally(res=>{
  console.log('finally',res)
})
a.then(res=>{
  console.log('then',res)
},res=>{
  console.log('catch',res)
})
// Promise 链
let b = new Promise((resolve,reject)=>{
  let name = '成功b'
  resolve(name)
  console.log('resolve 之后')
})
b.then(res=>{
  console.log('then',res)
  return '李四'
}).then(res=>{
  console.log('then',res)
})
// Promise 的静态方法
let c = Promise.resolve('成功c')
c.then(res=>{
  console.log('then',res)
})
let d = Promise.reject('失败d')
d.then(res=>{},res=>{
  console.log('失败',res)
})
Promise.all([a,b,c]).then(res=>{
  console.log('Promise.all',res)
}).catch(res=>{
  console.log(false)
})
Promise.race([a,b,c]).then(res=>{
  console.log('Promise.race',res)
})