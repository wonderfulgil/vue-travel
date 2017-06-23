<template>
    <div>
        <slide></slide>
        <div class="wrapper main">
            <div class="title clearfix"  v-for="listItem in indexlist" :key="listItem.id">
                <h2><span class="icon-guide"></span>{{listItem.title}}</h2>
                <div class="sitebanner">
                    <img :src="listItem.sideimgs" width="224" height="400">
                    <img :src="listItem.sideimages" width="224" height="142">
                    <dl>
                        <dt>热门目的地</dt>
                        <dd v-for="desItem in listItem.destination" :key="desItem.id">
                        <router-link :to="{path:'/travelmore/'+listItem.key+'/'+desItem.key}">{{desItem.title}}</router-link></dd>  
                    </dl>
                </div>
                <div class="site-content">
                    <tabs :tabs="listItem.tabs" :tabContent="listItem.tabContent"></tabs>
                </div>
            </div>
        </div>
    </div>    
</template>
<script type="text/javascript">
    import tab from "../components/base/tab"
    import slide from "../components/base/slide"
    export default {
        data(){
            return{ 
                indexlist:[]
            }
        },
        components: {
            'tabs':tab,
            'slide':slide
        }, 
        created () {
            this.getPosts()
        },
        methods: {
            getPosts() {
              this.$axios.get('/api/indexlist').then((res) => {
                this.indexlist=res.data
              })
              .catch((error) => {
                    //error
                    console.log(error);
                })
            }
        }
    }
</script>
<style>
.title h2 {
    font-size: 22px;
    color: #f93867;
    font-weight: normal;
    background: url('../assets/icon/icon-tilde.png') repeat-x 0 bottom;
    height: 36px;
    padding: 15px 0px 6px;
    margin-bottom: 6px;
}
.title .icon-guide {
    display: inline-block;
    height: 35px;
    width: 34px;
    background: url('../assets/icon/icon-guide.png') no-repeat;
    margin-right: 13px;
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
.sitebanner dt {
    color: rgb(255, 255, 255);
    text-align: center;
    margin: 10px 0px;
}
.sitebanner dd {
    text-align: center;
    margin-bottom: 7px;
    height: 24px;
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
.title .site-content {
    width: 976px;
    overflow: hidden;
    float: right;
}
.title .site-content .tab{
    margin-left: 20px;
}
.tab-content .card a img, .tab-content .bigimg img {
    overflow: hidden;
    vertical-align: top;
    transition: all .8s ease;
}
.card a:hover {
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}
.card a:hover img, .bigimg:hover img {
    transform: scale(1.05);
}
</style>