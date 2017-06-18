<template>
<div class="wrapper main clearfix">
    <div class="travel-list">
        <div class="search-condition">
            <h2><span>{{title}}</span></h2>
            <ul>
                <li>
                    <dl>
                        <dt><span>游玩价格:</span></dt>
                        <dd>
                            <a href="javascript:;" v-for="(priceitem,index) in selectprice" :class="{on:activeIndex==index}" @click="select(index)" :key="priceitem.id">{{priceitem.name}}</a>
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt><span>行程天数:</span></dt>
                        <dd>
                        <a href="javascript:;" v-for="(daysitem,index) in selectdays" :class="{on:onIndex==index}" @click="collect(index)" :key="daysitem.id">{{daysitem.name}}</a>
                        </dd>
                    </dl>
                </li>
            </ul>
        </div>
        <div class="searchresult">
            <ul>
                <li v-for="item in producelist" :key="item.id">
                    <div class="hot-ico"></div>
                    <div class="clearfix">
                        <div class="result-img"><img :src="item.img" :title="item.title" :alt="item.title" width="210" height="158"></div>
                        <div class="result-content">
                            <h2><router-link :to="{path:'/detail/'+item.key}">{{item.title}}</router-link> </h2>
                            <dl class="product-details">
                                <dt>产品特色 </dt>
                                <dd>{{item.point}}</dd>
                            </dl>
                            <dl class="product-details">
                                <dt>行程概览 </dt>
                                <dd>{{item.trip}} </dd>
                            </dl>
                            <dl class="product-details">
                                <dt>推荐理由: </dt>
                                <dd class="product-xc">{{item.reason}}</dd>
                            </dl>
                        </div>
                        <div class="result-price">
                            <div class="price"><b>￥</b><em>6650</em>起</div>
                            <router-link :to="{path:'/detail/'+item.key}" class="btn-go">去看看</router-link>
                        </div>
                    </div>
                </li> 
            </ul>
        </div>
    </div>
    <siderBar></siderBar>
 </div>        
