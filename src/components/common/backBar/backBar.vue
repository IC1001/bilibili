<template>
  <div class="backBar">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.backBar{
    display: flex;
    position: fixed;
    top: 0;
}

</style>