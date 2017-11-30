<template>
<div id="header-container">
    <meili-nav></meili-nav>
    <!--search start-->
    <div id="search" class="container">
        <div class="row">
            <div class="col-xs-3">
                <router-link to="/index" class="logo"></router-link>
            </div>
            <div class="col-xs-6">
                <br/>
                <div class="row">
                    <div class="col-xs-2">
                        <div class="topInput">宝贝</div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <div class="search-part">
                            <input type="text" class="search-input" v-model.trim="searchKw"/>
                            <span class="search-btn" @click="search"></span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <ul class="list-inline search-history">
                            <li><a href="javascript;;">秋季套装</a></li>
                            <li><a href="javascript;;">连衣裙</a></li>
                            <li><a href="javascript;;">破洞针织</a></li>
                            <li><a href="javascript;;">薄卫衣</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-xs-3"><img src="../assets/img/index/gift_210x157.gif" alt=""/></div>
        </div>
    </div>
    <!--search end-->
    <ul :class="isFixed?'fixed-nav nav-title list-inline':'nav-title list-inline'">
        <li class="index on"><router-link to="/index">首页</router-link></li>
        <li class="clothing"><router-link to="/otherPage/clothing">上衣</router-link></li>
        <li class="skirt"><router-link to="/otherPage/skirt">裙子</router-link></li>
        <li class="trousers"><router-link to="/otherPage/trousers">裤子</router-link></li>
        <li class="shoes"><router-link to="/otherPage/shoes">女鞋</router-link></li>
        <li class="bags"><router-link to="/otherPage/bags">包包</router-link></li>
        <li class="accessories"><router-link to="/otherPage/accessories">配饰</router-link></li>
        <li class="magic"><router-link to="/otherPage/magic">美妆</router-link></li>
        <li class="men"><router-link to="/otherPage/men">男友</router-link></li>
        <li class="children"><router-link to="/otherPage/children">童装</router-link></li>
        <li class="home"><router-link to="/otherPage/home">家居</router-link></li>
    </ul>
</div>
</template>

<script>
import MeiliNav from './nav.vue';
export default {
    props:['isFixed'],
    components:{
        MeiliNav
    },
    data:function(){
        return {
            searchKw:''
        }
    },
    methods:{
        search(){
            if(this.searchKw){
                this.$router.push('/search/'+this.searchKw);
            }else{
                return;
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/css/header.css" scoped></style>
