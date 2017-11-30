<template>
  <div id="M-PC-detail">
        <meili-nav></meili-nav>
        <!--shop-header 店铺信息-->
        <div id="shop-header">
            <div class="header">
                <div class="shop-info">
                    <a href="javascript:;" class="avatar" :title="shopInfo.sname"><img :src="'static/'+shopInfo.store_simg"/></a>
                    <div class="shop-name">
                        <div class="name-wrap">
                            <a href="javascript:;" class="name" :title="shopInfo.sname">{{shopInfo.sname}}</a>
                        </div>
                        <div class="shop-score">
                            <p>
                                <span class="s-cat">描述<b>{{shopInfo.describe_score}}</b></span>
                                <span class="s-cat">价格<b>{{shopInfo.price_score}}</b></span>
                                <span class="s-cat">质量<b>{{shopInfo.quality_score}}</b></span>
                                <span class="s-cat">服务<b>{{shopInfo.serve_score}}</b></span>
                            </p>
                        </div>
                    </div>
                    <div class="shop-action">
                        <a href="javascript:;" class="shop-collect">收藏店铺</a>
                        <a href="javascript:;" class="shop-chart">
                            <div>联系客服</div>
                        </a>
                    </div>
                </div>
                <div class="shop-search">
                    <div id="nav-search-form" class="top-nav-search">
                        <div class="text-wrap">
                            <input type="text" class="search-key" placeholder="输入你想要的商品..." >
                            <a href="javascript:;" class="search-inshop" >搜本店</a>
                            <input type="button" class="submit-btn" value="搜全站">
                        </div>
                        <input type="hidden" id="select-type">
                        <div class="top-search"></div>
                    </div>
                </div>
                <div class="shop-search-list"></div>
            </div>
        </div>
        <!--top banner店铺logo-->
        <div id="top-banner-box">
            <div class="top-banner">
                <a class="shop-bg-img" :style="'background: url(static/'+shopInfo.store_bimg+') center no-repeat'"></a>
            </div>
        </div>
        <!--top navigation 店铺导航条-->
        <div id="top-navigation">
            <div class="top-nav">
                <ol>
                    <li><router-link to="/index">首页</router-link></li>
                    <li class="all"><a href="">全部商品<em class="arrow"></em></a></li>
                    <li class="z-nav-list"><a href="javascript:;">官方出品</a></li>
                    <li class="z-nav-list"><a href="javascript:;">新品</a></li>
                    <li class="z-nav-list"><a href="javascript:;">套装</a></li>
                    <li class="z-nav-list" @mouseenter="isShow.skirt = true" @mouseleave="isShow.skirt = false">
                        <a href="javascript:;">裙子<em class="arrow"></em></a>
                        <div class="category-list" v-show="isShow.skirt">
                            <dl>
                                <dd><a href="javascript:;">连衣裙</a></dd>
                                <dd><a href="javascript:;">半身裙</a></dd>
                            </dl>
                        </div>
                    </li>
                    <li class="z-nav-list" @mouseenter="isShow.clothing = true" @mouseleave="isShow.clothing = false">
                        <a href="javascript:;">上衣<em class="arrow"></em></a>
                        <div class="category-list" v-show="isShow.clothing">
                            <dl>
                                <dd><a href="javascript:;">T恤</a></dd>
                                <dd><a href="javascript:;">卫衣</a></dd>
                                <dd><a href="javascript:;">衬衫</a></dd>
                            </dl>
                        </div>
                    </li>
                    <li class="z-nav-list" @mouseenter="isShow.trousers = true" @mouseleave="isShow.trousers = false">
                        <a href="javascript:;">裤子<em class="arrow"></em></a>
                        <div class="category-list" v-show="isShow.trousers">
                            <dl>
                                <dd><a href="javascript:;">牛仔裤</a></dd>
                                <dd><a href="javascript:;">裤装</a></dd>
                            </dl>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
        <!--body wrap 店铺主体部分-->
        <div id="body-wrap">
            <div class="shop-detail">
                <div class="detail-primary clearfix">                   
                    <div class="add-cart" v-show="isAddSucc">
                        <div class="add-cart-header clearfix"><a href="javascript:;" @click="isAddSucc=false;"></a></div>
                        <div class="add-cart-body">
                            <p class="info"><span>已将商品添加到购物车</span></p>    
                            <p class="go-cart-sum"><router-link to="/cart">去购物车结算&gt;</router-link></p>                          
                        </div>
                    </div>
                    <div class="primary-goods">
                        <div id="product-details" class="clearfix">                           
                            <!--文字信息 -->
                            <div id="show-details">
                                <div class="info-box">
                                    <h3>{{goodsInfo.title}}</h3>
                                    <div class="price">
                                        <div class="stu-price">
                                            <dl class="property-box">        
                                                <dt> 价格 ：</dt>
                                                <dd class="property-price">
                                                    <span class="price">¥{{goodsInfo.price}}</span>
                                                </dd>                                            
                                                <dd class="property-extra">
                                                    <span class="evalute">评价：
                                                        <span class="num">3</span>
                                                    </span>
                                                    <span>累计销量：
                                                        <span class="total-sale">{{goodsInfo.sold_count}}</span>
                                                    </span>
                                                </dd>
                                            </dl>
                                            <dl class="property-box">
                                                <dt>店铺优惠：</dt>
                                                <dd>
                                                    <span class="onsale-info">满99立减20元</span>
                                                </dd>
                                            </dl>
                                        </div>                                       
                                    </div>
                                    <div class="connect-kefu">
                                        <dl>
                                            <dt>客服：</dt>
                                            <dd>                                                       
                                                <img src="../assets/img/header/shop_kefu_16x17.gif">
                                                <span>联系客服</span>
                                            </dd>
                                        </dl>
                                    </div>
                                    <!-- 选购部分 -->
                                    <div class="choose-content">
                                        <div class="choose-box">
                                            <dl class="style">
                                                <dt>规格：</dt>
                                                <dd>
                                                    <ol class="content-list clearfix">
                                                        <li v-for="(imgItem,index) in imgList" :key="index"><img :src="'static/'+imgItem.sm"><b></b></li>
                                                    </ol>
                                                </dd>
                                            </dl>
                                            <dl class="size">
                                                <dt>尺码：</dt>
                                                <dd>
                                                    <ol class="content-list clearfix">
                                                        <li>M</li>
                                                        <li>L</li>
                                                        <li>XL</li>
                                                    </ol>
                                                </dd>
                                            </dl>                        
                                            <dl class="account">
                                                <dt>数量：</dt>
                                                <dd class="clearfix">
                                                    <div class="goods-num">
                                                        <span class="number-reduce" @click="modifyBuyCount(false)">-</span>
                                                        <input type="text" :value="buyCount" v-model="buyCount">
                                                        <span class="number-add" @click="modifyBuyCount(true)">+</span>
                                                    </div>
                                                    <div class="goods-stock">库存{{goodsInfo.inventory}}件</div>
                                                    <div class="goods-stock-tips" v-show="isShow.isGt">您所填写的商品超过库存！</div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <!-- 购买部分 -->
                                        <div class="goods-buy">
                                            <a href="javascript:;" class="buy">立即购买</a>
                                            <a href="javascript:;" class="cart" @click="addToCart">加入购物车</a>
                                        </div>
                                    </div>
                                    <div class="goods-social clearfix">
                                        <div class="collect"> 
                                            <b></b>
                                            <span>276</span>
                                        </div>
                                        <div class="share">
                                            <b></b>
                                            <span>分享</span>
                                        </div>
                                    </div>
                                    <div class="goods-extra">
                                        <div class="extra-promise">
                                            <div class="info-label">服务承诺：</div>
                                            <ol class="clearfix">
                                                <li>
                                                    <img src="../assets/img/detail/tui_40x40.png">
                                                    退货补运费
                                                </li>
                                                <li>
                                                    <img src="../assets/img/detail/baoyou_40x40.png">
                                                    全国包邮
                                                </li>
                                                <li>
                                                    <img src="../assets/img/detail/7tian_40x40.png">
                                                    7天无理由退货
                                                </li>
                                                <li>
                                                    <img src="../assets/img/detail/72hours_40x40.png">
                                                    72小时发货
                                                </li>
                                            </ol>
                                        </div>
                                        <div class="extra-pay">
                                            <div class="info-label">支付方式：</div>
                                            <div class="pay-img"></div>
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                            <!--商品图片-->
                            <div id="preview">
                                <div class="big-img" v-if="imgList.length > 0">
                                    <img :src="'static/'+imgList[onImgIndex].md"> 
                                </div>
                                <div class="sm-img">
                                    <div class="box">
                                        <div class="img-list">
                                            <ul class="clearfix" :style="'left:'+simgLeft+'px'">
                                                <li v-for="(imgItem,index) in imgList" :key="index" :class="{selected:index==onImgIndex}" @mouseenter="onImgIndex = index"><img :src="'static/'+imgItem.sm"><i></i></li>
                                            </ul>
                                        </div>
                                    </div>                               
                                    <a href="javascript:;" class="left" v-show="simgLeft<0" @click="isNext(false)"></a>
                                    <a href="javascript:;" class="right" v-show="-simgLeft<60*imgList.length" @click="isNext(true)"></a>
                                </div>                              
                            </div>
                        </div>
                    </div>
                    <div class="primary-slides">
                        <div class="goods-recommend">
                            <p class="title">
                                <b></b>
                                <span>热卖推荐</span>
                            </p>
                            <div class="list">
                                <div class="box">
                                    <ul>
                                        <li>
                                            <a href="javascript:;">
                                                <img src="static/img/detail/slides/slides1_220x330.jpg" alt="">        
                                            </a>
                                            <span>￥78.67</span>
                                        </li>
                                        <li>
                                            <a href="javascript:;">
                                                <img src="static/img/detail/slides/slides2_220x330.jpg" alt="">        
                                            </a>
                                            <span>￥115.39</span>
                                        </li>
                                        <li>
                                            <a href="javascript:;">
                                                <img src="static/img/detail/slides/slides3_220x330.jpg" alt="">        
                                            </a>
                                            <span>￥82.67</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="detail-content clearfix">
                    <div class="col-main">
                        <div class="module-tabpanel">
                            <div class="tabbar-box">
                                <ul class="tabbar-list clearfix">
                                    <li data-panels="graphic" class="selected">
                                        <a href="javascript:;">商品详情</a>
                                    </li>
                                    <li data-panels="rates">
                                        <a href="javascript:;">累计评价</a>
                                    </li>
                                    <li data-panels="recommend">
                                        <a href="javascript:;">本店同类商品</a>
                                    </li>
                                    <li class="qrcode" @mouseenter="isShow.qrcode=true" @mouseleave="isShow.qrcode=false">
                                        <div class="qrcode-toggle">手机扫码下单</div>
                                        <div class="qrcode-pic" v-show="isShow.qrcode">
                                            <img src="../assets/img/detail/qrcode_200x200.png">
                                        </div>
                                        <i class="qrcode-mini"></i>
                                        <i class="qrcode-arrow"></i>
                                    </li>
                                </ul>
                            </div>
                            <div class="panel-box">
                                <div class="panel-list">
                                    <img src="static/img/detail/describe/1_1.jpg">
                                </div>
                            </div>
                        </div>
                    </div>                    
                    <div class="col-slidebar">
                        <div class="module-shop">
                            <div class="shop-name shop-hd">
                                <a href="javascript:;">美丽优选</a>
                                <span class="kefu-img"></span>
                            </div>
                            <div class="shop-bd">
                                <div class="shop-evaluate">
                                    <ul class="clearfix">
                                       <li>
                                            <p class="text">描述</p>
                                            <p class="num-def ">{{shopInfo.describe_score}}</p>
                                        </li>
                                        <li>
                                            <p class="text">价格</p>
                                            <p class="num-def ">{{shopInfo.price_score}}</p>
                                        </li>
                                        <li>
                                            <p class="text">质量</p>
                                            <p class="num-def ">{{shopInfo.quality_score}}</p>
                                        </li>
                                        <li>
                                            <p class="text">服务</p>
                                            <p class="num-def ">{{shopInfo.serve_score}}</p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="shop-btns">
                                    <a href="javascript:;">收藏店铺</a>
                                    <a href="javascript:;">进入店铺</a>
                                </div>
                            </div>
                            <i class="line"></i>
                            <div class="shop-s">
                                <input type="text" class="s">
                                <input type="button" class="sub" value="店内搜索">                  
                            </div>
                            <i class="line"></i>
                            <div class="shop-provide">
                                <a href="javascript:;">                                       
                                    <img src="../assets/img/detail/shop_provide_150x26.png">
                                </a>
                            </div>
                        </div>
                        <div class="module-classify">

                        </div>
                        <div class="module-repeat"></div>
                    </div>
                    <div class="col-extra">
                        <i class="l"></i>
                        <i class="r"></i>
                        <i class="b"></i>
                        <div class="module-cart">
                            <a href="javascript:;" @click="addToCart">
                                <span>
                                    <i></i>
                                    加入购物车
                                </span>
                            </a>
                        </div>
                        <div class="module-extranav">
                            <ul class="extranav-list">
                                <li class="selected"><a href="javascript:;">商品描述</a></li>
                                <li><a href="javascript:;">穿着效果</a></li>
                                <li><a href="javascript:;">尺码说明</a></li>
                                <li><a href="javascript:;">商品推荐</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <meili-footer></meili-footer>
  </div>
