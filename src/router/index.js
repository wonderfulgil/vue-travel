import Vue from 'vue'
import VueRouter from 'vue-router'
//专门配置路由规则
//引入模块
import Index from '../page/index'
import detail from '../page/detail'
import travel from '../page/travel'
import travelSearch from '../page/travelSearch'
import travelmore from '../page/travelmore'
import user from '../page/user'
import home from '../page/user/inde.vue'
import userInfo from '../page/user/userInfo'
import userPassword from '../page/user/userPassword'
import userorder from '../page/user/Travelorder'
import travelOrder from '../page/travelOrder'

//全局安装路由功能
Vue.use(VueRouter);


// 2. 定义路由(routes)
// 每个路由应该映射一个组件
const routes=[
  	{ 
  		path: '/' ,
  		component:Index,
        title: '首页',
		meta: { navShow: true},
  	},
    { 
        path: '*' ,
        title: '404',
        meta: { navShow: true},
        redirect: '/'
    },
    { 
        path: '/index' ,
        component:Index,
        title: '首页',
        meta: { navShow: true},
    },
    { 
        path: '/travel/:category' ,
        component:travel,
        title: '旅游',
        meta: { navShow: false }, 
    },
    { 
        path: '/travelSearch/:keywords' ,
        component:travelSearch,
        title: '旅游搜索',
        meta: { navShow: false }, 
    },
    { 
        path: '/travelmore/:category/' ,
        title: '旅游列表',
        component:travelmore,
        meta: { navShow: false }, 
    },
    { 
        path: '/travelmore/:category/:key' ,
        title: '旅游列表',
        component:travelmore,
        meta: { navShow: false }, 
    },
    { 
        path: '/travelmore/:category/:key/:keywords' ,
        title: '旅游列表',
        component:travelmore,
        meta: { navShow: false }, 
    },
  	{ 
  		path: '/detail/:id' ,
        component:detail,
        title: '详情',
      	meta: { navShow: false }, 
  	},
    { 
        path: '/travelOrder/:id' ,
        component:travelOrder,
        title: '订单',
        meta: { 
            navShow: false,
            requireAuth: true
        },
    },
    { 
        path: '/user' ,
        component:user,
        title: '个人中心',
        redirect: '/user/home',
        meta: { 
            navShow: false,
            requireAuth: true//添加该字段，表示进入这个路由是需要登录的
        }, 
        children: [
            {
                path: 'home',
                component: home,
                 meta: { 
                    navShow: false,
                    requireAuth: true
                }, 
            },
            {
              path: 'userPassword',
              component: userPassword,
                meta: { 
                    navShow: false,
                    requireAuth: true
                }, 
            },
            {
                path: 'userInfo',
                component: userInfo,
                meta: { 
                    navShow: false,
                    requireAuth: true
                }, 
            },
            {
                path: 'userorder',
                component: userorder,
                meta: { 
                    navShow: false,
                    requireAuth: true
                }, 

            }
        ]
    },
]

//  创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {
    // 判断该路由是否需要登录权限,需要登录，首先判断是否登录
        //console.log('需要登录权限')
        if (localStorage.usertoken) {
            // 登录是否过期,不过期
            next()
            //console.log('当前登录')
        }
        else {
           // console.log('当前未登录'),
           alert('您未登录，请先登录'),
           next({
                path: '/'
            })
        }
    }
    else {// 不需要登录权限
        next()
        //console.log('不需要登录权限')
    }
})

export default router;



