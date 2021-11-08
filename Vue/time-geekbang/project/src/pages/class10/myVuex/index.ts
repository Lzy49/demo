import { createStore } from './vuex';
export default createStore({
  state: {
    count: 10
  },
  mutations: {
    setName(state, v) {
      state.count = state.count + v;
    }
  }
});
