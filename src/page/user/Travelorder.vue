<template>
    <div class="user-box">
        <div class="title"><span> <i></i><em>我的线路订单</em></span></div>
        <div class="user-main">
            <div class="userlist-tit">
                <div class="cell cell-1"><span>订单编号</span></div>
                <div class="cell cell-2"><span>产品信息</span></div>
                <div class="cell cell-3"><span>金额</span></div>
                <div class="cell cell-4"><span>下单时间</span></div>
            </div>
            <div>
                <table width="100%" border="0" cellpadding="0" cellspacing="1" bgcolor="#E6E6E6" >
                    <tbody>
                        <tr v-for="item in orderList" :key="item.id">
                            <td width="15%" height="30" bgcolor="#FFFFFF">{{item.ordernum}}</td>
                            <td width="53%" height="30" bgcolor="#FFFFFF"><a :href="'/detail/'+item.key">{{item.ordername}}</a></td>
                            <td width="10%" height="30" bgcolor="#FFFFFF">￥{{item.orderPrice}}</td>
                            <td width="20%" height="30" bgcolor="#FFFFFF">{{item.ordertime}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            "orderList":[ ]
        }
    },
    created(){
        this.getPosts();
    },
    methods:{
        getPosts() {
            this.$axios.get("/api/orderList").then((res) => {
                    this.orderList=res.data
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
.userlist-tit {
    background: #ffeeec;
    margin-top: 20px;
}
.userlist-tit .cell {
    display: inline-block;
}
.userlist-tit .cell-1 {
    width: 15%;
}
.userlist-tit .cell span {
    display: inline-block;
    padding: 5px 10px;
}
.userlist-tit .cell-2{
    width:53%;
}
.userlist-tit .cell-3{
    width:10%;
}
.userlist-tit .cell-4{
    width:20%;
}
.userlist-tit .cell span{
    display:inline-block;
    padding: 5px 10px;
}  
</style>
