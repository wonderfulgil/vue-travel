<template>
	<div class="tabs">
		<ul class="tab clearfix">          
            <li v-for="(tabItem, index) in tabs" @click="select(index)" :class="{on: activeIndex==index}">
            <a  href="javascript:;">{{tabItem}}</a>
            </li>
        </ul>
        <div v-for="(tabContItem, index) in tabContent" v-show="index==activeIndex" class="tab-content">
			<router-link :to="{path: 'detail/' + tabContItem.bigimg.toKey}" class="bigimg"><img :src="tabContItem.bigimg.img" width="468" height="230"></router-link>
        	 <ul class="card">
		        <li v-for="(cardItem, index) in tabContItem.card">
		            <card :mycard="cardItem"></card>
		         </li>
		    </ul>
        </div>
	</div>
</template>
<script type="text/javascript"> 
import card from "./card"
export default {
	data(){
	 	return{ 		
			activeIndex:0,
	 	}
	},
	props:["tabs" ,"tabContent" ],
	methods:{
	    select(index){
	    	this.activeIndex = index;
	    },
	},
    components:{
        card:card
    }
}
</script>
<style type="text/css" scoped>
	.tab li {
	    float: left;
	    margin-right: 20px;
	}
	.tab a {
	    display: inline-block;
	    font-size: 14px;
	    height: 20px;
	    line-height: 20px;
	}
	.tab li a {
	    display: inline-block;
	    font-size: 14px;
	    height: 20px;
	    line-height: 20px;
	}
	.tab li.on a, .tab li.on a:hover,.tab li:hover a {
	    background-color: #f93867;
	    color: rgb(255, 255, 255);
	}
	.tab-content {
	    width: 976px;
	    margin-top: 15px;
	    overflow: hidden;
	}
	.tab-content .bigimg{
        float: left;
        margin-left: 20px;
        height: 230px;
        width: 468px;
        overflow: hidden;
        display: inline-block;
    }
    .tab-content .bigimg img {
        width: 468px;
        height: 230px;
    }
    .card li {
        float: left;
    }
    .card a {
        display: inline-block;
        width: 224px;
        height: 232px;
        margin-left: 20px;
        margin-bottom: 20px;
    }
</style>