<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  mounted(){
    this.getUser();
    this.getCartCount();
  },
  methods:{
    getUser(){
      this.axios.get('/user').then(()=>{
        //save it in the vuex

      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then(()=>{
        //save it in the vuex

      })      
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
