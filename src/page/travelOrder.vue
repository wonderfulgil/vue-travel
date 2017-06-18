<template>
<div class="wrapper main clearfix">
   <div class="step">
        <ul class="clearfix">
            <li :class="{complete:isComplete>index}" v-for="(item,index) in step">
                <span class="flag"></span>
                <span class="s"></span>
                <a href="javascript:;">{{item}}</a>
            </li>
        </ul>
    </div>
    <div class="order-detail wrapper">
        <div v-if="showOrder">
             <div class="travel-order-box">
                <div class="tit clearfix">
                    <strong>产品信息</strong>
                    <router-link :to="{path:'/detail/'+order.key}" class="more">重新选择</router-link>
                </div>
                <div class="product-content">
                    <dl>
                        <dt>线路名称：</dt>
                        <dd><router-link :to="{path:'/detail/'+order.key}">{{order.title}}</router-link></dd>
                    </dl>
                    <dl>
                        <dt>出发日期：</dt>
                        <dd><b>{{order.traveldate}}</b></dd>
                    </dl>
                    <dl>
                        <dt>出游人数：</dt>
                        <dd>
                            <div class="ault"> {{order.aultNumber}}<span>成人</span></div>
                            <div class="child">  {{order.childNumber}} <span>儿童</span></div>  
                        </dd>
                    </dl>
                    <dl>
                        <dt>优惠价：</dt>
                        <dd>
                            <span class="price"><em>{{order.aultPrice}}</em> 元/成人</span>
                            <span class="price"><em>{{order.childPrice}}</em> 元/儿童</span>
                        </dd>
                    </dl>
                </div>
                <dl class="price-all">             
                    <dt>订单金额：</dt>
                    <dd> <span><strong>{{order.priceAll}}</strong>元</span></dd>
                </dl>
            </div>
            <div class="travel-order-box">
                <div class="tit clearfix"><strong>您的联系方式</strong></div>
                <div class="order-content">
                    <dl><dt>姓名:</dt><dd>{{order.username}}</dd> </dl>
                    <dl> <dt>手机号码:</dt> <dd>{{order.phonenumber}}</dd></dl>
                    <dl> <dt>预订留言:</dt> <dd><textarea v-model="orderMessage"></textarea></dd> </dl>
                </div>
            </div>
            <div class="order-next">
                <a class="order-btn" @click="confrimOrder" href="javascript:;">确认提交订单</a>
            </div> 
        </div> 
        <div v-if="showPayWay">
            <div class="order-comfirm-ok">
                您的订单<span>{{orderlist.orderId}}</span>已于<span>{{orderlist.orderCreatTime}}</span>确认,请尽快完成支付，确保预订成功并享受预订时的优惠价。
            </div>
            <div class="travel-order-box"> 
                <div class="product-content">
                    <div class="order-info">
                        <span>订单总额:<em>{{orderlist.priceAll}}</em>元</span>
                        <span>预订人数:<em>{{orderlist.aultNumber}}</em>成人<em>{{orderlist.childNumber}}</em>儿童</span>
                        <dl>
                            <dt>应付金额:</dt>
                            <dd><em>{{orderlist.priceAll}}</em>元</dd>
                        </dl>
                    </div>
                </div>
                <h3>付款方式</h3>
                <bankChooser @on-change="onChangeBanks"></bankChooser>
                <a href="javascript:;" class="payforBtn" @click="confirmBuy">马上支付</a>
            </div>
            <myDialog :isShow="isShowCheck" @closeMyDialog="onCloseCheck">
                <div class="CheckTit">请检查你的支付状态！</div>
                <span class="chekBuyButton left" @click="chekBuy">
                    支付成功
                </span>
                <span class="chekBuyButton right" @click="chekBuy">
                    支付失败
                </span>  
            </myDialog>
        </div> 
        <div class="order-ok" v-if="showOrderOk">
            <h3>预订成功!!!</h3>
        </div >
    </div>
 </div>      