</template>

<script>
import MeiliNav from './nav.vue';
import MeiliFooter from './footer.vue';
export default {
   components:{
        MeiliNav,
        MeiliFooter
    },
    data:function(){
        return {
            buyCount:1,
            onImgIndex:0,   
            imgList:[],
            goodsInfo:[],
            shopInfo:[],
            isAddSucc:false,
            simgLeft:0,
            isShow:{
                isGt:false,
                qrcode:false,
                skirt:false,
                clothing:false,
                trousers:false
            }
        }
    },
    beforeMount:function(){
        this.pid = this.$route.params.pid;
        this.$http.get('http://127.0.0.1/MyProject/data/products/details.php?pid='+this.pid)
        .then((res)=>{
            this.imgList = res.data.details.imgList;
            this.goodsInfo = res.data.details;
            this.shopInfo = res.data.shop;
        })
    },
    methods:{
        modifyBuyCount(bool){
            if(bool){
                this.buyCount++;
                if(this.buyCount>this.goodsInfo.inventory){
                    this.isShow.isGt = true;
                }else{
                    this.isShow.isGt = false;
                }
            }else{
                if(this.buyCount>1){
                    this.buyCount--;
                }else{
                    return;
                }
                if(this.buyCount<=this.goodsInfo.inventory){
                    this.isShow.isGt = false;
                }
            }
        },
        addToCart(){
            if(this.buyCount>this.goodsInfo.inventory){
                return;
            }else{
                this.$http.get('http://127.0.0.1/MyProject/data/cart/add.php?pid='+this.pid+'&buyCount='+this.buyCount,{withCredentials:true})
                .then((res)=>{
                    if(res.data.code == 200){
                        this.isAddSucc = true;
                    }else if(res.data.code == 300){
                        this.$router.push('/login');
                    }else if(res.data.code == 500){
                        console.log("添加失败")
                    }
                });
            }
        },
        isNext(bool){
            if(bool){
                this.simgLeft -= 350;
            }else{
                this.simgLeft += 350;
            }
        }
    }
}
</script>

<style scoped src="../assets/css/product-detail.css"></style>
