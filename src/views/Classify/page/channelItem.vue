<template>
  <div>
        <classifyBar>
            <classifyItem >
                <img src="@/assets/img/classify/channel_03.png" slot="classicon">
                <p slot="classtext">全部频道</p>
            </classifyItem>
            <classifyItem >
                <img src="@/assets/img/classify/channel_05.png" slot="classicon">
                <p slot="classtext">英雄联盟</p>
            </classifyItem>
            <classifyItem >
                <img src="@/assets/img/classify/channel_07.png" slot="classicon">
                <p slot="classtext">互动视频</p>
            </classifyItem>
            <classifyItem >
                <img src="@/assets/img/classify/channel_09.png" slot="classicon">
                <p slot="classtext">鬼畜</p>
            </classifyItem>
            <classifyItem >
                <img src="@/assets/img/classify/channel_11.png" slot="classicon">
                <p slot="classtext">搞笑</p>
            </classifyItem>
        </classifyBar>
        <classifyBar id="adjust">
            <classifyItem >
                <img src="@/assets/img/classify/channel_18.png" slot="classicon">
                <p slot="classtext">新宝岛</p>
            </classifyItem>
            <classifyItem >
                <img src="@/assets/img/classify/channel_19.png" slot="classicon">
                <p slot="classtext">数据可视化</p>
            </classifyItem>
            <classifyItem >
                <img src="@/assets/img/classify/channel_20.png" slot="classicon">
                <p slot="classtext">手书</p>
            </classifyItem>
            <classifyItem >
                <img src="@/assets/img/classify/channel_21.png" slot="classicon">
                <p slot="classtext">喵星人</p>
            </classifyItem>
            <classifyItem >
                <img src="@/assets/img/classify/channel_22.png" slot="classicon">
                <p slot="classtext">定格动画</p>
            </classifyItem>
        </classifyBar>       
  </div>
</template>

<script>
import classifyBar from '@/components/common/classifyBar/classifyBar'
import classifyItem from '@/components/common/classifyBar/classifyItem'
export default {
    components:{
        classifyBar,classifyItem
    }

}
</script>

<style>
#adjust{
    margin-top: 1rem;
}
#adjust > div >img{
    margin-left: 0.24rem;
}

</style>