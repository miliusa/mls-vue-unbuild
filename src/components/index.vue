<template>
<div id="container">
    <meili-header :isFixed = "isFixed"></meili-header>  
    <router-view></router-view>
    <div id="M-PC-sidebar">
        <div class="options">
            <div class="download-app" @mouseenter="isShowErweima = true" @mouseleave="isShowErweima = false">
                下载
                <span class="side-vertical">APP</span>
                <div class="erweima" v-show="isShowErweima">
                    <img src="../assets/img/index/sidebar_erweima_140x140.png"/>
                </div>
            </div>
            <div class="shopping-cart"><router-link to="/cart">购物车</router-link></div>
            <div class="message"><a href="javascript:;">消息</a></div>
            <div class="discount"><a href="javascript:;">优惠券</a></div>
            <div class="collect"><a href="javascript:;">收藏</a></div>
            <div class="footprint"><a href="javascript:;">足迹</a></div>
        </div>
    </div>
    <meili-footer></meili-footer>
</div>
</template>

<script>
import MeiliHeader from './header.vue';
import MeiliFooter from './footer.vue';
export default {
    components:{
        MeiliHeader,
        MeiliFooter
    },
    data:function(){
        return {
            isFixed:false,
            isShowErweima:false
        }
    },
    mounted:function(){       
        //为window绑定scroll事件
        $(window).scroll(()=>{
            //如果滚动距离>=60
            if(document.documentElement.scrollTop>=208)
                //找到id为header-top的div，添加fixed-nav
                // $(".nav-title").addClass("fixed-nav");
                this.isFixed = true;
            else//否则
                //找到id为header-top的div，移除fixed-nav
                // $(".nav-title").removeClass("fixed-nav");
                this.isFixed = false;
        });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/css/index.css"></style>