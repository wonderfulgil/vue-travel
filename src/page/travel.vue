<template>
<div class="wrapper main" >
    <div v-for="travelitem in travel" :key="travelitem.id">
        <div class="title travel-plate">
            <h2 ><span>{{travelitem.title}}</span><router-link :to="{path:'/travelmore/'+$route.params.category+'/'+travelitem.key}" class="right">更多</router-link></h2>
            <div class="sitebanner">
                <img :src="travelitem.siderBanner" width="224" height="613">
                <dl>
                    <dt>热门目的地</dt>
                    <dd v-for="hotitem in travelitem.hotTreval" :key="hotitem.id"><router-link :to="{path:'/travelmore/'+$route.params.category+'/'+travelitem.key+'/'+hotitem.key}" >{{hotitem.name}}</router-link></dd>  
                </dl>
            </div>
            <div class="travel-content">
                <ul class="cards clearfix">
                  <li v-for="carditem in travelitem.cards" :key="carditem.id"><card-Two :mycard="carditem"></card-Two></li>
                </ul>
            </div>
        </div>  
        <img :src="travelitem.banner"  width="1200" height="90"> 
    </div>
</div>           
</template>
<script type="text/javascript"> 
import cardTwo from '../components/base/cardTwo.vue'
export default {
	data(){
	 	return{ 
            travel:[]
	 	}
	},
    components:{
        cardTwo:cardTwo
    },
    mounted () {
        this.getPosts()
    },
    methods: {
        getPosts() {
          this.$axios.get('/api/travel-'+this.$route.params.category,{params: {category:this.$route.params.category}}).then((res) => {
            this.travel=res.data
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
    padding: 20px 0;
    height: 504px;
    overflow: hidden;
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
    margin: 15px 40px;
    background: #fff;
    opacity: 0.8;
    filter: alphy(80);
    border-radius: 3px;
    position: relative;
    left: 0;
    transition: all ease .8s;
    text-align: center;
}
.sitebanner dd a {
    color: rgb(0, 0, 0);
    height: 24px;
    display: inline-block;
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