<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
              <div class="nav-menu">
                  <ul class="menu-wrap">
                      <li class="menu-item">
                          <a href="javascript:;">Phone SIM</a>
                          <div class="children"></div>
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
                          <a href="javascript:;">Clothes Life</a>
                      </li>
                      <li class="menu-item">
                          <a href="javascript:;">Router Network</a>
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
                ]
            }
        }
    }
</script>
<style lang="scss">
    .index{
        .swiper-box{
            .nav-menu{
               position:absolute;
               width: 264px;
               height: 451;
               z-index: 9; 
               padding: 26px 0;
               background-color:#55585A;
               .menu-wrap{
                   .menu-item{
                       height:50px;
                       line-height: 50px;
                   }
               }
            }
            .swiper-container{
                height: 451px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>