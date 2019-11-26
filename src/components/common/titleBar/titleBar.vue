<template>
  <div class="titleBar">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.titleBar{
    display: flex;
    justify-content: space-between;
    border-top: 1px solid rgba(120, 120, 120, 0.2);
    margin-top: 0.625rem;
    padding: 0.3125rem;

}

</style>