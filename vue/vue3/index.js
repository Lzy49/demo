import {reactive,effect} from './vue3/dep'
// 1. 使用最原始的办法
let a = reactive({
  value:1
})
effect(()=>{
  b = a.value + 1
  console.log(b)
})

a.value = 3