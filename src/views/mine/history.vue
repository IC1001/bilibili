<template>
<div>
    <BackBarItem class="animeJPN" ><span slot="backLeft">历史记录</span></BackBarItem>
    <Kong v-if="hasHistory"></Kong>
    <recItem :rec="historyData" v-else></recItem>
    <!-- <Kong></Kong> -->
</div>
</template>

<script>
import BackBarItem from '@/components/common/backBar/backBarItem'
import recItem from '@/components/content/Block/recItem'
import Kong from '@/components/content/Block/kong.vue'
export default {
    components:{
        BackBarItem,Kong,recItem
    },
    computed:{
        historyData(){
            return this.$store.state.history
        },
        // sendDate(){
        //     return Date()
        // }
    },
    data(){
        return{
            hasHistory:true,
        }
    },
    activated(){
        if(this.historyData.length>0){
            this.hasHistory = false
        }
    }

    
}
</script>

<style>
.animeJPN > div{
    color: white;
    background-color: #fa7298;
}

</style>