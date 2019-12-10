<template>
<div>
    <!-- 视频信息栏 -->
    <upInfo  :upinfo="info"></upInfo>
    <recItem :rec="previews"></recItem>
</div>
</template>

<script>
import upInfo from '@/components/content/Block/upInfo'
import recItem from '@/components/content/Block/recItem'
export default {
    components:{
        upInfo,recItem
    },
    data(){
        return{
           playNum:0
       }
    },
    computed:{
        info(){
            return this.$store.state.detailData
        },
        previews(index){
            return this.$store.state.previews
        }
    }

}
</script>

<style>

</style>