<!--分类栏-->
<template>
  <div class="classifyItem">
     <slot name="classicon"></slot>
     <slot name="classtext"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.classifyItem{
    text-align: center;
    margin-top: 0.35rem;
}
p{
    font-size: 0.8rem;
    margin-top: 0.25rem;
    color: grey;
}
.classifyItem > i{
    font-size: 2rem;
}
.classifyItem > img{
    width: 2.5rem;
    height: 2.5rem;
}
.classifyClass{
    color: pink;

}

</style>