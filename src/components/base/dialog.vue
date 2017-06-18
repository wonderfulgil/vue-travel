<template>
    <div class="dialog">
        <div class="dialog-cover"  v-if="isShow" @click="closeDialog"></div>
        <transition name="drop">
            <div class="dialog-content" v-if="isShow">
                <p class="dialog-close" @click="closeDialog">x</p>
                <slot>empty</slot>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    data () {
        return {

        }
    },
    props:{
        isShow:{
            type:Boolean,
            dafault:false
        }
    },
    methods: {
        closeDialog(){
            this.$emit("closeMyDialog")
        },
    }
 }
</script>

<style scoped>
    .drop-enter-active {
        transition: all .5s ease;
    }
    .drop-leave-active {
        transition: all .3s ease;
    }
    .drop-enter {
        transform: translateY(-500px);
    }
    .drop-leave-active {
        transform: translateY(-500px);
    }
    .dialog-cover {
        background: #000;
        opacity: .75;
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .dialog-content {
        position: fixed;
        overflow: auto;
        background: #fff;
        left: 50%;
        top: 50%;
        border: 2px solid #eee;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
        padding: 2%;
        line-height: 1.6;
        z-index: 100;
        width: 360px;
        padding-bottom: 30px;
        margin: -218px 0 0 -180px;
    }
    .dialog-close {
        position: absolute;
        right: 5px;
        top: 5px;
        width: 20px;
        height: 20px;
        text-align: center;
        cursor: pointer;
        font-weight: bold;
    }
    .dialog-close:hover {
        color: #f93867;
    }
</style>
