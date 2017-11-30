<template>
<div class="index-container"> 
    <div class="resume-container">
        <div class="resume-wrap">
            <div class="catalog-info">
                <a href="javascript">
                    <p class="title">春季新品</p>   
                </a>
                <a class="imgWrap" href="javascript">
                    <img src="../assets/img/index/resumeImg/shangyi_285x285.jpg">
                </a>
            </div>
            <div class="catalog-choice">
                <ul>
                    <li><a href="javascript:;">短款外套</a></li>
                    <li><a href="javascript:;">针织衫</a></li>
                    <li><a href="javascript:;">丝绒美衣</a></li>
                    <li><a href="javascript:;">棒球外套</a></li>
                </ul>
            </div>
            <div class="catalog-choice">
                <ul>
                    <li><a href="javascript:;">卫衣</a></li>
                    <li><a href="javascript:;">毛衣套装</a></li>
                    <li><a href="javascript:;">牛仔外套</a></li>
                    <li><a href="javascript:;">针织开衫</a></li>
                </ul>
            </div>
        </div>
        <div class="resume-wrap">
            <div class="catalog-info">
                <a href="javascript">
                    <p class="title">春季新品</p>   
                </a>
                <a class="imgWrap" href="javascript">
                    <img src="../assets/img/index/resumeImg/shangyi_285x285.jpg" alt="">
                </a>
            </div>
            <div class="catalog-choice">
                <ul>
                    <li><a href="javascript:;">短款外套</a></li>
                    <li><a href="javascript:;">针织衫</a></li>
                    <li><a href="javascript:;">丝绒美衣</a></li>
                    <li><a href="javascript:;">棒球外套</a></li>
                </ul>
            </div>
            <div class="catalog-choice">
                <ul>
                    <li><a href="javascript:;">卫衣</a></li>
                    <li><a href="javascript:;">毛衣套装</a></li>
                    <li><a href="javascript:;">牛仔外套</a></li>
                    <li><a href="javascript:;">针织开衫</a></li>
                </ul>
            </div>
        </div>
        <div class="resume-wrap">
            <div class="catalog-info">
                <a href="javascript">
                    <p class="title">春季新品</p>   
                </a>
                <a class="imgWrap" href="javascript">
                    <img src="../assets/img/index/resumeImg/shangyi_285x285.jpg" alt="">
                </a>
            </div>
            <div class="catalog-choice">
                <ul>
                    <li><a href="javascript:;">短款外套</a></li>
                    <li><a href="javascript:;">针织衫</a></li>
                    <li><a href="javascript:;">丝绒美衣</a></li>
                    <li><a href="javascript:;">棒球外套</a></li>
                </ul>
            </div>
            <div class="catalog-choice">
                <ul>
                    <li><a href="javascript:;">卫衣</a></li>
                    <li><a href="javascript:;">毛衣套装</a></li>
                    <li><a href="javascript:;">牛仔外套</a></li>
                    <li><a href="javascript:;">针织开衫</a></li>
                </ul>
            </div>
        </div>
        <div class="resume-wrap">
            <div class="catalog-info">
                <a href="javascript">
                    <p class="title">春季新品</p>   
                </a>
                <a class="imgWrap" href="javascript">
                    <img src="../assets/img/index/resumeImg/shangyi_285x285.jpg" alt="">
                </a>
            </div>
            <div class="catalog-choice">
                <ul>
                    <li><a href="javascript:;">短款外套</a></li>
                    <li><a href="javascript:;">针织衫</a></li>
                    <li><a href="javascript:;">丝绒美衣</a></li>
                    <li><a href="javascript:;">棒球外套</a></li>
                </ul>
            </div>
            <div class="catalog-choice">
                <ul>
                    <li><a href="javascript:;">卫衣</a></li>
                    <li><a href="javascript:;">毛衣套装</a></li>
                    <li><a href="javascript:;">牛仔外套</a></li>
                    <li><a href="javascript:;">针织开衫</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="order-bar">
        <!-- 流行 热销 上新 价格 -->
        <div class="order-info">
            <a href="javascript:;" @click="orderBy(1)" class="on borderright right">流行</a>			
            <a href="javascript:;" @click="orderBy(2)" class="both">热销</a>			
            <a href="javascript:;" @click="orderBy(3)" class="both">上新</a>			
            <a href="javascript:;" class="price left" @mouseenter="isPriceOrder=true" @mouseleave="isPriceOrder=false">				
                <span class="price-con">价格</span>
                <span class="price-arrow"></span>				
                <ul class="price-desc" :style="{display:isPriceOrder?'block':'none'}">					
                    <li class="down" @click="orderBy(41)">
                        <a class="desc" href="javascript:;">价格从高到低</a>
                    </li>					
                    <li class="up" @click="orderBy(42)">
                        <a class="asc" href="javascript:;">价格从低到高</a>
                    </li>				
                </ul>
            </a>		
        </div>		
        <!-- 价格部分 -->	
        <div class="price-wrap">				
            <input class="min-price" type="text" placeholder="￥" value="">				
            <span>~</span>				
            <input class="max-price" type="text" placeholder="￥" value="">			
            <a class="sure" href="javascript:;">确认</a>		
        </div>	
    </div>
    <product-list :list="products"></product-list>
    <div class="page-nav">
        <ul class="page-list">
            <li @click="pageToNum(-1)" class="prev" v-show="pno!=1"><a href="javascript:;">&lt;上一页</a></li>
            <li @click="pageToNum(key)" :class="{active:pno==key}" v-for="(key,index) in pnoList" :key="index"><a href="javascript:;">{{key}}</a></li>
            <li @click="pageToNum(-2)" class="next" v-show="pno!=pageCount"><a href="javascript:;">下一页&gt;</a></li>
        </ul>
    </div>
