import app from './module/app.js'
import user from './module/user.js'
import getters from './getters'

const store =  new Store({
  module: {
    app,
    user
  },
  getters
})

export default store