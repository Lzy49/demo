/* apply */
(function(){
  function fun(...nums){
    console.log(nums)
    console.log(this.name)
  }
  fun.apply({name:'123'},[10,20,30])
  Function.prototype.myApply = function(thisValue, ags){
    thisValue.fun = this;
    let fun = thisValue.fun(...ags)
    delete thisValue.fun
    return fun
  }
  fun.myApply({name:'123'},[10,20,30])
})();
/* call */
(function(){
  function fun(...nums){
    console.log(nums)
    console.log(this.name)
  }
  fun.call({
    name:'123'
  },10,20,30)
  
  Function.prototype.myCall = function(thisValue, ...ags){
    thisValue.fun = this
    let fun = thisValue.fun(...ags)
    delete thisValue.fun
    return fun
  }
  fun.myCall({name:'123'},10,20,30)
})();
/* bind */
(function(){
  function fun(...nums){
    console.log(nums)
    console.log(this.name)
  }
  fun.bind({name:'123'},10,20,30)(40)
  Function.prototype.myBind = function(thisValue,...ags){
    let _this = this
    return function F(){
      if(this === F){
        return new _this(...ags,...arguments)
      }
      return _this.call(thisValue,...ags,...arguments)
    }
  }
  let fff = fun.myBind({name:'123'},10,20,30)
  fff(40)
  fff(70)
  new fff(100)
})()