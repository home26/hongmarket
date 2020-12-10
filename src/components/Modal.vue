<template>
    <transition name="slide">
        <div class="modal" v-show="showModal">
        <div class="mask">
        </div>
            <div class="modal-dialog">
                <div class="modal-header">
                    <span>Title</span>
                    <a href="javascript:;" class="icon-close"></a>
                </div>
                <div class="modal-body">
                    <slot name="body"></slot>
                </div>
                <div class="modal-footer">
                    <a href="javascript:;" class="btn" v-if="btnType==1" v-on:click="$emit('submit')">Confirm</a>
                    <a href="javascript:;" class="btn" v-if="btnType==2" v-on:click="$emit('cancel')">Confirm</a>   
                    <div class="btn-group" v-else>
                        <a href="javascript:;" class="btn" v-on:click="$emit('submit')">Confirm</a>          
                        <a href="javascript:;" class="btn" v-on:click="$emit('cancel')">Cancel</a>
                    </div>            
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    export default{
        name:'modal',
        props:{
            modalType:{
                type:String,
                default:'form'
            },
            //The title of popup
            title:String,
            //The type of button: 1.Confirm 2.Cancel 3.Confirm Canceling
            btnType:String,
            sureText:{
                type:String,
                default:'Confirm'
            },
            cancelText:{
                type:String,
                default:'Cancel'
            },
            showModal:Boolean
        }
    }
</script>
<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/modal.scss';
</style>