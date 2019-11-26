<template>
<div class="backBar">
  <div class="backLeft" @click="goBack"><i class="el-icon-arrow-left"> </i></div>
  <div class="backmid"><slot></slot></div>
  <div class="backRight">分享</div>
</div>
</template>

<script>
export default {
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    }

}
</script>

<style>
.backBar{
    display: flex;
    position: fixed;
    top: 0;
    background-color: transparent;
    z-index: 10;
    color: white;
    /* align-content: center; */
    text-align: center;
    width: 100%;
    height: 2.625rem;
    line-height: 2.625rem;
    font-weight: 500;
    font-size: 1rem;
    justify-content: space-between;

}
.el-icon-arrow-left{
    font-weight:800;
}
.backRight{
    font-size: 1.25rem;
    width: 20%;
}
.backLeft{
    width: 20%;
    font-size: 1.25rem;

}
.backmid{
    width: 60%;
}

</style>