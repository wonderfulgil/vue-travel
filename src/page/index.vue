<template>
    <div>
        <slide></slide>
        <div class="wrapper main">
            <div class="title clearfix"  v-for="listItem in indexlist" :key="listItem.id">
                <h2><span class="icon-guide"></span>{{listItem.title}}</h2>
                <div class="sitebanner">
                    <img :src="listItem.sideimgs" width="224" height="400">
                    <img :src="listItem.sideimages" width="224" height="142">
                    <dl>
                        <dt>热门目的地</dt>
                        <dd v-for="desItem in listItem.destination" :key="desItem.id">
                        <router-link :to="{path:'/travelmore/'+desItem.key}">{{desItem.title}}</router-link></dd>  
                    </dl>
                </div>
                <div class="site-content">
                    <tabs :tabs="listItem.tabs" :tabContent="listItem.tabContent"></tabs>
                </div>
            </div>
        </div>
    </div>    
</template>
<script type="text/javascript">
    import tab from "../components/base/tab"
    import slide from "../components/base/slide"
    export default {
        components: {
            'tabs':tab,
            'slide':slide
        }, 
        data(){
            return{ 
            "indexlist":[
                  {
                    "id":"1",
                    "title":"周边游",
                    "sideimgs":require("@/assets/pic2.jpg"),
                    "sideimages":require('@/assets/ad1.jpg'),
                    "destination":[
                        {"id":"1","title":"安徽","key":"1"},
                        {"id":"2","title":"长沙","key":"2"},
                        {"id":"3","title":"南京","key":"3"},
                        {"id":"4","title":"上海","key":"4"},
                        {"id":"5","title":"江西","key":"5"},
                        {"id":"6","title":"新疆","key":"6"},
                        {"id":"7","title":"浙江","key":"7"}
                    ],
                    "tabs":["一、二日游","三、四日游","五日及以上"],
                    "tabContent":[
                        {
                            "bigimg":{
                                "img":require('@/assets/pic3.jpg'),
                                "toKey":"100"
                            },
                            "card":[
                                {
                                   "toKey":"1",
                                    "img":require('@/assets/pic3.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                  "toKey":"2",
                                    "img":require('@/assets/pic3.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"3",
                                    "img":require('@/assets/pic3.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日",
                                    "price":"1699" 
                                },
                                {
                                    "toKey":"4",
                                    "img":require('@/assets/pic3.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"5",
                                    "img":require('@/assets/pic3.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"6",
                                    "img":require('@/assets/pic3.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                }
                            ]
                        },
                        {
                            "bigimg":{
                                "img":require('@/assets/pic3.jpg'),
                                "toKey":"100"
                            },
                            "card":[
                                {
                                   "toKey":"1",
                                    "img":require('@/assets/pic4.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                  "toKey":"2",
                                    "img":require('@/assets/pic4.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"3",
                                    "img":require('@/assets/pic4.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日",
                                    "price":"1699" 
                                },
                                {
                                    "toKey":"4",
                                    "img":require('@/assets/pic4.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"5",
                                    "img":require('@/assets/pic4.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"6",
                                    "img":require('@/assets/pic4.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                }
                            ]
                        },
                        {
                            "bigimg":{
                                "img":require('@/assets/pic3.jpg'),
                                "toKey":"100"
                            },
                            "card":[
                                {
                                   "toKey":"1",
                                    "img":require('@/assets/pic5.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                  "toKey":"2",
                                    "img":require('@/assets/pic5.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"3",
                                    "img":require('@/assets/pic5.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日",
                                    "price":"1699" 
                                },
                                {
                                    "toKey":"4",
                                    "img":require('@/assets/pic5.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"5",
                                    "img":require('@/assets/pic5.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"6",
                                    "img":require('@/assets/pic5.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                }
                            ]
                        },
                    ]        
                  },
                  {
                    "id":"2",
                    "title":"国内游",
                    "sideimgs":require('@/assets/pic1.jpg'),
                    "sideimages":require('@/assets/ad1.jpg'),
                    "destination":[
                        {"id":"1","title":"长白山","key":"9"},
                        {"id":"2","title":"三亚","key":"10"},
                        {"id":"3","title":"厦门","key":"11"},
                        {"id":"4","title":"云南","key":"12"},
                        {"id":"6","title":"神农架","key":"13"},
                        {"id":"7","title":"东北","key":"14"}
                    ],
                    "tabs":["中部西南区","云南风情","北方豪情"],
                    "tabContent":[
                        {
                            "bigimg":{
                                "img":require('@/assets/pic6.jpg'),
                                "toKey":"110"
                            },
                            "card":[
                                {
                                   "toKey":"19",
                                    "img":require('@/assets/pic6.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"20",
                                    "img":require('@/assets/pic6.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"21",
                                    "img":require('@/assets/pic6.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"22",
                                    "img":require('@/assets/pic6.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"23",
                                    "img":require('@/assets/pic6.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"24",
                                    "img":require('@/assets/pic6.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                }
                            ]
                        },
                        {
                            "bigimg":{
                                "img":require('@/assets/pic6.jpg'),
                                "toKey":"110"
                            },
                            "card":[
                                {
                                   "toKey":"19",
                                    "img":require('@/assets/pic4.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"20",
                                    "img":require('@/assets/pic4.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"21",
                                    "img":require('@/assets/pic4.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"22",
                                    "img":require('@/assets/pic4.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"23",
                                    "img":require('@/assets/pic4.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"24",
                                    "img":require('@/assets/pic4.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                }
                            ]
                        },
                        {
                            "bigimg":{
                                "img":require('@/assets/pic6.jpg'),
                                "toKey":"110"
                            },
                            "card":[
                                {
                                   "toKey":"19",
                                    "img":require('@/assets/pic7.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"20",
                                    "img":require('@/assets/pic7.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"21",
                                    "img":require('@/assets/pic7.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"22",
                                    "img":require('@/assets/pic7.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"23",
                                    "img":require('@/assets/pic7.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"24",
                                    "img":require('@/assets/pic7.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                }
                            ]
                        }
                    ]        
                  },
                  {
                    "id":"3",
                    "title":"自由行",
                    "sideimgs":require('@/assets/pic2.jpg'),
                    "sideimages":require('@/assets/ad1.jpg'),
                    "destination":[
                        {"id":"1","title":"日本自由行","key":"15"},
                        {"id":"2","title":"长白山自由行","key":"16"},
                        {"id":"3","title":"三亚自由行","key":"17"},
                        {"id":"4","title":"泰国自由行","key":"18"},
                        {"id":"5","title":"韩国自由行","key":"19"},
                        {"id":"6","title":"广西自由行","key":"20"},
                        {"id":"7","title":"厦门自由行","key":"21"}
                    ],
                    "tabs":["亲子游","夏令营","蜜月游"],
                    "tabContent":[
                        {
                            "bigimg":{
                                "img":require('@/assets/pic8.jpg'),
                                "toKey":"120"
                            },
                            "card":[
                                {
                                   "toKey":"37",
                                    "img":require('@/assets/pic8.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"38",
                                    "img":require('@/assets/pic8.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"39",
                                    "img":require('@/assets/pic8.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"40",
                                    "img":require('@/assets/pic8.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"41",
                                    "img":require('@/assets/pic8.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"42",
                                    "img":require('@/assets/pic8.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                }
                            ]
                        },
                        {
                            "bigimg":{
                                "img":require('@/assets/pic8.jpg'),
                                "toKey":"120"
                            },
                            "card":[
                                {
                                   "toKey":"37",
                                    "img":require('@/assets/pic7.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"38",
                                    "img":require('@/assets/pic7.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"39",
                                    "img":require('@/assets/pic7.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"40",
                                    "img":require('@/assets/pic7.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"41",
                                    "img":require('@/assets/pic7.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"42",
                                    "img":require('@/assets/pic7.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                }
                            ]
                        },
                        {
                            "bigimg":{
                                "img":require('@/assets/pic8.jpg'),
                                "toKey":"120"
                            },
                            "card":[
                                {
                                   "toKey":"37",
                                    "img":require('@/assets/pic6.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"38",
                                    "img":require('@/assets/pic6.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"39",
                                    "img":require('@/assets/pic6.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"40",
                                    "img":require('@/assets/pic6.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"41",
                                    "img":require('@/assets/pic6.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"42",
                                    "img":require('@/assets/pic6.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                }
                            ]
                        },
                      
                    ]        
                },
                {
                    "id":"4",
                    "title":"出境游",
                    "sideimgs":require('@/assets/pic2.jpg'),
                    "sideimages":require('@/assets/ad1.jpg'),
                    "destination":[
                        {"id":"1","title":"日本","key":"22"},
                        {"id":"2","title":"泰国","key":"23"},
                        {"id":"3","title":"北海道","key":"24"},
                        {"id":"4","title":"新加坡","key":"25"},
                        {"id":"5","title":"名古屋","key":"26"},
                        {"id":"6","title":"塞班岛","key":"27"},
                        {"id":"7","title":"马尔代夫","key":"28"}
                    ],
                    "tabs":["欧洲","东南亚","美洲"],
                    "tabContent":[
                        {
                            "bigimg":{
                                "img":require('@/assets/pic9.jpg'),
                                "toKey":"130"
                            },
                            "card":[
                                {
                                   "toKey":"54",
                                    "img":require('@/assets/pic9.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"55",
                                    "img":require('@/assets/pic9.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"56",
                                    "img":require('@/assets/pic9.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"57",
                                    "img":require('@/assets/pic9.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"58",
                                    "img":require('@/assets/pic9.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"59",
                                    "img":require('@/assets/pic9.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                }
                            ]
                        },
                        {
                            "bigimg":{
                                "img":require('@/assets/pic9.jpg'),
                                "toKey":"130"
                            },
                            "card":[
                                {
                                   "toKey":"54",
                                    "img":require('@/assets/pic4.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"55",
                                    "img":require('@/assets/pic4.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"56",
                                    "img":require('@/assets/pic4.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"57",
                                    "img":require('@/assets/pic4.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"58",
                                    "img":require('@/assets/pic4.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"59",
                                    "img":require('@/assets/pic4.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                }
                            ]
                        },
                        {
                            "bigimg":{
                                "img":require('@/assets/pic9.jpg'),
                                "toKey":"130"
                            },
                            "card":[
                                {
                                   "toKey":"54",
                                    "img":require('@/assets/pic7.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"55",
                                    "img":require('@/assets/pic7.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"56",
                                    "img":require('@/assets/pic7.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"57",
                                    "img":require('@/assets/pic7.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"58",
                                    "img":require('@/assets/pic7.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                },
                                {
                                   "toKey":"59",
                                    "img":require('@/assets/pic7.jpg'),
                                    "name":"人间仙境-喀纳斯湖、禾木村、可可托海5日 ",
                                    "price":"1699" 
                                }
                            ]
                        }
                    ]        
                }
            ]
        }
    },
}
</script>
<style>
.title h2 {
    font-size: 22px;
    color: #f93867;
    font-weight: normal;
    background: url('../assets/icon/icon-tilde.png') repeat-x 0 bottom;
    height: 36px;
    padding: 15px 0px 6px;
    margin-bottom: 6px;
}
.title .icon-guide {
    display: inline-block;
    height: 35px;
    width: 34px;
    background: url('../assets/icon/icon-guide.png') no-repeat;
    margin-right: 13px;
}
.title .sitebanner {
    width: 224px;
    float: left;
    position: relative;
}
.sitebanner dl {
    height: 380px;
    width: 224px;
    overflow: hidden;
    position: absolute;
    top: 0;
}
.sitebanner dt {
    color: rgb(255, 255, 255);
    text-align: center;
    margin: 10px 0px;
}
.sitebanner dd {
    text-align: center;
    margin-bottom: 7px;
    height: 24px;
}
.sitebanner dd a {
    color: rgb(0, 0, 0);
    background-color: rgb(255, 255, 255);
    opacity: 0.8;
    height: 24px;
    display: inline-block;
    font-size: 13px;
    border-radius: 12px;
    padding: 0px 10px;
    overflow: hidden;
}
.title .site-content {
    width: 976px;
    overflow: hidden;
    margin-left: 20px;
}
.tab-content .card a img, .tab-content .bigimg img {
    overflow: hidden;
    vertical-align: top;
    transition: all .8s ease;
}
.card a:hover {
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}
.card a:hover img, .bigimg:hover img {
    transform: scale(1.05);
}
</style>