<template>
    <div class="header">
      <div class="nav-topbar">
          <div class="container">
            <div class="topbar-menu">
                <a href="https://excellenthong.ca/" target="_blank">Hong</a>
                <a href="javascript:;">New!</a>
                <a href="javascript:;">On Sale</a>
                <a href="javascript:;">Terms & Conditions</a>
            </div>
            <div class="topbar-user">
                <a href="javascript:;" v-if="username">{{username}}</a>
                <a href="javascript:;" v-if="!username" @click="login">LogIn</a>
                <a href="javascript:;" v-if="username" @click="logout">Exit</a>
                <a href="javascript:;" v-if="username">My Order</a>
                <a href="javascript:;" class="my-cart" @click="goToCart"><span class="icon-cart"></span>Cart({{cartCount}})</a>
            </div>
          </div>
      </div>
      <div class="nav-header">
          <div class="container">
              <div class="header-logo">
                  <a href="/#/index"></a>
              </div>
              <div class="header-menu">
                  <div class="item-menu">
                      <span>Phone</span>
                      <div class="children">
                          <ul>
                              <li class="product" v-for="(item,index) in phoneList" :key="index">
                                  <a v-bind:href="'/#/product/'+item.id" target="_blank">
                                      <div class="pro-img">
                                          <img v-lazy="item.mainImage" :alt="item.subtitle">
                                      </div>
                                      <div class="pro-name">{{item.name}}</div>
                                      <div class="pro-price">{{item.price | currency}}</div>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div class="item-menu">
                      <span>PC</span>
                      <div class="children">
                          <ul>
                              <li class="product" v-for="(item,index) in phoneList" :key="index">
                                  <a v-bind:href="'/#/product/'+item.id" target="_blank">
                                      <div class="pro-img">
                                          <img v-lazy="item.mainImage" :alt="item.subtitle">
                                      </div>
                                      <div class="pro-name">{{item.name}}</div>
                                      <div class="pro-price">{{item.price | currency}}</div>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div class="item-menu">
                      <span>TV</span>
                      <div class="children">
                          <ul>
                              <li class="product">
                                  <a href="" target="_blank">
                                      <div class="pro-img">
                                          <img src="./../../public/imgs/nav-img/nav-3-1.jpg">
                                      </div>
                                      <div class="pro-name">Hong Max1</div>
                                      <div class="pro-price">$299</div>
                                  </a>
                              </li>
                              <li class="product">
                                  <a href="" target="_blank">
                                      <div class="pro-img">
                                          <img src="./../../public/imgs/nav-img/nav-3-2.jpg">
                                      </div>
                                      <div class="pro-name">Hong Max2</div>
                                      <div class="pro-price">$399</div>
                                  </a>
                              </li>
                              <li class="product">
                                  <a href="" target="_blank">
                                      <div class="pro-img">
                                          <img src="./../../public/imgs/nav-img/nav-3-3.png">
                                      </div>
                                      <div class="pro-name">Hong Max3</div>
                                      <div class="pro-price">$499</div>
                                  </a>
                              </li>
                              <li class="product">
                                  <a href="" target="_blank">
                                      <div class="pro-img">
                                          <img src="./../../public/imgs/nav-img/nav-3-4.jpg">
                                      </div>
                                      <div class="pro-name">Hong Max4</div>
                                      <div class="pro-price">$599</div>
                                  </a>
                              </li>
                              <li class="product">
                                  <a href="" target="_blank">
                                      <div class="pro-img">
                                          <img src="./../../public/imgs/nav-img/nav-3-5.jpg">
                                      </div>
                                      <div class="pro-name">Hong Max5</div>
                                      <div class="pro-price">$699</div>
                                  </a>
                              </li>
                              <li class="product">
                                  <a href="" target="_blank">
                                      <div class="pro-img">
                                          <img src="./../../public/imgs/nav-img/nav-3-6.png">
                                      </div>
                                      <div class="pro-name">Hong Max6</div>
                                      <div class="pro-price">$799</div>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div class="header-search">
                  <div class="wrapper">
                      <input type="text" name="keyword">
                      <a href="javascript:;"></a>
                  </div>
              </div>
          </div>
      </div>
    </div>
