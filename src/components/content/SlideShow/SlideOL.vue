<template>
  <!-- ElementUI轮播图 -->
  <div class="ppt">
    <el-carousel height="14.5rem" :interval="2000" >
      <el-carousel-item v-for="(item,index) in imgArr" :key="index">
      <img :src="item.img" class="elimg">
      </el-carousel-item>
    </el-carousel>
  </div>
  
</template>

<script>
export default {
    props:['imgArr'],
}
</script>

<style>
.ppt{
  padding:2.5% 2.5% 0 2.5%;
  text-align: center;
  position: relative;
  /* margin-top: 5.25rem; */
}

.ppt .el-carousel  .el-carousel__indicators{
  width: 100%;
}

.ppt .el-carousel__button{
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 100%;
  background-color: white;
  right: 0;
}

</style>