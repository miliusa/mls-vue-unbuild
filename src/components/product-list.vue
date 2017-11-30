<template>
    <div class="goods-content clearfix">
        <div class="item" v-for="tmp in list" :key="tmp.pid">
            <router-link :to="'/detail/'+tmp.pid"><img :src="'static/'+tmp.md"/></router-link>
            <div class="item-info">
                <div class="part">
                    <div class="item-price">¥{{tmp.price}}</div>
                    <div class="item-collect"><em class="star"></em>{{tmp.favorite}}</div>
                </div>
                <div class="item-title">
                    <em class="choose-logo"></em>
                    {{tmp.title}}
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
export default {
    props:['list']
}
</script>

<style scoped>
    .goods-content .item{
        float:left;
        width: 224px;
        margin:0 20px 15px 0;
    }
    .item img{
        width:100%;
        height:340px;
    }
    .item-price{
        display: inline-block;
        font-size: 16px;
        color: #f36;
        margin-right: 2px;
        line-height: 30px;
    }
    .item-collect{
        float: right;
        line-height: 14px;
        font-size: 14px;
        margin-top: 6px;
        margin-left: 3px;
        color: #999;
    }
    em.star{
        display: inline-block;
        width: 13px;
        height: 13px;
        background: url('../assets/img/index/star_32x30.png') center no-repeat;
        background-size: 100%;
    }
    em.choose-logo{
        display:inline-block;
        width: 38px;
        height: 20px;
        background: url('../assets/img/index/choose_90x42.png') center no-repeat;
        background-size:100%;
        vertical-align: sub;
    }
    .item-title{
        font-size: 14px;
        height: 28px;
        line-height: 28px;
        color: #666;
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>


