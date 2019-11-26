<template>
<div id="app">
    <keep-alive><router-view></router-view></keep-alive>    
</div>
</template>
<script>
export default {
    name:'App',
    components:{
       
    },
    data(){
        return{
      }
    },
}
</script>
<style>
@import "./assets/css/base.css";
#app{
    margin-top: 3rem;
    margin-bottom: 3.3rem;
}
</style>
