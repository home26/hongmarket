<template>
    <div class="header">
      <div class="nav-topbar">
          <div class="container">
            <div class="topbar-menu">
                <a href="https://excellenthong.ca/">Hong</a>
                <a href="javascript:;">New!</a>
                <a href="javascript:;">On Sale</a>
                <a href="javascript:;">Terms & Conditions</a>
            </div>
            <div class="topbar-user">
                <a href="javascript:;">Log In</a>
                <a href="javascript:;">Sign Up</a>
                <a href="javascript:;" class="my-cart"><span class="icon-cart"></span>Cart</a>
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
                      <div class="children"></div>
                  </div>
                  <div class="item-menu">
                      <span>PC</span>
                      <div class="children"></div>
                  </div>
                  <div class="item-menu">
                      <span>TV</span>
                      <div class="children"></div>
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
export default {
    name:'nav-header'
}
</script>
<style lang="scss">
    @import './../assets/scss/base.scss';
    @import './../assets/scss/mixin.scss';
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
                   background-color: #FF6600;
                   text-align: center;
                   color:#ffffff;
                   .icon-cart{
                      @include bgImg(16px,12px,'/imgs/icon-cart-checked.png',contain); 
                   }
               }
            }
        }
        .nav-header{
            .container{
                height: 112px;
                @include flex(); 
                .header-logo{
                    display: inline-block;
                    width: 55px;
                    height: 55px;
                    a{
                        display: inline-block;
                        width: 110px;
                        height: 55px;
                        &:before{
                            content:' ';
                            @include bgImg(55px,55px,'/imgs/hm-logo.png',55px);
                            transition: margin .2s;
                        }
                        &:after{
                            content:' ';
                            @include bgImg(55px,55px,'/imgs/hm-home.png',55px);
                        }
                        &:hover:before{
                            margin-left: -55px;
                            transition: margin .2s;
                        }
                    }
                }
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