<template>
<div class="wrapper main clearfix">
    <div class="product-introduction">
        <i :class="'product-'+category"></i>
        <h2 class="product-name">{{productName}}</h2>
        <div class="product-num">[编号{{productNum}}]</div>
        <div class="product-main clearfix">                                       
            <img :src="productImage" width="550" height="324">
            <div class="product-mainbox">
                <div class="product-price">
                    <span class="jiage">￥<em>{{costPrice}}</em>起 /人</span>
                    <span>(儿童价：￥<em>{{childPrice}}</em>起 /人)</span>
                    <span>门市价：￥<em>{{oldPrice}}</em>起 /人</span>
                </div>
                <dl class="product-smxx features">
                    <dt>产品特色:</dt>
                    <dd>
                        <tips :tipsTitle="serviceTipsTitle" :tipDescription="serviceTipsDescription"></tips>
                    </dd>
                </dl>
                <dl class="product-smxx promise">
                    <dt>服务承诺:</dt>
                    <dd>
                        <tips :tipsTitle="item.promiseTipsTitle" :tipDescription="item.promiseTipsDescription"  v-for="item in promiseTips" :key = "item.id"></tips>
                    </dd>
                </dl>
                <div class="order-box">
                    <dl><dt>出游日期：</dt> <dd> <selector :selector="travelSelect" @onChange="SelectIndex"></selector></dd></dl>
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
                            <span>24h客服电话</span><em>{{tel}}</em>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <div class="product-nav">
           <ul class="clearfix">
                <li class="on"><a href="javascript:;">行程介绍</a> </li>
                <li><a href="javascript:;">费用包含</a> </li>
                <li><a href="javascript:;">接待说明</a> </li>
                <li><a href="javascript:;">预订流程及付款方式</a> </li>
            </ul>
        </div>
        <div class="product-xxxm">
            <h2><i></i><span>行程介绍</span></h2>
            <div class="product-xxxq" v-html="xlxc"> </div>
        </div>
        <div class="product-xxxm">
            <h2><i></i><span>费应包含</span></h2>
            <div class="product-xxxq">
                <div class="product-xxtit">费应包含</div>
                <div v-html="fybh"></div>
                <div class="product-xxtit">费应不含</div>
                <div v-html="fybh"></div>
            </div>
        </div>
        <div class="product-xxxm">
            <h2><i></i><span>接待说明</span></h2>
            <div class="product-xxxq" v-html="jdsm"></div>
        </div>
        <div class="product-xxxm">
            <h2><i></i><span>预订流程及付款方式</span></h2>
            <div class="product-xxxq">
                <div class="product-xxtit">预订流程</div>
                <div v-html="ydlc"></div>
                <div class="product-xxtit">签约方式</div>
                <div v-html="qyfs"></div>
                <div class="product-xxtit">付款方式</div>
                <div v-html="fkfs"></div>
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
                category:'gty',
                key:"3",
                productName:"【中秋】[韩国首尔-济州岛5日游]",
                productNum:"SHS152642",
                productImage:require("@/assets/pic3.jpg"),
                costPrice:"128",
                childPrice:"70",
                oldPrice:"198",
                tel:"4007-999-999",
                travelSelect:["请选择出发日期","11-10(周一)284元/人0元/儿童 ","11-11(周二)284元/人0元/儿童 ","11-12(周三)284元/人0元/儿童"],
                xlxc:'<div>第1天 </div>'+
