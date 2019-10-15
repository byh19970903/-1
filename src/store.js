import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  list:[1,2,3],
  data:'嘿'
  },
  getters:{
    listAll(state){
      return state
    },

  },
  mutations: {
   updataList(state,params){
     state.list=params
   },
   updatedata(state,a){
     state.data=a
    //  console.log(46545657)
   }
  },
  actions: {

  }
})
