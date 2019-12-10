<template>
<div class="kongClass">
    <img src="@/assets/img/images/iconfont/kong.png" alt="">
    <div><slot>暂无信息</slot></div>
</div> 
</template>

<script>
export default {

}
</script>

<style>
.kongClass{
    text-align: center;
}
.kongClass > div{
    color:grey;
}

</style>