'                <div>'+
'                    <dl>'+
'                        <dt><em>天津</em></i><em>首尔</em></dt>'+
'                        <dd>'+
'                            <div>行程描述</div>'+
'                            <div>各位贵宾按规定时间天津滨海机场集合，飞往韩国，参考航班时间（OZ328 10:15--13:00）达后，游览【南山公园+首尔N塔（不登塔）】（约40分钟）南山是韩国著名游览景点，热播韩剧《来自星星的你》中，千颂伊与教授在南山塔的餐厅吃饭和锁住情人锁的地方，曾经在无数韩剧中承担起浪漫桥段，是每一个到首尔的游客必去的观光地。前往【七星娱乐城】(游览时间约50分钟)之后欣赏【韩流秀——涂鸦秀（根据实际情况可以调整为其他同类表演秀）】（约90分钟）是韩国表演艺术界又出现了一颗值得世界瞩目的新星——DRAWING SHOW 。后入住酒店休息。</div>'+
'                        </dd>'+
'                        <dd>'+
'                            <div>'+
'                                <span>用餐 </span>'+
'                                <span>早餐：自理 午餐：自理 晚餐：含</span>'+
'                            </div>'+
'                            <div>'+
'                                <span>住宿</span>'+
'                                <span>四花酒店住宿</span>'+
'                            </div>'+
'                        </dd>'+
'                    </dl>'+
'                </div>'+
'            </div>'+
'            <div>第2天</div>'+
'            <div>'+
'                <dl>'+
'                    <dt>首尔 济州岛</dt>'+
'                    <dd>'+
'                        <div>行程描述</div>'+
'                        <div>早餐后，游览大型市内游乐场【乐天世界】（约120分钟），乐天世界位于首尔市中心，其主题公园有惊险的娱乐设施、凉爽的溜冰场、巨大的散心湖、各种表演场、民俗博物馆等集娱乐参观为一体的娱乐场所。参观首尔标志之一的【清溪川】（约30分钟）,后赴机场直飞素有“韩国蜜月岛”之称的【济州岛】。抵达后观赏【龙头岩，龙渊】（约40分钟，在那里你能和海女的塑像合影留念）仿佛神话传说中的一条巨龙，屹立于波涛澎湃的海岸。晚餐后入住酒店休息。</div>'+
'                    </dd>'+
'                    <dd>'+
'                        <div>'+
'                            <span>用餐 </span>'+
'                            <span>早餐：含 午餐：含 晚餐：含</span>'+
'                        </div>'+
'                        <div>'+
'                            <span>住宿</span>'+
'                            <span>四花酒店住宿</span>'+
'                        </div>'+
'                    </dd>'+
'                </dl>'+
'            </div>'+
'            <div>'+
'                <div>第3天 </div>'+
'                <div>'+
'                    <dl>'+
'                        <dt>济州岛></dt>'+
'                        <dd>'+
'                            <div>行程描述</div>'+
'                            <div>早餐后，前往【泰迪熊博物馆】（约60分钟）在这里可以看到由天然素材做成的泰迪熊，各式各样造型的泰迪熊，整个泰迪熊的制作过程以及作家的制作理念等，绝对让您不虚此行。游览待您自己去揭开谜底的【神奇之路】（约20分钟）。而后前往收集着济州独特的民俗文化的【城邑民俗村】（约60分钟）村中至今仍有村民居住，不妨前去拜访；后前往联合国教科文组织认定的自然文化遗产之一。参观【城山日出峰】远景拍照（约40分钟）。欣赏韩剧ALL IN拍摄地【涉地岬】（约45分钟）美丽的海岸风光，后前往体验【济州桔子园】（约60分钟）济州岛是韩国春天最先到来的地方，穿越油菜花，一幅完美春天的油画跃然眼前，令人陶醉。后前往参观济州岛人引以自豪的马术表演【蒙古马上秀】（约45分钟）。后入住酒店休息。</div>'+
'                        </dd>'+
'                        <dd>'+
'                            <div>'+
'                                <span>用餐 </span>'+
'                                <span>早餐：含 午餐：含 晚餐：含</span>'+
'                            </div>'+
'                            <div>'+
'                                <span>住宿</span>'+
'                                <span>四花酒店住宿</span>'+
'                            </div>'+
'                        </dd>'+
'                    </dl>'+
'                </div>'+
'            </div>  '+
'            <div>'+
'                <div>第4天 </div>'+
'                <div>'+
'                    <dl>'+
'                        <dt>济州岛首尔</dt>'+
'                        <dd>'+
'                            <div>行程描述</div>'+
'                            <div>早餐后，搭乘国内航班飞往首尔，【明洞】（约90分钟）或【东大门】（约90分钟），【乐天免税店】（约90分钟）或者【新罗免税店】（约90分钟），【东和免税店】（约90分钟）半日自由购物，指定时间集合，不允许脱团,及人参公卖局（约60分钟）/化妆品 （约60分钟）/土特产店（约60分钟）自由购物。随后安排【传统服饰体验+紫菜博物馆】（约40分钟），全团贵宾均将成为今天的最佳男女主角，换上古代传统的结婚礼服，于古色古香之传统韩屋式的场景内，愉快的捕捉美丽的倩影，之后学习制作由专人解说紫菜的功效及制作紫菜包饭的过程。晚餐享受正宗韩国料理自助烤肉。后入住酒店休息。</div>'+
'                        </dd>'+
'                        <dd>'+
'                            <div>'+
'                                <span用餐 </span>'+
'                                <span>早餐：含 午餐：含 晚餐：含</span>'+
'                            </div>'+
'                            <div>'+
'                                <span>住宿</span>'+
'                                <span>四花酒店住宿</span>'+
'                            </div>'+
'                        </dd>'+
'                    </dl>'+
'                </div>'+
'            </div>'+
'            <div>'+
'                <div>第5天 </div>'+
'                <div>'+
'                    <dl>'+
'                        <dt>首尔 天津</dt>'+
'                        <dd>'+
'                            <div>行程描述</div>'+
'                            <div>早餐后，参观建于1392年之朝鲜时代王宫——【景福宫】（约60分钟）景福宫是首尔规模最大、最古老的宫殿之一，是韩国封建社会后期的政治中心。【国立民俗博物馆】（约40分钟）位于景福宫内，是展示韩国的传统生活方式的地方，这里展示着相关的近4,000件民族资料，是韩国唯一全面展示民俗生活历史的国立综合博物馆。（景福宫遇周二公休，改去昌德宫或德寿宫）总统府—【青瓦台】（外观）（约20分钟）韩国政治中心青瓦台最显著的特征就是它的青瓦，主楼背靠北岳山，青瓦与曲线型的房顶相映成趣，非常漂亮。结束所有行程后，前往仁川国际机场，参考航班时间（OZ327 08:20-- 09:10）办理出境手续，返回天津滨海国际机场，结束美好旅行回到温暖的家。</div>'+
'                        </dd>'+
'                        <dd>'+
'                            <div>'+
'                                <span>用餐 </span>'+
'                                <span>早餐：含 午餐：含 晚餐：含</span>'+
'                            </div>'+
'                            <div>'+
'                                <span>住宿</span>'+
'                                <span>四花酒店住宿</span>'+
'                            </div>'+
'                        </dd>'+
'                    </dl>'+
'                </div>',
                fybh:'<div>1.交通:往返团队/散客机票含税费（团队机票将统一出票，散客机票因实时计价预定后即刻出票）,当地旅游巴士</div>'+
