import app from './module/app.js'
import user from './module/user.js'
import getters from './getters'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  module: {
    app,
    user
  },
  getters
})

export default store
