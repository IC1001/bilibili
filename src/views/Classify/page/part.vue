<template>
<div>
    <titleBar>
        <titleBarItem>
            <div slot="TBIleft">全部分区</div>
        </titleBarItem>
        <titleBarItem>
            <span slot="TBIright" @click="ufPart" v-show="ufStatus">收起分区<i class="el-icon-arrow-up" ></i></span>
            <span slot="TBIright" @click="ufPart" v-show="!ufStatus">展开分区<i class="el-icon-arrow-down" ></i></span>
        </titleBarItem>
    </titleBar>
    <div v-show="ufStatus">
        <classifyBar>
            <classifyItem v-for="(item,index) in channelArr1" :key="index">
                <img :src="item.img" slot="classicon">
                <p slot="classtext">{{item.title}}</p>
            </classifyItem>
        </classifyBar>
        <classifyBar>
            <classifyItem v-for="(item,index) in channelArr2" :key="index">
                <img :src="item.img" slot="classicon">
                <p slot="classtext">{{item.title}}</p>
            </classifyItem>
        </classifyBar>
        <classifyBar>
            <classifyItem v-for="(item,index) in channelArr3" :key="index">
                <img :src="item.img" slot="classicon">
                <p slot="classtext">{{item.title}}</p>
            </classifyItem>
        </classifyBar>
        <classifyBar>
            <classifyItem v-for="(item,index) in channelArr4" :key="index">
                <img :src="item.img" slot="classicon">
                <p slot="classtext">{{item.title}}</p>
            </classifyItem>
        </classifyBar>   
    </div>     
</div>
</template>

<script>
// 标题栏
import titleBar from '@/components/common/titleBar/titleBar'
import titleBarItem from '@/components/common/titleBar/titleBarItem'
//分类
import classifyBar from '@/components/common/classifyBar/classifyBar'
import classifyItem from '@/components/common/classifyBar/classifyItem'
export default {
    components:{
        titleBar,titleBarItem,classifyBar,classifyItem
    },
    data(){
        return{
            ufStatus:true,
            channelArr1:[
                {img:require("@/assets/img/classify/images/classify_03.png"),path:'/TV',title:'番剧'},
                {img:require("@/assets/img/classify/images/classify_05.png"),path:'/TV',title:'国创'},
                {img:require("@/assets/img/classify/images/classify_07.png"),path:'/TV',title:'放映厅'},
                {img:require("@/assets/img/classify/images/classify_17.png"),path:'/TV',title:'直播'},
            ],
            channelArr2:[
                {img:require("@/assets/img/classify/images/classify_34.png"),path:'/TV',title:'科技'},
                {img:require("@/assets/img/classify/images/classify_24.png"),path:'/TV',title:'音乐'},
                {img:require("@/assets/img/classify/images/classify_26.png"),path:'/TV',title:'舞蹈'},
                {img:require("@/assets/img/classify/images/classify_28.png"),path:'/TV',title:'游戏'},
            ],
            channelArr3:[
                {img:require("@/assets/img/classify/images/classify_43.png"),path:'/TV',title:'鬼畜'},
                {img:require("@/assets/img/classify/images/classify_44.png"),path:'/TV',title:'时尚'},
                {img:require("@/assets/img/classify/images/classify_36.png"),path:'/TV',title:'生活'},
                {img:require("@/assets/img/classify/images/classify_38.png"),path:'/TV',title:'VLOG'},
            ],
            channelArr4:[
                {img:require("@/assets/img/classify/images/classify_18.png"),path:'/TV',title:'学习'},
                {img:require("@/assets/img/classify/images/classify_52.png"),path:'/TV',title:'电影'},
                {img:require("@/assets/img/classify/images/classify_53.png"),path:'/TV',title:'电视剧'},
                {img:require("@/assets/img/classify/images/classify_09.png"),path:'/TV',title:'纪录片'},
            ]

        }
    },
    methods:{
        ufPart(){
            this.ufStatus = ! this.ufStatus


        }    
    }

}
</script>

<style>

</style>