</template>
<script type="text/javascript"> 
import siderBar from  "../components/siderbar.vue"
export default {
    components:{
        "siderBar":siderBar
    },
	data(){
	 	return{ 
                "activeIndex":"",
                "onIndex":"",
                "key":"3",
                "title":"中部西南区",
                "selectprice":[
                     {"id":"1","name":"全部",},
                     {"id":"2","name":"100元以下"},
                     {"id":"3","name":"300元以下"},
                     {"id":"4","name":"500元以下"},
                     {"id":"5","name":"100元以下"}
                ],
                "selectdays":[
                    {"id":"1","name":"全部"},
                    {"id":"2","name":"1-3天"},
                    {"id":"3","name":"5-7天"},
                    {"id":"4","name":"7-14天"}
                ],
                "producelist":[
                    {
                        "id":"1",
                        "img":require('@/assets/pic3.jpg'),
                        "title":"人间仙境-喀纳斯湖、禾木村、可可托海5日",
                        "key":"1",
                        "point":" 及时确认",
                        "trip":"D1 大象村骑大象 > 丝绸生产",
                        "reason":"华东段【行程特色】：旅程舒适，价格实惠，堪称性价比最高行程！带您畅游江南美景！【住宿特色】：全程入住商务酒店，经济舒适，花最合适的钱，住最舒服的宾馆【餐饮特色】：随餐赠送特色菜“盐水鸭、无锡酱排骨、西湖醋鱼、梅干菜烧肉”让您了解..."
                    },
                    {
                        "id":"2",
                        "img":require('@/assets/pic3.jpg'),
                        "title":"人间仙境-喀纳斯湖、禾木村、可可托海5日",
                        "key":"2",
                        "point":" 及时确认",
                        "trip":"D1 大象村骑大象 > 丝绸生产",
                        "reason":"华东段【行程特色】：旅程舒适，价格实惠，堪称性价比最高行程！带您畅游江南美景！【住宿特色】：全程入住商务酒店，经济舒适，花最合适的钱，住最舒服的宾馆【餐饮特色】：随餐赠送特色菜“盐水鸭、无锡酱排骨、西湖醋鱼、梅干菜烧肉”让您了解..."
                    },
                     {
                        "id":"3",
                        "img":require('@/assets/pic3.jpg'),
                        "title":"人间仙境-喀纳斯湖、禾木村、可可托海5日",
                        "key":"3",
                        "point":" 及时确认",
                        "trip":"D1 大象村骑大象 > 丝绸生产",
                        "reason":"华东段【行程特色】：旅程舒适，价格实惠，堪称性价比最高行程！带您畅游江南美景！【住宿特色】：全程入住商务酒店，经济舒适，花最合适的钱，住最舒服的宾馆【餐饮特色】：随餐赠送特色菜“盐水鸭、无锡酱排骨、西湖醋鱼、梅干菜烧肉”让您了解..."
                    },
                     {
                        "id":"4",
                        "img":require('@/assets/pic3.jpg'),
                        "title":"人间仙境-喀纳斯湖、禾木村、可可托海5日",
                        "key":"4",
                        "point":" 及时确认",
                        "trip":"D1 大象村骑大象 > 丝绸生产",
                        "reason":"华东段【行程特色】：旅程舒适，价格实惠，堪称性价比最高行程！带您畅游江南美景！【住宿特色】：全程入住商务酒店，经济舒适，花最合适的钱，住最舒服的宾馆【餐饮特色】：随餐赠送特色菜“盐水鸭、无锡酱排骨、西湖醋鱼、梅干菜烧肉”让您了解..."
                    }

                ]
	 	     }
	   },
    methods: {
        select(index){
            this.activeIndex=index,
            this.go()
        },
        collect(index){
            this.onIndex=index,
            this.go()
        },
        go(){
            if(this.onIndex==0&&this.activeIndex==0){
                this.$router.push({path:'/travelmore/'+this.key})
            }else if(this.activeIndex==0&&this.onIndex!==0){
                this.$router.push({path:'/travelmore/'+this.key,query:{days:this.selectdays[this.onIndex].name}})
            }else if(this.onIndex==0&&this.activeIndex!==0){
                this.$router.push({path:'/travelmore/'+this.key,query:{price:this.selectprice[this.activeIndex].name}})
            }else{
                this.$router.push({path:'/travelmore/'+this.key,query:{price:this.selectprice[this.activeIndex].name,days:this.selectdays[this.onIndex].name}})
            }
        }
    }

}
</script>
<style type="text/css">
.travel-list {
    width: 956px;
    float: left;
}
.search-condition {
    border: 1px solid #ddd;
}
.search-condition h2 {
    font-size: 16px;
    height: 45px;
    line-height: 45px;
    border-bottom: 2px solid #f93867;
    overflow: hidden;
}
.search-condition h2 span {
    background: #f93867;
    padding: 0 10px;
    display: inline-block;
    color: #fff;
}
.search-condition ul {
    font-size: 14px;
    overflow: hidden;
    padding: 10px;
}
.search-condition li {
    padding: 10px 0;
    font-size: 12px;
}
.search-condition li dt {
    width: 70px;
    display: inline-block;
    vertical-align: top;
}
.search-condition li span {
    color: #999;
}
.search-condition li dd {
    display: inline-block;
    width: 860px;
}
.search-condition li a {
    display: inline-block;
    padding: 0 10px;
    margin-right: 10px;
    line-height: 20px;
    margin-bottom: 3px;
}
.search-condition li a.on {
    background: #f93867;
    color: #fff;
}
.searchresult li {
    padding: 10px;
    margin-top: 10px;
    border: 1px solid #dcdcdc;
    border-bottom-color: #b0b0b0;
    position: relative;
}
.searchresult li:hover {
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}
.hot-ico {
    position: absolute;
    left: -4px;
    top: -4px;
    width: 67px;
    height: 65px;
    background: ;
}
.result-img {
    width: 210px;
    padding: 20px;
    float: left;
}
.result-content {
    float: left;
    width: 495px;
    padding: 20px 20px 20px 0;
}
.result-content h2 a {
    font-size: 16px;
    font-weight: bold;
    color: #0099d9;
}

.product-details {
    height: 22px;
    line-height: 22px;
}
.product-details dt {
    float: left;
    width: 63px;
    color: #999;
    font-size: 12px;
}
.product-details dd {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #999;
    float: left;
    width: 432px;
    font-size: 12px;
    height: 22px;
}
.product-details dd.product-xc {
    width: 432px;
    height: 66px;
    white-space: inherit;
}
.result-price {
    float: left;
    width: 169px;
    text-align: center;
    margin: 40px 0;
}
.result-price .price b, .result-price .price em {
    display: inline-block;
    font-size: 24px;
    color: #f93867;
    margin: 0 5px 0 2px;
    font-weight: bold;
}
.result-price .btn-go {
    vertical-align: top;
    text-align: center;
    display: inline-block;
    color: #FFF;
    border: 1px solid #f93867;
    background: #f93867;
    border-radius: 3px;
    height: 30px;
    line-height: 30px;
    padding: 0 24px;
    font-size: 16px;
    margin: 10px;
}
</style>