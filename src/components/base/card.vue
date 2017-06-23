<template>
    <router-link :to="{path:'/detail/'+ mycard.toKey}">
        <div class="card-picture">
            <img :src="mycard.img" width="224" height="157">
        </div>
        <p class="card-name">{{mycard.name }}</p>
        <p class="card-price">
          <span><i>¥</i><b> {{mycard.price }}</b>起</span>
        </p> 
    </router-link>               
</template>
<script type="text/javascript"> 
export default {
	data(){
	 	return{ 
            
	 	}
	},
    props:["mycard"]
}
</script>
<style type="text/css" scoped>
	.card-picture {
        width: 224px;
        height: 157px;
        overflow: hidden;
    }
    .card-picture img {
        width: 224px;
        height: 157px;
    }
    .card-name {
        line-height: 18px;
        height: 36px;
        text-align: justify;
        clear: both;
        overflow: hidden;
        margin-top: 10px;
    }
    .card-price {
        clear: both;
        height: 24px;
        width: 222px;
        color: rgb(102, 102, 102);
        overflow: hidden;
    }
    .card-price i {
        color: rgb(204, 0, 0);
        font: 18px "Microsoft Yahei";
    }
    .card-price b {
        font-size: 20px;
        color: rgb(204, 0, 0);
        font-weight: 400;
    }
</style>