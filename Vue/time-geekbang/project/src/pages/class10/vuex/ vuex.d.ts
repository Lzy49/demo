import { ComponentCustomProperties } from 'vue';
import { Store } from 'vuex';
import {State} from './index'
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
