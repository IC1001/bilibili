<template>
<div>
    <BackBarItem class="animeJPN"><span slot="backLeft">离线缓存</span></BackBarItem>
    <Kong></Kong>
</div>
</template>

<script>
import BackBarItem from '@/components/common/backBar/backBarItem'
import Kong from '@/components/content/Block/kong.vue'
export default {
    components:{
        BackBarItem,Kong
    },
}
</script>

<style>
.animeJPN > div{
    color: white;
    background-color: #fa7298;
}

</style>