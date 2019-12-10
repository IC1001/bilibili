<template>
  <div>
      <span class="slideBack" @click="slideBack"><i class="el-icon-back"></i></span>
      <img src="@/assets/img/slide/slidepage.jpg" alt="" class="imgg">
      <Kong>这是假的广告页</Kong>
  </div>
</template>

<script>
import Kong from '@/components/content/Block/kong'
export default {
    methods:{
        slideBack(){
            this.$router.back()
        }
    },
    components:{
        Kong
    }

}
</script>

<style>
.slideBack > i{
    position: fixed;
    color: white;
    font-size: 1.25rem;
    background-color: rgba(100,100,100,0.2);
    border-radius: 20%;
}
.imgg{
    margin: 0 0 0 0;
    width: 100%;
    height: 30rem;
}

</style>