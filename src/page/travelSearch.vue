<template>
<div class="wrapper main clearfix">
    <div class="search-list "> 
        <h2 class="search-tit"><span>搜索结果</span></h2>  
        <div class="searchresult">
            <ul>
                <li v-for="item in producelist.list" :key="item.id">
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
                "producelist":{}
	 	}
	},
    created () {
        this.getPosts();
    },
    methods: {
        getPosts() {
          this.$axios.get('/api/producelist',{params: {kewords:this.$route.params.kewords}}).then((res) => {
            this.producelist=res.data
          })
          .catch((error) => {
                //error
                console.log(error);
            })
        }
    }

}
</script>
<style type="text/css">
.search-list {
    width: 956px;
    float: left;
}
.search-list .search-tit {
    font-size: 16px;
    height: 45px;
    line-height: 45px;
    border-bottom: 2px solid #f93867;
    overflow: hidden;
}
.search-tit span {
    background: #f93867;
    padding: 0 10px;
    display: inline-block;
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