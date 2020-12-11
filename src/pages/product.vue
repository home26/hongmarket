<template>
    <div class="product">
      <product-param>
          <template v-slot:buy>
              <button class="btn">Buy Now!</button>
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
<style lang="scss" >
    .product{
        margin-left: 10px;
    }
</style>