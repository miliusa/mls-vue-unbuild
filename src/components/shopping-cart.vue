<template>
  <div id="M-PC-cart">
    <meili-nav @customEvent="rcvIsLogin"></meili-nav>  
    <div class="body-wrap">
      <div class="body-header clearfix">
        <div class="header-box clearfix">           
          <router-link to="/index" class="logo"></router-link>
          <div class="header-progress">
            <div class="header-progress-box">
              <div class="progress-at"></div>
              <i class="cart at">1<span>购物车</span></i>
              <i class="confirm">2<span>确认订单</span></i>
              <i class="go-pay">3<span>支付</span></i>
              <i class="complete">4<span>完成</span></i>
            </div>
          </div>
        </div>
      </div>
      <div class="cart-wrap">
        <div class="cart-page" id="cart-page" v-show="!isCartEmpty">
          <table class="cart-table">
            <thead>
              <tr>
                <th class="pro-check">
                  <input id="s-all" type="checkbox" @click="isCheckedAll();" :checked="isAll">
                  <label for="s-all">全选</label>
                </th>
                <th class="pro">商品</th>
                <th class="pro-info">商品信息</th>
                <th class="pro-price">单价(元)</th>
                <th class="pro-count">数量</th>
                <th class="pro-total-price">小计(元)</th>
                <th class="operate">操作</th>
              </tr>
            </thead>
            <tbody v-for="shopItem in cartList" :key="shopItem.store_id">
              <!--店铺信息-->
              <tr>
                <td colspan="7" class="cart-shop-group">
                  <input type="checkbox" id="s-shop-all" :checked="isAll">
                  <label for="s-shop-all">店铺：</label>
                  <a href="javascript:;">{{shopItem.sname}}</a>
                  <img src="../assets/img/header/shop_kefu_16x17.gif">
                  <a href="javascript:;">联系客服</a>
                </td>
              </tr>
              <!--商品信息-->
              <tr class="cart-goods-info" v-for="infoItem in shopItem.info" :key="infoItem.pid">
                <td class="td1"><input type="checkbox" :checked="isAll"></td>
                <td class="td2">
                  <a href="javascript:;" class="cart-goods-img">
                    <img :src="'static/'+infoItem.sm">
                  </a>
                  <router-link :to="'/detail/'+infoItem.pid" class="cart-goods-title">{{infoItem.title}}</router-link>
                </td>
                <td class="td3">
                  <p>颜色：黑色</p>
                  <p>尺码：27</p>
                </td>
                <td class="td4">
                  <p>{{infoItem.price}}</p>
                </td>
                <td class="td5">
                  <div class="cart-count">
                    <input type="text" :value="infoItem.count" readonly>
                    <span class="reduce" @click="modifyCount(infoItem.sid,infoItem.count,false)">-</span>
                    <span class="add" @click="modifyCount(infoItem.sid,infoItem.count,true)">+</span>
                  </div>
                </td>
                <td class="td6">
                  <p class="l-sum">{{(infoItem.price*infoItem.count).toFixed(2)}}</p>
                </td>
                <td class="td7">
                  <a href="javascript:;" @click="deletePro(infoItem.sid)">删除</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="cart-page" id="cart-empty-page" v-show="isCartEmpty">
          <div class="cart-empty">
            <div class="cart-empty-icon"></div>
            <h5 class="title" v-show="isUserLogin">您的购物车还是空的，赶快去挑选商品吧！</h5>
            <h5 class="title" v-show="!isUserLogin">您尚未登录，请登录后查看购物车！</h5>
            <ul class="suggest-list">
              <li v-show="!isUserLogin">去<router-link to="/login">登录</router-link></li>  
              <li>去看看大家都喜欢的<router-link to="/index">最热</router-link></li>
              <li>去看看正在折扣中的优品<router-link to="/index">首页</router-link></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="cart-paybar clearfix" v-show="!isCartEmpty">
        <a href="javascript:;" :class="isAll?'pay-red':'pay-disabled'" id="pay-btn">去付款</a> 
        <div class="select-total-price">¥ {{selectTotalPrice}}</div> 
        <div class="select-info"> 
          共有 
          <span class="select-total-count">{{selectTotalCount}}</span> 
          款商品，总计： 
        </div> 
        <div class="left-part">
          <input type="checkbox" id="s-all" @click="isCheckedAll" :checked="isAll"> 
          <label for="s-all">全选</label> 
          <a href="javascript:;" id="cart-remove-checked">删除</a> 
          <a href="javascript:;"  id="cart-remove-unused">清空失效商品</a>     
        </div>
      </div>
    </div>
    <div class="footer">
      <p>美丽说 © 2016 Meilishuo.com,All Rights Reserved.</p>
    </div>
  </div>
</template>

<script>
import MeiliNav from './nav'
export default {
  components:{
    MeiliNav
  },
  data:function(){
    return {
      cartList:[],
      buyCount:1,
      isUserLogin:false,
      isCartEmpty:true,
      isAll:false,
      selectTotalPrice:0,
      selectTotalCount:0
    }
  },
  beforeMount:function(){
    this.getCartList();
  },
  methods:{
    rcvIsLogin(msg){
      if(!msg){
        this.isCartEmpty = true;
        this.isUserLogin = false;
      }
    },
    getCartList(){
      this.$http.get('http://127.0.0.1/MyProject/data/cart/list.php',{withCredentials:true})
        .then((res)=>{
          if(res.data.code == 200){
            this.isUserLogin = true;
            if(res.data.data == 0){
              this.isCartEmpty = true;
            }else{
              this.isCartEmpty = false;
              this.cartList = res.data.data;
            }        
          }else{
            this.isUserLogin = false;
            this.isCartEmpty = true;
          }
        })
    },
    modifyCount(sid,itemCount,bool){
      this.buyCount = itemCount;
      if(bool){
          this.buyCount++;
      }else{
          if(this.buyCount>1){
              this.buyCount--;
          }else{
              return;
          }
      }
      this.$http.get('http://127.0.0.1/MyProject/data/cart/update_count.php?sid='+sid+'&count='+this.buyCount)
      .then((res)=>{
        if(res.data.code == 200){
          this.getCartList();
        }
      });
    },
    deletePro(sid){
      this.$http.get('http://127.0.0.1/MyProject/data/cart/del.php?sid='+sid)
      .then((res)=>{
        console.log(res.data);
        if(res.data.code == 200){
          this.getCartList();
        }
      });
    },
    isCheckedAll(){
      this.isAll = !this.isAll;      
      if(this.isAll){     
        var sum = 0.00;
        var amount = 0;
        $(".l-sum").each(function(){
          sum += parseFloat($(this).text());
          amount++;
        })
        this.selectTotalCount = amount;
        this.selectTotalPrice = sum.toFixed(2);
      }else{
        this.selectTotalCount = 0;
        this.selectTotalPrice = 0;
      }
    }
  }
}
</script>

<style scoped src="../assets/css/shopping-cart.css">

</style>
