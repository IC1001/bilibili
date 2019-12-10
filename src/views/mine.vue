<template>
    <transition name="l2r">
        <!-- @touchstart="dragStart" @touchend="isClose()" @touchmove="dragMine()"  -->
    <div class="user" 
    :class="{drag:isDrag}" ref="user">
        <div class="pinkArea">
            <img :src="portrait" alt="" @click="toMyZone">
            <div>{{upname}}</div>
            <div><span>B币：0.0</span><span>硬币：0.0</span></div>
        </div>
        <div class="followBar">
            <div class="unfinished">
                <div>0</div>
                <div>动态</div>
            </div>
            <div @click="tofriends(1)">
                <div>{{followNum}}</div>
                <div>关注</div>
            </div>
            <div @click="tofriends(2)">
                <div>0</div>
                <div>粉丝</div>
            </div>
        </div>
        <div class="linkBar" >
            <div v-for="(item,index) in linkArr" :key="index" @click="toMineLinke(index)" :class="{IndexColor:mineIndex == index}">
                <i :class="item.class"></i>{{item.title}}
            </div>
            <!-- <div class="IndexColor"><i class="el-icon-s-home"></i>首页</div>
            <div @click="toHistory"><i class="el-icon-time" ></i>历史记录</div>
            <div @click="toDownLoad"><i class="el-icon-folder-checked"></i>下载管理</div>
            <div @click="toMyCollect"><i class="el-icon-star-off"></i>我的收藏</div> -->
            <!-- <div>稍后再看</div> -->
        </div>
        <div class="linkBar unfinished">
            <div><i class="el-icon-s-home"></i>投稿</div>
            <div><i class="el-icon-time"></i>创作中心</div>
            <div><i class="el-icon-folder-checked"></i>热门活动</div>
        </div>
        <div class="linkBar unfinished">
            <div><i class="el-icon-s-home"></i>直播中心</div>
            <div><i class="el-icon-time"></i>我的课程</div>
            <div><i class="el-icon-folder-checked"></i>免流量服务</div>
            <div><i class="el-icon-s-home"></i>我的订单</div>
            <div><i class="el-icon-folder-checked"></i>会员购中心</div>
            <div><i class="el-icon-time"></i>联系客服</div>
            <div><i class="el-icon-time"></i>青少年模式</div>
        </div>
    </div>
    </transition>



</template>

<script>
export default {
    data(){
        return{
            isDrag:false,
            startX:'',
            currentX:'',
            distance:'',
            mineIndex:0,
            linkArr:[
                {title:'首页',path:'/home/推荐',class:'el-icon-s-home'},
                {title:'历史记录',path:'/history/2',class:'el-icon-time'},
                {title:'下载管理',path:'/DownLoad/2',class:'el-icon-folder-checked'},
                {title:'我的收藏',path:'/myCollect/2',class:'el-icon-star-off'},
            ]
        }
    },
    computed:{
        followNum:{
            get(){
                return this.$store.state.info[0].fansnum
            },
            set(val){
                this.$store.state.fansNum = val

            }
        },
        upname(){            
            return this.$store.state.info[1].upname
        },
        portrait(){
            return this.$store.state.info[1].portrait
        }
    },
    components:{

    },
    methods:{
        dragStart(e){
            this.startX =  this.$refs.user.clientWidth
            event = new TouchEvent(null);
            var touches = event.targetTouches;
            console.log(e.touches[0].pageX );
            // console.log(e.touches[0].pageX );
            
        },
        dragMine(e){
            event = new TouchEvent(null);
            var touches = event.targetTouches;
            console.log(e.touches[0].pageX );
            // this.currentX = e.touches[0].pageX
            // this.distance = this.startX - this.currentX 
            // let user = document.querySelectorAll(".user")
            // let x = this.startX - e.targetTouches[0].clientX
            // let x = 50
            // user.style.transform = "translateX(50%)";

            
        },
        isClose(){
            if(this.currentX < this.startX / 2){
                this.isDrag = false
            }else{
                this.isDrag = true
            }
        },
        tofriends(num){
            this.$router.push('/myFriends/' + num)
            this.$emit('closeMine')
        },
        toMineLinke(index){
            this.$router.push(this.linkArr[index].path)
            this.$emit('closeMine')
            this.mineIndex = index
        },
        toMyZone(){
            this.$router.push('/zone?id=1&name=yk')
            this.$emit('closeMine')
            this.$store.commit('setZoneData',this.upname)
        }
    }
}
</script>

<style>
.drag{
    transform: translateX(-50%);
    transition: 0.5s ease;
}
.user{
    height: 100%;
    width: 75%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    overflow-x: hidden;
    z-index: 999;
}
.pinkArea{
    background-color: #fa7298;
    height: 22%;
    padding: 1rem 0 0 1rem;
    color: white;
}
.user > div >img{
    height: 4rem;
    width: 4rem;
 
    border-radius: 50%;
    background-color: white;
}
.pinkArea > div{
    padding: 0.7rem 0 0 0.5rem;
}
.user > div > div > span{
    margin-right: 0.5rem;
    font-size: 0.8rem;
    opacity: 0.7;
}
/* .shade{
    position: fixed;
    top: 0;
    background-color: rgba(50,50,50,0.4);
    height: 41.6875rem;
    width: 23.4375rem;

} */
.user > .followBar{
    background-color: white;
    color: black;
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding:0.5rem 0 0.5rem 0;
    border-top: rgba(150, 150, 150, 0.1) 0.75rem solid;
    box-shadow: 0rem 0px 1px 0px rgba(150, 150, 150, 0.8);
}
.linkBar{
    border-top: rgba(150, 150, 150, 0.1) 0.75rem solid;
    font-size: 1rem;
    font-weight: 600;
    border-bottom: rgba(100, 100, 100, 0.1) solid 1px;
}
.linkBar > div{
    padding: 0.8rem 0 0.8rem 0.8rem;
    
}
.linkBar > div:active{
    color: #fa7298;
    background-color: rgba(100,100,100,0.1);
    
}
.IndexColor{
    color: #fa7298;
    font-weight: 600;
    background-color: rgba(100,100,100,0.1);
}
.linkBar > div > i{
    padding-right: 1.8rem;
    
}
.unfinished{
    border-top: rgba(150, 150, 150, 0.1) 0rem solid;
    color: grey;
    opacity: 0.7;
}

.l2r-enter-active{
    transition:all 0.25s ease;
}
.l2r-leave-active{
    transition:all 0.25s ease;
}
.l2r-enter, .l2r-leave-to{
    transform: translateX(-100%);
}

</style>