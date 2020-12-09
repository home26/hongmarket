<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
              <div class="nav-menu">
                  <ul class="menu-wrap">
                      <li class="menu-item">
                          <a href="javascript:;">Phone SIM</a>
                          <div class="children">
                              <ul v-for="(item, i) in menuList" v-bind:key="i">
                                  <li v-for="(sub, j) in item" v-bind:key="j">
                                      <a v-bind:href="sub ? '/#/product/'+sub.id:''">
                                          <img v-bind:src="sub ? sub.img : '/imgs/item-box-1.png'" alt="">
                                          {{sub ? sub.name : 'Hong Air9'}}
                                      </a>
                                  </li>
                              </ul>
                          </div>
                      </li>
                      <li class="menu-item">
                          <a href="javascript:;">TV TVBox</a>
                      </li>
                      <li class="menu-item">
                          <a href="javascript:;">Laptop Pad</a>
                      </li>
                      <li class="menu-item">
                          <a href="javascript:;">Appliance Socket</a>
                      </li>
                      <li class="menu-item">
                          <a href="javascript:;">Life Clothes</a>
                      </li>
                      <li class="menu-item">
                          <a href="javascript:;">Network Router</a>
                      </li>
                      <li class="menu-item">
                          <a href="javascript:;">Power Accessory</a>
                      </li>
                      <li class="menu-item">
                          <a href="javascript:;">Trip Suitcase</a>
                      </li>
                  </ul>
              </div>
              <swiper v-bind:options="swiperOption">
                  <swiper-slide v-for="(item,index) in slideList" v-bind:key="index">
                      <a v-bind:href="'/#/product/'+item.id"><img v-bind:src="item.img"></a>
                  </swiper-slide>
                  <div class="swiper-pagination" slot="pagination"></div>
                  <div class="swiper-button-prev" slot="button-prev"></div>
                  <div class="swiper-button-next" slot="button-next"></div>
              </swiper>
            </div>
            <div class="ads-box"></div>
            <div class="banner"></div>
            <div class="product-box"></div>
        </div>
        <service-bar></service-bar>
    </div>
</template>
<script>
    import ServiceBar from './../components/ServiceBar'
    import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    export default {
        name:'index',
        components: { Swiper, SwiperSlide, ServiceBar },
        data(){
            return {
                swiperOption:{
                    autoplay:true,
                    loop:true,
                    effect:'cube',
                    cubeEffect: {
                        slideShadows: true,
                        shadow: true,
                        shadowOffset: 100,
                        shadowScale: 0.6
                    },
                    pagination:{
                        el:'.swiper-pagination',
                        clickable:true,
                    },
                    navigation:{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }
                },
                slideList:[
                    {
                        id:'42',
                        img:'/imgs/slider/slide-1.jpg'
                    },{
                        id:'45',
                        img:'/imgs/slider/slide-2.jpg'                        
                    },{
                        id:'46',
                        img:'/imgs/slider/slide-3.jpg'                        
                    },{
                        id:'',
                        img:'/imgs/slider/slide-4.jpg'                       
                    },{
                        id:'',
                        img:'/imgs/slider/slide-5.jpg'                       
                    }
                ],
                menuList:[
                    [
                        {
                            id:30,
                            img:'/imgs/item-box-1.png',
                            name:'Hong MAX9',

                        },{
                            id:31,
                            img:'/imgs/item-box-2.png',
                            name:'Hong SUPER8',

                        },{
                            id:32,
                            img:'/imgs/item-box-3.jpg',
                            name:'Hong EXTREME8',                            
                        },{
                            id:33,
                            img:'/imgs/item-box-4.jpg',
                            name:'Hong CRAZY8',                             
                        }                       
                    ],
                    [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
                ]
            }
        }
    }
</script>
<style lang="scss">
    @import './../assets/scss/mixin.scss';
    @import './../assets/scss/config.scss';
    .index{
        .swiper-box{
            .nav-menu{
               position:absolute;
               width: 264px;
               height: 451px;
               z-index: 9; 
               padding: 26px 0;
               background-color:#55585a7a;
               box-sizing: border-box;
               .menu-wrap{
                   .menu-item{
                       height:50px;
                       line-height: 50px;
                       a{
                           position: relative;
                           display: block;
                           font-size: 16px;
                           color: #ffffff;
                           padding-left: 30px;
                           &:after{
                               position: absolute;
                               right:30px;
                               top:17.5px;
                               content: ' ';
                               @include bgImg(10px,15px,'/imgs/icon-arrow.png');
                           }
                       }
                       &:hover{
                           background-color: $colorA;
                           .children{
                               display: block;
                           }
                       }
                       .children{
                           display:none;
                           width: 962px;
                           height: 451px;
                           background-color: $colorG;
                           position:absolute;
                           top:0;
                           left:264px;
                           border: 1px solid $colorH;
                           ul{
                               display: flex;
                               justify-content: space-between;
                               height: 75px;
                               li{
                                   height: 75px;
                                   line-height: 75px;
                                   flex: 1;
                                   padding-left: 23px;
                               }
                               a{
                                   color: $colorB;
                                   font-size: 14px;
                               }
                               img{
                                   width:42px;
                                   height: 35px;
                                   vertical-align: middle;
                                   margin-right: 15px;
                               }
                           }
                       }
                   }
               }
            }
            .swiper-container{
                height: 451px;
                .swiper-button-prev{
                    left:274px;
                }
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>