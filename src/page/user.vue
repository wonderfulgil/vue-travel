<template>
    <div class="wrapper main clearfix">
        <div class="siderbar-user" >
            <router-link class="sidebar-zy" :to="{path: '/user'}"><i class="icon-tag"></i>我的主页</router-link>  
            <div class="user-sidernr">
                <dl class="user-sidexm" v-for="(item, index) in usermune" :class="{'grouping-pack':item.isOpen}" :key="item.id">
                    <dt @click="pick(index)"><i class="item-icon"></i><b>{{item.title}}</b></dt>
                    <dd >
                        <router-link active-class="on" :to="{path: muneitem.url}" v-for="muneitem in item.muneTwo" :key="muneitem.id">{{muneitem.title}}</router-link>  
                    </dd>
                </dl>
              </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data(){
        return{ 
            usermune:[
                {
                    "id":"1",
                    "isOpen":false,
                    "title":"我的订单",
                    "muneTwo":[
                        {
                        "id":"1",   
                        "title":"我的线路订单",
                        "url":"/user/userorder"
                        } 
                    ]
                     
                },
                {
                    "id":"2",
                    "isOpen":false,
                    "title":"账号管理",
                    "muneTwo":[
                        {
                        "id":"1",    
                        "title":"个人资料",
                        "url":"/user/userInfo"
                        }, 
                        {
                        "id":"2",   
                        "title":"账户安全",
                        "url":"/user/userPassword"
                        }, 
                    ] 
                }
            ]
        }
    },
    methods:{
        pick(index){
            this.usermune[index].isOpen = !this.usermune[index].isOpen
        }
    }
}
</script>
<style>
.siderbar-user {
    float: left;
    width: 224px;
    overflow: hidden;
    background: #f7f7f7;
    border: 1px solid #ccc;
    padding-top: 10px;
}
.siderbar-user .sidebar-zy {
    margin-bottom: 10px;
    padding-left: 21px;
    color: #f93867;
    font-size: 16px;
    display: inline-block;
    height: 24px;
    vertical-align: bottom;
}
.sidebar-zy i {
    height: 18px;
    width: 21px;
    margin-right: 11px;
    display: inline-block;
    vertical-align: bottom;
    background: url("../assets/icon/home.png")
}
.user-sidexm {
    border-top: 1px dashed #ccc;
    cursor: pointer;
    font-size: 14px;
    padding-bottom: 10px;
}
.user-sidexm dt {
    padding: 14px 10px 5px 25px;
}
.siderbar-user .user-sidexm .item-icon {
    height: 13px;
    width: 13px;
    margin-right: 15px;
    background: url("../assets/icon/jia.png") no-repeat;
    display: inline-block;
    vertical-align: bottom;
}
.siderbar-user .grouping-pack .item-icon {
    height: 13px;
    width: 13px;
    margin-right: 15px;
    background: url("../assets/icon/jian.png") no-repeat;
    display: inline-block;
    vertical-align: bottom;
}
.siderbar-user dd {
    display: none
}
.siderbar-user .grouping-pack dd {
    display: block
}
.user-sidexm dd a {
    color: #666;
    display: block;
    padding: 4px 10px 4px 53px;
    margin-top: 1px;
    font-size: 14px;
}
.user-sidexm dd a.on, .user-sidexm dd a:hover {
    background: #f93867;
    color: #fff;
}
.user-box {
    width: 954px;
    float: right;
    overflow: hidden;
    background: #f7f7f7;
    border: 1px solid #ccc;
    padding-bottom: 50px;
}
.user-box .title {
    border-bottom: 1px solid #dcdcdc;
    padding: 10px 20px 10px 30px;
    color: #f93867;
    height: 24px;
    vertical-align: bottom;
}
.user-box .title i {
    background: #f93867;
    display: inline-block;
    height: 20px;
    width: 5px;
    margin-right: 15px;
    vertical-align: bottom;
}
.user-main {
    width: 856px;
    margin: 10px auto;
    padding: 20px 15px 10px;
    font-size: 14px;
}
.from-inf {
    clear: both;
    width: 80%;
    margin: 0px auto;
    line-height: 34px;
}
.from-inf li {
    clear: both;
    width: 100%;
    padding: 10px 0;
    font-size: 14px;
    color: #535353;
}
.from-inf li .from-left {
    float: left;
    width: 98px;
    height: 34px;
    text-align: right;
    font-size: 14px;
    color: #535353;
}
.from-inf li input {
    line-height: 30px;
    color: #333;
    padding: 0;
    margin: 0;
}
.from-button {
    color: #fff;
    background-color: #fe7b9e;
    border: 1px solid #e7325d;
    cursor: pointer;
    width: 120px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    color: #fff;
    border-radius: 5px;
    display: inline-block;
    text-align: center;
}
.from-button:hover{
    background-color: #f93867;
    color: #fff;
}
</style>
