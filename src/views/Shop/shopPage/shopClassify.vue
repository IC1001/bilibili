<template>
  <div>
    <classifyBar>
        <classifyItem v-for="(item,index) in firstData" :key="index" >
            <img :src="item.img" slot="classicon" @click="shopLink(index)">
            <p slot="classtext">{{item.title}}</p>
        </classifyItem>    
 
    </classifyBar>
    <classifyBar>
        <classifyItem v-for="(item,index) in secondData" :key="index" >
            <img :src="item.img" slot="classicon" @click="shopLink2(index)">
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
            firstData:[
                {img:require('@/assets/img/shop/shop_03.png'),title:'手办',path:'/shop1'},
                {img:require('@/assets/img/shop/shop_05.png'),title:'周边',path:'/shop2'},
                {img:require('@/assets/img/shop/shop_07.png'),title:'漫展',path:'/shop3'},
                {img:require('@/assets/img/shop/shop_09.png'),title:'魔力赏',path:'/shop3'}
            ],
            secondData:[  
                {img:require('@/assets/img/shop/shop_16.png'),title:'模型',path:'/shop4'},
                {img:require('@/assets/img/shop/shop_18.png'),title:'潮玩扭蛋',path:'/shop1'},
                {img:require('@/assets/img/shop/shop_19.png'),title:'演出',path:'/shop3'},
                {img:require('@/assets/img/shop/shop_20.png'),title:'全部分类',path:'/allClass'}

            ],
            // NavData:[
            //     {img:require('@/assets/img/shop/shop_35.png'),title:'手办',path:''},
            //     {img:require('@/assets/img/shop/shop_33.png'),title:'周边',path:''},
            //     {img:require('@/assets/img/shop/shop_34.png'),title:'周边',path:''},

            // ]
        }
    },
    computed:{

    },
    methods:{
        shopLink(index){
            this.$router.push(this.firstData[index].path + '/' + this.firstData[index].title)
        },
        shopLink2(index){
            this.$router.push(this.secondData[index].path + '/' + this.secondData[index].title)
        }
    }

}
</script>

<style>

</style>