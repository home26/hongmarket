<template>
    <div>
        <order-header title="Test">
            <template v-slot:tip>
                <span>The item has been added successfully</span>
            </template>
        </order-header>
        cart
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import OrderHeader from '../components/OrderHeader.vue'
import NavFooter from '../components/NavFooter.vue'
export default {
  components: { OrderHeader, NavFooter },
    name:'cart'
}
</script>