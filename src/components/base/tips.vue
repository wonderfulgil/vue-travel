<template>
	<div class="tips" @mouseover="changeTips" @mouseout="changeTips">
        <span class="tips-title">{{tipsTitle}}</span>
        <div class="tip-content" v-if="istip">
            <p class="tip-description">{{tipDescription}}</p>
        </div>
    </div>
</template>
<script type="text/javascript"> 
export default {
	data(){
	 	return{ 
            istip:false		
	 	}
	},
	props:["tipsTitle","tipDescription" ],
    methods:{
        changeTips(){
            this.istip=!this.istip
        }
    }
}
</script>
<style type="text/css" scoped>
	.tips {
        position: relative;
        cursor: help;

    }
    .tips-title{
        cursor: help;
        line-height: 24px;
        height: 24px;
    }
    .tip-content {
        position: absolute;
        border: 1px solid #f8d3a7;
        background: #fffedf;
        z-index: 10;
        color: #333;
        top: 24px;
        left: -20%;
        padding: 10px;
        width: 204px;
        line-height: 24px;
    }
</style>