<template>
<div class="waterfall">
    <ul>
    <li class="wfItem" v-for="(item,index) in wfData" :key="index" @click="wfLink(index)">
        <img :src="item.cover" >
        <!-- <div> -->
            <div class="wfTitle">{{item.title}}</div>
            <div class="wfType">{{item.price}}</div>
        <!-- </div> -->

    </li>
    </ul>
</div>
</template>

<script>
export default {
    props:['wfData'],
    methods:{
        wfLink(index){
            this.$router.push(this.wfData[index].path)
            // console.log(this.wfData[index]);
        }
    }

}
</script>

<style>
.waterfall{
    column-count: 2;
    column-gap: 0.6rem;
    /* background-color:rgb(246, 246, 246); */
    background-image: linear-gradient(white,#F5F5F5);
    /* white-space: nowrap; */

    /* display: flex;
    flex-wrap: wrap;
    flex-direction: column; */
    /* height: 1000px;*/
    /* flex-flow:column wrap ;  */
    padding: 0.6rem;
    /* height: 1000px; */
   

    
}
.wfItem{
    list-style: none;
    /* border:rgba(88, 88, 88, 0.4) solid 1px; */
    border-radius: 0.2rem;
    /* 卡片阴影效果 */
    box-shadow: 0px 0px 0.2rem 0.1rem rgba(0, 0, 0, 0.1);
    background-color: #fff;
    /* border-bottom: 0.5rem transparent solid; */
    margin-bottom:0.5rem;
    /* margin:0rem 0 0.75rem 0rem; */

    /* width: 11rem; */
    /* float: left; */

    /* white-space: nowrap; */

    
}
.wfItem > img{
    width: 100%;
    height: 100%;
    border-radius: 0.2rem 0.2rem 0rem 0rem;
}
.wfTitle{
    font-weight: 600;
    font-size: .85rem;
    padding: .2rem;
    line-height: 1rem;
    

}
.wfType{
    color: #fa7298;
    font-weight: 500;
    padding: .2rem;
    
}
.wfType::first-letter{
    font-size: 0.8rem;
}

</style>