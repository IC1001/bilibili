<template>
<div class="waterfall">
    <div class="wfItem" v-for="(item,index) in wfData" :key="index" @click="wfLink(index)">
        <img :src="item.cover" >
        <!-- <div> -->
            <div class="wfTitle">{{item.title}}</div>
            <div class="wfType">￥{{item.price}}</div>
        <!-- </div> -->

</div>

</div>
</template>

<script>
export default {
    props:['wfData'],
    methods:{
        wfLink(){

        }
    }

}
</script>

<style>
.waterfall{
    /* column-count: 2;
    column-gap: 10px; */
    background-color:rgb(246, 246, 246);
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: column; */
    /* height: 1000px;*/
    /* flex-flow:column wrap ;  */
    padding: 1rem;
    /* height: 500px; */
    
}
.wfItem{
    /* border:rgba(88, 88, 88, 0.4) solid 1px; */
    border-radius: 0.8rem;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    width: 100%;
    /* margin:1rem; */
    margin-bottom: 2rem;
    height: 100%;

    
}
.wfItem > img{
    width: 100%;
    height: 100%;
    border-radius: 0.8rem 0.8rem 0rem 0rem;
}
.wfTitle{
    font-weight: 600;
    font-size: .85rem;
    padding: .2rem;

}
.wfType{
    color: #fa7298;
    font-weight: 500;
    padding: .2rem;
}

</style>