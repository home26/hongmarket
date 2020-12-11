<template>
    <div class="nav-bar">
        <div class="container">
            <div class="pro-title">
                Hong Max
            </div>
            <div class="pro-param">
                <a href="">Introduction</a><span>|</span>
                <a href="">Specification</a><span>|</span>
                <a href="">Feedback</a><span>|</span>
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

</style>