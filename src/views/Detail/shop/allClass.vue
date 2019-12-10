<template>
<transition name="pageZoom">
<div>
    <BackBarItem id="allClass">
        <div>全部分类</div>
    </BackBarItem>
    <div class="sideBar" >
        <div class="sideItem" v-for="(item,index) in sideTitle" :key="index" 
        :class="{sideActived:index==sidePosi}" @click="skip(index)" >
            <span>{{item}}</span>
        </div>
        <!-- <div class="sideItem"><span>模型</span></div>
        <div class="sideItem"><span>周边</span></div>
        <div class="sideItem"><span>票务</span></div>
        <div class="sideItem"><span>IP</span></div> -->
    </div>
    <classBlock >
        <div slot="x1" @click="toShop1">
            <img src="@/assets/img/shop/commodity/shop1/7.jpg" alt="">
            <div>比例手办</div>
        </div>
        <div slot="x2" @click="toShop1">
            <img src="@/assets/img/shop/commodity/shop1/5.jpg" alt="">
            <div>Q版手办</div>
        </div>
        <div slot="x3" @click="toShop1">
            <img src="@/assets/img/shop/commodity/shop1/16.jpg" alt="">
            <div>可动手办</div>
        </div>
    </classBlock>
    <classBlock>
        <div slot="title">模型</div>
        <div slot="x1"  @click="toShop4">
            <img src="@/assets/img/shop/commodity/shop4/9.jpg" alt="">
            <div>高达拼装</div>
        </div>
        <div slot="x2" @click="toShop4">
            <img src="@/assets/img/shop/commodity/shop4/4.jpg" alt="">
            <div>Q版高达</div>
        </div>
       <div slot="x3" @click="toShop4">
            <img src="@/assets/img/shop/commodity/shop4/5.jpg" alt="">
            <div>其他拼装</div>
        </div>
    </classBlock>
    <classBlock>
        <div slot="title">周边</div>
        <div slot="x1" @click="toShop2">
            <img src="@/assets/img/shop/commodity/shop2/15.jpg" alt="">
            <div>家居生活</div>
        </div>
        <div slot="x2" @click="toShop2">
            <img src="@/assets/img/shop/commodity/shop2/20.jpg" alt="">
            <div>电子周边</div>
        </div>
       <div slot="x3" @click="toShop2">
            <img src="@/assets/img/shop/commodity/shop2/21.jpg" alt="">
            <div>箱包服饰</div>
        </div>
    </classBlock>
        
    <classBlock>
        <div slot="title">IP</div>
        <!-- 1 -->
        <div slot="x1" @click="toShop2">
            <img src="@/assets/img/shop/commodity/shop2/15.jpg" alt="">
            <div>bilibili</div>
        </div>
        <div slot="x2"  @click="toShop1">
            <img src="@/assets/img/shop/commodity/shop1/8.jpg" alt="">
            <div>火影忍者</div>
        </div>
       <div slot="x3" @click="toShop1">
            <img src="@/assets/img/shop/commodity/shop1/16.jpg" alt="">
            <div>海贼王</div>
        </div>
        <!-- 2 -->
        <div slot="x1" @click="toShop1">
            <img src="@/assets/img/shop/commodity/shop1/19.jpg" alt="">
            <div>初音未来</div>
        </div>
        <div slot="x2" @click="toShop4">
            <img src="@/assets/img/shop/commodity/shop4/1.jpg" alt="">
            <div>高达</div>
        </div>
       <div slot="x3" @click="toShop1">
            <img src="@/assets/img/shop/commodity/shop1/5.jpg" alt="">
            <div>阴阳师</div>
        </div>
        <!-- 3 -->
        <div slot="x1" @click="toShop1">
            <img src="@/assets/img/shop/commodity/shop1/11.jpg" alt="">
            <div>洛天依</div>
        </div>
        <div slot="x2" @click="toShop1">
            <img src="@/assets/img/shop/commodity/shop1/4.jpg" alt="">
            <div>JOJO的奇妙冒险</div>
        </div>
       <div slot="x3" @click="toShop1">
            <img src="@/assets/img/shop/commodity/shop1/13.jpg" alt="">
            <div>鬼灭之刃</div>
        </div>
        <!-- 4 -->
        <div slot="x1" @click="toShop1">
            <img src="@/assets/img/shop/commodity/shop1/9.jpg" alt="">
            <div>狼与香辛料</div>
        </div>
        <div slot="x2" @click="toShop1">
            <img src="@/assets/img/shop/commodity/shop1/23.jpg" alt="">
            <div>命运石之门</div>
        </div>
       <div slot="x3" @click="toShop1">
            <img src="@/assets/img/shop/commodity/shop1/17.jpg" alt="">
            <div>路人女主的养成方法</div>
        </div>
        <!-- 5 -->
        <div slot="x1" @click="toShop1">
            <img src="@/assets/img/shop/commodity/shop1/21.jpg" alt="">
            <div>埃罗芒阿老师</div>
        </div>
        <div slot="x2" @click="toShop1">
            <img src="@/assets/img/shop/commodity/shop1/12.jpg" alt="">
            <div>一拳超人</div>
        </div>
       <div slot="x3" @click="toShop2">
            <img src="@/assets/img/shop/commodity/shop2/5.jpg" alt="">
            <div>夏目友人帐</div>
        </div>
    </classBlock>
    <Scroll @navChange="navChange"></Scroll>
