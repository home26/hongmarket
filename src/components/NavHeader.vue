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
      <div class="nav-header"></div>
    </div>
</template>
<script>
export default {
    name:'nav-header'
}
</script>
<style lang="scss">
    .header{
        .nav-topbar{
            height:39px;
            line-height:39px;
            background-color: #333333;
            color:#B0B0B0;
            .container{
               width:1226px;
               margin-right:auto;
               margin-left:auto;
               display: flex;
               justify-content: space-between;
               align-items: center;
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
                      display: inline-block;
                      width: 36px;
                      height: 12px; 
                      background: url('/imgs/icon-cart-checked.png') no-repeat center; 
                      background-size: contain;
                      margin-right: 4px;
                   }
               }
            }
        }
    }
</style>