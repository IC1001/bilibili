<template>
<div class="cr">
    <div class="crItem" v-for="(item,index) in crData" :key="index" @click="crLink(index)">
        <img :src="item.cover" v-if="item.cover"><img :src="item.img" v-else>
        <div>
            <div class="crTitle">{{item.title}}</div>
            <div class="crIP">{{item.IP}}</div>
            <div class="crInfo">
                {{item.price}}
            </div>
        </div>
    </div>    
</div>
</template>

<script>
export default {
    props:['crData'],
    methods:{
        crLink(index){
            this.$router.push(this.crData[index].path)
            // console.log(this.wfData[index]);
        }
    }
}
</script>

<style>
.crItem{
    display: flex;
    padding:0.625rem 0.625rem 0.8rem 0.625rem;
    background-color: white;
    height: 10rem;

    border-radius: 0.7rem;
    font-weight: 600;
    position: relative;
}
.crItem > img{
     width: 44%;
     height: 100%;
     border-radius: 0.7rem;
}
.crTitle{
    padding:3px 10px 3px 10px;
    overflow:hidden; 
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
        line-height: 1.2rem;
}
.crIP{
    padding:9px 10px 3px 10px;
    font-weight: normal;
    font-size: 0.8rem;
    color: grey;

}
.crInfo{
    padding-left: 0.525rem;
    color: #fa7298;
    font-size: 1rem;
    bottom: 1rem;
    position: absolute;
}
.crInfo::first-letter{
    font-size: 0.7rem;
}
</style>