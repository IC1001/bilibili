<template>
<div id="tb-bg">
    <slot></slot>
</div> 
</template>

<script>
export default {
    name:"TabBar"
}
</script>

<style>
#tb-bg{
    z-index: 11;
    background-color:white;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 2px solid rgba(200, 200, 200, 0.2);
    opacity: 0.97;
    width: 100%;
    height: 3.19rem;
  }


</style>