import Vue from 'vue'
import Vuex from 'vuex'

import participantes from './participantes'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        participantes
    }
})
