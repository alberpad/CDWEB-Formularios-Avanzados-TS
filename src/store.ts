import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import vuexLocal from '@/plugins/vuex-persist';
import { RootState } from '@/modules/types';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    loading: false,
    appName: 'formularios-avanzados',
    appVersion: '0.0.1',
  },
  mutations: {
    setLoading(state: RootState, bool: boolean): void {
      state.loading = bool;
    },
  },
  modules: {},
  plugins: [vuexLocal.plugin],
};

export default new Vuex.Store<RootState>(store);
