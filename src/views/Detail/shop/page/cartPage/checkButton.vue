<template>
<div>
    <div  class="checkBox" @click="select"> 
        <img src="@/assets/img/images/iconfont/choose.png" v-show="isChecked" >
        <img src="@/assets/img/images/iconfont/circle.png" v-show="!isChecked"  >
    </div>
        <div class="cmdNums">
            <i class="el-icon-remove-outline"  @click="sub1"></i>
                <div>{{cmdNums}}</div>
            <i class="el-icon-circle-plus-outline" @click="add1"></i>
        </div>
<!-- @click="select(index)" -->
    <div v-if="isRemove" class="removeTips">
        <div class="tipsInfo">
            <div class="bulb"><img src="@/assets/img/images/iconfont/tips.png" alt=""></div>
            <div><img src="@/assets/img/images/iconfont/bilibili.png" alt=""></div>
            <div>是否从购物车中移除该商品</div>
        </div>
        <div class="isRemove">
            <div class="removeBtn"  @click="cancelRemove">放弃</div>
            <div class="removeBtn remove" @click="removed(thisIndex)">移除商品</div>
            
        </div>
    </div>
    <div :class="{tipsing:isRemove==true}"></div>
</div>
</template>

<script>
export default {
    props:{
        isCheck:{
            type:Object,
            default(){
                return{}

            }
        }
    },
    // computed(){
    //     return this.$store.state.cartArr
    // },
    data(){
        return{
            isChecked: this.isCheck.isCheck,
            cmdNums: this.isCheck.cmdNums,
            thisIndex:this.isCheck.index,
            isRemove:false,
            isTips:false
        }
    },
    methods:{
        select(){
            this.isChecked = ! this.isChecked
            // this.$store.commit('priceChange',this.isCheck.index)
            // if(this.isChecked == true){
            this.$emit('CheckedChange',this.isChecked,this.cmdNums)
      
            // }else{
            //     this.$emit('cancelCheck') 
            // }
        },
        add1(){
            this.cmdNums++
            // this.isChecked = true
            // if(this.cmdNums == 2){
            //     let addPrice =  this.isCheck.price.slice(1) * 2
            //     this.$emit('addPrice',addPrice)
            // }else{
            //     let addPrice =  this.isCheck.price.slice(1) * 1
            //     this.$emit('addPrice',addPrice)
            // }
            if(this.isChecked == true){
                let addPrice =  this.isCheck.price.slice(1) * 1
                this.$emit('addPrice',addPrice)               
            }
            // this.$emit('addPrice',addPrice)
        },
        sub1(){
            if(this.cmdNums>1){
                this.cmdNums--
                
                if(this.isChecked == true){
                    let subPrice = - this.isCheck.price.slice(1) 
                    this.$emit('addPrice',subPrice)
                }
                // else{
                //     this.isChecked = true
                //     this.$emit('addPrice',subPrice)
                // }
            }else{
                this.isRemove = true
            }
        },
        //移除购物车
        cancelRemove(){
            this.isRemove = !this.isRemove
        },
        removed(thisIndex){
            if(this.isChecked == true){
                // this.isChecked = ! this.isChecked
                this.$emit('CheckedChange',!this.isChecked,this.cmdNums)

            }
            console.log(thisIndex);
            
            this.$store.commit('deleteFromCart',thisIndex)
            this.isRemove = !this.isRemove

        }
    }

}
</script>

<style>
.checkBox > img{
    width: 1.3rem;
    height: 1.3rem;      
    top: 5.3rem;
    left: 1.25rem;
}

.cmdNums{
    right: 0.3rem;
    top: 4.3rem;
    position: absolute;
    font-size: 1rem;
    display: flex;
    align-items: center;
}
.cmdNums > i{
    margin-left: .4rem;
    margin-right: .4rem;
    font-size: 1.2rem;
    color:black;
}

.removeTips{
    height: 12rem;
    width: 20rem;
    position: fixed;
    bottom:calc(50% - 6rem);
    margin: auto;
    left: 0;
    right: 0;
    border-radius: .6rem;
    z-index: 10;
    background-color: white;
    /* border: 1px solid rgba(100, 100, 100, 0.2); */
}
.tipsInfo{
    text-align: center;
    font-size: 600;
    margin-top:1.5rem;
}
.isRemove{
    display: flex;
    justify-content: space-around;
   
    /* align-items: center; */
}
.removeBtn{
    width: 8rem;
    height: 2.2rem;    
    line-height: 2.2rem;
    font-size: 1rem;
    background-color: white;
    color: rgba(100, 100, 100, 1);
    /* position: absolute; */
    border-radius: 2rem;
    border: 1px solid rgba(100, 100, 100, 0.2);
    text-align: center;
    bottom: .3rem;
    margin-top: 2rem;
}
.remove{
    color: deeppink;
    border: 1px solid pink;

}
.bulb{
    position: absolute;
    left: 6rem;
    top: 0.5rem;
}
.bulb > img{
    transform: rotate(-40deg);
    width: 2.5rem;
    height: 2.5rem;
}

.tipsing{
    background:rgba(0, 0, 0, 0.4);
    /* opacity: 0.6; */
    height: 100%;
    width: 100%;
    z-index: 9;
    position: fixed;
    top: 0;
    left: 0;
}
</style>