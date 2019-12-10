<template>
<transition name="OL">
<div class="OLbg">   
    <div  @click="OLtips"><SlideOL :imgArr="imgArr"></SlideOL></div>
        <classifyBar id="OLClassBar">
            <classifyItem >
                <img src="@/assets/img/OLshow/OLlol.png" slot="classicon" @click="OLtips">
                <p slot="classtext">英雄联盟</p>
            </classifyItem>
            <classifyItem>
                <img src="@/assets/img/OLshow/OLlol2.png" slot="classicon" @click="OLtips">
                <p slot="classtext">lol云顶之奕</p>
            </classifyItem>
            <classifyItem>
                <img src="@/assets/img/OLshow/OLgame1.png" slot="classicon" @click="OLtips">
                <p slot="classtext">怪物猎人</p>
            </classifyItem>
            <classifyItem>
                <img src="@/assets/img/OLshow/OLgame2.png" slot="classicon" @click="OLtips">
                <p slot="classtext">使命召唤</p>
            </classifyItem>
             <classifyItem>
                <img src="@/assets/img/OLshow/OLgame3.png" slot="classicon" @click="OLtips">
                <p slot="classtext">第五人格</p>
            </classifyItem>
            </classifyBar> 
        <classifyBar id="OLClassBar">
            <classifyItem>
                <img src="@/assets/img/OLshow/OLwzry.png" slot="classicon" @click="OLtips">
                <p slot="classtext">王者荣耀</p>
            </classifyItem>
            <classifyItem>
                <img src="@/assets/img/OLshow/OLsingle.png" slot="classicon" @click="OLtips">
                <p slot="classtext">单机</p>
            </classifyItem>
            <classifyItem>
                <img src="@/assets/img/OLshow/OLvioce.png" slot="classicon" @click="OLtips">
                <p slot="classtext">电台</p>
            </classifyItem>
            <classifyItem>
                <img src="@/assets/img/OLshow/OLhappy.png" slot="classicon" @click="OLtips">
                <p slot="classtext">娱乐</p>
            </classifyItem>
            <classifyItem>
                <img src="@/assets/img/OLshow/OLall.png" slot="classicon" @click="OLtips">
                <p slot="classtext">全部</p>
            </classifyItem>
        </classifyBar>
    <titleBar>
        <titleBarItem>
            <div slot="TBIleft">推荐直播</div>
        </titleBarItem>
        <titleBarItem>
            <span slot="TBIright"  @click="OLtips">换一换<i class="el-icon-refresh" ></i></span>
        </titleBarItem>
    </titleBar>
    <div class="OLtips"><i class="el-icon-loading"></i>暂无直播</div>
    <div v-show="isAlert" class="alertShade"> 
    暂无直播</div>
</div>
</transition>
</template>

<script>
// 轮播图
import SlideOL from '@/components/content/SlideShow/SlideOL'
// 分类栏
import classifyBar from '@/components/common/classifyBar/classifyBar'
import classifyItem from '@/components/common/classifyBar/classifyItem'
// 标题栏
import titleBar from '@/components/common/titleBar/titleBar'
import titleBarItem from '@/components/common/titleBar/titleBarItem'

export default {
    name:'OLshow',
    components:{
        SlideOL,classifyBar,classifyItem,titleBar,titleBarItem
    },

        computed:{
        imgArr(){
            return this.$store.state.OLimg
        }
    },
    data(){
        return{
      //       imgArr:[
      //   require("@/assets/img/slide1.jpg"),
      //   require("@/assets/img/slide2.jpg"),
      //   require("@/assets/img/slide3.jpg"),
      // ],
         recTop:0,
         isAlert:false
        }
    },
    methods:{
      OLtips(){
        this.isAlert = true
        setTimeout(()=>{
          this.isAlert = false
        },1500)
      }
    },
  activated() {
    document.documentElement.scrollTop = this.recTop;
    
  },
  beforeRouteLeave(to,from,next){
      this.recTop = document.documentElement.scrollTop ;
      next();
  },

}
</script>

<style>
.OLbg{
  background-color: white;
}

.OLtitlebar > i{
  font-size: 1rem;

}
.OLtips{
  text-align: center;
  position: relative;
  margin-bottom: 10rem;
  /* top: 50px; */
}

.alertShade{
  position: fixed;
  line-height: 120px;
  top: 45%;
  margin:auto;
  text-align: center;
  left: 0;
  right: 0;  
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 15%;
  color: white;
  height: 120px;
  width: 50%;
  z-index: 998;
}
/* .alert {
  position: fixed;
  z-index: 999;

  width: 100%;
  height: 100%;
} */
.OL-enter-active,.OL-leave-active{
    transition: all 0.5s ease; 
}

.OL-leave-to{
    transform: translateX(-375px);
}
.OL-enter{
    transform: translateX(-100%);
}
</style>