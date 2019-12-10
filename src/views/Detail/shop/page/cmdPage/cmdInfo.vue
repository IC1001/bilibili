<template>
<div>
    <div class="cmdTitle">{{cmdInfo.title}}</div>
    <div class="cmdPrice">{{cmdInfo.price}}</div>
    <div class="cmdWant">
        <div class="wantadmin">
            <img src="@/assets/img/images/iconfont/admin.png" v-if="iswant"><span>等人想要</span>
        </div>
        <transition name="iwant">
        <img src="@/assets/img/images/iconfont/want.png" alt="想要" @click="iwant" v-if="!iswant">
        <div class="iswant" v-else>♥ 我想要</div>
        </transition>
    </div>
    <div class="cmdIP">
        <span>IP</span>
        <div>{{cmdInfo.IP}}</div>
    </div>
    <div class="cmdIP">
        <span>品牌</span>
        <div>***</div>
    </div>
    <div class="cmdTipsBar">
        <div class="cmdTips">
            <div><i class="el-icon-circle-check"></i>正品保证</div>
            <div><i class="el-icon-circle-check"></i>保价保单</div>
            <div><i class="el-icon-circle-check"></i>专业包装</div>
            <div><i class="el-icon-circle-check"></i>299包邮</div>
        </div>
        <div class="cmdTips"><div><i class="el-icon-warning-outline"></i>不支持7天无理由退换货</div></div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            iswant:this.cmdInfo.iswant,
        }
    },
    // computed:{
    //     iswant(){
    //         return this.$store.getters.shop123[this.$route.params.index].iswant
    //     }


    // },
    
    props:{
        cmdInfo:{
            default(){
                return []
            }
        }
    },
    methods:{
        iwant(){
            this.iswant = true
            this.$store.commit('iswanted',this.$route.query.id)
            
        }
    },
    updated(){
        if(this.$route.query.id){
            this.iswant = this.$store.getters.shopAll[this.$route.query.id].iswant
        }
    }

}
</script>

<style>
.cmdTitle{
    margin:0.6rem;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;

}
.cmdPrice{
    margin:0.6rem;
    color: #fa7290;
    font-weight: 600;
}
.cmdPrice::first-letter{
    font-size: 0.5rem;
}
.cmdWant{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.9rem;
    padding: 0.6rem;
    margin: 0.3rem;
    border-bottom: 1px #F5F5F5 solid;
}
.cmdWant > span{
    font-size: 0.8rem;
    color:grey;
}
.wantadmin{
    display: flex;
    align-items: center;
}
.wantadmin > span{
    margin-top: 0.2rem;
    margin-left: 0.4rem;
}

.cmdIP{
    border-bottom: 1px #F5F5F5 solid;
    /* border-top: 1px #F5F5F5 solid; */
    padding: 0.6rem;
    margin: 0.3rem;
    display: flex;
    align-items: center;
}
.cmdIP > span{
    font-size: 0.9rem;
    color:grey;

}
.cmdIP > div{
    font-size: 0.95rem;
    margin-left: 3rem;
}

.cmdTips{
    padding: 0.3rem 0rem 0rem 0.4rem;
    margin: 0.3rem 0.3rem 0 0.3rem;
    display: flex;
    align-items: center;
    font-size: 0.7rem;
    color: grey;
}
.cmdTips > div{
    margin-right: 0.8rem;
}
.cmdTips > div > i{
    margin-right: 0.2rem;
    font-weight: 600;
}
.el-icon-circle-check{
    color: #fa7290;
}

.cmdTipsBar{
    margin-bottom: 1rem;
}
.iswant{
    color: #fa7290;
}

.iwant-enter-active{
    transition: all 1s ease;
}
.iwant-enter{
    opacity: 0;
}
</style>