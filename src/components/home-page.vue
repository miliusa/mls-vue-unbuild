<template>
<div class="index-container">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#myCarousel" v-for="(tmp,index) in carouselList" :key="tmp.cid" :data-slide-to="index" :class="{'active':index==nowIndex}"></li>
        </ol>
        <div class="carousel-inner">  
            <div v-for="(tmp,index) in carouselList" :key="tmp.cid" :class="index==nowIndex?'item active':'item'">
                <img :src="'static/'+tmp.imgUrl"/>
            </div>
        </div>
        <!-- Carousel nav -->
        <a class="carousel-control left" href="#myCarousel" data-slide="prev"></a>
        <a class="carousel-control right" href="#myCarousel" data-slide="next"></a>
    </div>
    <div id="goods" class="section">
        <div class="goods-nav">
            <a href="javascript:;" :class="activeIndex==1?'nav-new active':'nav-new'" @click="loadData(1)">今日新品</a>
            <a href="javascript:;" :class="activeIndex==2?'nav-sales active':'nav-sales'" @click="loadData(2)">一周热销</a>
        </div>
        <product-list :list="loadList"></product-list>   
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
            carouselList:[],
            loadList:[],
            newArrivalItems:[],
            topSaleItems:[],
            activeIndex:1,
            nowIndex:0
        }
    },
    beforeMount:function(){
        this.$http.get('http://127.0.0.1/MyProject/data/products/index.php')    
        .then((res)=>{
            this.carouselList = res.data.carouselItems;
            this.newArrivalItems = res.data.newArrivalItems;
            this.topSaleItems = res.data.topSaleItems;
            this.loadList = this.newArrivalItems;
        })
        $("li.index").addClass("on").siblings().removeClass("on");
    },
    methods:{
        loadData(kw){
            this.activeIndex = kw;
            if(kw == 1){
                this.loadList = this.newArrivalItems;
            }else if(kw == 2){
                this.loadList = this.topSaleItems;
            }
        }
    }
}
</script>

<style></style>
