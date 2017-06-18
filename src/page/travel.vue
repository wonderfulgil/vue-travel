<template>
<div class="wrapper main">
    <div v-for="item in travel" :key="item.id">
        <div class="title travel-plate">
            <h2 ><span>{{item.title}}</span><router-link :to="{path:'/travelmore/'+item.key}" class="right">更多</router-link></h2>
            <div class="sitebanner">
                <img :src="item.siderBanner" width="224" height="613">
                <dl>
                    <dt>热门目的地</dt>
                    <dd v-for="item in item.hotTreval" :key="item.id"><router-link :to="{path:'/travelmore/'+item.key}" >{{item.name}}</router-link></dd>  
                </dl>
            </div>
            <div class="travel-content">
                <ul class="cards clearfix">
                  <li v-for="item in item.cards" :key="item.id"><card-Two :mycard="item"></card-Two></li>
                </ul>
            </div>
        </div>  
        <img :src="item.banner"  width="1200" height="90"> 
    </div>
</div>           
</template>
<script type="text/javascript"> 
import cardTwo from '../components/base/cardTwo.vue'
export default {
	data(){
	 	return{ 
            travel:[
            {
                "id":"1",
                "title":"一日游",
                "key":"1",
                "siderBanner":require("@/assets/pic2.jpg"),
                "hotTreval":[
                    {"id":"1","name":"天池一日","key":"1"},
                    {"id":"2","name":"天池一日","key":"2"},
                    {"id":"3","name":"天池一日","key":"3"},
                    {"id":"4","name":"天池一日","key":"4"},
                    {"id":"5","name":"天池一日","key":"5"},
                    {"id":"6","name":"天池一日","key":"6"},
                    {"id":"7","name":"天池一日","key":"7"},
                    {"id":"8","name":"天池一日","key":"8"},
                ],
                "cards":[
                    {
                        "id":"1",
                        "toKey":"1",
                        "img":require('@/assets/pic6.jpg'),
                        "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                        "price":"1699" ,
                        "hoverTips":"上海直飞，正航班，全程0自费,2晚市区4星级酒店+1晚黄金海岸酒店入住"
                    },
                     {
                        "id":"2",
                        "toKey":"1",
                        "img":require('@/assets/pic6.jpg'),
                        "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                        "price":"1699" ,
                        "hoverTips":"上海直飞，正航班，全程0自费,2晚市区4星级酒店+1晚黄金海岸酒店入住"
                    },
                     {
                        "id":"3",
                        "toKey":"1",
                        "img":require('@/assets/pic6.jpg'),
                        "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                        "price":"1699" ,
                        "hoverTips":"上海直飞，正航班，全程0自费,2晚市区4星级酒店+1晚黄金海岸酒店入住"
                    },
                     {
                        "id":"4",
                        "toKey":"1",
                        "img":require('@/assets/pic6.jpg'),
                        "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                        "price":"1699" ,
                        "hoverTips":"上海直飞，正航班，全程0自费,2晚市区4星级酒店+1晚黄金海岸酒店入住"
                    },
                     {
                        "id":"5",
                        "toKey":"1",
                        "img":require('@/assets/pic6.jpg'),
                        "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                        "price":"1699" ,
                        "hoverTips":"上海直飞，正航班，全程0自费,2晚市区4星级酒店+1晚黄金海岸酒店入住"
                    },
                      {
                        "id":"6",
                        "toKey":"1",
                        "img":require('@/assets/pic6.jpg'),
                        "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                        "price":"1699" ,
                        "hoverTips":"上海直飞，正航班，全程0自费,2晚市区4星级酒店+1晚黄金海岸酒店入住"
                    },
                    {
                        "id":"7",
                        "toKey":"1",
                        "img":require('@/assets/pic6.jpg'),
                        "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                        "price":"1699" ,
                        "hoverTips":"上海直飞，正航班，全程0自费,2晚市区4星级酒店+1晚黄金海岸酒店入住"
                    },
                     {
                        "id":"8",
                        "toKey":"1",
                        "img":require('@/assets/pic6.jpg'),
                        "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                        "price":"1699" ,
                        "hoverTips":"上海直飞，正航班，全程0自费,2晚市区4星级酒店+1晚黄金海岸酒店入住"
                    }
                ],
                "banner":require('@/assets/slideShow/pic1.jpg')  
             },
             {
                "id":"2",
                "title":"二日游",
                "key":"2",
                "siderBanner":require("@/assets/pic2.jpg"),
                "hotTreval":[
                    {"id":"1","name":"天池一日","key":"9"},
                    {"id":"3","name":"天池一日","key":"10"},
                    {"id":"4","name":"天池一日","key":"11"},
                    {"id":"5","name":"天池一日","key":"12"},
                    {"id":"6","name":"天池一日","key":"13"},
                    {"id":"7","name":"天池一日","key":"14"},
                    {"id":"8","name":"天池一日","key":"15"},
                    {"id":"9","name":"天池一日","key":"16"},
                    {"id":"10","name":"天池一日","key":"17"},
                ],
                "cards":[
                    {
                        "id":"1",
                        "toKey":"1",
                        "img":require('@/assets/pic3.jpg'),
                        "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                        "price":"1699" ,
                        "hoverTips":"上海直飞，正航班，全程0自费,2晚市区4星级酒店+1晚黄金海岸酒店入住"
                    },
                     {
                        "id":"2",
                        "toKey":"1",
                        "img":require('@/assets/pic3.jpg'),
                        "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                        "price":"1699" ,
                        "hoverTips":"上海直飞，正航班，全程0自费,2晚市区4星级酒店+1晚黄金海岸酒店入住"
                    },
                     {
                        "id":"3",
                        "toKey":"1",
                        "img":require('@/assets/pic3.jpg'),
                        "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                        "price":"1699" ,
                        "hoverTips":"上海直飞，正航班，全程0自费,2晚市区4星级酒店+1晚黄金海岸酒店入住"
                    },
                     {
                        "id":"4",
                        "toKey":"1",
                        "img":require('@/assets/pic3.jpg'),
                        "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                        "price":"1699" ,
                        "hoverTips":"上海直飞，正航班，全程0自费,2晚市区4星级酒店+1晚黄金海岸酒店入住"
                    },
                     {
                        "id":"5",
                        "toKey":"1",
                        "img":require('@/assets/pic3.jpg'),
                        "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                        "price":"1699" ,
                        "hoverTips":"上海直飞，正航班，全程0自费,2晚市区4星级酒店+1晚黄金海岸酒店入住"
                    },
                      {
                        "id":"6",
                        "toKey":"1",
                        "img":require('@/assets/pic3.jpg'),
                        "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                        "price":"1699" ,
                        "hoverTips":"上海直飞，正航班，全程0自费,2晚市区4星级酒店+1晚黄金海岸酒店入住"
                    },
                    {
                        "id":"7",
                        "toKey":"1",
                        "img":require('@/assets/pic3.jpg'),
                        "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                        "price":"1699" ,
                        "hoverTips":"上海直飞，正航班，全程0自费,2晚市区4星级酒店+1晚黄金海岸酒店入住"
                    },
                     {
                        "id":"8",
                        "toKey":"1",
                        "img":require('@/assets/pic3.jpg'),
                        "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                        "price":"1699" ,
                        "hoverTips":"上海直飞，正航班，全程0自费,2晚市区4星级酒店+1晚黄金海岸酒店入住"
                    }
                ],
                "banner":require('@/assets/slideShow/pic1.jpg')  
             },
             {
                "id":"3",
                "title":"三日游",
                "key":"3",
                "siderBanner":require("@/assets/pic2.jpg"),
                "hotTreval":[
                    {"id":"1","name":"天池一日","key":"18"},
                    {"id":"2","name":"天池一日","key":"19"},
                    {"id":"3","name":"天池一日","key":"20"},
                    {"id":"4","name":"天池一日","key":"21"},
                    {"id":"5","name":"天池一日","key":"22"},
                    {"id":"6","name":"天池一日","key":"23"},
                    {"id":"7","name":"天池一日","key":"24"},
                    {"id":"8","name":"天池一日","key":"25"},
                    {"id":"9","name":"天池一日","key":"26"},
                ],
                "cards":[
                    {
                        "id":"1",
                        "toKey":"1",
                        "img":require('@/assets/pic4.jpg'),
                        "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                        "price":"1699" ,
                        "hoverTips":"上海直飞，正航班，全程0自费,2晚市区4星级酒店+1晚黄金海岸酒店入住"
                    },
                     {
                        "id":"2",
                        "toKey":"1",
                        "img":require('@/assets/pic4.jpg'),
                        "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                        "price":"1699" ,
                        "hoverTips":"上海直飞，正航班，全程0自费,2晚市区4星级酒店+1晚黄金海岸酒店入住"
                    },
                     {
                        "id":"3",
                        "toKey":"1",
                        "img":require('@/assets/pic4.jpg'),
                        "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                        "price":"1699" ,
                        "hoverTips":"上海直飞，正航班，全程0自费,2晚市区4星级酒店+1晚黄金海岸酒店入住"
                    },
                     {
                        "id":"4",
                        "toKey":"1",
                        "img":require('@/assets/pic4.jpg'),
                        "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                        "price":"1699" ,
                        "hoverTips":"上海直飞，正航班，全程0自费,2晚市区4星级酒店+1晚黄金海岸酒店入住"
                    },
                     {
                        "id":"5",
                        "toKey":"1",
                        "img":require('@/assets/pic4.jpg'),
                        "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                        "price":"1699" ,
                        "hoverTips":"上海直飞，正航班，全程0自费,2晚市区4星级酒店+1晚黄金海岸酒店入住"
                    },
                      {
                        "id":"6",
                        "toKey":"1",
                        "img":require('@/assets/pic4.jpg'),
                        "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                        "price":"1699" ,
                        "hoverTips":"上海直飞，正航班，全程0自费,2晚市区4星级酒店+1晚黄金海岸酒店入住"
                    },
                      {
                        "id":"7",
                        "toKey":"1",
                        "img":require('@/assets/pic4.jpg'),
                        "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                        "price":"1699" ,
                        "hoverTips":"上海直飞，正航班，全程0自费,2晚市区4星级酒店+1晚黄金海岸酒店入住"
                    },
                      {
                        "id":"8",
                        "toKey":"1",
                        "img":require('@/assets/pic4.jpg'),
                        "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                        "price":"1699" ,
                        "hoverTips":"上海直飞，正航班，全程0自费,2晚市区4星级酒店+1晚黄金海岸酒店入住"
                    }
                ],
                "banner":require('@/assets/slideShow/pic1.jpg')  
             },
             
            ]
	 	}
	},
    components:{
        cardTwo:cardTwo
    }

}
</script>
<style type="text/css">
.title h2 {
    font-size: 22px;
    color: #f93867;
    font-weight: normal;
    background: ;
    height: 36px;
    padding: 15px 0px 6px;
    margin-bottom: 6px;
}
.title h2 a {
    float: right;
    display: inline-block;
    font-size: 14px;
    line-height: 36px;
}
.title .sitebanner {
    width: 224px;
    float: left;
    position: relative;
}
.sitebanner dl {
    height: 380px;
    width: 224px;
    overflow: hidden;
    position: absolute;
    top: 0;
}
.travel-plate .sitebanner dl {
    height: 504px;
}
.sitebanner dt {
    color: rgb(255, 255, 255);
    text-align: center;
    margin: 10px 0px;
}
.travel-plate .sitebanner dd {
    margin-bottom: 7px;
    height: 24px;
    line-height: 24px;
    padding: 5px;
    margin: 8px 40px;
    background: #fff;
    opacity: 0.8;
    filter: alphy(80);
    border-radius: 3px;
    position: relative;
    left: 0;
    transition: all ease .8s;
}
.sitebanner dd a {
    color: rgb(0, 0, 0);
    background-color: rgb(255, 255, 255);
    opacity: 0.8;
    height: 24px;
    display: inline-block;
    font-size: 13px;
    border-radius: 12px;
    padding: 0px 10px;
    overflow: hidden;
}
.travel-plate .sitebanner dd:hover {
    left: -15px;
    opacity: 1;
    filter: alphy(100);
}
.travel-content {
    float: left;
    width: 976px;
    height: 504px;
    overflow: hidden
}
.travel-content li {
    float: left;
}
.travel-content .cards li a {
    display: inline-block;
    width: 224px;
    height: 232px;
    margin-left: 20px;
    margin-bottom: 20px;
}
.travel-content .cards a:hover {
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

</style>