</div>
</template>

<script>
import ProductList from './product-list';
export default {
    components:{
        ProductList
    },
    data:function(){
        return {
            action:'',
            products:[],
            order:'',
            pno:1,
            recordCount:0,
            pageCount:0,
            isPriceOrder:false
        }
    },
    computed:{
        pnoList:function(){
            var arr = [];
            if(this.pno-2>0){arr.push(this.pno-2)}
            if(this.pno-1>0){arr.push(this.pno-1)}
            arr.push(this.pno);
            if(this.pno+1<=this.pageCount){arr.push(this.pno+1)}
            if(this.pno+2<=this.pageCount){arr.push(this.pno+2)}
            return arr;
        }
    },
    beforeMount:function(){
        if(this.$route.params.action){
            this.action = this.$route.params.action;
            this.loadAction();
        }
    },
    updated:function(){       
        $("li."+this.action).addClass("on").siblings().removeClass("on");
    },
    watch:{
        '$route':'loadAction'
    },
    methods:{
        loadAction(){
            this.action = this.$route.params.action;
            this.$http.get('http://127.0.0.1/MyProject/data/products/order-list.php?familyKw='+this.action+"&pno="+this.pno+'&orderKw='+this.order)
            .then((res)=>{
                this.products = res.data.data;
                this.recordCount = res.data.recordCount;
                this.pageCount = res.data.pageCount;
            })
            $("li."+this.action).addClass("on").siblings().removeClass("on");
        },
        orderBy(i){
            if(i==1){
                this.order = 'recommended';
            }else if(i==2){
                this.order = 'topSale';
            }else if(i==3){
                this.order = 'newArrival';
            }else if(i==41){
                this.order = 'priceDesc';
            }else if(i==42){
                this.order = 'priceAsc';
            }else{
                return;
            }
            this.$http.get('http://127.0.0.1/MyProject/data/products/order-list.php?pno='+this.pno+'&familyKw='+this.action+'&orderKw='+this.order)
            .then((res)=>{
                this.products = res.data.data;
            })
        },
        pageToNum(i){
            if(i==-1){
                this.pno--;
            }else if(i==-2){
                this.pno++;
            }else{               
                this.pno = i;
            }
            this.loadAction();
        }
    }
}
</script>

<style></style>