'                    <div>2.住宿:行程所列酒店。</div>'+
'                    <div>3.用餐:行程中团队标准用餐（中式餐或自助餐或特色餐，含飞机上用餐，自由活动期间用餐请自理；如因自身原因放弃用餐，则餐费不退）。</div>'+
'                    <div>4.门票:行程中所含的景点首道大门票，具体请参考行程描述。</div>'+
'                    <div>5.导服:专职领队和当地中文导游，竭诚为您服务。</div>'+
'                    <div>6.儿童价标准:年龄1~12周岁（不含），不占床，其他标准同成人。</div>'+
'                    <div>7.签证:团队旅游签证(元/人)。</div>',
                fybh:' <div>1.单房差:单房差（具体见团期报价）。</div>'+
'                    <div>2.旅游意外险:旅游人身意外保险</div>',

                jdsm:' <div>1.用餐安排：韩国特色餐：韩式火锅、石锅拌饭等，升级3个特色餐：海鲜自助，烤肉自助，韩方老店人参鸡汤。</div>'+
'                <div>2.住宿安排：韩国四花酒店住宿，升级两晚五花酒店</div>'+
'                <div>3.行程安排：天津韩亚国际航空直飞，当地旅游巴士</div>'+
'                <div>4.游玩安排：乐天世界，南山公园，泰迪熊博物馆，清溪川等</div>'+
'                <div>5.贴心赠送：特别赠送韩流大秀-涂鸦秀表演</div>',
                ydlc:' <div>1、登陆我社网站查看旅游线路，可通过电话或网上在线咨询我社客服，了解相关线路问题，选择好自已喜欢的旅游线路。</div>'+
