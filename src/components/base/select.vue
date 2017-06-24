<template>
	<div class="select" @mouseenter="enterChange" @mouseleave="leaveChange">
        <p class="select-result">
            <span :class="{black:isHight}">{{ selector[nowIndex]}}</span>
            <i :class="[isActive ? xxsj:xssj]"></i>
        </p>				  
    	<ul class="select-bar" v-show="!isActive">
    		<li v-for="(item,index) in selector" @click="show(index)">{{item}}</li>
        </ul>
	</div>
</template>
<script type="text/javascript">
    export default {
        data(){
          	return{
              isActive:true,
              isHight:false,
              xxsj:"boder_xxsj",
              xssj:"boder_xssj",
              nowIndex: 0
        	}
        },
        props: ["selector"],
        methods: {
            show(index){
                this.nowIndex = index,
                this.isHight=true,
                this.$emit("onChange",this.nowIndex),
                console.log(this.nowIndex);
                this.leaveChange()
            },
            enterChange(){
                this.isActive=false
            },
            leaveChange(){
                this.isActive=true
            },
         }
      }
</script>
<style type="text/css">
    .select {
        background: #f8f8f8;
        width: 75px;
        height: 31px;
        line-height: 31px;
        text-align: center;
        color: #999;
        position: relative;
        font-size: 12px;
    }
    .boder_xxsj {
        display: inline-block;
        border-width: 4px 4px 0 4px;
        border-color: #130202 transparent transparent transparent;
        border-style: solid dashed dashed dashed;
        width: 0;
        height: 0;
        line-height: 0;
        font-size: 0;
    }
    .boder_xssj {
        display: inline-block;
        border-width: 0 4px 4px 4px;
        border-color: transparent transparent #130202 transparent;
        border-style: dashed dashed solid dashed;
        width: 0;
        height: 0;
        line-height: 0;
        font-size: 0;
        vertical-align: middle;
    }
    .select-result i {
        position: absolute;
        right: 5px;
        top: 50%;
    }
    .select .select-bar {
        position: absolute;
        left: 0px;
        top: 31px;
        width: 100%;
        background: #fff;
        border: 1px solid #e5e5e5;
        z-index: 99999;
        zoom: 1;
    }
    .select-bar li {
        cursor: pointer;
        border-top: 1px solid #efefef;
        text-align: center;
        font-size: 12px;
        color: #999;
        cursor: pointer;
    }
    .select-bar li:hover {
        background: #f8f8f8;
    }
    .black {
        color: #333;
    }
</style>