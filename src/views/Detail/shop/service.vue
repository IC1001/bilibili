<template>
<div>
    
    <BackBarItem >
       <div >会员购中心</div>
    </BackBarItem>
    <div>
        <div  id="serviceBG"></div>
        <!-- 初始问候 -->
        <div class="dialog">
            <img src="@/assets/img/images/iconfont/bilibili-line.png" alt="">
            <div>
                <span class="fdj">复读机</span>
                <div class="dialogbox">
                    <div class="triangle"></div>
                    <div class="dialogtext">您好，请问有什么可以帮您的？</div>
                </div>
            </div>
        </div>
        <!-- 发送问题 -->
        <div v-for="(item,index) in QA" :key="index">
        <div class="dialogR" >
            <img src="@/assets/img/images/iconfont/admin.png" alt="">
            <div>
                <!-- <span class="fdj">复读机</span> -->
                <div class="dialogbox">
                    
                    <div class="dialogtextR">{{item}}</div>
                    <div class="triangleR"></div>
                </div>
            </div>
        </div>
        <!-- 复读机回答 -->
        <div class="dialog" >
            <img src="@/assets/img/images/iconfont/bilibili-line.png" alt="">
            <div>
                <span class="fdj">复读机</span>
                <div class="dialogbox">
                    <div class="triangle"></div>
                    <div class="dialogtext">{{sameText}}</div>
                </div>
            </div>
        </div>
        </div>
    </div>
    <div class="inputClass">
        <div>
            <img src="@/assets/img/images/iconfont/people.png" alt="">
            <div @click="changePeople">转人工</div>
        </div>
        <input type="text" placeholder="请输入问题：" ref="question">
        <div class="fasong" @click="submitQ">发送</div>
    </div>
</div >
</template>

<script>
import BackBarItem from '@/components/common/backBar/backBarItem'
export default {
    components:{
        BackBarItem
    },
    data(){
        return{
            QA:[],
            // answer:[],
            sameText:'非常对不起哦，您反馈的问题复读机还不会回答QAQ'

        }
    },
    methods:{
        submitQ(){
            // this.QA.Q = this.$refs.question.value
            this.QA.push(this.$refs.question.value)
            this.$refs.question.value = ''
            // this.QA.A =this.sameText
            // this.QA.push(this.sameText)
        },
        changePeople(){
            alert('暂无人工')
        }
    },
    activated(){
        this.QA = []
    }
}
</script>

<style>
#serviceBG{
    background-color: rgba(40,200,255,0.1);
    height: 100%;
    width: 100%;
    position: absolute;
    /* top: 1rem; */
    bottom: 3.5rem;
    z-index: -1;
  
}
.inputClass{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.3rem 0 0.2rem 0.1rem;
    border-top: 1px rgba(100, 100, 100, 0.1) solid;

}
.inputClass > input{
    width: 60%;
    height: 60%;
    padding: 0.4rem;
    border:0;
    font-size: 0.8rem;
}
.inputClass > div {
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.4rem;
    margin-right: 0.5rem;
    color: #fa7299;
    font-size: 0.5rem;
}
.inputClass > div > img{
    width: 2rem;
    height: 2rem;
}
.inputClass > .fasong{
    background-color: #fa7299;
    color: white;
    height: 1.5rem;
    width: 3rem;
    margin-left: 1rem;
    line-height: 1.5rem;
    border-radius: 0.2rem;
    font-size: 0.8rem;
}

.fdj{
    color: grey;
    font-size: 0.8rem;
    padding: 0.4rem;
    margin-bottom:0.5rem;
}
.dialog{
    display: flex;
    padding:0.5rem;
    align-items: center;
}
.dialogbox{
    display: flex;
    align-items: center;
    /* position: absolute; */
    margin-top: 0.5rem;
}
.triangle{
    width: 0rem;
    height: 0;
    border: 0.5rem solid;
    /* background-color: grey; */
    border-color:transparent white transparent transparent;
}
.dialogtext{
    width: 100%;
    font-size: 0.9rem;
    background-color: #fff;
    padding: 0.4rem;
    border-radius: 0.2rem;
    /* position: absolute; */
}
/* 右边 */
.dialogR{
    display: flex;
    flex-direction: row-reverse;
}
.dialogR > img{
    height: 2rem;
    width: 2rem;
}
.triangleR{
    width: 0rem;
    height: 0;
    border: 0.5rem solid;
    /* background-color: grey; */
    border-color:transparent  transparent  transparent pink;
}
.dialogboxR{
    background-color: pink;
}
.dialogtextR{
    width: 100%;
    font-size: 0.9rem;
    background-color:pink;
    padding: 0.4rem;
    border-radius: 0.2rem;
    color: white;
    /* position: absolute; */
}

</style>