</template>
<script type="text/javascript">
import bankChooser from "../components/bankChooser" 
import dialog from '../components/base/dialog'
export default {
     components:{
       'bankChooser':bankChooser,
       'myDialog':dialog
    },
	data(){
	 	return{ 
           isComplete:1,
           isShowCheck:false,
           step:["填写确认订单","支付费用","预订成功"],
           order:[],
           orderCreatTime:'',
           orderlist:[],
           orderMessage:'',
           bankId:201,
           showOrder: true,//显示订单
           showPayWay: false,//显示付款方式
           showOrderOk: false,//显示付款成功
	 	}
	},
    created () {
         this.getPosts();
    },
    methods:{
        getPosts() {
            this.$axios.get('/api/order').then((res) => {
                this.order=res.data
            })
            .catch((error) => {
                console.log(error)
            })
        },
        //得到当前时间
        getCurrentTime(){
            var d=new Date();
            var year=d.getFullYear();
            var month= this.addZero(d.getMonth()+1);
            var day=this.addZero(d.getDate());
            var hours=this.addZero(d.getHours());
            var minutes=this.addZero(d.getMinutes());
            var seconds=this.addZero(d.getSeconds());
            var CurrentTime= year+'-'+month+'-'+day+' '+hours+':'+minutes+':'+seconds;
            this.orderCreatTime=CurrentTime;
            //console.log(this.orderCreatTime)
        },
        addZero(time){
            return time<10?"0"+time:time
        },
        //确认订单
        confrimOrder(){
            //用户未登录时弹出提示框
           if (!localStorage.usertoken) {
                // 登录是否过期,不过期
                console.log('请登录'),
                alert('请登录');
                return
            }
            this.getCurrentTime(),
            //保存订单
            this.$axios.post('/api/createOrder',
            {
                'userusertoken':localStorage.usertoken,
                "userid":this.order.userid,
                'aultPrice': this.order.aultPrice,
                "childPrice":this.order.childPrice,
                'productkey': this.order.key,
                "aultNum":this.order.aultNumber,
                'childNum':this.order.childNumber,
                "traveldate":this.order.traveldate,
                "orderMessage":this.orderMessage,
                "orderCreatTime":this.orderCreatTime//订单创建时间
            }).then((res) => {
                    this.showOrder=false,
                    this.showPayWay=true,
                    this.isComplete++,
                    this.orderlist=res.data//返回订单信息
            })
            .catch((error) => {
                console.log(error);
            })
        },
        onChangeBanks(bankObj){
            this.bankId = bankObj.id
            //console.log(this.bankId);
        },
     //确认购买
        confirmBuy () {
            //见数据提交后台进行跳转，成功会新开一个页面进行支付
            this.$axios.post('/api/paying',{
             "bankId": this.bankId,
             "orderId":this.orderlist.orderId
            }).then((res) => {
                this.isShowCheck=true
            }, (err) => {
                console.log(err);
            })
        
        },
        onCloseCheck(){
            this.isShowCheck=false
        },
        //检测支付状态
        chekBuy () {
            this.$axios.post('/api/checkpay',{
             "orderId":this.orderlist.orderId
            }).then((res) => {
                this.showPayWay = false,
                this.showOrderOk = true,                   
                this.isComplete++,
                self= this,
                setTimeout(function () {
                    self.$router.push('/')  //延时跳转首页
                }, 2000)
                
            }, (err) => {
               alert("支付失败")
               this.onCloseCheck()
            })
        }           
        
    }
}

