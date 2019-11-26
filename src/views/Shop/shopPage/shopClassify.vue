<template>
  <div>
    <classifyBar>
        <classifyItem v-for="(item,index) in firstData" :key="index">
            <img :src="item.img" slot="classicon">
            <p slot="classtext">{{item.title}}</p>
        </classifyItem>    
 
    </classifyBar>
    <classifyBar>
        <classifyItem v-for="(item,index) in secondData" :key="index">
            <img :src="item.img" slot="classicon">
            <p slot="classtext">{{item.title}}</p>
        </classifyItem>      
    </classifyBar> 
    <!-- <classifyBar>
        <classifyItem v-for="(item,index) in NavData" :key="index">
            <img :src="item.img" slot="classicon">
        </classifyItem>      
    </classifyBar>       -->
  </div>
</template>

<script>
// 分类栏
import classifyBar from '@/components/common/classifyBar/classifyBar'
import classifyItem from '@/components/common/classifyBar/classifyItem'
export default {
    components:{
        classifyBar,classifyItem
    },
    data(){
        return{
            classifyData:[
                {img:require('@/assets/img/shop/shop_03.png'),title:'手办',path:''},
                {img:require('@/assets/img/shop/shop_05.png'),title:'周边',path:''},
                {img:require('@/assets/img/shop/shop_07.png'),title:'漫展',path:''},
                {img:require('@/assets/img/shop/shop_09.png'),title:'测欧气',path:''},
                {img:require('@/assets/img/shop/shop_16.png'),title:'模型',path:''},
                {img:require('@/assets/img/shop/shop_18.png'),title:'潮玩扭蛋',path:''},
                {img:require('@/assets/img/shop/shop_19.png'),title:'演出',path:''},
                {img:require('@/assets/img/shop/shop_20.png'),title:'全部分类',path:''},

            ],
            // NavData:[
            //     {img:require('@/assets/img/shop/shop_35.png'),title:'手办',path:''},
            //     {img:require('@/assets/img/shop/shop_33.png'),title:'周边',path:''},
            //     {img:require('@/assets/img/shop/shop_34.png'),title:'周边',path:''},

            // ]
        }
    },
    computed:{
        firstData(){
            return this.classifyData.slice(0,4)
        },
        secondData(){
            return this.classifyData.slice(4,8)
        }

    }

}
</script>

<style>

</style>