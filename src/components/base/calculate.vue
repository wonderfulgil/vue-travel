<template>
	<div class="calculate">
        <a href="javascript:;"  @click="minNum" class="btn-down" :class="{gray:newnum}">-</a>
        <input type="text" size="2" class="txtaultNum" v-model="counter" readonly>
        <a href="javascript:;" @click="addNum" class="btn-up">+</a>             
    </div>            
</template>

<script type="text/javascript"> 
export default {
	data(){
	 	return{ 
            counter:1,//记录input数值
	 	}
	},
    props:["num"],//input数值的最小值
    methods:{
        addNum: function() {
             return this.counter++;
        },
        minNum:function() {  
            return this.counter--;
        }          
    },
    computed:{
        newnum:function(){
            return this.counter<this.num+1
         }
    },
    watch:{
        counter:function(val,oldval){
            if( val<this.num+1){                             
                this.counter=this.num
            }
            this.$emit('onreturn', this.counter)   
        }
      
    }
}
</script>
<style type="text/css" scoped>
	.calculate {
        border: 1px solid #e5e5e5;
        display: inline-block;
        height: 22px;
        line-height: 22px;
        width: 78px;
        margin: 0;
        font-size: 0;
        vertical-align: top;
    }
    .calculate a {
        background: #fff;
        display: inline-block;
        font-size: 18px;
        height: 100%;
        width: 23px;
        vertical-align: top;
        text-align: center;
    }
    .calculate a.btn-down {
        border-right: 1px solid #e5e5e5;
    }
    .calculate input {
        border: 0 none;
        display: inline-block;
        height: 22px;
        line-height: 22px;
        width: 30px;
        vertical-align: top;
        padding: 0;
        margin: 0;
        font-size: 12px;
        font-family: "Microsoft YaHei";
        text-align: center;
    }
    .calculate a.btn-up {
        border-left: 1px solid #e5e5e5;
    }
    .calculate:hover, .calculate a:hover {
        border-color: #f93867;
    }
    .calculate .gray:hover {
       color: #eee;
    }
</style>