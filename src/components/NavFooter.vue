<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="imgs/hm-logo-footer.png" alt="">
            <p>HongMarket</p>
        </div>
        <div class="footer-link">
            <a href="https://excellenthong.ca/" target="_blank">Developed By Hong</a><span>|</span>
            <a href="https://excellenthong.ca/" target="_blank">Welcome To Hong's Website</a>
        </div>
        <div class="copyright">
            Copyright ©2020 hongmarket.com All Right Reserved
        </div>
    </div>
</template>
<script>
export default {
    name:'nav-footer'
}
</script>
<style lang="scss">
    @import './../assets/scss/config.scss';
    .footer{
        height: 234px;
        border-top: 4px solid $colorA;
        background-color: #333333;
        color:#999999;
        font-size: 16px;
        text-align: center;
        .footer-logo{
            margin-top: 46px;
            margin-bottom: 31px;
            img{
                width: 53px;
                height: 53px;
                margin-bottom: 13px;
            }
        }
        .footer-link{
            a{
                color: #999999;
                display: inline-block;
            }
            span{
                margin:0 4px;
            }
            margin-bottom:13px;
        }
    }
</style>