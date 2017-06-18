<template>
  <swiper :options="swiperOption" class="swiper-box">
    <swiper-slide class="swiper-item" v-for="item in items" :key = "item.id" :style="{backgroundImage: 'url(\'' + item.img + '\')'}"></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>
<script>  
    import { swiper, swiperSlide } from 'vue-awesome-swiper'  
    export default {  
        components: {  
            swiper,  
            swiperSlide  
        },
        props: {
           
        },  
        data() {  
            return {  
                swiperOption: {  
                //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
                notNextTick: true,  
                pagination: '.swiper-pagination',  
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                slidesPerView: 'auto',  
                centeredSlides: true,  
                paginationClickable: true, 
                loop: true ,
                spaceBetween: 0,  
                    onSlideChangeEnd: swiper => {  
                        //这个位置放swiper的回调方法  
                        this.page = swiper.realIndex+1;  
                        this.index = swiper.realIndex;  
                    }  
                },
                items:[ 
                {"id":"1","img":require('@/assets/slideShow/pic1.jpg')}, 
                {"id":"2","img":require('@/assets/slideShow/pic2.jpg')}, 
                {"id":"3","img":require('@/assets/slideShow/pic3.jpg')},
                {"id":"4","img":require('@/assets/slideShow/pic4.jpg')},  
                ],

                 //定义这个sweiper对象  
                computed: {  
                    swiper() {  
                      return this.$refs.mySwiper.swiper;  
                    }  
                },  
                mounted () {  
                    //这边就可以使用swiper这个对象去使用swiper官网中的那些方法  
                    this.swiper.slideTo(0, 0, false);  
                }  
            }  
        }
     }      
</script>  
<style type="text/css">
  .swiper-box {
    height: 340px;
  }
.swiper-button-next, .swiper-container-rtl .swiper-button-prev {
    right: 30px;
} 
.swiper-button-prev, .swiper-container-rtl .swiper-button-next {
    left: 30px;
} 
.swiper-pagination-bullet {
    width: 15px;
    height: 15px;
    background: #fff;
    opacity: .8;
}
.swiper-pagination-bullet-active {
opacity: 1;
background: #007aff;
}
</style>  