import { createStore } from 'vuex'

export default createStore({
  state: {
    productos:[]
  },
  mutations: {
    setProducto(state, payload){
      state.productos = payload;
    }
  },
  actions: {

    async fetchData({commit}){
        try{
          const resp = await fetch('api.json');

          const data = await resp.json();
          console.log("resp", data);
          commit('setProducto', data);
        }
        catch(error){
          console.log("ocurrio un error", error);
        }
    }
  },
  modules: {
  }
})
