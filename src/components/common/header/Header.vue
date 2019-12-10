<template>
<div>
    <div class="header">
        <div class="left" @click="openMine">
            <img src="@/assets/img/images/haha.png">
            <img src="@/assets/img/images/iconfont/admin.png">
        </div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div> 
    </div>
    <div class="headerBottom"></div>
</div>
</template>

<script>
export default {
    name:"Header",
    methods:{
        openMine(){
            this.$store.commit('switchMine')
        }
    }
}
</script>

<style>
.header{
    background-color: #fa7298;
    height: 2.75rem;
    width: 100%;
    display: flex;
    z-index: 10;
    position: fixed;
    top: 0;

}
.headerBottom{
    height: 3rem;
}
.header > .left > img{
    height: 2rem;
    /* width: 2rem ; */
    margin-top: 0.4rem;

}
.header > .right > img{
    height: 1.4rem;
    width: 1.4rem;

    /* left: 0;
    right: 0; */
    /* top: 50%;
    left: 50%;
    margin:-0.9rem 0 0 -0.9rem;
    position: absolute; */
    /* float: right; */
    margin:0.8rem 0 0 0rem;
}
.header > .left{
    width: 20%;
    justify-content: space-between;
}
.header > .center{
    width:60% ;
    /* height: 2.75rem; */
    position: relative;
    color: white;
    font-weight: 700px;
    text-align: center;
    font-size: 1.125rem;
    line-height: 2.75rem;
}
.center > i{
    height: 1rem;
    line-height: 1rem;
    width: auto;
    position: absolute;
    top:1rem;
    left: 0.725rem;
    opacity: 0.4;
}
.center > input{
    border-radius: 18px;
    background-color: #e5678c;
    border: 0px;
    width: 96%;
    height: 50%;
    padding-top: 0.223rem;    
    font-size: 0.85rem;
}
.center > input::placeholder{
    color: #e9a8bc;
    padding-left: 2.1875rem;
}
.header > .right{
    width: 20%;
    position: relative;
    display: flex;
    justify-content: space-around;
}
</style>