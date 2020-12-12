<template>
  <div class="cart">
    <order-header title="MyCart">
      <template v-slot:tip>
        <span>Wish you a happy shopping journey!</span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="cart-box">
          <ul class="cart-item-head">
            <li class="col-1"><span class="checkbox" v-bind:class="{'checked':allChecked}" @click="toggleAll"></span>Select All</li>
            <li class="col-3">Name</li>
            <li class="col-1">Price</li>
            <li class="col-2">Count</li>
            <li class="col-1">Subtotal</li>
            <li class="col-1">Operate</li>
          </ul>
          <ul class="cart-item-list">
            <li class="cart-item" v-for="(item,index) in list" v-bind:key="index">
              <div class="item-check">
                <span class="checkbox" v-bind:class="{'checked':item.productSelected}" @click="updateCart(item)"></span>
              </div>
              <div class="item-name">
                <img v-lazy="item.productMainImage" alt="">
                <span>{{item.productName + ' , ' + item.productSubtitle}}</span>
              </div>
              <div class="item-price">{{item.productPrice}}</div>
              <div class="item-num">
                <div class="num-box">
                  <a href="javascript:;" @click="updateCart(item,'-')">-</a>
                  <span>{{item.quantity}}</span>
                  <a href="javascript:;" @click="updateCart(item,'+')">+</a>
                </div>
              </div>
              <div class="item-total">{{item.productTotalPrice}}</div>
              <div class="item-del" @click="delProduct(item)"></div>
            </li>
          </ul>
        </div>
        <div class="order-wrap clearfix">
          <div class="cart-tip fl">
            <a href="/#/index">Continue Shopping</a>
            <span>{{list.length}}</span>item(s)，<span>{{checkedNum}}</span>selected
          </div>
          <div class="total fr">
            Total:$<span>{{cartTotalPrice}}</span>
            <a href="javascript:;" class="btn">Pay</a>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
  import OrderHeader from './../components/OrderHeader'
  import ServiceBar from './../components/ServiceBar'
  import NavFooter from './../components/NavFooter'
  export default{
    name:'index',
    components:{
      OrderHeader,
      ServiceBar,
      NavFooter
    },
    data(){
      return {
        list:[],
        allChecked:false,
        cartTotalPrice:0,
        checkedNum:0
      }
    },
    mounted(){
      this.getCartList();
    },
    methods:{
      getCartList(){
        this.axios.get('/carts').then((res)=>{
          this.renderData(res);
        })
      },
      //update number
      updateCart(item, type){
          let quantity = item.quantity,
              selected = item.productSelected;
          if(type == '-'){
              if(quantity == 1){
                  alert('You must buy at leaset one item');
                  return;
              }
              --quantity;
          }else if(type == '+'){
              if(quantity >= item.productStock){
                  alert('The number of item can not be over the stock');
                  return;
              }
              ++quantity;
          }else{
              selected = !item.productSelected;
          }
          this.axios.put(`/carts/${item.productId}`,{
              quantity,
              selected
          }).then((res)=>{
              this.renderData(res);
          })
      },
      //delete product
      delProduct(item){
          this.axios.delete(`/carts/${item.productId}`).then((res)=>{
              this.renderData(res);
          })
      },
      //select all
      toggleAll(){
        let url = this.allChecked?'/carts/unSelectAll':'/carts/selectAll';
        this.axios.put(url).then((res)=>{
          this.renderData(res);
        })
      },
      //public data
      renderData(res){
        this.list = res.cartProductVoList || [];
        this.allChecked = res.selectedAll;
        this.cartTotalPrice = res.cartTotalPrice;
        this.checkedNum = this.list.filter(item=>item.productSelected).length;
      }
    }
  }
</script>
<style lang="scss">
    @import './../assets/scss/mixin.scss';
    @import './../assets/scss/config.scss';
  .cart{
    .wrapper{
      background-color:#F5F5F5;
      padding-top:30px;
      padding-bottom:114px;
      .cart-box{
        background-color:#fff;
        font-size:14px;
        color:#999999;
        text-align:center;
        .checkbox{
          display: inline-block;
          width: 22px;
          height: 22px;
          border: 1px solid #E5E5E5;
          vertical-align: middle;
          margin-right: 17px;
          cursor:pointer;
          &.checked{
            background:url('/imgs/icon-gou.png') $colorA no-repeat center;
            background-size:16px 12px;
            border:none;
          }
        }
        .cart-item-head{
          display:flex;
          height: 79px;
          line-height: 79px;
          .col-1{
            flex:1;
          }
          .col-2{
            flex:2;
          }
          .col-3{
            flex:3;
          }
        }
        .cart-item-list{
          .cart-item{
            display:flex;
            align-items:center;
            height:125px;
            border-top:1px solid #E5E5E5;
            font-size:16px;
            .item-check{
              flex:1;
            }
            .item-name{
              flex:3;
              font-size: 18px;
              color: #333333;
              display: flex;
              align-items: center;
              img{
                width:80px;
                height:80px;
                vertical-align:middle;
              }
              span{
                margin-left: 30px;
              }
            }
            .item-price{
              flex:1;
              color:#333333;
            }
            .item-num{
              flex:2;
              .num-box{
                display:inline-block;
                width:150px;
                height:40px;
                line-height:40px;
                border:1px solid #E5E5E5;
                font-size:14px;
                a{
                  display:inline-block;
                  width:50px;
                  color:#333333;
                }
                span{
                  display:inline-block;
                  width:50px;
                  color:#333333;
                }
              }
            }
            .item-total{
              flex:1;
              color:$colorA;
            }
            .item-del{
              flex:1;
              width:14px;
              height:12px;
              background:url('/imgs/icon-close.png') no-repeat center;
              background-size:contain;
              cursor:pointer;
            }
          }
        }
      }
      .order-wrap{
        font-size:14px;
        color: #666666;
        margin-top: 20px;
        height: 50px;
        line-height: 50px;
        .cart-tip{
          margin-left: 29px;
          a{
            color: #666666;
            margin-right:37px;
          }
          span{
            color:$colorA;
            margin:0 5px;
          }
        }
        .total{
          font-size:14px;
          color:$colorA;
          span{
            font-size:24px;
          }
          a{
            width:202px;
            height:50px;
            line-height:50px;
            font-size:18px;
            margin-left:37px;
          }
        }
      }
    }
  }
</style>