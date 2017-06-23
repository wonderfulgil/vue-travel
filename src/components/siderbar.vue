<template>
   <div class="siderbar">
        <div class="siderbar-list">
            <h2>线路热卖推荐</h2>
            <ul>
                <li v-for="(item,index) in hotSellers" @mouseover="select(index)" :class="{on:m==index}" :key="item.id">
                    <p class="number">{{index+1}}</p>
                    <a :href="'/detail/'+item.key" class="list-tit">{{item.name}}</a>
                    <dl>
                        <dt>
                            <a :href="'/detail/'+item.key">
                              <img :alt="item.name " :src="item.img" width="100" height="68">
                            </a>
                        </dt>
                        <dd>
                            <h3><a :href="'/detail/'+item.key">{{item.name}} </a></h3>
                            <p><em>￥{{item.price}}</em>起</p>
                        </dd>
                    </dl>
                </li>
            </ul>
      </div>
     </div>
</template>
<script>
export default {
    data () {
        return {
            hotSellers:[],
            m:''
        }
    },
    created () {
        this.getPosts()
    },
    methods: {
        getPosts() {
          this.$axios.get('/api/hotSellers').then((res) => {
            this.hotSellers=res.data
          })
          .catch((error) => {
                //error
                console.log(error);
            })
        },
        select(index){
            this.m=index
        }
    }
}
</script>
<style scoped>
.siderbar {
    width: 224px;
    float: right;
    overflow: hidden;
}
.siderbar-list{
    width: 222px;
    overflow: hidden;
    border: 1px solid #ddd;
}
.siderbar-list h2 {
    font-size: 16px;
    height: 30px;
    line-height: 30px;
    padding-left: 8px;
    font-weight: normal;
    border-bottom: 1px solid #ddd;
}
.siderbar-list li {
    position: relative;
    border-bottom: 1px solid #ddd;
    width: 100%;
    background: #fff;
}
.siderbar-list .number {
    position: absolute;
    left: 6px;
    top: 10px;
    width: 18px;
    height: 18px;
    line-height: 16px;
    background: #f93867;
    color: #FFF;
    font-family: Arial;
    text-align: center;
    text-shadow: 1px 1px #666;
    font-size: 14px;
    box-shadow: 0 0 2px #f93867;
    font-weight: bold;
}
.list-tit {
    width: 187px;
    padding-left: 35px;
    font-size: 12px;
    height: 30px;
    line-height: 30px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.siderbar-list dl {
    display: none;
    width: 210px;
    margin: 0 auto;
    padding-top: 10px;
    overflow: hidden;
}
.siderbar-list li.on .list-tit, .siderbar-list li.on:hover .list-tit  {
    display: none;
}
.siderbar-list li.on dl, .siderbar-list li.on:hover dl {
    display: block;
}
.siderbar-list li dt, .siderbar-list li dd {
    display: inline-block;
}
.siderbar-list li dt {
    width: 100px;
    height: 68px;
    padding-right: 10px;
}
.siderbar-list li dd {
    width: 80px;
    height: 68px;
    vertical-align: top;
    overflow: hidden;
}
.siderbar-list h3 a {
    width: 80px;
    display: inline-block;
    font-size: 14px;
    height: 20px;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.siderbar-list dd p {
    font-size: 12px;
}
.siderbar-list dd i, .siderbar-list dd em {
    color: #f93867;
}
   
</style>
