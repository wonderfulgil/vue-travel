<template>
<div class="nav-menu">
	<h4>全部旅游产品目的地</h4>	
	<ul class="nav-menu-list">
		<li  v-for="item in list" :key="item.id">
			<dl class="menu-list">
				<dt>
					<div class="menu-left">
						<span :class="'menu-icon'+item.id"></span>
						<span :title="item.title">{{item.title}}</span>
					</div>
					<div class="menu-big-title">
						<router-link v-for="two in item.twoLevel" :to="{path:'travelmore/'+two.key}" :key="two.id">{{two.title}}</router-link>
					</div>
				</dt>
				<dt class="jstb"><img src="../assets/icon/jstb.gif"></dt>
				<div class="menu-on">
					<div class="menu-on-left">
						<dl class="menu-list">
							<dt>
								<div class="menu-left">
									<span :class="'menu-icon'+item.id"></span>
									<span :title="item.title">{{item.title}}</span>
								</div>
								<div class="menu-big-title">
									<router-link :to="{path:'travelmore/'+two.key}" v-for="two in item.twoLevel" :key="two.id">{{two.title}}</router-link>
								</div>
							</dt>
							<dt class="jstb"><img src="../assets/icon/jstb.gif"></dt>
						</dl>
					</div>
					<div class="menu-on-content">
						<dl v-for="content in item.contents" :key="content.id">
							<dt>{{content.title}}</dt>
							<dd>				
								<router-link :class="{hot: three.ishot}" :title="three.title" :to="{path:'travelmore/'+three.key}" v-for="three in content.threeLevel" :key="three.id">{{three.title}}</router-link>			
							</dd>
						</dl>
					</div>
				</div>
			</dl>		
		</li>
	</ul>	
</div>
</template>
<script type="text/javascript">
export default {
	data(){
		return{
			list:[],
		}
	},
	created () {
	    this.getPosts();
	},
	methods: {
	    getPosts() {
	      this.$axios.get('/api/list').then((res) => {
	      	this.list=res.data
	      })
	      .catch((error) => {
                //error
                console.log(error);
            })
	    }
	}
}
</script>
<style type="text/css" scoped>
	.nav-menu {
	    width: 230px;
	    height: 40px;
	    text-align: center;
	    font-weight: bold;
	    background: #fe7b9e;
	    position: relative;
	}
	.nav-menu-list {
	    position: absolute;
	    left: 0;
	    top: 40px;
	    width: 230px;
	    text-align: left;
	    background: #fff;
	    border-bottom: 1px solid #e5e5e5;
	    border-right: 1px solid #d4d3d3;
	    box-shadow: 0 3px 5px 1px rgba(0,0,0,.4);
	    z-index: 10;
	}
	.nav-menu-list dl {
	    width: 208px;
	    height: 50px;
	    padding: 5px 10px 6px 10px;
	    border-bottom: 1px solid #e5e5e5;
	    position: relative;
	}
	.nav-menu-list dt {
	    float: left;
	    width: 180px;
	}

	.nav-menu-list dt .menu-left {
	    line-height: 30px;
	    height: 30px;
	    font-size: 14px;
	    font-weight: bold;
	    color: rgb(51, 51, 51);
	    overflow: hidden;
	}
	.menu-left a:link, .menu-left a:visited {
	    font-size: 14px;
	    color: #333;
	}
	.menu-big-title {
	    width: 100%;
	    height: 15px;
	    line-height: 15px;
	    overflow: hidden;
	    color: #666;
	}
	.menu-big-title a:link, .menu-big-title a:visited {
	    padding-right: 8px;
	    color: #666;
	}
	.nav-menu-list .jstb {
	    float: right;
	    padding-top: 10px;
	    width: 7px;
	    height: 11px;
	}
	.menu-on {
	    position: absolute;
	    top: 0;
	    left: 0;
	    display: none;
	}
	.nav-menu-list li:hover .menu-on {
		display: block;
	}	
	.menu-on-left {
	    z-index:10;
	    position: absolute;
	    top: 0;
	    left: 0;
	    border: 1px solid #fe7b9e;
	    border-right: none;
	    width: 229px;
	    height: 60px;
	    background: #fff;
	}
	.menu-left span {
	    float: left;
	    margin: 2px 5px 0px 0px;
	}
	.menu-icon1 {
		display: inline-block;
	    vertical-align: middle;
	    background: url(../assets/icon/menu-icon1.png) no-repeat;
	    height: 23px;
	    width: 25px;
	}
	.menu-icon2 {
	    background: url(../assets/icon/menu-icon2.png) no-repeat;
	    height: 23px;
	    width:25px;
	    display: inline-block;
	    vertical-align: middle;
	}
	.menu-icon3 {
	     background: url(../assets/icon/menu-icon3.png) no-repeat;
	    height: 23px;
	    width:25px;
	    display: inline-block;
	    vertical-align: middle;
	}
	.menu-icon4 {
	    background: url(../assets/icon/menu-icon4.png) no-repeat;
	    height: 23px;
	    width:25px;
	    display: inline-block;
	    vertical-align: middle;
	}
	.menu-icon5 {
	    background: url(../assets/icon/menu-icon5.png) no-repeat;
	    height: 23px;
	    width:25px;
	    display: inline-block;
	    vertical-align: middle;
	}
	.menu-on-content {
	    z-index:8;
	    position: absolute;
	    top: 0;
	    left: 229px;
	    border: 1px solid #fe7b9e;
	    width: 700px;
	    overflow: auto;
	    background: #fff;
	    line-height: 24px;
	    padding: 10px 20px 5px 20px;
	    box-shadow: 0 3px 5px 1px rgba(0,0,0,.4);
	}
	.nav-menu-list .menu-on-content dl {
	    clear: both;
	    width: 700px;
	    height: auto;
	    border-bottom: 1px dotted #d8d8d8;
	    overflow: auto;
	    padding-bottom: 5px;
	    margin-bottom: 10px;
	}
	.menu-on-content dt {
	    float: left;
	    width: 100px;
	    font-size: 14px;
	    font-weight: bold;
	    color: #f93867;
	}
	.menu-on-content dt a {
	    color: #f93867;
	}
	.menu-on-content  dd {
	    float: left;
	    width: 600px;
	}
	.menu-on-content dd a {
	    padding: 0px 8px;
	    border-right: 1px solid #ddd;
	}
	.hot,.hot:hover{
		color:red;
		font-weight: bold;
	}

</style>