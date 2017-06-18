<template>
	<div class="header">
		<div class="top">
			<div class="top-inner">
				<ul class="loginBar left">	
					<li v-if="username!==''"><a href="javascript:;" >{{username}}</a></li>
					<li v-if="username!==''"><a href="javascript:;" @click="onLoginOut">退出</a></li>
					<li class="login" v-if="username===''"><a href="javascript:;"   @click="onShowLogin" >登录</a></li>
					<li class="register" v-if="username===''"><a href="javascript:;" @click="onShowReg" >注册</a></li>
				</ul>
				<ul class="loginBar right">	
					<li><a href="javascript:;" @click="onCheckLogin" >订单</a></li>
					<li><a href="javascript:;" @click="AddFavorite" rel="sidebar">收藏</a></li>
				</ul>
			</div>
		</div>
		<div class="top-header">
			<div class="logol left">
				<router-link :to="{path: '/'}"><img src="../assets/logo.png" alt="" width="100" height="100"></router-link>
			</div>	
			<div class="top-search left" > 
				<input autocomplete="off"  type="text" class="search-gjz" placeholder="目的地/关键字" v-model="searchKey">
				<input type="submit" value="搜索" class="search-button" @click="seachInfo">
			</div>
			<div class="top-tel right">
				<dl>
					<dt>24小时客户服务热线</dt>
					<dd>055110086</dd>
				</dl>			
			</div>
		</div>
	    <myDialog :isShow="isShowLogin" @closeMyDialog="onCloseLogin">
	    	 <log-form @has-log="onSuccessLog"></log-form>
	    </myDialog>
	    <myDialog :isShow="isShowReg" @closeMyDialog="onCloseReg">
	    	<reg-form @has-log="onSuccessReg"></reg-form>
	    </myDialog>
	</div>
</template>
<script type="text/javascript">
import dialog from './base/dialog'
import LogForm from './logForm'
import RegForm from './regForm'
export default {
	data(){
		return{
			searchKey:'',
			isShowLogin:false,
			isShowReg:false,
			username:localStorage.username
		}
	},
	components: {
	   	'myDialog':dialog,
	   	'LogForm':LogForm,
    	'RegForm':RegForm
  	},
    methods: {
	    onShowLogin(){
	    	this.isShowLogin=true
	    },
	    onShowReg(){
	    	this.isShowReg=true
	    },
	    onCloseLogin(){
	    	this.isShowLogin=false
	    },
	    onCloseReg(){
	    	this.isShowReg=false
	    },
	    onSuccessLog (data) {    
	      this.onCloseLogin (),
	      window.localStorage.username=data.username,
	      this.username=window.localStorage.username,
	      window.localStorage.usertoken=data.usertoken
	      //console.log(window.localStorage.usertoken,window.localStorage.username)
	    },
	    onLoginOut(){
	    	window.localStorage.username="",
	    	window.localStorage.removeItem("usertoken"),
	    	this.username=window.localStorage.username
	    	//console.log(window.localStorage.usertoken,window.localStorage.username)
	    	if (!this.$route.meta.requireAuth) {
	    		//console.log(this.$route.meta.requireAuth)
	           return
	        }
	        else {
	            // 需要登录权限，当前已退出登录
	            //console.log('需要登录权限，当前未登录'),
	            //console.log(this.$route.meta.requireAuth),
	            alert('当前未登录'),
	            this.$router.push({path: '/'})
	        }
	    },
	    onCheckLogin(){
	        console.log('需要登录权限')
	        if (localStorage.usertoken) {
	            // 登录是否过期,不过期
	            console.log('当前登录'),
	            this.$router.push({path: '/user'})
	        }
	        else {
	            console.log('当前未登录'),
	            this.onShowLogin()
	        }
	    },
	    onSuccessReg(){
	    	this.onCloseReg (),
		   	alert("注册成功")
	    },
        AddFavorite(){
	  		AddFavorite(window.location,document.title)
	  		function AddFavorite(sURL, sTitle)
		    {
			  var sTitle =""; 
		      var sURL=location.href;
		      if (window.sidebar) return true;
		        try{
		            window.external.addFavorite(sURL, sTitle);
		        }catch(e){
		            alert( "加入收藏失败，请使用Ctrl+D进行添加" );
		        }
		         return false;
			}
	  	},
	  	seachInfo(){
	  		if(this.searchKey==''){
	  			this.$router.push('/travelSearch/all')
	  		}else{
	  			this.$router.push({path: '/travelSearch/'+this.searchKey})
	  		}
	  	}
     }
}
</script>
<style type="text/css">
	/*header*/
	.top {
	    width: 100%;
	    height: 30px;
	    line-height: 30px;
	    background: #eee;
	}
	.top-inner {
	    width: 1200px;
	    height: 30px;
	    margin: 0 auto;
	}
	.loginBar li {
	    float: left;
	    height: 30px;
    	line-height: 30px;
	}
	.loginBar a {
	    padding: 0 10px;
	    font-size: 12px;
	    display: inline-block;
	}
	/*top-header*/
	.top-header {
	    width: 1200px;
	    margin: 0 auto;
	    height: 100px;
	}
	.top-search {
	    border: 3px solid #f93867;
	    margin: 30px 0 0 300px;
	    font-size: 12px;
	    position: relative;
	}
	
	.search-gjz {
	    width: 335px;
	    height: 31px;
	    line-height: 31px;
	    color: #666;
	    border-width: 0px;
	    padding: 0px 5px;
	    float: left;
	    outline-width: 0px;
	}
	.search-button {
	    width: 70px;
	    height: 31px;
	    float: left;
	    color: rgb(255, 255, 255);
	    line-height: 31px;
	    font-size: 16px;
	    letter-spacing: 2px;
	    outline-width: 0px;
	    font-family: "Microsoft YaHei";
	    background: rgb(249, 56, 103);
	    border:none;
	    padding: 0px;
	}
	.top-tel {
		background: url(../assets/icon/tel.gif) no-repeat;
	    padding-left: 11px;
	    margin: 30px 10px 0px 70px;
	}
	.top-tel dt {
	    font-size: 12px;
	    padding-left: 3px;
	    color: #666;
	}
	.top-tel dd {
	    color: #f93867;
	    font-size: 20px;
	}
</style>