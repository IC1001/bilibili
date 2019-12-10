<template>
<div class="rowItem">
    <div class="rItem" v-for="(item,index) in rowData" :key="index">
        <img :src="item.img" >
        <div class="rTitle">{{item.title}}</div>
    </div>
</div>
</template>

<script>
export default {
    props:['rowData']

}
</script>

<style>
.rowItem{
    background-image: linear-gradient(white,#F5F5F5);
    height: 100%;
    text-align: center;
    padding:1%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

}
.rItem{
    height: 84%;
    width: 94%;
    margin: 0.375rem;
    background-color: white;
    border-radius: 4%;
    box-shadow: 0px 0px 0.2rem 0.1rem rgba(0, 0, 0, 0.1);
}
.rItem > img{
    width: 100%; 
    height: 100%;   
    border-top-left-radius: 5%;
    border-top-right-radius: 5%;
}
.rTitle{
    font-size: 0.9rem;
    font-weight: 600;
    text-align: left;
    margin:0.125rem 0.625rem 0.6125rem 0.325rem;
    /* 多出变省略号   */
    /* overflow:hidden; 
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis; */

}

</style>