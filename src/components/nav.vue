<template>
	<div class="nav">
		<div class="nav-inner">
			<navMenu class="left" v-show="$route.meta.navShow"></navMenu>
			<ul class="nav-bar">
				<li>
					<router-link :to="{path:'/index'}" active-class="active">首页</router-link>
				</li>
				<li v-for="(nav,index) in navs" :key="nav.id">
					  <a :href="nav.url" :class="{active:IsactiveId==index}">{{nav.title}}</a>
				</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	import navMenu from './nav-menu'
	export default {	
		data(){
			return{
				navs:[],
				IsactiveId:null
			}
		},
		components: {
		   	'navMenu':navMenu
	  	}, 
		mounted () {
		    this.getPosts()
		},
		methods: {
		    getPosts() {
		      this.$axios.get('/api/navs').then((res) => {
		      	this.navs=res.data,
		      	this.navHeight()
		      })
		      .catch((error) => {
                    //error
                    console.log(error)
                })
		    },
		    navHeight(){
		    	if(!this.$route.params) return	
                let navOn=this.$route.params.category;
                for (var i in this.navs)
                {
                     this.navs[i].index=i
                     if(this.navs[i].url.indexOf(navOn)>-1){    
                        console.log(this.navs[i].index);
                        this.IsactiveId=this.navs[i].index

                     }
                }   
            }
        },
        computed:{
        	 routerOn:function(){
		        return this.$route.path
		     }
        },
        watch: {
            routerOn: function(val,oldval) {
               if(val!=oldval){
               	this.IsactiveId=null
               }
            }
		    
		}
	}
</script>
<style type="text/css" scoped>
	.nav {
	    width: 100%;
	    height: 40px;
	    line-height: 40px;
	    color: #fff;
	    font-size: 16px;
	    background: #f93867;
	    clear: both;
	}
	.nav-inner {
	    width: 1200px;
	    height: 40px;
	    margin: 0 auto;
	    clear: both;
	}
	.nav-bar {
	    float: left;
	    height: 40px;
	}
	.nav-bar li {
	    float: left;
	}
	.nav-bar a {
	    color: #fff;
	    font-size: 16px;
	    height: 40px;
	    line-height: 40px;
	    padding: 0 20px;
	    text-align: center;
	    display: inline-block;
	}
	.nav-bar li:hover, .nav-bar li .active {
	    background: #e7325d;
	}
</style>