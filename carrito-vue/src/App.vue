<template>
  <div class="container">
    <h1>Carrito</h1>
  {{productos}}
    <hr> 
    <Card />  
  </div>
</template>

<script>
import {useStore} from 'vuex';
import { computed, onMounted } from 'vue';
import Card from "./components/Card";

export default {
  name: "App",
  components: {
    Card,
  },

  setup(){
    const store = useStore();
      onMounted(()=>{
        store.dispatch('fetchData')
      })

      const productos = computed(() =>  store.state.productos  )

      return {productos}
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