</script>
<style type="text/css">
    /*进度条*/
    .step {
        text-align: center;
    }
    .step li {
        position: relative;
        float: left;
        margin-right: -10px;
    }
    .step span {
        width: 0;
        height: 0;
        font-size: 0;
        overflow: hidden;
    }
    .step .flag {
        border-style: solid solid solid dashed;
        border-width: 25px 350px 25px 25px;
        border-color: #D7D7D7 #D7D7D7 #D7D7D7 transparent;
        float: left;
    }
    .step .complete .flag {
        border-color: #f93867 #f93867 #f93867 transparent;
    }
    .step ul > li:first-child .flag {
        border-left-color: #f93867;
    }

    .step .s {
        border-top: 25px dashed transparent;
        border-left: 25px solid #D7D7D7;
        border-bottom: 25px dashed transparent;
        float: left;
    }
   .step ul > li:last-child .s {
        border-color: #D7D7D7;
    }
    .step .complete .s {
        border-left: 25px solid #f93867;
    }
    .step ul > li.complete:last-child .s {
        border-color: #f93867;
    }
    .step a {
        display: block;
        width: 350px;
        height: 50px;
        line-height: 50px;
        text-align: center; 
        font-size: 14px;
        color: #333;
        font-weight: bold;
        text-decoration: none;
        position: absolute;
        left: 25px;
        top: 0px;
    }
    .step .complete a {
        color: #ffffff;
    }

    .order-detail {
        width: 950px;
        padding: 30px 124px;
        border: 1px solid #ccc;
        color: #555;
        z-index: 1;
        background: #f5f5f5;
        margin-top: 15px;
    }
    .travel-order-box {
        padding: 20px;
        border: 1px solid #e6e6e6;
        margin-top: 20px;
        background: #fff;
    }
    .travel-order-box .tit {
        width: 100%;
        margin-bottom: 10px;
        border-bottom: 2px solid #ddd;
    }
    .travel-order-box .tit strong {
        float: left;
        padding-bottom: 10px;
        margin-bottom: -2px;
        border-bottom: 2px solid #f93867;
        font-size: 20px;
        color: #f93867;
    } 
    .travel-order-box .tit a {
        float: right;
        padding: 7px 0 0 10px;
        font-size: 12px;
        color: #0099d9;
    }  
    .order-detail .product-content {
        border-bottom: 1px solid #e1e1e1;
        padding-bottom: 20px;
        margin-bottom: 20px;
    }
    .order-detail dl {
        width: 654px;
        font-size: 14px;
        padding: 4px 0;
        overflow: hidden;
    }
    .order-detail dt {
        width: 100px;
        float: left;
        text-align: right;
        vertical-align: middle;
        color: #666;
    }
    .order-detail dd {
        vertical-align: middle;
        width: 536px;
        float: left;
    }

    .product-content .child, .product-content .ault {
        height: 26px;
        line-height: 26px;
        width: 160px;
        float: left;
        padding: 1px 0;
        font-size: 14px;
    }
    .product-content .price {
        color: #0099d9;
        padding-right: 20px;
    }
    .travel-order-box .price-all {
        width: 100%;
        line-height: 40px;
        color: #666;
        padding: 15px 0px 0;
        margin-top: 20px;
        background: #ffeeec;
    }
    .price-all strong{
        color: #f60;
        font-weight: bold;
        font-size: 30px;
        line-height: 24px;
    }
    .order-content textarea {
        width: 450px;
        height: 160px;
        font-size: 13px;
        color: #999;
        border: 1px solid #ccc;
    }
    .order-next .order-btn ,.payforBtn{
        display: inline-block;
        background: #fe7b9e;
        color: #fff;
        text-align: center;
        font-size: 14px;
        cursor: pointer;
        margin: 20px 0 0 20px;
        padding: 0 20px;
        line-height: 38px;
        border-bottom: 3px solid #f93867;
        border-radius: 3px;
    }
    .order-next .order-btn:hover,.payforBtn:hover {
        background: #f93867;
        font-size: 14px;
        color: #fff;
    }
    .order-comfirm-ok {
        padding: 0 0 0 15px;
        line-height: 30px;
        font-size: 14px;
        color: #f60;
    }
    .order-comfirm-ok span {
        color: #555;
    }
    .order-info span{
        padding: 0 20px 10px 15px;
        display: inline-block;
        line-height: 24px;
        color: #666;
        font-size: 16px
    }
    .order-info em {
        color: #f60;
        padding-left: 10px;
        font-weight: bold;
    }
    .order-detail .order-info dt {
        width: 85px;
        text-align: left;
        padding-left: 15px;
        font-size: 16px;
    }
    .order-info dd em {
        color: #f60;
        font-weight: bold;
        font-size: 30px;
        line-height: 24px;
    }
    .CheckTit{
        font-size: 16px;
        height:24px;
        line-height: 24px;
        text-align: center;
        margin-bottom: 20px
    }
    .chekBuyButton{
        display:inline-block;
        width: 120px;
        height: 40px;
        line-height: 40px;
        background:#eee;
        border:1px solid #efef;
        color:#333;
        text-align: center;
        border-radius: 10px;
        cursor: pointer;
    }
    .chekBuyButton:hover{
        background:#f93867;
        border:1px solid #efef;
        color:#fff;
    }
    .order-ok h3 {
        font-size: 50px;
        font-weight: bold;
        color: #f93867;
        text-align: center;
    }
</style>