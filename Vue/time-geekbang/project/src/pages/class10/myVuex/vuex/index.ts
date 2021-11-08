import { inject, reactive, App } from 'vue';
let STOREKEY: symbol = Symbol();
interface State {
  [key: string]: any;
}
type Mutation = (state: State, load: any) => any;
interface Option {
  mutations: { [key: string]: Mutation };
  state: State;
}
export const createStore = (option: Option) => {
  return new Store(option);
};
export const useStore = () => inject(STOREKEY) as Store;

class Store {
  constructor(option: Option) {
    this._state = reactive<{ data: object }>({ data: option.state });
    this._mutations = option.mutations;
  }
  install(app: App) {
    app.provide(STOREKEY, this);
  }
  private _state;
  private _mutations: {
    [key: string]: Mutation;
  };
  get state() {
    return this._state.data;
  }
  commit(key: string, load: any) {
    this._mutations[key](this._state.data, load);
  }
}
