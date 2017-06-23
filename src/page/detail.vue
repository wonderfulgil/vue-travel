<template>
<div class="wrapper main clearfix">
    <div class="product-introduction">
        <i :class="'product-'+detail.category"></i>
        <h2 class="product-name">{{detail.productName}}</h2>
        <div class="product-num">[编号{{detail.productNum}}]</div>
        <div class="product-main clearfix">                                       
            <img :src="detail.productImage" width="550" height="324">
            <div class="product-mainbox">
                <div class="product-price">
                    <span class="jiage">￥<em>{{detail.costPrice}}</em>起 /人</span>
                    <span>(儿童价：￥<em>{{detail.childPrice}}</em>起 /人)</span>
                    <span>门市价：￥<em>{{detail.oldPrice}}</em>起 /人</span>
                </div>
                <dl class="product-smxx features">
                    <dt>产品特色:</dt>
                    <dd>
                        <tips :tipsTitle="detail.serviceTipsTitle" :tipDescription="detail.serviceTipsDescription"></tips>
                    </dd>
                </dl>
                <dl class="product-smxx promise">
                    <dt>服务承诺:</dt>
                    <dd>
                        <tips :tipsTitle="item.promiseTipsTitle" :tipDescription="item.promiseTipsDescription"  v-for="item in detail.promiseTips" :key = "item.id"></tips>
                    </dd>
                </dl>
                <div class="order-box">
                    <dl><dt>出游日期：</dt> <dd> <selector :selector="detail.travelSelect" @onChange="SelectIndex"></selector></dd></dl>
                    <dl>
                        <dt>出游人数：</dt>
                        <dd class="ault"><calculate :num="1" @onreturn="getAultNum"></calculate><span class="num-label">成人</span>
                        </dd>
                        <dd  class="child"> <calculate :num="0" @onreturn="getChildNum"></calculate> <span>儿童</span>
                        </dd>
                    </dl>
                    <div class="product-order">
                        <a href="javascript:;" @click="onOrderProduct">立即预订</a>
                        <div class="tel-404">
                            <i class="icon-tag icon-tel"></i>
                            <span>24h客服电话</span><em>{{detail.tel}}</em>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="product-nav" ref="nav" :class="[navOn?navFixed:navstatic]">
       <ul class="clearfix">
            <li :class="{on:activeid==index}" v-for="(item,index) in navmnens"><a href="javascript:;" @click="light(index)">行程介绍</a></li>
        </ul>
    </div>
    <div class="product-xxxm">
        <h2><i></i><span>行程介绍</span></h2>
        <div class="product-xxxq" v-html="detail.xlxc"> </div>
    </div>
    <div class="product-xxxm">
        <h2><i></i><span>费应包含</span></h2>
        <div class="product-xxxq">
            <div class="product-xxtit">费应包含</div>
            <div v-html="detail.fybh"></div>
            <div class="product-xxtit">费应不含</div>
            <div v-html="detail.fybh"></div>
        </div>
    </div>
    <div class="product-xxxm">
        <h2><i></i><span>接待说明</span></h2>
        <div class="product-xxxq" v-html="detail.jdsm"></div>
    </div>
    <div class="product-xxxm">
        <h2><i></i><span>预订流程及付款方式</span></h2>
        <div class="product-xxxq">
            <div class="product-xxtit">预订流程</div>
            <div v-html="detail.ydlc"></div>
            <div class="product-xxtit">签约方式</div>
            <div v-html="detail.qyfs"></div>
            <div class="product-xxtit">付款方式</div>
            <div v-html="detail.fkfs"></div>
        </div>              
    </div>
</div>
</template>
<script type="text/javascript">
    import select from "../components/base/select"
    import calculate from "../components/base/calculate"
    import tips from "../components/base/tips"
    export default {
        components: {
            selector:select,
            calculate:calculate,
            tips:tips
        }, 
        data(){
            return{ 
                activeIndex:'0',
                aultNum:'1',
                childNum:'0',
                navOn:false,
                navFixed:'navFixed',
                navstatic:'navstatic',
                navH:'', 
                navmnens:["行程介绍","费用包含","接待说明","预订流程及付款方式"],
                activeid:'',
                scrolled: '',
                detail:{}
            }  

        },
        created () {
            this.getPosts()
        },
        methods:{
            getPosts() {
              this.$axios.get('/api/detail',{params: {productId:this.$route.params.id}}).then((res) => {
                this.detail=res.data;
                this.navH=this.$refs.nav.offsetTop;
              })
              .catch((error) => {
                    //error
                    console.log(error);
                })
            },
            onOrderProduct(){
                if(this.activeIndex==0){
                    alert('请先选择价格')
                }else if (localStorage.usertoken) {
                    // 登录是否过期,不过期
                    console.log('当前登录'),
                    this.$axios.post('/api/order', { 'price': this.detail.travelSelect[this.activeIndex], 'productkey': this.detail.key,'userusertoken':localStorage.usertoken,"aultNum":this.aultNum,'childNum':this.childNum}).then((res) => {
                        this.$router.push({path: '/travelOrder/'+this.key})
                    })
                    .catch((error) => {
                            //error
                            console.log(error);
                    })
                }
                else {
                    console.log('当前未登录'),
                    alert('请先登录')
                }
            },
            SelectIndex(msg){
                this.activeIndex=msg
            },
            getAultNum(msg){
                this.aultNum=msg
            },
            getChildNum(msg){
                this.childNum=msg
            },
            navHight(){
                this.scrolled =document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                let fixed=this.scrolled >=this.navH;
                if(fixed){
                    this.navOn=true
                }else{
                    this.navOn=false
                }
            },
            light(index){
                this.activeid=index;
            }
        },
         mounted () {
            window.addEventListener('scroll', this.navHight)
        }  

    }
