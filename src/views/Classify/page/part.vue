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
    <el-collapse-transition>
    <div v-show="ufStatus">
        <classifyBar>
            <classifyItem v-for="(item,index) in channelArr1" :key="index" @click.native="toPartPage(index)">
                <img :src="item.img" slot="classicon">
                <p slot="classtext">{{item.title}}</p>
            </classifyItem>
        </classifyBar>
        <classifyBar>
            <classifyItem v-for="(item,index) in channelArr2" :key="index" @click.native="toPartPage(index+4)">
                <img :src="item.img" slot="classicon">
                <p slot="classtext">{{item.title}}</p>
            </classifyItem>
        </classifyBar>
        <classifyBar>
            <classifyItem v-for="(item,index) in channelArr3" :key="index" @click.native="toPartPage(index+8)">
                <img :src="item.img" slot="classicon">
                <p slot="classtext">{{item.title}}</p>
            </classifyItem>
        </classifyBar>
        <classifyBar>
            <classifyItem v-for="(item,index) in channelArr4" :key="index" @click.native="toPartPage(index+12)">
                <img :src="item.img" slot="classicon">
                <p slot="classtext">{{item.title}}</p>
            </classifyItem>
        </classifyBar>   
    </div>
    </el-collapse-transition>     
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
                {img:require("@/assets/img/classify/images/classify_03.png"),path:'/animeJPN',title:'番剧'},
                {img:require("@/assets/img/classify/images/classify_05.png"),path:'/animeCN',title:'国创'},
                {img:require("@/assets/img/classify/images/classify_07.png"),path:'/movie/推荐',title:'放映厅'},
                {img:require("@/assets/img/classify/images/classify_17.png"),path:'/partPage/户外',title:'户外'},
            ],
            channelArr2:[
                {img:require("@/assets/img/classify/images/classify_34.png"),path:'/partPage/科技',title:'科技'},
                {img:require("@/assets/img/classify/images/classify_24.png"),path:'/partPage/音乐',title:'音乐'},
                {img:require("@/assets/img/classify/images/classify_26.png"),path:'/partPage/舞蹈',title:'舞蹈'},
                {img:require("@/assets/img/classify/images/classify_28.png"),path:'/partPage/游戏',title:'游戏'},
            ],
            channelArr3:[
                {img:require("@/assets/img/classify/images/classify_43.png"),path:'/partPage/鬼畜',title:'鬼畜'},
                {img:require("@/assets/img/classify/images/classify_44.png"),path:'/partPage/时尚',title:'时尚'},
                {img:require("@/assets/img/classify/images/classify_36.png"),path:'/partPage/生活',title:'生活'},
                {img:require("@/assets/img/classify/images/classify_38.png"),path:'/partPage/VLOG',title:'VLOG'},
            ],
            channelArr4:[
                {img:require("@/assets/img/classify/images/classify_18.png"),path:'/partPage/学习',title:'学习'},
                {img:require("@/assets/img/classify/images/classify_52.png"),path:'/movie/电影',title:'电影'},
                {img:require("@/assets/img/classify/images/classify_53.png"),path:'/movie/电视剧',title:'电视剧'},
                {img:require("@/assets/img/classify/images/classify_09.png"),path:'/movie/纪录片',title:'纪录片'},
            ]

        }
    },
    methods:{
        ufPart(){
            this.ufStatus = ! this.ufStatus


        },
        toPartPage(index){
            const channelArr = this.channelArr1.concat(this.channelArr2).concat(this.channelArr3).concat(this.channelArr4)
            this.$router.push(channelArr[index].path)
        }    
    }

}
</script>

<style>

</style>