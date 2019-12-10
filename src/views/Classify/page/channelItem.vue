<template>
  <div>
        <classifyBar>
            <classifyItem v-for="(item,index) in channel" :key="index" @click.native="toChannel(index)">                
                <img :src="item.img" slot="classicon">
                <p slot="classtext">{{item.title}}</p>
            </classifyItem>
        </classifyBar>
        <classifyBar id="adjust">
            <classifyItem v-for="(item,index) in channel2" :key="index" @click.native="toChannel(index+5)">                
                <img :src="item.img" slot="classicon">
                <p slot="classtext">{{item.title}}</p>
            </classifyItem>
        </classifyBar>       
  </div>
</template>

<script>
import classifyBar from '@/components/common/classifyBar/classifyBar'
import classifyItem from '@/components/common/classifyBar/classifyItem'
export default {
    components:{
        classifyBar,classifyItem
    },
    data(){
        return{
            channel:this.$store.state.channel,
            channel2:this.$store.state.channel2,
            // channel:[
            //     {img:require('@/assets/img/classify/channel_03.png'),title:'全部频道',path:'/allChannel',cover:require('@/assets/img/classify/channel/LOL.jpg')},
            //     {img:require('@/assets/img/classify/channel_05.png'),title:'英雄联盟',path:'/channelPage',cover:require('@/assets/img/classify/channel/LOL.jpg')},
            //     {img:require('@/assets/img/classify/channel_07.png'),title:'互动视频',path:'/channelPage',cover:require('@/assets/img/classify/channel/LOL.jpg')},
            //     {img:require('@/assets/img/classify/channel_09.png'),title:'鬼畜',path:'/channelPage',cover:require('@/assets/img/classify/channel/LOL.jpg')},
            //     {img:require('@/assets/img/classify/channel_11.png'),title:'搞笑',path:'/channelPage',cover:require('@/assets/img/classify/channel/LOL.jpg')},
            // ],
            // channel2:[
            //     {img:require('@/assets/img/classify/channel_18.png'),title:'新宝岛',path:'/channelPage',cover:require('@/assets/img/classify/channel/LOL.jpg')},
            //     {img:require('@/assets/img/classify/channel_19.png'),title:'数据可视化',path:'/channelPage',cover:require('@/assets/img/classify/channel/LOL.jpg')},
            //     {img:require('@/assets/img/classify/channel_20.png'),title:'手书',path:'/channelPage',cover:require('@/assets/img/classify/channel/LOL.jpg')},
            //     {img:require('@/assets/img/classify/channel_21.png'),title:'喵星人',path:'/channelPage',cover:require('@/assets/img/classify/channel/LOL.jpg')},
            //     {img:require('@/assets/img/classify/channel_22.png'),title:'定格动画',path:'/channelPage',cover:require('@/assets/img/classify/channel/LOL.jpg')},
            // ]
        }
    },
    methods:{
        toChannel(index){
            const Channel = this.channel.concat(this.channel2)
            this.$router.push(Channel[index].path + '/' +Channel[index].title)
            this.$store.commit('toChannelPage',index)
        },
    }

}
</script>

<style>
#adjust{
    margin-top: 1rem;
}
#adjust > div >img{
    margin-left: 0.24rem;
}

</style>