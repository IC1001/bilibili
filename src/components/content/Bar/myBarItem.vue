<template>
<div>
    
    <div class="myBar">
        <slot>
        <div v-for="(item,index) in myData" :key="index" class="myBarItem" @click="myBarClick(index)"> 
            <img :src="item.img" >
            <div>{{item.title}}</div>
        </div>
        </slot>  
    </div> 
    
</div>
</template>

<script>
export default {
    props:['myData'],
    methods:{
        myBarClick(index){
            const myIndex = (this.myData[index].av[7] + this.myData[index].av[8]) / 1 -1
            this.$router.push(this.myData[index].path+'/'+this.myData[index].av)
            this.$store.commit('sendData',myIndex)
             this.$store.commit('sendAnimeData',myIndex)
        }
    }
 
}
</script>

<style>
.myBar{
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    margin: 0.5rem;
}
.myBar::-webkit-scrollbar{
    display: none;
}
.myBarItem{
    font-size: 0.8rem;
}
.myBarItem > img{
    width: 7rem;
    height: 4.5rem;
    border-radius: 8%;
    padding: 0.2rem;
    /* transform: scale(0.9,1) */
}

</style>