</script>
<style>
.product-introduction {
    padding: 20px;
    margin: 15px 0;
    border: 1px solid #e5e5e5;
    position: relative;
}
.product-gty {
    height: 85px;
    width: 85px;
    display: inline-block;
    vertical-align: middle;
    background:url(../assets/icon/product-gty.png) no-repeat;
    position: absolute;
    right: -4px;
    top: -4px;
}
.product-introduction h2 {
    font-size: 25px;
    font-weight: normal;
    color: #333;
}
.product-introduction .product-num {
    font-size: 12px;
    margin-top: 5px;
}
.product-introduction .product-mainbox {
    width: 568px;
    float: right;
    line-height: 24px;
    font-size: 14px;
}
.product-introduction .product-price {
    background: #f93867;
    padding: 20px;
    color: #fff;
}
.product-mainbox .product-smxx dd {
    width: 460px;
}
.product-price span {
    margin-right: 20px;
}
.product-mainbox .jiage em{
    font-size: 30px;
    margin-right: 5px;
}
.product-mainbox .features .tips-title {
    border: 1px solid #42bfff;
    color: #42bfff;
}

.product-mainbox .promise .tips{
    margin-right: 20px;
    color: #666;
    display: inline-block
}
.product-mainbox .promise .tips-title {
    padding-left: 15px;
    display: inline-block;
    vertical-align: middle;
    background: url(../assets/icon/promise.png) no-repeat;;
}


/*订购框*/
.product-main .order-box {
    background: #f0f0f0;
    padding: 10px;
    height: 120px;
}
.product-mainbox dl {
    padding: 5px 0;
}
.product-mainbox dt, .product-mainbox dd {
    display: inline-block;
    vertical-align: top;
}

/*select*/
.order-box .select {
   background: #fff;
    border: 1px solid #ccc;
    padding: 0 10px;
    width: 410px;
    text-align: left;
    height: 22px;
    line-height: 22px;
}
.order-box .select .select-bar{
    top:22px;
}
.grey {
    color: #bbb;
}
.order-box .select-bar li {
    overflow: hidden;
    padding: 0 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #333;
    border-top: 0;
}
.order-box .select-bar li:hover {
    background: #d9eeff;
}

/*jiajian*/
.num-label {
    display: inline-block;
    height: 24px;
    line-height: 24px;
    margin-right: 20px;
}

.product-order a {
    vertical-align: middle;
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
.tel-404 {
    display: inline-block;
    color: #999;
    font: normal normal 14px/30px "microsoft yahei";
    margin-left: 20px;
    vertical-align: middle;
}
.tel-404 .icon-tel {
    width: 15px;
    height: 20px;
    display: inline-block;
    vertical-align: middle;
    background: url("../assets/icon/icon-tel.png") no-repeat;
}
.tel-404 em {
    color: #fe8800;
    margin-left: 3px;
    font-weight: bold;
}


/*详情导航*/
.product-nav {
    width: 1200px;
    background: #fff;
    border-bottom: 2px solid #f93867;
}
.navFixed{
    position:fixed;
    top: 0;
    z-index: 100;
}
.navstatic{
    position:static;
}
.product-nav li {
    float: left;
    margin-right: 1px;
}
.product-nav li a {
    display: inline-block;
    padding: 0 20px;
    background: #f93867;
    border: 2px solid #f93867;
    border-bottom: none;
    color: #fff;
    font-size: 16px;
    height: 38px;
    line-height: 38px;
}
.product-nav li.on a {
    background: #fff;
    color: #f93867;
    border-bottom: 2px solid #fff;
    margin-bottom: -2px;
}

.product-xxxm {
    padding: 10px;
}
.product-xxxm h2 {
    position: relative;
    line-height: 40px;
    color: white;
    font-size: 20px;
    background: #0099d9;
    padding: 0px 40px 0 20px;
    z-index: 2;
}
.product-xxxm h2 i {
    position: absolute;
    right: 0;
    top: 0;
    border-width: 20px 20px 20px 0;
    border-style: dashed solid dashed dashed;
    border-color: transparent #fff transparent transparent;
    font-size: 0;
    width: 0;
    height: 0;
    line-height: 0;
    overflow: hidden;
    display: inline-block;
}
.product-xxxq {
    margin-top: 10px;
    padding: 10px;
    font-size: 14px;
    color: #666;
    line-height: 24px;
}
.product-xxtit {
    border-left: 3px solid #0099d9;
    padding-left: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #666;
    line-height: 24px;
}
</style>