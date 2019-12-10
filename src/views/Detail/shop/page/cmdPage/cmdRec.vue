<template>
<div>
    <titleBar>
        <titleBarItem>
            <div slot="TBIleft">猜你喜欢</div>
        </titleBarItem>
    </titleBar>
    <verMyBar :verMyData="cmdRec" ></verMyBar>


</div>
</template>

<script>
import titleBar from '@/components/common/titleBar/titleBar'
import titleBarItem from '@/components/common/titleBar/titleBarItem'
import verMyBar from '@/components/content/Bar/verMyBar'
// import verticalItem from '@/components/content/DetailItem/verticalItem.vue'
export default {
    data(){
        return {
            iswant:''
        }
    },
    components:{
        titleBar,titleBarItem,verMyBar
        // verticalItem,myBarItem
    },
    computed:{
        cmdRec(){
            return this.$store.state.shop1
        }
    },
    // activated(){
    //     iswant
    // }

}
</script>

<style>

</style>