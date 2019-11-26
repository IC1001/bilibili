<template>
<div class="changeClass" @click="rotate">
     <slot>
        <i class="el-icon-refresh" v-show="rotating==false"></i>
        <i class="el-icon-loading" v-show="rotating==true"></i>
        <span class="changeClass">换一换</span>
     </slot>
</div>
</template>

<script>
export default {
    data(){
        return{
            rotating:false
        }
    },
    methods:{
        rotate(){
            this.rotating = true
            this.$emit('rotate')
            setTimeout(()=>{
                this.rotating = false
            },100)

        }
    }

}
</script>

<style>
.changeClass{
    text-align: center;
    font-size: 0.825rem;
    color: #fa7298;
}

</style>