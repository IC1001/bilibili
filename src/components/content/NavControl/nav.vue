<template>
<div class="nav">
    <div v-for="(item,index) in titles" :key="index" class="nav-item" 
    :class="{actived:index===mark}" @click="navClick(index)">
        <router-link :to="'/home/' + item">{{item}}</router-link>
    </div>  
</div>
</template>

<script>
export default {
    data(){
        return{
            mark:1,
        }
    },
    methods:{
        navClick(index){
            this.mark = index ;
        }
    },
    befroeRouteLeave(to,from,next){   
        this.path = this.$route.path;
        next()
},
    props:{
        titles:{
            type:Array,
            default(){
                return[]
            }
        },
    }

}
</script>

<style>
.nav {
    display: flex;
    position: fixed;
    top: 2.75rem;
    width: 100%;
    border-bottom:0.5px solid rgba(140, 140,140, 0.4);
    padding-bottom:0.35rem;
    padding-top:0.3rem;  
    z-index: 10;
    background-color: white;  
    
}
.nav > .nav-item{
    text-decoration: none;
    width: 100%;
    text-align: center;
    flex: 1;
    font-size: 0.95rem;
    white-space: nowrap;
    height: 1.5625rem;
    line-height: 1.5625rem;   
}
.nav > .nav-item > a{
    text-decoration: none;
    color: black;   
}
.nav > .nav-item.actived a{ 
    border-bottom: 0.157rem solid pink;
    width: 100%;
    color:pink;
    font-weight: 600;
    padding-bottom:0.24rem;
}

</style>