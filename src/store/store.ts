import { createStore } from 'vuex';
import boards from './boards'

export default createStore({
  modules: { boards }
})