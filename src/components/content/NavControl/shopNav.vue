<template>
<div class="sNav">
    <div v-for="(item,index) in sTitles" :key="index" class="sNav-item" 
    :class="{sActived:index===sMark}" @click="sNavClick(index)">
        <router-link :to="'/shop/' + item">{{item}}</router-link>
    </div>  
</div>
</template>

<script>
export default {
    data(){
        return{
            sMark:0,
        }
    },
    methods:{
        sNavClick(index){
            this.sMark = index ;
        }
    },
    befroeRouteLeave(to,from,next){   
        this.path = this.$route.path;
        next()
},
    props:{
        sTitles:{
            type:Array,
            default(){
                return[]
            }
        },
    }

}


</script>

<style>
.sNav {
    display: flex;
    position: sticky;
    top: 2.75rem;
    width: 100%;
    z-index: 10;
    background-color: white;
}
.sNav > .sNav-item{
    text-decoration: none;
    text-align: center;
    flex: 0.18;
    font-size: 0.95rem;
    white-space: nowrap;
    height: 1.5625rem;
    width: 1rem;
    line-height: 1.5625rem;  
     
}
.sNav > .sNav-item > a{
    text-decoration: none;
    color: black;   
}
.sNav > .sNav-item.sActived a{ 
    border-bottom: 0.157rem solid #fa7298;
    padding-bottom: -1px solid #fa7298;
    width: 100%;
    font-weight: 600;
}

</style>