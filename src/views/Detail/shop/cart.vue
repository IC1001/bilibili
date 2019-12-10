<template>
<div>
    <BackBarItem>
        <div>购物车({{cartData.length}})</div>
    </BackBarItem>

    <!-- <div v-for="(item,index) in cartData" :key="index" class="cartItem"> -->
        
    <cartList :cartData="item" v-for="(item,index) in cartData" :key="index" 
     @PriceChange="totalP" @addPrice="addPrice"></cartList>
    <TabBar v-if="hasCart&&cartData.length!==0">
        
        <TabBarItem>
            <div class="allChecked">
                <checkButton></checkButton>
                <span>全选</span>
            </div>
        </TabBarItem>
        <TabBarItem>
            <div class="totalPrice">
                合计：<span>￥{{totalPrice}}</span>
            <div>不含运费</div>
            </div>
        </TabBarItem>
        <TabBarItem>
            <div class="settle">结算({{cartDataChecked}})</div>
        </TabBarItem>
    </TabBar>
    
    <!-- </div> -->
    <Kong class="middleMes" v-if="!hasCart||cartData.length==0">购物车里空空如也</Kong>
</div>
</template>

<script>
import BackBarItem from '@/components/common/backBar/backBarItem'
import Kong from '@/components/content/Block/kong'
import cartList from './page/cartPage/cartList'
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'
import checkButton from './page/cartPage/checkButton'
// import { mapGetters } from 'vuex'

export default {
    components:{
        BackBarItem,Kong,cartList,TabBar,TabBarItem,checkButton
    },

    computed:{
        // ...mapGetters(['cartList'])
        cartData(){
            return this.$store.state.cartArr
        },
        // cartDataChecked(){
        //     let checkedNums = 0
        //     for(let i = 0;i< this.cartData.length;i++){
        //         if(this.cartData[i].isCheck == true){
        //             checkedNums++
        //             console.log(checkedNums);
                    
        //         }
        //         console.log(checkedNums);
        //     }
        //     return checkedNums
        // }
        // totalPrice(){
        //     return
        // }
        // isCheck(){
        //     return this.$store.state.cartArr
        // }
    },
    data(){
        return{
            hasCart:false,
            totalPrice:0,
            cartDataChecked:0
            // isCheck:false
            // selected:false,
        }
    },
    activated(){
        if(this.cartData.length>0){
            this.hasCart = true
        }
        this.isTips = false
    },
    methods:{
        totalP(data,data2){
            
            if(data === true){
                this.totalPrice += data2
                this.cartDataChecked++
            }else{
                this.totalPrice -= data2
                this.cartDataChecked--
            }

        },
        addPrice(data){
            this.totalPrice += data * 1
        },

        
    }

}
</script>

<style>


.middleMes{
    position: absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
    /* margin: -64px 0 0 -64px; */

    /* vertical-align: middle; */
    /* align-self: center; */
}
.cartItem{
    display: flex;
    padding: .5rem;
    margin: .5rem;
    box-shadow: 0 0 .2rem .01rem rgba(100, 100, 100, 0.4);
    border-radius: .2rem;
    align-items: center;
    
}
.cartImg{
    width: 5rem;
    height: 5rem;
    margin-left: .7rem;
    
}
.cartImg >img{
    width: 100%;
    height: 100%;
}
.cartTitle{
    margin-left: .4rem;
}
.cartTitle > div{
    margin-top:3rem;
    color: #fa7299;
    font-weight: 600;

}
.cartTitle > div::first-letter{
    font-size: 0.8rem;
    font-weight: normal;
}

/* .isCheck{

    width: 1.3rem;
    height: 1.3rem;

} */
.isChecked{
    color: red;
}

.totalPrice{
    margin:0.75rem 0 4rem 0;
    width: 10rem;
    position: absolute;
}
.totalPrice > span{
    color: #fa7299;
}
.totalPrice > span::first-letter{
    font-size: 0.7rem;

}
.totalPrice >div{
    color: grey;
    font-size: 0.8rem;
}
.settle{
    width: 6rem;
    height: 2rem;    
    line-height: 2rem;
    font-size: 0.7rem;
    background-color: #fa7299;
    box-shadow: 0px 0.1rem 0.2rem 0.05rem rgba(216, 52, 148, 0.479);
    color: white;
    position: absolute;
    border-radius: 2rem;
    text-align: center;
    bottom: 0.59rem;
    left: 0;
    right: 0;
    margin: auto;

    /* width: 90%; */

}
.allChecked{
    position: absolute;
    left: 0.3rem;
    display: flex;
    top: 0.75rem;
    align-items: center;

}
.allChecked > span {
    margin-left: 0.4rem;
    margin-bottom: 0.17rem;
}


</style>