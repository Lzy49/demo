let b = {}
b instanceof Object
let instanceofFun = function(instanceObj,classObj){
  let prototypeObj = instanceObj.__proto__
  while(true){
    if(prototypeObj === undefined){
      return false
    }
    if(prototypeObj.constructor === classObj){
      return true
    }
    console.log(prototypeObj)
    prototypeObj = prototypeObj.__proto__
  }
}
console.log(instanceofFun(b,Object))