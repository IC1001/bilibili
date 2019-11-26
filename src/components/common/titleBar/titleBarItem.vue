<template>
<div class="titleBarItem">
    <div class="TBIleft"> <slot name="TBIleft"></slot></div>
    <div class="TBIright"> <slot name="TBIright"></slot></div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.titleBarItem{
    font-size: 1rem;

}
.titleBarItem  {
    padding: 0.375rem 0.25rem 0 0.25rem;

}
.TBIleft{
    font-size: 1rem;

}
.TBIright{
    color: rgba(100, 100, 100, 0.7);
    font-size: 0.625rem;
   

}
.TBIright > span > i {
    font-size: 0.825rem;
}

</style>