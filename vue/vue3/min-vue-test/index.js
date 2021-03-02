import {effectWatch,reactive} from './core/reactive/index.js'
let a = reactive({
  value: 10,
})
let c
effectWatch(()=>{
  c = a.value
  console.log(c)
})
setTimeout(()=>{
  a.value++
},1000)