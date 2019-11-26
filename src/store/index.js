import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        // imgArr:[
        //     {img:require("@/assets/img/slide/slide1.jpg"),vdo:require("@/assets/video/movie.mp4"),title:'1 yellow hello world hello world hello world hello world hello world ',type:'黄色',path:'/videoPage',av:'AV0000001',intro:'这是yellow的简介',upname:'xiao',fanNums:'0',playNums:'0'},
        //     {img:require("@/assets/img/slide/slide2.jpg"),vdo:require("@/assets/video/movie1.mp4"),title:'1blue hello world hello world hello world  hello world hello world ',type:'蓝色',path:'/videoPage',av:'AV0000002',intro:'这是blue的简介',upname:'xiao',fanNums:'0',playNums:'0'},
        //     {img:require("@/assets/img/slide/slide3.jpg"),vdo:require("@/assets/video/video1.mp4"),title:'1red hello world hello world hello world  hello world hello world ',type:'红色',path:'/videoPage',av:'AV0000003',intro:'这是red的简介',upname:'xiao',fanNums:'0',playNums:'0'},
        // ],
        OLimg:[
            {img:require("@/assets/img/slide/FPX.jpg")},
            {img:require("@/assets/img/slide/paj.jpg")},
            {img:require("@/assets/img/slide/slide6.jpg")}
        ],
        // animateSlide:[
        //     {id:1,img:require("@/assets/img/animate/Naruto.jpg"),path:'/animePage',title:'火影忍者',type:'热血/战斗/架空',av:'AV1000001'},
        //     {id:2,img:require("@/assets/img/animate/gate.jpg"),path:'/animePage',title:'命运石之门',type:'科幻/穿越',av:'AV1000002'},
        //     {id:3,img:require("@/assets/img/animate/tennis.jpg"),path:'/animePage',title:'网球王子',type:'校园/运动/奇幻',av:'AV1000003'},
        //     {id:4,img:require("@/assets/img/animate/onepiece.jpg"),path:'/animePage',title:'海贼王',type:'热血/战斗/冒险',av:'AV1000004'},

        // ],
        movieSlide:[
            {img:require("@/assets/img/movie/movie/InterstellarSlide.jpg"),path:'/movie',title:'星际穿越',type:'科幻/冒险',av:'AV2100002'},
            {img:require("@/assets/img/movie/movie/shawshankSlide.jpg"),path:'/movie',title:'肖申克的救赎',type:'剧情/犯罪',av:'AV2100004'},
            {img:require("@/assets/img/movie/documentary/hpzgSlide.jpg"),path:'/docu',title:'航拍中国',type:'自然/人文/旅行',av:'AV2000003'},
          
        ],
         
        anime:[
            {id:1,img:require("@/assets/img/animate/Naruto.jpg"),path:'/animePage',title:'火影忍者',type:'热血/战斗/架空',av:'AV1000001',hotNum:999},
            {id:2,img:require("@/assets/img/animate/gate.jpg"),path:'/animePage',title:'命运石之门',type:'科幻/穿越',av:'AV1000002',hotNum:876},
            {id:3,img:require("@/assets/img/animate/tennis.jpg"),path:'/animePage',title:'网球王子',type:'校园/运动/奇幻',av:'AV1000003',hotNum:888},
            {id:4,img:require("@/assets/img/animate/onepiece.jpg"),path:'/animePage',title:'海贼王',type:'热血/战斗/冒险',av:'AV1000004',hotNum:999},
            {id:5,img:require("@/assets/img/animate/kenan.jpg"),path:'/animePage',title:'名侦探柯南',type:'推理/悬疑',av:'AV1000005',hotNum:901},
            {id:6,img:require("@/assets/img/animate/dog.jpg"),path:'/animePage',title:'犬夜叉',type:'穿越/奇幻/冒险/恋爱',av:'AV1000006',hotNum:876},
            {id:7,img:require("@/assets/img/animate/deadgod.jpg"),path:'/animePage',title:'死神',type:'热血/战斗',av:'AV1000007',hotNum:888},
            {id:8,img:require("@/assets/img/animate/jojo.jpg"),path:'/animePage',title:'JOJO的奇幻冒险',type:'热血/智斗/冒险',av:'AV1000008',hotNum:998},
            {id:9,img:require("@/assets/img/animate/jjdjr.jpg"),path:'/animePage',title:'进击的巨人',type:'战斗/黑暗/奇幻',av:'AV1000009',hotNum:999},
            {id:10,img:require("@/assets/img/animate/nazimie.jpg"),path:'/animePage',title:'夏目友人帐',type:'剧情/奇幻/治愈',av:'AV1000010',hotNum:820},
            {id:11,img:require("@/assets/img/animate/guimie.jpg"),path:'/animePage',title:'鬼灭之刃',type:'热血/战斗/冒险',av:'AV1000011',hotNum:999},
            {id:12,img:require("@/assets/img/animate/hy.jpg"),path:'/animePage',title:'辉夜大小姐想让我告白',type:'恋爱/校园/智斗/日常',av:'AV1000012',hotNum:973},
        ],
        previews:[
            {img:require("@/assets/img/slide/slide1.jpg"),vdo:require("@/assets/video/movie.mp4"),title:'1 yellow hello world hello world hello world hello world hello world ',type:'黄色',path:'/videoPage',av:'AV0000001',intro:'这是yellow的简介',upname:'xiao',fanNums:'0',playNums:'0'},
            {img:require("@/assets/img/slide/slide2.jpg"),vdo:require("@/assets/video/movie1.mp4"),title:'1blue hello world hello world hello world  hello world hello world ',type:'蓝色',path:'/videoPage',av:'AV0000002',intro:'这是blue的简介',upname:'xiao',fanNums:'0',playNums:'0'},
            {img:require("@/assets/img/slide/slide3.jpg"),vdo:require("@/assets/video/video1.mp4"),title:'1red hello world hello world hello world  hello world hello world ',type:'红色',path:'/videoPage',av:'AV0000003',intro:'这是red的简介',upname:'xiao',fanNums:'0',playNums:'0'},
            {img:require("@/assets/img/slide/slide1.jpg"),vdo:require("@/assets/video/movie.mp4"),title:'2 yellow  hello world hello world hello world  hello world hello world ',type:'黄色',path:'/videoPage',av:'AV0000004',intro:'这是yellow的简介',upname:'xiao',fanNums:'0',playNums:'0'},
            {img:require("@/assets/img/slide/slide2.jpg"),vdo:require("@/assets/video/movie1.mp4"),title:'2blue hello world hello world hello world  hello world hello world ',type:'蓝色',path:'/videoPage',av:'AV0000005',intro:'这是blue的简介',upname:'xiao',fanNums:'0',playNums:'0'},
            {img:require("@/assets/img/slide/slide3.jpg"),vdo:require("@/assets/video/video1.mp4"),title:'2red hello world hello world hello world  hello world hello world ',type:'红色',path:'/videoPage',av:'AV0000006',intro:'这是red的简介',upname:'xiao',fanNums:'0',playNums:'0'},
            {img:require("@/assets/img/slide/slide1.jpg"),vdo:require("@/assets/video/movie.mp4"),title:'3videoPage hello world hello world hello world  hello world hello world ',type:'黄色',path:'/videoPage',av:'AV0000007',intro:'这是yellow的简介',upname:'xiao',fanNums:'0',playNums:'0'},
            {img:require("@/assets/img/slide/slide2.jpg"),vdo:require("@/assets/video/movie1.mp4"),title:'3blue hello world hello world hello world  hello world hello world ',type:'蓝色',path:'/videoPage',av:'AV0000008',intro:'这是blue的简介',upname:'xiao',fanNums:'0',playNums:'0'},
            {img:require("@/assets/img/slide/slide3.jpg"),vdo:require("@/assets/video/video1.mp4"),title:'3red hello world hello world hello world  hello world hello world ',type:'红色',path:'/videoPage',av:'AV0000009',intro:'这是red的简介',upname:'xiao',fanNums:'0',playNums:'0'},
            {img:require("@/assets/img/slide/slide1.jpg"),vdo:require("@/assets/video/movie.mp4"),title:'4videoPage hello world hello world hello world  hello world hello world ',type:'黄色',path:'/videoPage',av:'AV0000010',intro:'这是yellow的简介',upname:'xiao',fanNums:'0',playNums:'0'},
            {img:require("@/assets/img/slide/slide2.jpg"),vdo:require("@/assets/video/movie1.mp4"),title:'4blue hello world hello world hello world hello world hello world  ',type:'蓝色',path:'/videoPage',av:'AV0000011',intro:'这是blue的简介',upname:'xiao',fanNums:'0',playNums:'0'},
            {img:require("@/assets/img/slide/slide3.jpg"),vdo:require("@/assets/video/video1.mp4"),title:'4red hello world hello world hello world hello world hello world  ',type:'红色',path:'/videoPage',av:'AV0000012',intro:'这是red的简介',upname:'xiao',fanNums:'0',playNums:'0'},
            {img:require("@/assets/img/slide/slide1.jpg"),vdo:require("@/assets/video/movie.mp4"),title:'5videoPage hello world hello world hello world ',type:'黄色',path:'/videoPage',av:'AV0000013',intro:'这是yellow的简介',upname:'xiao',fanNums:'0',playNums:'0'},
            {img:require("@/assets/img/slide/slide2.jpg"),vdo:require("@/assets/video/movie1.mp4"),title:'5blue hello world hello world hello world ',type:'蓝色',path:'/videoPage',av:'AV0000014',intro:'这是blue的简介',upname:'xiao',fanNums:'0',playNums:'0'},
            {img:require("@/assets/img/slide/slide3.jpg"),vdo:require("@/assets/video/video1.mp4"),title:'5red hello world hello world hello world ',type:'红色',path:'/videoPage',av:'AV0000015',intro:'这是red的简介',upname:'xiao',fanNums:'0',playNums:'0'},
            {img:require("@/assets/img/slide/slide1.jpg"),vdo:require("@/assets/video/movie.mp4"),title:'6videoPage hello world hello world hello world ',type:'黄色',path:'/videoPage',av:'AV0000016',intro:'这是yellow的简介',upname:'xiao',fanNums:'0',playNums:'0'},
            {img:require("@/assets/img/slide/slide2.jpg"),vdo:require("@/assets/video/movie1.mp4"),title:'6blue hello world hello world hello world ',type:'蓝色',path:'/videoPage',av:'AV0000017',intro:'这是blue的简介',upname:'xiao',fanNums:'0',playNums:'0'},
            {img:require("@/assets/img/slide/slide3.jpg"),vdo:require("@/assets/video/video1.mp4"),title:'6red hello world hello world hello world ',type:'红色',path:'/videoPage',av:'AV0000018',intro:'这是red的简介',upname:'xiao',fanNums:'0',playNums:'0'},
            {img:require("@/assets/img/slide/slide1.jpg"),vdo:require("@/assets/video/movie.mp4"),title:'7videoPage hello world hello world hello world ',type:'黄色',path:'/videoPage',av:'AV0000019',intro:'这是yellow的简介',upname:'xiao',fanNums:'0',playNums:'0'},
            {img:require("@/assets/img/slide/slide2.jpg"),vdo:require("@/assets/video/movie1.mp4"),title:'7blue hello world hello world hello world ',type:'蓝色',path:'/videoPage',av:'AV0000020',intro:'这是blue的简介',upname:'xiao',fanNums:'0',playNums:'0'},
            {img:require("@/assets/img/slide/slide3.jpg"),vdo:require("@/assets/video/video1.mp4"),title:'7red hello world hello world hello world ',type:'红色',path:'/videoPage',av:'AV0000021',intro:'这是red的简介',upname:'xiao',fanNums:'0',playNums:'0'},
            {img:require("@/assets/img/slide/slide1.jpg"),vdo:require("@/assets/video/movie.mp4"),title:'8videoPage hello world hello world hello world ',type:'黄色',path:'/videoPage',av:'AV0000022',intro:'这是yellow的简介',upname:'xiao',fanNums:'0',playNums:'0'},
            {img:require("@/assets/img/slide/slide2.jpg"),vdo:require("@/assets/video/movie1.mp4"),title:'8blue hello world hello world hello world ',type:'蓝色',path:'/videoPage',av:'AV0000023',intro:'这是blue的简介',upname:'xiao',fanNums:'0',playNums:'0'},
            {img:require("@/assets/img/slide/slide3.jpg"),vdo:require("@/assets/video/video1.mp4"),title:'8red hello world hello world hello world ',type:'红色',path:'/videoPage',av:'AV0000024',intro:'这是red的简介',upname:'xiao',fanNums:'0',playNums:'0'},
        ],
        
        info:[{
            portrait:require("@/assets/img/images/portrait.png"),
            upname:'xiao',
            fansnum:'0',
            isFollow:'flase'}
        ],
        documentary:[
            {img:require("@/assets/img/movie/documentary/22Cover.jpg"),cover:require("@/assets/img/movie/documentary/22.jpg"),path:'/docu',title:'二十二',type:'纪实',av:'AV2000001'},
            {img:require("@/assets/img/movie/documentary/helloAISlide.jpg"),cover:require("@/assets/img/movie/documentary/helloAI.jpg"),path:'/docu',title:'你好 AI',type:'科技/社会',av:'AV2000002'},
            {img:require("@/assets/img/movie/documentary/hpzgSlide.jpg"),cover:require("@/assets/img/movie/documentary/hpzg.jpg"),path:'/docu',title:'航拍中国',type:'自然/人文/旅行',av:'AV2000003'},
            {img:require("@/assets/img/movie/documentary/jshy.jpg"),cover:require("@/assets/img/movie/documentary/jshy.jpg"),path:'/docu',title:'决胜荒野',type:'探险/运动',av:'AV2000004'},
            {img:require("@/assets/img/movie/documentary/rsyc.jpg"),cover:require("@/assets/img/movie/documentary/rsyc.jpg"),path:'/docu',title:'人生一串',type:'美食/社会',av:'AV2000005'},
            {img:require("@/assets/img/movie/documentary/wydx.jpg"),cover:require("@/assets/img/movie/documentary/wydx.jpg"),path:'/docu',title:'无影灯下',type:'科技/医疗',av:'AV2000006'},

        ],
        movie:[
            {img:require("@/assets/img/movie/movie/InceptionCover.jpg"),cover:require("@/assets/img/movie/movie/Inception.jpg"),path:'/films',title:'盗梦空间',type:'科幻/悬疑',av:'AV2100001'},
            {img:require("@/assets/img/movie/movie/InterstellarSlide.jpg"),cover:require("@/assets/img/movie/movie/Interstellar.jpg"),path:'/films',title:'星际穿越',type:'科幻/冒险',av:'AV2100002'},
            {img:require("@/assets/img/movie/movie/FlippedCover.jpg"),cover:require("@/assets/img/movie/movie/Flipped.jpg"),path:'/films',title:'怦然心动',type:'剧情/喜剧/爱情',av:'AV2100003'},
            {img:require("@/assets/img/movie/movie/shawshankSlide.jpg"),cover:require("@/assets/img/movie/movie/shawshank.jpg"),path:'/films',title:'肖申克的救赎',type:'剧情/犯罪',av:'AV2100004'},
            {img:require("@/assets/img/movie/movie/bulletsFlyCover.jpg"),cover:require("@/assets/img/movie/movie/bulletsFly.jpg"),path:'/films',title:'让子弹飞',type:'剧情/喜剧/动作',av:'AV2100005'},
            {img:require("@/assets/img/movie/movie/lesCover.jpg"),cover:require("@/assets/img/movie/movie/les.jpg"),path:'/films',title:'放牛班的春天',type:'剧情/音乐',av:'AV2100006'},
            {img:require("@/assets/img/movie/movie/nezaCover.jpg"),cover:require("@/assets/img/movie/movie/neza.jpg"),path:'/films',title:'哪吒之魔童降世',type:'剧情/喜剧/动画',av:'AV2100007'},
            {img:require("@/assets/img/movie/movie/chongqingCover.jpg"),cover:require("@/assets/img/movie/movie/chongqing.jpg"),path:'/films',title:'重庆森林',type:'剧情/爱情',av:'AV2100008'},
            {img:require("@/assets/img/movie/movie/earthCover.jpg"),cover:require("@/assets/img/movie/movie/earth.jpg"),path:'/films',title:'流浪地球',type:'科幻/灾难',av:'AV2100009'},
            {img:require("@/assets/img/movie/movie/aganCover.jpg"),cover:require("@/assets/img/movie/movie/agan.jpg"),path:'/films',title:'阿甘正传',type:'剧情/爱情',av:'AV2100010'},
            {img:require("@/assets/img/movie/movie/wolfCover.jpg"),cover:require("@/assets/img/movie/movie/wolf.jpg"),path:'/films',title:'狼少年',type:'奇幻/爱情',av:'AV2100011'},
            {img:require("@/assets/img/movie/movie/leonCover.jpg"),cover:require("@/assets/img/movie/movie/leon.jpg"),path:'/films',title:'这个杀手不太冷',type:'剧情/动作/犯罪',av:'AV2100012'},          
        ],
        TV:[
            {img:require("@/assets/img/movie/TV/jyernv.jpg"),path:'/TV',title:'家有儿女',type:'喜剧/家庭',av:'AV2200001'},
            {img:require("@/assets/img/movie/TV/west.jpg"),path:'/TV',title:'西游记',type:'剧情/奇幻',av:'AV2200002'},
            {img:require("@/assets/img/movie/TV/1988.jpg"),path:'/TV',title:'请回答1988',type:'剧情/喜剧/爱情',av:'AV2200003'},
            {img:require("@/assets/img/movie/TV/fzrsw.jpg"),path:'/TV',title:'非自然死亡',type:'剧情/悬疑',av:'AV2200004'},
            {img:require("@/assets/img/movie/TV/sherlock.jpg"),path:'/TV',title:'神探夏洛克',type:'剧情/犯罪/悬疑',av:'AV2200005'},
            {img:require("@/assets/img/movie/TV/bbad.jpg"),path:'/TV',title:'绝命毒师',type:'剧情/犯罪',av:'AV2200006'},
            {img:require("@/assets/img/movie/TV/kiss.jpg"),path:'/TV',title:'恶作剧之吻',type:'恋爱/少女',av:'AV2200007'},

        ],
        shop1:[
            {cover:require("@/assets/img/shop/commodity/1.jpg"),img:require("@/assets/img/shop/commodity/2.jpg"),title:'火影忍者 卡卡西手办',price:99,IP:'火影忍者'},
            {cover:require("@/assets/img/shop/commodity/3.jpg"),img:require("@/assets/img/shop/commodity/4.jpg"),title:'JOJO DIO手办',price:99,IP:'JOJO的奇幻冒险'},
            {cover:require("@/assets/img/shop/commodity/11.jpg"),img:require("@/assets/img/shop/commodity/11.jpg"),title:'狼与香辛料 赫萝手办',price:265,IP:'狼与香辛料'},
            {cover:require("@/assets/img/shop/commodity/5.jpg"),img:require("@/assets/img/shop/commodity/6.jpg"),title:'夏目友人帐 猫咪老师',price:99,IP:'夏目友人帐'},
            {cover:require("@/assets/img/shop/commodity/7.jpg"),img:require("@/assets/img/shop/commodity/8.jpg"),title:'火影忍者 佐助手办',price:215,IP:'火影忍者'},
            {cover:require("@/assets/img/shop/commodity/9.jpg"),img:require("@/assets/img/shop/commodity/10.jpg"),title:'狼与香辛料 赫萝手办',price:265,IP:'狼与香辛料'},

        ],
        playNum:1,
        fansNum:0,
        isPlay:false,
        //带index数据
        detailData:'',
        animeData:'',
        movieData:'',
        docuData:'',
        //

        recData:'',
        recMovieData:'',
        recDocuData:''
    },
    getters:{
        AnimeSlide:state=>{
            const animeSlideData = state.anime.slice(4,6).concat(state.anime.slice(2,3))
            // .concat(state.documentary.slice(2,3))
            // .concat(TVSlide.splice())
            return animeSlideData
        },
        MovieSlide:state=>{
            const movieSlideData = state.movie.slice(1,2).concat(state.documentary.slice(2,3))
            // .concat(TVSlide.splice())
            return movieSlideData
        },
        hotList:state=>{
            const hotList = JSON.parse(JSON.stringify(state.anime))
            function compare(key){
                return function(a,b) {
                    return b[key] - a[key]
                }
            }
            return hotList.sort(compare("hotNum"))
        }
    },
    mutations:{
        isPlayReset(){
            this.state.isPlay = true
        },
        sendData(state,index){
            // console.log(index);
            
            
            this.state.detailData = this.state.previews[index]
            this.state.docuData = this.state.documentary[index]
            this.state.movieData = this.state.movie[index]
            //
            // const concatMovieData = this.state.documentary.concat(this.state.movie)
            // console.log(concatMovieData);
            
            // this.state.concatMovie = concatMovieData[index]
            
            // console.log(typeof.);
            
        },
        sendAnimeData(state,index){
            this.state.animeData = this.state.anime[index]
        },
        //当前页面封面与推荐区域封面不重复显示
        useRecData(state,index){
            //深拷贝
            this.state.recData = JSON.parse(JSON.stringify(this.state.anime))
            this.state.recMovieData = JSON.parse(JSON.stringify(this.state.movie))
            this.state.recDocuData = JSON.parse(JSON.stringify(this.state.documentary))
            // this.state.recSpliceData = this.state.recData.splice(index,1)
            this.state.recData.splice(index,1)
            this.state.recMovieData.splice(index,1)
            this.state.recDocuData.splice(index,1)
            
        }
    }
    
})
export default store