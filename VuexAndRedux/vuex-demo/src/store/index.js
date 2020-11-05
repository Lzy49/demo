import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store =  new Vuex.Store({
  state: {
    todolist: ['上班','下班','买菜','做饭']
  },
  mutations: {
    addTodo (state,todo) {
      state.todolist.push(todo)
    }
  },
  actions: {
    addTodo ({commit},todo) {
      commit('addTodo',todo)
    }
  },
  getters:{
    todolist:(state)=>state.todolist
  }
})
export default store
