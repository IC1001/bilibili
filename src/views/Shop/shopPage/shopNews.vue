<template>
<div>
    <Kong></Kong>
    <div class="zxcv"></div>
</div>
</template>

<script>
//商品展示
import Kong from '@/components/content/Block/kong.vue'
export default {
    components:{
        Kong
    },
    computed:{
        NewsData(){
            return this.$store.state.shop1
        }
    }

}
</script>

<style>
.zxcv{
    height: 10rem;
}

</style>