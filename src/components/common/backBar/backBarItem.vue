<template>
<div>
    <div class="backBar">
        <div class="backLeft" >
            <i class="el-icon-s-fold" @click="goBack2" v-if="this.$route.params.mine==2"></i>
            <i class="el-icon-arrow-left" @click="goBack" v-else></i>
            
            <span class="leftSlot"><slot name="backLeft"></slot></span>
        </div>
        <div class="backmid"><slot></slot></div>
        <div class="backRight"><slot name="backRight"></slot></div>
    </div>
    <div class="backBarEnd"></div>
</div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    props:{
        // noMine:{
        //     type:Boolean,
        //     default(){
        //         return true
        //     }
        // }
    },
    methods:{
        goBack(){
            if(this.$route.path.indexOf('hotListPage')!==-1 ){
                this.$router.push('/home')
            }else if(this.$route.path.indexOf('movie/')!==-1 ){
                this.$router.go(-1)
            }
            else{
                this.$router.go(-1)
                if(this.$route.path.indexOf('zone')!==-1 && this.$route.query.id == 1){
                    this.$store.commit('switchMine')                   
                }
            }
        },
        goBack2(){

            this.$store.commit('switchMine')
        }
    }

}
</script>

<style>

.backBar{
    display: flex;
    position: fixed;
    top: 0;
    /* opacity: 0.6; */
    background-color: rgba(255, 255, 255, 0.7);
    color: black;
    z-index: 10;
    /* align-content: center; */
    /* text-align: center; */
    width: 100%;
    height: 2.625rem;
    line-height: 2.625rem;
    font-weight: 600;
    font-size: 1rem;
    justify-content: space-between;

}
.el-icon-arrow-left{
    font-weight:800;
}
.leftSlot{
    font-weight: 500;
    font-size: 1rem;
    margin-left: 0.4rem;
}
.backRight{
    font-size: 1.3rem;
    width: 4.6875rem;
}
.backLeft{
    width: 8.6875rem;
    font-size: 1.1rem;
    text-align: left;
    margin-left: 0.5rem;
    /* line-height: 2.625rem;
    height: 2.625rem; */
    display: flex;
    align-items: center;

}
.backmid{
    width: 14.0625rem;
    margin-left: 3rem;
}
.backBarEnd{
    height: 2.6rem;
}

</style>