</div>
</transition>
</template>

<script>
import BackBarItem from '@/components/common/backBar/backBarItem'
import classBlock from '@/components/content/Block/classBlock'
import Scroll from '@/components/common/scroll/scroll'
export default {
    components:{
        BackBarItem,classBlock,Scroll
    },
    data(){
        return{
            sideTitle:['手办','模型','周边','IP'],
            sidePosi:0
        }
    },
    methods:{
        //当滚动时导航栏与页面相对应
        navChange(scrollTop){
            if(266 > scrollTop && scrollTop >= 134){
                this.sidePosi = 1
            }else if(scrollTop >= 266 && scrollTop <403){
                this.sidePosi = 2
            }else if(scrollTop >= 403){
                this.sidePosi = 3
            }else{
                this.sidePosi = 0
            } 
           
        },
        skip(index){
            let scrollTop = document.documentElement.scrollTop;
            // 点击导航栏跳到对应页面位置
            if(index == 0){
                document.documentElement.scrollTop = 0
            }else if(index == 1){
                document.documentElement.scrollTop = 134
            }else if(index == 2){
                document.documentElement.scrollTop = 266

            }else{
                document.documentElement.scrollTop = 403
            }

        },
        toShop4(){
            this.$router.push('/shop4'+'/模型')
            
        },
        toShop2(){
            this.$router.push('/shop2'+'/周边')
            
        },
        toShop1(){
            this.$router.push('/shop1'+'/手办')
            
        }
    }
}
</script>

<style>
#allClass > div{
    background-color: #fa7298;
    color: white;
}
.sideBar{
    display: flex;
    flex-direction: column;
    height: 42rem;
    position: fixed;
    left: 0;
    top: 2.625rem;
    background-color: rgb(246, 246, 246);
    width: 6rem;
}
.sideItem{
    padding:1rem;
    height: 0.8rem;
}
.sideActived{

    color: #fa7298;
    background-color: white;


}
.sideItem > span::before{
    content: '|';
    color: rgb(246, 246, 246);
    margin-right: 0.3rem;
    font-weight: 600;
    font-size: 0.98rem;
}
.sideActived > span::before{
    content: '|';
    color: #fa7298;
    margin-right: 0.3rem;
    font-weight: 600;
    font-size: 0.98rem;
}

.pageZoom-enter-active,.pageZoom-leave-active{
    transition:all 0.15s ease;
}
.pageZoom-enter,.pageZoom-leave-to{
    opacity: 0;
    transform: scale(0.6,0.7)
}

</style>