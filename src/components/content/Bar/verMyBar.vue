<template>
<div>
    
    <div class="verMyBar">
        <slot>
        <div v-for="(item,index) in verMyData" :key="index" class="verMyBarItem" @click="cmdRecLink(index)">
            <img :src="item.cover" >
            <div class="verTitle">{{item.title}}</div>
            <div class="verPrice">{{item.price}}</div>
        </div>
        </slot>  
    </div> 
    
</div>
</template>

<script>
export default {
    props:['verMyData'],
    methods:{
        cmdRecLink(index){
            this.$router.push(this.verMyData[index].path )
            
        }
    }
 
}
</script>

<style>
.verMyBar{
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    margin: 0.5rem;
}
.verMyBar::-webkit-scrollbar{
    display: none;
}
.verMyBarItem{
    font-size: 0.5rem;
}
.verMyBarItem > img{
    width: 5rem;
    height: 5rem;
    border-radius: 8%;
    padding: 0.2rem;
    /* transform: scale(0.9,1) */
}
.verTitle{
    width: 5rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.verPrice{
    color: #fa7298;
    margin-top: 0.2rem;
}

</style>