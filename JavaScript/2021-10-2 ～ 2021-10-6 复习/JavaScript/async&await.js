// async 和 await 需配合使用。
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('100');
  }, 1000);
});

async function d() {
  console.log(await promise);
}
d();
// 利用迭代器模拟 async 和 await
const myAsync = (generator) => {
  const iterator = generator();
  
  const hander = (result)=>{
    const { value ,done} = result;
    if(done === true){
      return
    }
    value.then(res=>{
      hander(iterator.next(res))
    })
  }
  hander(iterator.next())
};

myAsync(function* () {
  const v = yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(100);
    }, 1000);
  });
  console.log(v);
});
