<template>
<div>
    <div class="recChannel">推荐频道</div>
    <titleBar class="xx">
        <titleBarItem class="xx">
            <div slot="TBIleft" class="xx">搞笑</div>
        </titleBarItem>
        <titleBarItem>
            <span slot="TBIright" >查看更多<i class="el-icon-arrow-right" ></i></span>
        </titleBarItem>
    </titleBar> 
    <DetailItem :Data="video" ></DetailItem>
    <titleBar >
        <titleBarItem>
            <div slot="TBIleft">英雄联盟</div>
        </titleBarItem>
        <titleBarItem>
            <span slot="TBIright" >查看更多<i class="el-icon-arrow-right" ></i></span>
        </titleBarItem>
    </titleBar> 
    <DetailItem :Data="video" ></DetailItem>
    <titleBar >
        <titleBarItem>
            <div slot="TBIleft">互动视频</div>
        </titleBarItem>
        <titleBarItem>
            <span slot="TBIright" >查看更多<i class="el-icon-arrow-right" ></i></span>
        </titleBarItem>
    </titleBar> 
    <DetailItem :Data="video" ></DetailItem>
    <titleBar >
        <titleBarItem>
            <div slot="TBIleft">鬼畜</div>
        </titleBarItem>
        <titleBarItem>
            <span slot="TBIright" >查看更多<i class="el-icon-arrow-right" ></i></span>
        </titleBarItem>
    </titleBar> 
    <DetailItem :Data="video" ></DetailItem>
    <titleBar >
        <titleBarItem>
            <div slot="TBIleft">喵星人</div>
        </titleBarItem>
        <titleBarItem>
            <span slot="TBIright" >查看更多<i class="el-icon-arrow-right" ></i></span>
        </titleBarItem>
    </titleBar> 
    <DetailItem :Data="video" ></DetailItem>
    <titleBar >
        <titleBarItem>
            <div slot="TBIleft">数据可视化</div>
        </titleBarItem>
        <titleBarItem>
            <span slot="TBIright" >查看更多<i class="el-icon-arrow-right" ></i></span>
        </titleBarItem>
    </titleBar> 
    <DetailItem :Data="video" ></DetailItem>               
</div>
</template>

<script>
import titleBar from '@/components/common/titleBar/titleBar'
import titleBarItem from '@/components/common/titleBar/titleBarItem'
import DetailItem from '@/components/content/DetailItem/detailItem'
export default {
    components:{
        titleBar,titleBarItem,DetailItem
    },
    computed:{
        video(){
            //返回前4个数据
            return this.$store.state.previews.slice(0,2)
        }
    }

}
</script>

<style>
.xx{
    border: 0;
}
.recChannel{
    padding: 0.6rem;
    font-size: 0.95rem;
    color: rgba(0, 0, 0,0.7);
    margin-bottom: -1rem;
}

</style>