<template>
    <div>
      <product-param>
          <template v-slot:buy>
              <button class="btn">BUY!</button>
          </template>
      </product-param>
    </div>
</template>
<script>
    import ProductParam from './../components/ProductParam'
    export default {
        name:'product',
        components:{
            ProductParam
        }
    }
</script>