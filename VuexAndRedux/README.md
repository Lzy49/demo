# redux 和 vuex 
## 基本api对比
### redux 
#### 配置时使用的方法
- createStore
```javascript 
// reducer js
const reducer = (state = {}, action) => {
  switch (action.type) {
    case '': // 动作 
      return state
    default:
      return state
  }
}
// 仓库js
import {createStore} from './redux'
import reducer from './reducer'
const store = createStore(reducer)
```
#### 提供方法
- getState()  // 获取state
- dispatch()  // 发送指令
- subscribe() // 订阅
#### 
### vuex
#### 创建仓库时
```javascript
new Vuex.Store({
  state: {}, // 初始化数据
  mutations: { // 接收指令后执行的操作 (仓库管理员使用的)
    fun...
  },
  actions: { // 发送指令的公用方法 （后续衍生的方法）
    fun...
  }, 
  getters:{ // 获取state
    fun...
  }
})
```
#### 提供的方法
- getters()  // 获取state
- dispatch() // 发送指令给仓库修改state
- commit()   // 调用发送指令的方法
## 思想
- redux 和 vuex 的思想其实都是 redux 思想。都是模拟了仓库+管理员的生活例子。为了解决 一处修改，多处响应。其中 仓库就是state reducer 就是管理员。而发送dispatch的就是提供商品的人（供货商），使用state的就是销售商品的人（销售点）。当供货商提供了商品a则销售点也只能销售商品a，供货商提供了商品b则销售点也只能销售商品b.而供货商提供违禁品的时候 管理员 就会制止这个行为。使得仓库中的东西永远都是合法的。
- 在使用redux 和 vuex 时，我们应该主要限制reducer的能力。
- actions 则是后面衍生出来的，为了解决代码重复利用.
## 区别
>  redux 和 vuex 的思想是一样的，但是vuex是在 redux 上做的进一步的调整，提高了性能，简化了代码。变成了 vue 的专属的操作库。而redux 是所有的语言都可以使用的操作库。