import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';
export interface State {
  num: number;
}
export const key: InjectionKey<Store<State>> = Symbol();
export const store = createStore<State>({
  state: {
    num: 0
  },
  mutations: {
    setNum(state, value) {
      state.num = value || 0;
    }
  },

  getters: {
    count: (state) => state.num * 2
  }
});
