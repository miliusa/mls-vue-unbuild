<template>
  <div id="M-PC-top-nav">
        <ul class="list-inline">
            <li class="go-home"><router-link to="/"><em class="home"></em>美丽说首页</router-link></li>
            <li v-show="!isLogin" class="go-weixin"><a href="javascript:;"><em class="weixin"></em>微信登录</a></li>
            <li v-show="!isLogin" class="go-qq"><a href="https://graph.qq.com/oauth/show?which=Login&display=pc&scope=all&display=pc&response_type=code&redirect_uri=http%3A%2F%2Fwww.meilishuo.com%2Fuser%2Fthirdtransfer%3Fthird%3Dqq%26platform%3Dpc&state=TASe1e4kd2iq1mt&client_id=210915&ptp=1.z1Oeeb.0.0.WRTFoy7"><em class="qq"></em>QQ登录</a></li>
            <li v-show="!isLogin"><router-link to="/login">登录</router-link></li>
            <li v-show="!isLogin"><router-link to="/register">注册</router-link></li>
            <li v-show="isLogin" class="my-center" @mouseenter="isShow.center = true" @mouseleave="isShow.center = false">
                <a href="javascript:;">{{uname}}<em class="arrow"></em></a>
                <ul class="my-center-detail" v-show="isShow.center">
                    <li><a href="javascript:;">账号与安全</a></li>
                    <li><a href="javascript:;" @click="logout">退出</a></li>
                </ul>
            </li>
            <li class="my-collect" @mouseenter="isShow.collect = true" @mouseleave="isShow.collect = false">
                <a href="javascript:;" class="collect-menu"><em class="collect"></em>我的收藏</a>
                <ul class="collect-des" v-show="isShow.collect">
                    <li><a href="javascript:;">收藏宝贝</a></li>
                    <li><a href="javascript:;">收藏店铺</a></li>
                </ul>
            </li>
            <li><router-link to="/cart"><em class="cart"></em>我的购物车</router-link></li>
            <li><a href="javascript:;"><em class="order"></em>我的订单</a></li>
            <li class="help-center" @mouseenter="isShow.help = true" @mouseleave="isShow.help = false">
                <a href="javascript:;" class="help-menu">帮助中心<em class="arrow"></em></a>
                <ul class="help-des" v-show="isShow.help">
                    <li><a href="javascript:;">买家服务</a></li>
                    <li><a href="javascript:;">商家服务</a></li>
                    <li><a href="javascript:;">规则中心</a></li>
                </ul>
            </li>
            <li><a href="javascript:;">商家后台</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            isLogin:false,
            uname:'',
            isShow:{center:false,collect:false,help:false}
        }
    },
    beforeMount:function(){
        this.$http.get('http://127.0.0.1/MyProject/data/user/session_data.php',{withCredentials:true})
        .then(function(res){
            if(res.data.uid){
                this.isLogin = true;
                this.uname = res.data.uname;
            }else{
                this.isLogin = false;
                this.uname = '';
            }
        })
    },
    methods:{
        logout(){
            this.$http.get('http://127.0.0.1/MyProject/data/user/logout.php',{withCredentials:true})
            .then(function(res){
                console.log(res.data.msg);
                if(res.data.code == 200){
                    this.isLogin = false;
                    this.uname = '';
                    this.$emit('customEvent',this.isLogin);
                }
            })
        }
    }
}
</script>

<style scoped>
    /*头部导航栏*/
    #M-PC-top-nav{
        background-color: #F8F8F8;
        line-height:30px;
    }
    #M-PC-top-nav>ul{
        text-align: right;
        width:1200px;
        height:30px;
        margin:0 auto;
    }
    #M-PC-top-nav>ul>li{
        padding-left: 5px;
        padding-right: 5px;
    }
    #M-PC-top-nav>ul>li.go-home{
        float:left;
    }
    #M-PC-top-nav>ul>li>a{
        display: inline-block;
        height:20px;
        line-height: 20px;
        padding:0 18px;
        font-size:12px;
        text-decoration: none;
        color:#666;
        border-right: 1px dotted #ccc;
    }
    #M-PC-top-nav>ul>li:first-child>a,#M-PC-top-nav>ul>li:last-child>a{
        border:none;
    }
    #M-PC-top-nav a:hover{
        color:#FF3366;
    }
    #M-PC-top-nav em{
        display:inline-block;
        margin-right:7px;
        vertical-align:sub;
        width: 18px;
        height:16px;
        background:url('../assets/img/index/index_sprite_241x16.png');
    }
    #M-PC-top-nav em.weixin{
        background-position: -25px 0;
    }
    #M-PC-top-nav em.qq{
        background-position: -50px 0;
    }
    #M-PC-top-nav em.collect{
        background-position: -75px 0;
    }
    #M-PC-top-nav em.cart{
        background-position: -102px 0;
    }
    #M-PC-top-nav em.order{
        background-position: -125px 0;
    }
    #M-PC-top-nav em.arrow{
        background-position: -175px 0;
    }
    .my-center,.my-collect,.help-center{
        position: relative;
    }
    ul.my-center-detail,ul.collect-des,ul.help-des{
        width:100%;
        background-color:#f8f8f8;
        position: absolute;
        top: 30px;
        left: -5px;
        border: 1px solid #c5c5c5;
        z-index: 10;
    }
    .my-center-detail>li>a,.collect-des>li>a,.help-des>li>a{
        width: 100%;
        line-height: 20px;
        display: inline-block;
        text-align: center;
    }
    /***头部导航栏 end***/
</style>
