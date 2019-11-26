<template>
<div class="vertical">
    <div class="vtItem" v-for="(item,index) in verData" :key="index" @click="vtLink(index)">
        <img :src="item.cover" >
        <!-- <div> -->
            <div class="vtTitle">{{item.title}}</div>
            <div class="vtType">{{item.type}}</div>
        <!-- </div> -->
    </div>
</div>
</template>

<script>
export default {
    props:['verData'],
    methods:{
        vtLink(index){
            this.$router.push(this.verData[index].path + '/' + this.verData[index].av)
            this.$store.commit('useRecData',index)
            this.$store.commit('sendData',index)            
        }
    },

}
</script>

<style>
.vertical{

    /* text-align: center; */
    padding:1%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 24rem;
    
    /* overflow: hidden; */
}
.vertical > .vtItem{
    height: 9rem;
    width: 7rem;
    /* margin-bottom: 3.125rem; */
    /* background-color: white; */
    border-radius: 6%;
    /* border-bottom: 1px solid rgba(100, 100, 100, 1); */
}
.vertical > .vtItem > img{    
    width: 100%; 
    height: 100%;   
    border-radius: 6%;
}
.vtTitle{
    font-size: 0.825rem;
    text-align: left;
    margin:4px 0 4px 0;
}
.vtType{
    color: #708090	;
    font-size: 0.75rem;
    text-align: left;
}

</style>