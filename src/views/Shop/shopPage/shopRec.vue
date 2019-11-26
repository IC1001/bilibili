<template>
<div>
    <waterfall :wfData="shopRecData">

    </waterfall>
</div>
</template>

<script>
//商品展示
import waterfall from '@/components/content/DetailItem/waterfall.vue'
export default {
    components:{
        waterfall
    },
    computed:{
        shopRecData(){
            return this.$store.state.shop1
        }
    }

}
</script>

<style>

</style>