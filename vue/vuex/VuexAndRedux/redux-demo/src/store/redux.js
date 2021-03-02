export const createStore = (reducer)=>{
  let state;
  let subscribers = []
  function subscribe(subscriber){  // 当值被改变时就执行这里边的方法
    subscribers.push(subscriber)
    return ()=>{
      subscribers.filter(l=>subscriber !== l)
    }
  }
  function dispatch(action){ // 派遣任务给 reducer 
    state = reducer(state,action)
    subscribers.forEach(item=>item())
  }
  function getState(){ // 获取state内容
    return state
  }
  dispatch({})
  return {
    subscribe,
    dispatch,
    getState
  }
}
