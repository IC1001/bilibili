<template>
<div>
    <TabBar>
        <TabBarItem>
            <i class="el-icon-shopping-cart-1 posi" @click="toCart"></i>
            <i class="el-icon-service posi2" @click="toService"></i>
        </TabBarItem>
        <TabBarItem><div class="cart" @click="addCart">加购物车</div></TabBarItem>
        <TabBarItem><div class="pay">立即购买</div></TabBarItem>
    </TabBar>
    <transition name="addcart">
    <div class="addCartBlock" v-if="isCart">
        <div class="CB"><img :src="CB.cover" alt=""></div>
        <div class="cartPrice">{{CB.price}}</div>
        <div class="info">{{CB.title}}</div>
        <div class="buyNums">
            <div>数量确认</div>
            <div class="numsDec">
                <i class="el-icon-remove-outline" :class="{disable:cmdNums==1}" @click="sub1"></i>
                    <div>{{cmdNums}}</div>
                <i class="el-icon-circle-plus-outline" @click="add1"></i>
            </div>
        </div>
        <div class="cartcart" @click="addToCart"><div>加购物车</div></div>
        <!-- <div @click="closeCart" class="cartClose"><img src="@/assets/img/images/iconfont/close.png" alt=""></div> -->
    </div>
    </transition>
    <div :class="{cartTips:isCartTips==true}" >
        <i class="el-icon-circle-check"></i>
        加车成功
    </div>
</div>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'
export default {
    components:{
        TabBar,TabBarItem
    },
    props:{
        isCart:{},
        CB:{
            default:''
        }},
    data(){
        return{
            isCart2:this.isCart,
            cmdNums:1,
            isCartTips:false
        }
    },
    methods:{
        toCart(){
            this.$router.push('/cart')
        },
        toService(){
            this.$router.push('/service')
        },
        addCart(){
            this.$emit('addCartEmit')
            // this.isCart2 = true
            
        },
        closeCart(){
            this.isCart2 = false
            this.$emit('addCartEmit')
        },
        add1(){
            this.cmdNums++
        },
        sub1(){
            if(this.cmdNums>1){
                this.cmdNums--
            }
        },
        addToCart(){
            this.isCartTips = true
            setTimeout(()=>{
                this.$emit('addCartEmit')
                this.isCartTips = false
            },1250)
            
            this.$store.commit('addToCart',{item:this.CB,buyNums:this.cmdNums})
            // console.log(this.CB);
            
            
        },
        // wewe(){
        //     // let a ='2';let b=true;console.log(a == b);
        //     // console.log(Boolean([]));
        //     for(let i = 0;i<=100;i++){

        //     }
        //       console.log(typeof 1);
            
      
        // }
    }

}
</script>

<style>
.pay{
    width: 7.4rem;
    height: 2rem;
    background-color:#D3D3D3;
    box-shadow: 0px 0.1rem 0.2rem 0.05rem rgba(216, 222, 222, 0.479);
    color: white;
    position: absolute;
    border-radius: 2rem;
    line-height: 2rem;
    top: 0.5929rem;
    left: 0rem;

}
.cart{
    width:7.4rem;
    height: 2rem;
    background-color: white;
    color: #fa7299;
    position: absolute;
    border-radius: 2rem;
    line-height: 2rem;
    top: 0.5929rem;
    left: -0.5rem;
    border: pink 1px solid;
    
}
.posi{
    position: absolute;
    top:0.7rem;
    left: 4rem;

}
.posi2{
    position: absolute;
    top:0.7rem;
    left: 0.8rem;

}
/* 购物车 */
.addCartBlock{
    height: 12.5rem;
    width: 22.5rem;
    position: fixed;
    bottom:0.5rem;
    margin: auto;
    left: 0;
    right: 0;
    border-radius: .3rem;
    z-index: 16;

    background-color: white;
}
.CB{
    position: absolute;
    left: 0.75rem;
    top: -1rem;
}
.CB > img{
    height: 5rem;
    width: 5.5rem;
    border-radius: .3rem;
}
.info{
    top: 5rem;
    left: 0.75rem;
    position: absolute;
    border-radius: 1rem;
    border: #fa7299 1.4px solid;
    font-size: 0.8rem;
    color: #fa7299;
    padding: .2rem;
    line-height: 1.5rem;
    height: 1.5rem;
}
.cartPrice{
    position: absolute;
    top: 0.7rem;
    left: 6.6rem;
    color: #fa7299;

}
.buyNums{
    position: absolute;
    top: 8rem;
    left: 0.75rem;
    padding: .5rem;
    display: flex;
    border-top: solid 1px rgba(100, 100, 100, 0.2);
    border-bottom: solid 1px rgba(100, 100, 100, 0.2);
    width: 20rem;
    height: 1rem;
    font-size: 0.8rem;
    align-items: center;
}
.numsDec{
    right: .2rem;
    position: absolute;
    font-size: 1rem;
    display: flex;
    align-items: center;
}
.numsDec > i{
    margin-left: .4rem;
    margin-right: .4rem;
    font-size: 1.5rem;
    color:#fa7299;
}
.numsDec > .disable{
    color: grey;
}
.cartcart{
    width: 7.4rem;
    height: 1.7rem;    
    line-height: 1.7rem;
    font-size: 0.7rem;
    background-color: #fa7299;
    box-shadow: 0px 0.1rem 0.2rem 0.05rem rgba(216, 52, 148, 0.479);
    color: white;
    position: absolute;
    border-radius: 2rem;

    text-align: center;
    bottom: .3rem;
    left: 0;
    right: 0;
    margin: auto;

    width: 90%;
}

.cartTips{
    color: white;
    z-index: 99;
    position: fixed;
    top: 45%;  
    left: 40%;
    width: 6rem;
    height: 3rem;  
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 0.3rem;
    text-align: center;
    line-height: 3rem;


}

.addcart-enter-active,.addcart-leave-active{
    transition: all 0.45s ease;
}
.addcart-enter,.addcart-leave-to{
    opacity: 0;
}
</style>