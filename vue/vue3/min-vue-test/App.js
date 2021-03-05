import {effectWatch,reactive} from './core/reactive/index.js'
import {h} from './core/h.js'
// let a = reactive({
//   value: 10,
// })
// let c
// effectWatch(()=>{
//   c = a.value
//   console.log(c)
// })
// setTimeout(()=>{
//   a.value++
// },1000)
export default {
  render(state){
    return h('div',{
      class:'red'
    },state.state.count)
  },
  setup() {
    const state = reactive({
      count:0
    })
    window.state = state
    return {state}
  }
}
