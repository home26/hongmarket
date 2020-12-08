<template>
    <div class="service">
        <div class="container">
            <ul>
                <li><span class="icon-setting"></span>Reserve After-sales Service</li>    
                <li><span class="icon-7day"></span>Refund Within 7 Days</li>    
                <li><span class="icon-15day"></span>Exchange Within 15 Days</li>    
                <li><span class="icon-post"></span>Delivery Fee Free Day</li>    
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'service-bar'
}
</script>
<style lang="scss">
    @import './../assets/scss/config.scss';
    @import './../assets/scss/mixin.scss';
    .service{
        padding: 33px 0;
        color:#666666;
        font-size: 16px;
        li{
            display: inline-block;
            width: 24.9%;
            text-align: center;
            border-right: 1px solid #E5E5E5;
            span{
                display: inline-block;
                width: 20px;
                height: 20px;
                vertical-align: middle;
                margin-right: 8px;
            }
            .icon-setting{
                @include bgImg(20px, 20px, '/imgs/icon-setting.png',contain);
            }
            .icon-7day{
                @include bgImg(20px, 20px, '/imgs/icon-7day.png',contain);
            }
            .icon-15day{
                @include bgImg(20px, 20px, '/imgs/icon-15day.png',contain);
            }
            .icon-post{
                @include bgImg(20px, 20px, '/imgs/icon-post.png',contain);
            }
        }

    }
</style>