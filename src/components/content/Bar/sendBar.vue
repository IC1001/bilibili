<template>
<div class="sendBar">
    <input type="text" placeholder="说点什么吧" ref="cc" >
    <div class="commitBtn">
        <!-- <img src="@/assets/img/images/iconfont/phiz.png" v-show="!isInput"> -->
        <div @click="sendComment">发布</div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            isInput:false,
        }
    },
    methods:{
        // inputing(){
        //     this.isInput = true
        // },
        // leaveInput(){
        //     this.isInput = false
        // },
        sendComment(){

            this.$emit('sendComment',this.$refs.cc.value)
            this.$emit('sendAcomment',this.$refs.cc.value)
            this.$emit('sendMcomment',this.$refs.cc.value)
            this.$refs.cc.value = ''

            
        }
    }

}
</script>

<style>
.sendBar{
    position: fixed;
    bottom: 0;
    border-top: 1px rgba(100, 100, 100, 0.1) solid;
    width: 100%;
    padding:0.4rem; 
    /* display: flex; */
}
.sendBar > input {
    width: 85%;
    height: 1.3rem;
    border-radius: 2rem;
    border: 0;
    background-color: rgba(100,100,100,0.1);
    font-size: 0.7rem;
    padding-left: 0.3rem;
}
.commitBtn{
    display: inline-block;
    vertical-align: middle;
    width: 10%;
    text-align: center;
    color: #fa7299;
    font-size: 0.9rem;

    
}
.commitBtn > img{
    width: 1.54rem;
    height: 1.54rem;
    margin-left: 0.5rem;

}

</style>