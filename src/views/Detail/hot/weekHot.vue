<template>
<div class="weekHot">
    <backBarItem class="weekBg">
        <div>bilibili每周必看</div>
    </backBarItem>
    <div ></div>
    <div class="weekBg1"></div>
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
.weekHot{
    background-color: #fed442;
}
.weekBg{
    background-color: #fed442;
    height: 2.625rem;
    width: 23.4375rem;
    position: fixed;
    top: 0;
    z-index: 9;
 
}
.weekBg1{
    height: 2.625rem;

}



</style>