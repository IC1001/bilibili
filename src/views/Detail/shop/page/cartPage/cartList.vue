<template>
<div class="cartItem">
    <checkButton :isCheck="cartData" 
    @CheckedChange="PriceChange" @addPrice="addPrice"></checkButton>
        <div class="cartImg"><img :src="cartData.cover"></div>
        <div class="cartTitle">
                 {{cartData.title}}
            <div>{{cartData.price}}</div>
        </div>

</div>
</template>

<script>
import checkButton from './checkButton'
export default {
    components:{
        checkButton
    },
    data(){
        return{
           
        }
    },
    props:{
        cartData:{
            type:Object,
            default(){
                return{}
            }
        }
    },
    methods:{
        PriceChange(data,data2){
            let changePrice = data2 * this.cartData.price.slice(1)
            this.$emit('PriceChange',data,changePrice)
        },
        addPrice(data){
            this.$emit('addPrice',data)   
        }
    }


}
</script>

<style>
.cartItem{
    display: flex;
    padding: .5rem;
    margin: .5rem;
    box-shadow: 0 0 .2rem .01rem rgba(100, 100, 100, 0.4);
    border-radius: .2rem;
    align-items: center;
    position: relative;
    
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
    /* color: #fa7299; */
    font-weight: 600;

}
.cartTitle > div::first-letter{
    font-size: 0.8rem;
    font-weight: normal;
}

/* .buyNums{
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
} */

/* .cmdNums > .disable{
    color: grey;
} */

</style>