'                    <div>2.我社客服人员接到您的预订信息后会与您确认好相关事项并为您做好接机/接车/接船等相关事宜，并给您发预定信息到您手机上；请保存好信息上联系方式，该客服将成为您的专属客服，以便随时与其联系。</div>'+
'                    <div>3.出发前一天晚上，我社指定车队接站工作人员将提前与您联系通知第二天接站时间（一般早上07：00左右接站），出发当天，将根据您提供的三亚接站地点准时接您与团队集合出发。</div>',
                qyfs:' <div>在线签约：通过在线签约页面进行签约，付款成功后，将通过电子邮件接收电子版合同，与门市签约及传真签约同等有效。</div>'+
'                    <div>传真签约：双方在合同上签字盖章后，通过传真进行签约。如涉及签证材料需要快递，请在快件中注明订单号，以便工作人员及时处理。</div>'+
'                    <div>上门签约：为您提供上门签约收团款收出境材料服务。支持POS刷卡支付。上海外环区域以内10元/单，万元以上团款首次签约免服务费。具体详询客服人员。</div>',
                fkfs:' <div>如需提前支付团费的团友，可通过我社公司帐户、指定财务帐户汇款支付，汇款帐户请查看网站支款页面：</div>',
                serviceTipsTitle:'及时确认',
                serviceTipsDescription: '本产品价格、团期等信息已经过核实，在您完成付款签约后，即可出游',
                promiseTips:[
                    {id:"1",promiseTipsTitle:'认证商家',promiseTipsDescription:'认证商家资质'},
                    {id:"2",promiseTipsTitle:'24小时退款保证',promiseTipsDescription:'在消费者与供应商达成退款共识后，经旅行社核实退款申请无误且材料完整，1个工作日内完成退款操作（根据银行的不同会在3-15个工作日内到账）'},
                    {id:"3",promiseTipsTitle:'安全交易',promiseTipsDescription:'一旦网上预定并付款后，无自费项目，包括但不限于无附加费、无强迫自费项目，不收取任何特殊人群附加费。'},
                    {id:"4",promiseTipsTitle:'无购物',promiseTipsDescription:'一旦网上预定并付款后，行程中无购物店（特殊路线除外），绝无强迫'},
                    {id:"5",promiseTipsTitle:'如实描述',promiseTipsDescription:'商家承诺与消费者在交易过程中利用400电话/TQ工具进行沟通时向消费者描述的内容真实有效'},
                    {id:"6",promiseTipsTitle:'未验证消费 随时退',promiseTipsDescription:'有效期内，未验证消费 随时退款'},

                ]    
            }  

        },
        methods:{
            onOrderProduct(){
                if(this.activeIndex==0){
                    alert('请先选择价格')
                }else if (localStorage.usertoken) {
                    // 登录是否过期,不过期
                    console.log('当前登录'),
                    this.$axios.post('/api/order', { 'price': this.travelSelect[this.activeIndex], 'productkey': this.key,'userusertoken':localStorage.usertoken,"aultNum":this.aultNum,'childNum':this.childNum}).then((res) => {
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
        },
       

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