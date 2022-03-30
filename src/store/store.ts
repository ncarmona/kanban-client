import { createStore } from 'vuex';
import boards from './boards'
import profile from './profile'

export default createStore({
  modules: { boards, profile }
})