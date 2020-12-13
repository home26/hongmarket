<template>
    <div>
        <order-header v-bind:title="title">
            <template v-slot:tip>
                <span>{{tip}}</span>
            </template>
        </order-header>
        <router-view></router-view>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import OrderHeader from '../components/OrderHeader.vue'
import ServiceBar from './../components/ServiceBar'
import NavFooter from '../components/NavFooter.vue'
export default {
  name:'order',
  data(){
      return{
          title:'',

      }
  },
  components: { OrderHeader, ServiceBar, NavFooter},
  mounted(){
      let path = this.$route.path;
      if(path == '/order/confirm'){
          this.title = 'Confirm Order';
          this.tip = 'Wish you a happy shopping journey!';
      }else if(path == '/order/list'){
          this.title = 'Order List';
          this.tip = 'Wish you a happy shopping journey!';
      }else if(path == '/order/pay'){
          this.title = 'Pay Order';
          this.tip = 'Wish you a happy shopping journey!';
      }
  }

}
</script>