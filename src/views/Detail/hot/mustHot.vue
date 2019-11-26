<template>
<div class="mustHot">
    <backBarItem >
        <div>入站必看</div>
    </backBarItem>
    <div class="mustBg"></div>
    <div class="mustBg1"></div>
    <hotItem></hotItem>
  </div>
</template>

<script>
import backBarItem from '@/components/common/backBar/backBarItem'
import hotItem from '@/components/content/DetailItem/hotItem'

export default {
    components:{
        backBarItem,hotItem
    }
}
</script>

<style>
.mustHot{
    background-color: #f3921f;
}
.mustBg{
    background-color: #f3921f;
    height: 2.625rem;
    width: 23.4375rem;
    position: fixed;
    top: 0;
    z-index: 9;
 
}
.mustBg1{
    height: 2.625rem;

}

</style>