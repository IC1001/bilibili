<template>
<div>
    <!-- 视频信息栏 -->
    <upInfo  v-for="(item,index) in info" :key="index" :upinfo="item"></upInfo>
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
            return this.$store.state.info
        },
        previews(index){
            return this.$store.state.previews
        }
    }

}
</script>

<style>

</style>