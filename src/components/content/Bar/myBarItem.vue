<template>
<div>
    
    <div class="myBar">
        <slot>
        <div v-for="(item,index) in myData" :key="index" class="myBarItem">
            <img :src="item.img" >
            <div>{{item.title}}</div>
        </div>
        </slot>  
    </div> 
    
</div>
</template>

<script>
export default {
    props:['myData']
 
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
}

</style>