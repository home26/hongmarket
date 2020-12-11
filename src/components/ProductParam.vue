<template>
    <div class="nav-bar">
        <div class="container">
            <div class="pro-title">
                Hong Max
            </div>
            <div class="pro-param">
                <a href="javascript:;">Introduction</a><span>|</span>
                <a href="javascript:;">Specification</a><span>|</span>
                <a href="javascript:;">Feedback</a>
                <slot name="buy"></slot>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:'nav-bar'
    }
</script>
<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
    .nav-bar{
        height: 70px;
        line-height: 70px;
        border: 1px solid $colorH;
        .container{
            @include flex();
            .pro-title{
                font-size: $fontH;
                color: $colorB;
                font-weight: bold;
            }
            .pro-param{
                font-size: $fontJ;
                span{
                    margin: 0 10px;
                }
                a{
                    color:$colorC;
                    &:last-child{
                        margin-right: 10px;
                    }
                }
            }
        }
    }
</style>