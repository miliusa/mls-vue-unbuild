<template>
  <div id="M-PC-search">    
      <div id="search-goods">   
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
      <product-list :list="productList"></product-list>
    </div>
     <div class="page-nav">
        <ul class="page-list">
            <li @click="pageToNum(-1)" class="prev" v-show="pno!=1"><a href="javascript:;">&lt;上一页</a></li>
            <li @click="pageToNum(key)" :class="{active:pno==key}" v-for="(key,index) in pageCount" :key="index"><a href="javascript:;">{{key}}</a></li>
            <li @click="pageToNum(-2)" class="next" v-show="pno!=pageCount"><a href="javascript:;">下一页&gt;</a></li>
        </ul>
    </div>
  </div>
</template>

<script>
import MeiliHeader from './header.vue';
import MeiliFooter from './footer.vue';
import ProductList from './product-list';
export default {
  components:{
        MeiliHeader,
        MeiliFooter,
        ProductList
  },
  data:function(){
    return {
      productList:[],
      kw:'',
      pageCount:1,
      pno:1,
      order:'',
      isPriceOrder:false
    }
  },
  mounted:function(){
    this.kw = this.$route.params.kw;
    this.loadData();
  },
  methods:{
    loadData(){
      this.$http.get('http://127.0.0.1/MyProject/data/products/order-list.php?pno='+this.pno+'&kw='+this.kw+'&orderKw='+this.order)
      .then((res)=>{
        this.productList = res.data.data;
        this.pageCount = res.data.pageCount;
        this.pno = res.data.pno;
      })
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
      this.$http.get('http://127.0.0.1/MyProject/data/products/order-list.php?pno='+this.pno+'&kw='+this.kw+'&orderKw='+this.order)
      .then((res)=>{
          this.productList = res.data.data;
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
      this.loadData();
    }
  }

}
</script>

<style scoped>
  #search-goods{
      min-width:1200px;
      margin:10px 100px;
  }
</style>
