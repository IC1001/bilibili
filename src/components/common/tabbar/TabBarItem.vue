<template>
<div class="itemClass" @click="itemClick">
  <!-- <slot name="item-img"></slot>
  <slot name="item-text"></slot> -->
  <div :class="{active:isActive}"><slot></slot></div>
 
</div>
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
        path:String
  },
  data(){
    return{
        
    }
  },
  computed: {
    isActive(){
        return !this.$route.path.indexOf(this.path)
        // return false
    }
  },
 
  methods:{
    itemClick(){
      if(this.$route.path.indexOf(this.path) == -1){
        this.$router.push(this.path);
      }else{
        console.log('..');
       }
      }
  }

}
</script>

<style>
.itemClass{
  flex:1;
  text-align: center;
  height: 3.06rem;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;  
}
.itemClass :hover {
   opacity: 0.8;
   cursor: pointer;
}

.itemClass > div >i{
  margin:auto;
  font-size: 1.5rem;
  /* height: 1.625rem;
  width: 1.625rem; */
  margin: 0.1875rem;
}
.itemClass > a{
  text-decoration: none;
  color: black;
  
 
}


.active{
  color:#fa7298;
  }


</style>