</template>
<script>
import { Message } from 'element-ui';
export default {
    name:'nav-header',
    data(){
        return {
            phoneList:[]
        }
    },
    computed:{
      username(){
        return this.$store.state.username;
      },
      cartCount(){
        return this.$store.state.cartCount;
      }
    },
    filters:{
        currency(val){
            if(!val)return '0.00';
            return '$'+val.toFixed(2);
        }
    },
    mounted(){
        this.getProductList();
        let params = this.$route.params;
        if(params && params.from == 'login'){
            this.getCartCount();
        }
    },
    methods:{
       login(){
           this.$router.push('/login');
       },
       getProductList(){
           this.axios.get('/products',{
               params:{
                   categoryId:'100012',
                   pageSize:6
               }
           }).then((res)=>{
               if(res.list.length >= 6){
                   this.phoneList = res.list.slice(0,6);     
               }
           })
       },
        getCartCount(){
            this.axios.get('/carts/products/sum').then((res)=>{
                this.$store.dispatch('saveCartCount',res);
            })      
        },
       logout(){
           this.axios.post('/user/logout').then(()=>{
               Message.success('Exited successfully');
               this.$cookie.set('userId','',{expires:'-1'});
               this.$store.dispatch('saveUserName','');     
               this.$store.dispatch('saveCartCount','0');                        
           })           
       },
       goToCart(){
          this.$router.push('/cart');
       } 
    }
}
</script>
<style lang="scss">
    @import './../assets/scss/base.scss';
    @import './../assets/scss/mixin.scss';
    @import './../assets/scss/config.scss';
    .header{
        .nav-topbar{
            height:39px;
            line-height:39px;
            background-color: #333333;
            color:#B0B0B0;
            .container{
               @include flex(); 
               a{
                   display: inline-block;
                   color:#B0B0B0;
                   margin-right: 17px;
               }
               .my-cart{
                   width: 110px;
                   background-color: #0059a3;
                   text-align: center;
                   color:#ffffff;
                   margin-right: 0;
                   .icon-cart{
                      @include bgImg(16px,12px,'/imgs/icon-cart-checked.png',contain); 
                   }
               }
            }
        }
        .nav-header{
            .container{
                position: relative;
                height: 112px;
                @include flex(); 
                .header-menu{
                    display: inline-block;
                    width:643px;
                    padding-left: 209px;
                    .item-menu{
                        display: inline-block;
                        color: #333333;
                        font-weight: bold;
                        font-size: 16px;
                        line-height: 112px;
                        margin-right: 20px;
                        span{
                            cursor: pointer;
                        }
                        &:hover{
                         color:$colorA; 
                         .children{
                             height:220px; 
                             opacity: 1;       
                         }
                        }
                        .children{
                            position: absolute;
                            top: 112px;
                            left: 0;
                            width: 1226px;
                            height:0;
                            opacity: 0;
                            overflow: hidden;
                            border-top: 1px solid #E5E5E5;
                            box-shadow: 0px 7px 6px 0px rgba(0,0,0,0.11);
                            z-index: 10;
                            transition:all .5s;
                            background-color: #ffffff;
                            .product{
                                position: relative;
                                float: left;
                                width: 16.6%;
                                height: 220px;
                                font-size: 12px;
                                line-height: 12px;
                                text-align: center;
                                a{
                                    display: inline-block;
                                }
                                img{
                                    width: auto;
                                    height: 111px;
                                    margin-top: 26px;
                                }
                                .pro-img{
                                  height:137px;
                                }
                                .pro-name{
                                  font-weight: bold;
                                  margin-top: 19px;
                                  margin-bottom: 8px;
                                  color: $colorB;        
                                }
                                .pro-price{
                                   color: $colorA; 
                                }
                                &:before{
                                    content: ' ';
                                    position: absolute;
                                    top: 28px;
                                    right: 0;
                                    border-left:1px solid $colorF;
                                    height: 100px;
                                    width: 1px;
                                }
                                &:last-child:before{
                                    display: none;
                                }
                            }
                        }
                    }
                }
                .header-search{
                    width:319px;
                    .wrapper{
                        height:50px;
                        border:1px solid #E0E0E0;
                        display: flex;
                        align-items: center;
                        input{
                            border: none;
                            box-sizing: border-box;
                            border-right: 1px solid #E0E0E0;
                            width:264px;
                            height:50px;
                            padding-left: 14px;
                        }
                        a{
                            display: inline-block;
                            @include bgImg(18px,18px,'/imgs/icon-search.png',contain);                            
                            margin-left: 17px;
                        }
                    }
                }
            }
        }
    }
</style>