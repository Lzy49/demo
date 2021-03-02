/* 思路
1. 查看 Promises/A+规范 了解 Promise 三种状态
*/
const PENDING  =  'pending'  // 开始
const RESOLVED =  'resolved' // 成功
const REJECTED =  'rejected' // 失败
class MyPromise {
  constructor(fun){
    let _this = this
    _this.state = PENDING 
    _this.value = ''
    _this.resolvedCallbacks = []
    _this.rejectCallbacks = []
    _this.finallyCallbacks = []
    function resolve(ags){
      setTimeout(()=>{
        if(_this.state == PENDING){
          _this.state = RESOLVED
          _this.value = ags
          _this.resolvedCallbacks.map(item=>item(ags))
          _this.finallyCallbacks.map(item=>item(ags))
        }
      })
    }
    function reject(ags){
      setTimeout(()=>{
        if(_this.state == PENDING){
          _this.state = REJECTED
          _this.value = ags
          _this.rejectCallbacks.map(item=>item(ags))
          _this.finallyCallbacks.map(item=>item(ags))
        }
      })
    }
    try {
      fun(resolve,reject)
    } catch (error) {
      reject(error)
    }
  }
  then(resolve,reject){
    let onResolve  = typeof resolve == 'function' ? resolve : (v=>v);
    let onReject  = typeof reject == 'function' ? reject : (v=> {});
    let _this = this
    if(_this.state === PENDING){
      return new MyPromise((resolve,reject)=>{
        _this.resolvedCallbacks.push(function(){
          try {
            resolve(onResolve(_this.value))
          } catch (error) {
            reject(error)
          }
        })
        _this.rejectCallbacks.push(function(){
          try {
            reject(onReject(_this.value))
          } catch (error) {
            reject(error)
          }
        })
      })
    }
    if(_this.state === RESOLVED){
      return new MyPromise((resolve)=>{
        resolve(onResolve(_this.value))
      })
    }
    if(_this.state === REJECTED){
      return  new MyPromise((resolve,onReject)=>{
        resolve(onReject(_this.value))
      })
    }
  }
  catch(reject){
    return this.then(null,reject)
  }
  finally(fun){
    let _this = this
    this.finallyCallbacks.push(function(){
      fun()
      return _this
    })
    if(_this.state !== PENDING){
      fun()
      return _this
    }
  }
  static resolve(ags){
    if(ags instanceof MyPromise){
      return ags
    }
    return (new MyPromise((resolve)=>{
      resolve(ags)
    }))
  }
  static reject(ags){
    if(ags instanceof MyPromise){
      return ags
    }
    return (new MyPromise((resolve,reject)=>{
      reject(ags)
    }))
  }
  static all(array){
    if(array instanceof Array){
      return new MyPromise((resolve,reject)=>{
        let resolves = []
        array.forEach(item=>{
          item.then(res=>{
            resolves.push(res)
            if(resolves.length == array.length){
              resolve(resolves)
            }
          }).catch(reject)
        })
        
      })
    }else{
      throw '请传入正确参数'
    }
  }
  static race(array){
    return new MyPromise((resolve,reject)=>{
      if(array instanceof Array){
        array.forEach(item=>{
          item.then(resolve).catch(reject)
        })
      }
    })
  }
}



/* 首先思考 原生 MyPromise 有那些内容 */
// 基础的MyPromise
let a = new MyPromise((resolve,reject)=>{
  let name = '成功a'
  setTimeout(()=>{
    resolve(name)
  },2000)
  console.log('resolve 之后')
})
let a2 = MyPromise.resolve(a)
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
// MyPromise 链
let b = new MyPromise((resolve,reject)=>{
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
// MyPromise 的静态方法
let c = MyPromise.resolve('成功c')
c.then(res=>{
  console.log('then',res)
})
let d = MyPromise.reject('失败d')
d.then(res=>{},res=>{
  console.log('失败',res)
})
MyPromise.all([a,b,c]).then(res=>{
  console.log('MyPromise.all',res)
}).catch(res=>{
  console.log(false)
})
MyPromise.race([a,b,c]).then(res=>{
  console.log('MyPromise.race',res)
})