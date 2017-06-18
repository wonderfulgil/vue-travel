<template>
	<div>
		<myHeader></myHeader>
		<navList></navList>
		<router-view></router-view>
		<div class="footer">Copyright © 2017</div>
	</div>
</template>
<script type="text/javascript">
import navList from './nav'
import myHeader from './header'
export default {
	 components: {
	   	'navList':navList,
	   	"myHeader":myHeader,
  	}
}
</script>
<style type="text/css">
	/*common*/
	body,h1,h2,h3,h4,h5,h6,p,dl,dt,dd,ol,ul,li,form{margin:0px;padding:0px;}
	body{ font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #333;}
	i,em{font-style:normal;}
	img{ border:none;}
	a{ font-size:12px;color:#333; text-decoration:none;  cursor:pointer;}
	a:hover{ 
		color:#333;
	}
	button, input[type=button], input[type=reset], input[type=submit] {
	    cursor: pointer;
	    -webkit-appearance: button;
	}
	input:-webkit-autofill {
	    -webkit-box-shadow: 0 0 0px 1000px white inset !important;
	}
	ul{ list-style:none}
	.left{ float:left;}
	.right{ float:right;}
	.clearfix{zoom:1;}/*IE/7/6*/
	.clearfix:before,.clearfix:after{display:table;content:" "}
	.clearfix:after{clear:both}
	.gray{color:#eee}
	.black{color:#333}	
	.wrapper{
		width:1200px;;
		margin-left:auto;
		margin-right:auto;
	}
	.main{
		margin:15px auto;
	}
	/*footer*/
    .footer{
    	clear: both;
	    text-align: center;
	    width: 100%;
	    height: 40px;
	    line-height: 40px;
	    background: #eee;
}
</style>