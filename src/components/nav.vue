<template>
	<div class="nav">
		<div class="nav-inner">
			<navMenu class="left" v-show="$route.meta.navShow"></navMenu>
			<ul class="nav-bar">
				<li v-for="nav in navs" :key="nav.id">
					<router-link :to="{path:nav.url}" active-class="active">{{nav.title}}</router-link>
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
			}
		},
		components: {
		   	'navMenu':navMenu,
	  	}, 
		created () {
		    this.getPosts();
		},
		methods: {
		    getPosts() {
		      this.$axios.get('/api/navs').then((res) => {
		      	this.navs=res.data
		      })
		      .catch((error) => {
                    //error
                    console.log(error);
                })
		    }
		},
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