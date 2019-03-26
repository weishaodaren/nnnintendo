import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 公共数据读取方法: this.$store.state.adminName
  // 公共数据读取方法: this.$store.state.globalSettings
  state: {
    gameMount:1,
    globalSettings:{
      apiUrl:'http://127.0.0.1:6605/'
    }
  },
   //公共数据修改方法: this.$store.commit('setAdminName','laomoxian')
  //公共数据修改方法: this.$store.commit('setGlobalSettings','{}')
  mutations: {    //修改state数据，类似Vue组件对象methods 保证数据响应式
    setGlobalSettings(state,value){
      state.globalSettings=value
    },
    setGameMount(state,value){
      state.gameMount=value
    }
  },
  actions: {

  }
})
