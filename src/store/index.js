import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        // imgArr:[
        //     {img:require("@/assets/img/slide/slide1.jpg"),vdo:require("@/assets/video/movie.mp4"),title:'1 yellow hello world hello world hello world hello world hello world ',type:'黄色',path:'/videoPage',av:'AV0000001',intro:'这是yellow的简介',upname:'xiao',fanNums:0,playNums:'0'},
        //     {img:require("@/assets/img/slide/slide2.jpg"),vdo:require("@/assets/video/movie1.mp4"),title:'1blue hello world hello world hello world  hello world hello world ',type:'蓝色',path:'/videoPage',av:'AV0000002',intro:'这是blue的简介',upname:'xiao',fanNums:0,playNums:'0'},
        //     {img:require("@/assets/img/slide/slide3.jpg"),vdo:require("@/assets/video/video1.mp4"),title:'1red hello world hello world hello world  hello world hello world ',type:'红色',path:'/videoPage',av:'AV0000003',intro:'这是red的简介',upname:'xiao',fanNums:0,playNums:'0'},
        // ],
        ismine:false,
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
         
        animeAll:[
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
            //国漫
            {id:13,img:require("@/assets/img/animate/567.jpg"),path:'/animePage',title:'刺客伍六七',type:'热血/战斗/搞笑',av:'AV1000013',hotNum:999},
            {id:14,img:require("@/assets/img/animate/linlong.jpg"),path:'/animePage',title:'灵笼',type:'科幻/热血/战斗/奇幻',av:'AV1000014',hotNum:999},
            {id:15,img:require("@/assets/img/animate/qzgs.jpg"),path:'/animePage',title:'全职高手',type:'热血/小说改/战斗',av:'AV1000015',hotNum:999},
            {id:16,img:require("@/assets/img/animate/frz.jpg"),path:'/animePage',title:'非人哉',type:'漫画改/日常/搞笑',av:'AV1000016',hotNum:911},
            {id:17,img:require("@/assets/img/animate/lxh.jpg"),path:'/animePage',title:'罗小黑战记',type:'萌系/奇幻/治愈',av:'AV1000017',hotNum:901},
            {id:18,img:require("@/assets/img/animate/yrzx.jpg"),path:'/animePage',title:'一人之下',type:'战斗/奇幻/热血',av:'AV1000018',hotNum:987},

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
        animeCN:[
            {id:13,img:require("@/assets/img/animate/567.jpg"),path:'/animePage',title:'刺客伍六七',type:'热血/战斗/搞笑',av:'AV1000013',hotNum:999},
            {id:14,img:require("@/assets/img/animate/linlong.jpg"),path:'/animePage',title:'灵笼',type:'科幻/热血/战斗/奇幻',av:'AV1000014',hotNum:999},
            {id:15,img:require("@/assets/img/animate/qzgs.jpg"),path:'/animePage',title:'全职高手',type:'热血/小说改/战斗',av:'AV1000015',hotNum:999},
            {id:16,img:require("@/assets/img/animate/frz.jpg"),path:'/animePage',title:'非人哉',type:'漫画改/日常/搞笑',av:'AV1000016',hotNum:911},
            {id:17,img:require("@/assets/img/animate/lxh.jpg"),path:'/animePage',title:'罗小黑战记',type:'萌系/奇幻/治愈',av:'AV1000017',hotNum:901},
            {id:18,img:require("@/assets/img/animate/yrzx.jpg"),path:'/animePage',title:'一人之下',type:'战斗/奇幻/热血',av:'AV1000018',hotNum:987},

        ],
        previews:[
            {img:require("@/assets/img/slide/slide1.jpg"),vdo:require("@/assets/video/movie.mp4"),title:'1 yellow hello world hello world hello world hello world hello world ',type:'黄色',path:'/videoPage',av:'AV0000001',intro:'这是yellow的简介',upname:'xiao',fanNums:0,playNums:'0',portrait:require("@/assets/img/images/portrait.png")},
            {img:require("@/assets/img/slide/slide2.jpg"),vdo:require("@/assets/video/movie1.mp4"),title:'1blue hello world hello world hello world  hello world hello world ',type:'蓝色',path:'/videoPage',av:'AV0000002',intro:'这是blue的简介',upname:'xiao',fanNums:0,playNums:'0',portrait:require("@/assets/img/images/portrait.png")},
            {img:require("@/assets/img/slide/slide3.jpg"),vdo:require("@/assets/video/video1.mp4"),title:'1red hello world hello world hello world  hello world hello world ',type:'红色',path:'/videoPage',av:'AV0000003',intro:'这是red的简介',upname:'xiao',fanNums:0,playNums:'0',portrait:require("@/assets/img/images/portrait.png")},
            {img:require("@/assets/img/slide/slide1.jpg"),vdo:require("@/assets/video/movie.mp4"),title:'2 yellow  hello world hello world hello world  hello world hello world ',type:'黄色',path:'/videoPage',av:'AV0000004',intro:'这是yellow的简介',upname:'xiao',fanNums:0,playNums:'0',portrait:require("@/assets/img/images/portrait.png")},
            {img:require("@/assets/img/slide/slide2.jpg"),vdo:require("@/assets/video/movie1.mp4"),title:'2blue hello world hello world hello world  hello world hello world ',type:'蓝色',path:'/videoPage',av:'AV0000005',intro:'这是blue的简介',upname:'xiao',fanNums:0,playNums:'0',portrait:require("@/assets/img/images/portrait.png")},
            {img:require("@/assets/img/slide/slide3.jpg"),vdo:require("@/assets/video/video1.mp4"),title:'2red hello world hello world hello world  hello world hello world ',type:'红色',path:'/videoPage',av:'AV0000006',intro:'这是red的简介',upname:'xiao',fanNums:0,playNums:'0',portrait:require("@/assets/img/images/portrait.png")},
            {img:require("@/assets/img/slide/slide1.jpg"),vdo:require("@/assets/video/movie.mp4"),title:'3videoPage hello world hello world hello world  hello world hello world ',type:'黄色',path:'/videoPage',av:'AV0000007',intro:'这是yellow的简介',upname:'xiao',fanNums:0,playNums:'0',portrait:require("@/assets/img/images/portrait.png")},
            {img:require("@/assets/img/slide/slide2.jpg"),vdo:require("@/assets/video/movie1.mp4"),title:'3blue hello world hello world hello world  hello world hello world ',type:'蓝色',path:'/videoPage',av:'AV0000008',intro:'这是blue的简介',upname:'xiao',fanNums:0,playNums:'0',portrait:require("@/assets/img/images/portrait.png")},
            {img:require("@/assets/img/slide/slide3.jpg"),vdo:require("@/assets/video/video1.mp4"),title:'3red hello world hello world hello world  hello world hello world ',type:'红色',path:'/videoPage',av:'AV0000009',intro:'这是red的简介',upname:'xiao',fanNums:0,playNums:'0',portrait:require("@/assets/img/images/portrait.png")},
            {img:require("@/assets/img/slide/slide1.jpg"),vdo:require("@/assets/video/movie.mp4"),title:'4videoPage hello world hello world hello world  hello world hello world ',type:'黄色',path:'/videoPage',av:'AV0000010',intro:'这是yellow的简介',upname:'xiao',fanNums:0,playNums:'0',portrait:require("@/assets/img/images/portrait.png")},
            {img:require("@/assets/img/slide/slide2.jpg"),vdo:require("@/assets/video/movie1.mp4"),title:'4blue hello world hello world hello world hello world hello world  ',type:'蓝色',path:'/videoPage',av:'AV0000011',intro:'这是blue的简介',upname:'xiao',fanNums:0,playNums:'0',portrait:require("@/assets/img/images/portrait.png")},
            {img:require("@/assets/img/slide/slide3.jpg"),vdo:require("@/assets/video/video1.mp4"),title:'4red hello world hello world hello world hello world hello world  ',type:'红色',path:'/videoPage',av:'AV0000012',intro:'这是red的简介',upname:'xiao',fanNums:0,playNums:'0',portrait:require("@/assets/img/images/portrait.png")},
            {img:require("@/assets/img/slide/slide1.jpg"),vdo:require("@/assets/video/movie.mp4"),title:'5videoPage hello world hello world hello world ',type:'黄色',path:'/videoPage',av:'AV0000013',intro:'这是yellow的简介',upname:'xiao',fanNums:0,playNums:'0',portrait:require("@/assets/img/images/portrait.png")},
            {img:require("@/assets/img/slide/slide2.jpg"),vdo:require("@/assets/video/movie1.mp4"),title:'5blue hello world hello world hello world ',type:'蓝色',path:'/videoPage',av:'AV0000014',intro:'这是blue的简介',upname:'xiao',fanNums:0,playNums:'0',portrait:require("@/assets/img/images/portrait.png")},
            {img:require("@/assets/img/slide/slide3.jpg"),vdo:require("@/assets/video/video1.mp4"),title:'5red hello world hello world hello world ',type:'红色',path:'/videoPage',av:'AV0000015',intro:'这是red的简介',upname:'xiao',fanNums:0,playNums:'0',portrait:require("@/assets/img/images/portrait.png")},
            {img:require("@/assets/img/slide/slide1.jpg"),vdo:require("@/assets/video/movie.mp4"),title:'6videoPage hello world hello world hello world ',type:'黄色',path:'/videoPage',av:'AV0000016',intro:'这是yellow的简介',upname:'xiao',fanNums:0,playNums:'0',portrait:require("@/assets/img/images/portrait.png")},
            {img:require("@/assets/img/slide/slide2.jpg"),vdo:require("@/assets/video/movie1.mp4"),title:'6blue hello world hello world hello world ',type:'蓝色',path:'/videoPage',av:'AV0000017',intro:'这是blue的简介',upname:'xiao',fanNums:0,playNums:'0',portrait:require("@/assets/img/images/portrait.png")},
            {img:require("@/assets/img/slide/slide3.jpg"),vdo:require("@/assets/video/video1.mp4"),title:'6red hello world hello world hello world ',type:'红色',path:'/videoPage',av:'AV0000018',intro:'这是red的简介',upname:'xiao',fanNums:0,playNums:'0',portrait:require("@/assets/img/images/portrait.png")},
            {img:require("@/assets/img/slide/slide1.jpg"),vdo:require("@/assets/video/movie.mp4"),title:'7videoPage hello world hello world hello world ',type:'黄色',path:'/videoPage',av:'AV0000019',intro:'这是yellow的简介',upname:'xiao',fanNums:0,playNums:'0',portrait:require("@/assets/img/images/portrait.png")},
            {img:require("@/assets/img/slide/slide2.jpg"),vdo:require("@/assets/video/movie1.mp4"),title:'7blue hello world hello world hello world ',type:'蓝色',path:'/videoPage',av:'AV0000020',intro:'这是blue的简介',upname:'xiao',fanNums:0,playNums:'0',portrait:require("@/assets/img/images/portrait.png")},
            {img:require("@/assets/img/slide/slide3.jpg"),vdo:require("@/assets/video/video1.mp4"),title:'7red hello world hello world hello world ',type:'红色',path:'/videoPage',av:'AV0000021',intro:'这是red的简介',upname:'xiao',fanNums:0,playNums:'0',portrait:require("@/assets/img/images/portrait.png")},
            {img:require("@/assets/img/slide/slide1.jpg"),vdo:require("@/assets/video/movie.mp4"),title:'8videoPage hello world hello world hello world ',type:'黄色',path:'/videoPage',av:'AV0000022',intro:'这是yellow的简介',upname:'xiao',fanNums:0,playNums:'0',portrait:require("@/assets/img/images/portrait.png")},
            {img:require("@/assets/img/slide/slide2.jpg"),vdo:require("@/assets/video/movie1.mp4"),title:'8blue hello world hello world hello world ',type:'蓝色',path:'/videoPage',av:'AV0000023',intro:'这是blue的简介',upname:'xiao',fanNums:0,playNums:'0',portrait:require("@/assets/img/images/portrait.png")},
            {img:require("@/assets/img/slide/slide3.jpg"),vdo:require("@/assets/video/video1.mp4"),title:'8red hello world hello world hello world ',type:'红色',path:'/videoPage',av:'AV0000024',intro:'这是red的简介',upname:'xiao',fanNums:0,playNums:'0',portrait:require("@/assets/img/images/portrait.png")},
        ],
        
        info:[
            {portrait:require("@/assets/img/images/portrait.png"),upname:'xiao',fansnum:0,isFollow:false},
            {portrait:require("@/assets/img/images/iconfont/admin.png"),upname:'游客',fansnum:0,isFollow:false}
        ],
        movieAll:[
            {img:require("@/assets/img/movie/movie/InceptionCover.jpg"),cover:require("@/assets/img/movie/movie/Inception.jpg"),path:'/films',title:'盗梦空间',type:'科幻/悬疑',av:'AV2100001',hotNum:988},
            {img:require("@/assets/img/movie/movie/InterstellarSlide.jpg"),cover:require("@/assets/img/movie/movie/Interstellar.jpg"),path:'/films',title:'星际穿越',type:'科幻/冒险',av:'AV2100002',hotNum:988},
            {img:require("@/assets/img/movie/movie/FlippedCover.jpg"),cover:require("@/assets/img/movie/movie/Flipped.jpg"),path:'/films',title:'怦然心动',type:'剧情/喜剧/爱情',av:'AV2100003',hotNum:999},
            {img:require("@/assets/img/movie/movie/shawshankSlide.jpg"),cover:require("@/assets/img/movie/movie/shawshank.jpg"),path:'/films',title:'肖申克的救赎',type:'剧情/犯罪',av:'AV2100004',hotNum:996},
            {img:require("@/assets/img/movie/movie/bulletsFlyCover.jpg"),cover:require("@/assets/img/movie/movie/bulletsFly.jpg"),path:'/films',title:'让子弹飞',type:'剧情/喜剧/动作',av:'AV2100005',hotNum:878},
            {img:require("@/assets/img/movie/movie/lesCover.jpg"),cover:require("@/assets/img/movie/movie/les.jpg"),path:'/films',title:'放牛班的春天',type:'剧情/音乐',av:'AV2100006',hotNum:877},
            {img:require("@/assets/img/movie/movie/nezaCover.jpg"),cover:require("@/assets/img/movie/movie/neza.jpg"),path:'/films',title:'哪吒之魔童降世',type:'剧情/喜剧/动画',av:'AV2100007',hotNum:900},
            {img:require("@/assets/img/movie/movie/chongqingCover.jpg"),cover:require("@/assets/img/movie/movie/chongqing.jpg"),path:'/films',title:'重庆森林',type:'剧情/爱情',av:'AV2100008',hotNum:820},
            {img:require("@/assets/img/movie/movie/earthCover.jpg"),cover:require("@/assets/img/movie/movie/earth.jpg"),path:'/films',title:'流浪地球',type:'科幻/灾难',av:'AV2100009',hotNum:984},
            {img:require("@/assets/img/movie/movie/aganCover.jpg"),cover:require("@/assets/img/movie/movie/agan.jpg"),path:'/films',title:'阿甘正传',type:'剧情/爱情',av:'AV2100010',hotNum:978},
            {img:require("@/assets/img/movie/movie/wolfCover.jpg"),cover:require("@/assets/img/movie/movie/wolf.jpg"),path:'/films',title:'狼少年',type:'奇幻/爱情',av:'AV2100011',hotNum:811},
            {img:require("@/assets/img/movie/movie/leonCover.jpg"),cover:require("@/assets/img/movie/movie/leon.jpg"),path:'/films',title:'这个杀手不太冷',type:'剧情/动作/犯罪',av:'AV2100012',hotNum:924},  
        //   
            {img:require("@/assets/img/movie/documentary/22Cover.jpg"),cover:require("@/assets/img/movie/documentary/22.jpg"),path:'/films',title:'二十二',type:'纪实',av:'AV2000013',hotNum:853},
            {img:require("@/assets/img/movie/documentary/helloAISlide.jpg"),cover:require("@/assets/img/movie/documentary/helloAI.jpg"),path:'/films',title:'你好 AI',type:'科技/社会',av:'AV2000014',hotNum:843},
            {img:require("@/assets/img/movie/documentary/hpzgSlide.jpg"),cover:require("@/assets/img/movie/documentary/hpzg.jpg"),path:'/films',title:'航拍中国',type:'自然/人文/旅行',av:'AV2000015',hotNum:888},
            {img:require("@/assets/img/movie/documentary/jshyCover.jpg"),cover:require("@/assets/img/movie/documentary/jshy.jpg"),path:'/films',title:'决胜荒野',type:'探险/运动',av:'AV2000016',hotNum:923},
            {img:require("@/assets/img/movie/documentary/rsycCover.jpg"),cover:require("@/assets/img/movie/documentary/rsyc.jpg"),path:'/films',title:'人生一串',type:'美食/社会',av:'AV2000017',hotNum:996},
            {img:require("@/assets/img/movie/documentary/wydxCover.jpg"),cover:require("@/assets/img/movie/documentary/wydx.jpg"),path:'/films',title:'无影灯下',type:'科技/医疗',av:'AV2000018',hotNum:899},

   //
            {img:require("@/assets/img/movie/TV/jyernv.jpg"),path:'/films',title:'家有儿女',type:'喜剧/家庭',av:'AV2200019',hotNum:999},
            {img:require("@/assets/img/movie/TV/west.jpg"),path:'/films',title:'西游记',type:'剧情/奇幻',av:'AV2200020',hotNum:888},
            {img:require("@/assets/img/movie/TV/1988.jpg"),path:'/films',title:'请回答1988',type:'剧情/喜剧/爱情',av:'AV2200021',hotNum:988},
            {img:require("@/assets/img/movie/TV/fzrsw.jpg"),path:'/films',title:'非自然死亡',type:'剧情/悬疑',av:'AV2200022',hotNum:989},
            {img:require("@/assets/img/movie/TV/sherlock.jpg"),path:'/films',title:'神探夏洛克',type:'剧情/犯罪/悬疑',av:'AV2200023',hotNum:952},
            {img:require("@/assets/img/movie/TV/bbad.jpg"),path:'/films',title:'绝命毒师',type:'剧情/犯罪',av:'AV2200024',hotNum:849},
            {img:require("@/assets/img/movie/TV/kiss.jpg"),path:'/films',title:'恶作剧之吻',type:'恋爱/少女',av:'AV2200025',hotNum:863},
        ],
        documentary:[
            {img:require("@/assets/img/movie/documentary/22Cover.jpg"),cover:require("@/assets/img/movie/documentary/22.jpg"),path:'/films',title:'二十二',type:'纪实',av:'AV2000013',hotNum:853},
            {img:require("@/assets/img/movie/documentary/helloAISlide.jpg"),cover:require("@/assets/img/movie/documentary/helloAI.jpg"),path:'/films',title:'你好 AI',type:'科技/社会',av:'AV2000014',hotNum:843},
            {img:require("@/assets/img/movie/documentary/hpzgSlide.jpg"),cover:require("@/assets/img/movie/documentary/hpzg.jpg"),path:'/films',title:'航拍中国',type:'自然/人文/旅行',av:'AV2000015',hotNum:888},
            {img:require("@/assets/img/movie/documentary/jshyCover.jpg"),cover:require("@/assets/img/movie/documentary/jshy.jpg"),path:'/films',title:'决胜荒野',type:'探险/运动',av:'AV2000016',hotNum:923},
            {img:require("@/assets/img/movie/documentary/rsycCover.jpg"),cover:require("@/assets/img/movie/documentary/rsyc.jpg"),path:'/films',title:'人生一串',type:'美食/社会',av:'AV2000017',hotNum:996},
            {img:require("@/assets/img/movie/documentary/wydxCover.jpg"),cover:require("@/assets/img/movie/documentary/wydx.jpg"),path:'/films',title:'无影灯下',type:'科技/医疗',av:'AV2000018',hotNum:899},

        ],
        movie:[
            {img:require("@/assets/img/movie/movie/InceptionCover.jpg"),cover:require("@/assets/img/movie/movie/Inception.jpg"),path:'/films',title:'盗梦空间',type:'科幻/悬疑',av:'AV2100001',hotNum:988},
            {img:require("@/assets/img/movie/movie/InterstellarSlide.jpg"),cover:require("@/assets/img/movie/movie/Interstellar.jpg"),path:'/films',title:'星际穿越',type:'科幻/冒险',av:'AV2100002',hotNum:988},
            {img:require("@/assets/img/movie/movie/FlippedCover.jpg"),cover:require("@/assets/img/movie/movie/Flipped.jpg"),path:'/films',title:'怦然心动',type:'剧情/喜剧/爱情',av:'AV2100003',hotNum:999},
            {img:require("@/assets/img/movie/movie/shawshankSlide.jpg"),cover:require("@/assets/img/movie/movie/shawshank.jpg"),path:'/films',title:'肖申克的救赎',type:'剧情/犯罪',av:'AV2100004',hotNum:996},
            {img:require("@/assets/img/movie/movie/bulletsFlyCover.jpg"),cover:require("@/assets/img/movie/movie/bulletsFly.jpg"),path:'/films',title:'让子弹飞',type:'剧情/喜剧/动作',av:'AV2100005',hotNum:878},
            {img:require("@/assets/img/movie/movie/lesCover.jpg"),cover:require("@/assets/img/movie/movie/les.jpg"),path:'/films',title:'放牛班的春天',type:'剧情/音乐',av:'AV2100006',hotNum:877},
            {img:require("@/assets/img/movie/movie/nezaCover.jpg"),cover:require("@/assets/img/movie/movie/neza.jpg"),path:'/films',title:'哪吒之魔童降世',type:'剧情/喜剧/动画',av:'AV2100007',hotNum:900},
            {img:require("@/assets/img/movie/movie/chongqingCover.jpg"),cover:require("@/assets/img/movie/movie/chongqing.jpg"),path:'/films',title:'重庆森林',type:'剧情/爱情',av:'AV2100008',hotNum:820},
            {img:require("@/assets/img/movie/movie/earthCover.jpg"),cover:require("@/assets/img/movie/movie/earth.jpg"),path:'/films',title:'流浪地球',type:'科幻/灾难',av:'AV2100009',hotNum:984},
            {img:require("@/assets/img/movie/movie/aganCover.jpg"),cover:require("@/assets/img/movie/movie/agan.jpg"),path:'/films',title:'阿甘正传',type:'剧情/爱情',av:'AV2100010',hotNum:978},
            {img:require("@/assets/img/movie/movie/wolfCover.jpg"),cover:require("@/assets/img/movie/movie/wolf.jpg"),path:'/films',title:'狼少年',type:'奇幻/爱情',av:'AV2100011',hotNum:811},
            {img:require("@/assets/img/movie/movie/leonCover.jpg"),cover:require("@/assets/img/movie/movie/leon.jpg"),path:'/films',title:'这个杀手不太冷',type:'剧情/动作/犯罪',av:'AV2100012',hotNum:924},          
        ],
        TV:[
            {img:require("@/assets/img/movie/TV/jyernv.jpg"),path:'/films',title:'家有儿女',type:'喜剧/家庭',av:'AV2200019',hotNum:999},
            {img:require("@/assets/img/movie/TV/west.jpg"),path:'/films',title:'西游记',type:'剧情/奇幻',av:'AV2200020',hotNum:888},
            {img:require("@/assets/img/movie/TV/1988.jpg"),path:'/films',title:'请回答1988',type:'剧情/喜剧/爱情',av:'AV2200021',hotNum:988},
            {img:require("@/assets/img/movie/TV/fzrsw.jpg"),path:'/films',title:'非自然死亡',type:'剧情/悬疑',av:'AV2200022',hotNum:989},
            {img:require("@/assets/img/movie/TV/sherlock.jpg"),path:'/films',title:'神探夏洛克',type:'剧情/犯罪/悬疑',av:'AV2200023',hotNum:952},
            {img:require("@/assets/img/movie/TV/bbad.jpg"),path:'/films',title:'绝命毒师',type:'剧情/犯罪',av:'AV2200024',hotNum:849},
            {img:require("@/assets/img/movie/TV/kiss.jpg"),path:'/films',title:'恶作剧之吻',type:'恋爱/少女',av:'AV2200025',hotNum:863},

        ],
        shop1:[
            {cover:require("@/assets/img/shop/commodity/shop1/1.jpg"),img:require("@/assets/img/shop/commodity/shop1/2.jpg"),title:'火影忍者 卡卡西手办',price:'￥99',IP:'火影忍者',path:'/cmdPage?id=0'},
            {cover:require("@/assets/img/shop/commodity/shop1/3.jpg"),img:require("@/assets/img/shop/commodity/shop1/4.jpg"),title:'JOJO DIO手办',price:'￥99',IP:'JOJO的奇幻冒险',path:'/cmdPage?id=1'},
            {cover:require("@/assets/img/shop/commodity/shop1/5.jpg"),img:require("@/assets/img/shop/commodity/shop1/6.jpg"),title:'阴阳师 大天狗Q版手办',price:'￥349',IP:'阴阳师',path:'/cmdPage?id=2'},
            {cover:require("@/assets/img/shop/commodity/shop1/7.jpg"),img:require("@/assets/img/shop/commodity/shop1/8.jpg"),title:'火影忍者 佐助手办',price:'￥215',IP:'火影忍者',path:'/cmdPage?id=3'},
            {cover:require("@/assets/img/shop/commodity/shop1/9.jpg"),img:require("@/assets/img/shop/commodity/shop1/10.jpg"),title:'狼与香辛料 赫萝手办',price:'￥265',IP:'狼与香辛料',path:'/cmdPage?id=4'},

            {cover:require("@/assets/img/shop/commodity/shop1/12.jpg"),img:require("@/assets/img/shop/commodity/shop1/12.jpg"),title:'一拳超人(8人)Q版手办',price:'￥370',IP:'一拳超人',path:'/cmdPage?id=5'},
            {cover:require("@/assets/img/shop/commodity/shop1/13.jpg"),img:require("@/assets/img/shop/commodity/shop1/14.jpg"),title:'鬼灭之刃 弥豆子手办',price:'￥1059',IP:'鬼灭之刃',path:'/cmdPage?id=6'},
            {cover:require("@/assets/img/shop/commodity/shop1/15.jpg"),img:require("@/assets/img/shop/commodity/shop1/16.jpg"),title:'海贼王 索隆手办',price:'￥209',IP:'海贼王',path:'/cmdPage?id=7'},
            {cover:require("@/assets/img/shop/commodity/shop1/17.jpg"),img:require("@/assets/img/shop/commodity/shop1/18.jpg"),title:'路人女主的养成方法 加藤惠手办',price:'￥1059',IP:'路人女主的养成方法',path:'/cmdPage?id=8'},
            {cover:require("@/assets/img/shop/commodity/shop1/19.jpg"),img:require("@/assets/img/shop/commodity/shop1/20.jpg"),title:'初音未来手办',price:'￥1059',IP:'初音未来',path:'/cmdPage?id=9'},
            {cover:require("@/assets/img/shop/commodity/shop1/21.jpg"),img:require("@/assets/img/shop/commodity/shop1/22.jpg"),title:'埃罗芒阿老师 和泉纱雾手办',price:'￥669',IP:'埃罗芒阿老师',path:'/cmdPage?id=10'},
            {cover:require("@/assets/img/shop/commodity/shop1/23.jpg"),img:require("@/assets/img/shop/commodity/shop1/24.jpg"),title:'命运石之门 牧濑红莉栖手办',price:'￥645',IP:'命运石之门',path:'/cmdPage?id=11'},
        ],
        shop2:[
            {cover:require("@/assets/img/shop/commodity/shop2/1.jpg"),img:require("@/assets/img/shop/commodity/shop2/2.jpg"),title:'2233安卓手机壳',price:'￥59',IP:'bilibili',path:'/cmdPage?id=12'},
            {cover:require("@/assets/img/shop/commodity/shop2/3.jpg"),img:require("@/assets/img/shop/commodity/shop2/4.jpg"),title:'2233IPhone 7/8/X手机壳',price:'￥49',IP:'bilibili',path:'/cmdPage?id=13'},
            {cover:require("@/assets/img/shop/commodity/shop2/5.jpg"),img:require("@/assets/img/shop/commodity/shop2/6.jpg"),title:'夏目友人帐 猫咪老师抱枕',price:'￥99',IP:'夏目友人帐',path:'/cmdPage?id=14'},
            {cover:require("@/assets/img/shop/commodity/shop2/7.jpg"),img:require("@/assets/img/shop/commodity/shop2/8.jpg"),title:'bilibili小电视水杯',price:'￥79',IP:'bilibili',path:'/cmdPage?id=15'},
            {cover:require("@/assets/img/shop/commodity/shop2/9.jpg"),img:require("@/assets/img/shop/commodity/shop2/10.jpg"),title:'bilibili红色帆布鞋',price:'￥233',IP:'bilibili',path:'/cmdPage?id=16'},
            {cover:require("@/assets/img/shop/commodity/shop2/11.jpg"),img:require("@/assets/img/shop/commodity/shop2/12.jpg"),title:'bilibili长条小电视抱枕',price:'￥199',IP:'bilibili',path:'/cmdPage?id=17'},
            {cover:require("@/assets/img/shop/commodity/shop2/13.jpg"),img:require("@/assets/img/shop/commodity/shop2/14.jpg"),title:'bilibili小电视棉拖鞋',price:'￥79',IP:'bilibili',path:'/cmdPage?id=18'},
            {cover:require("@/assets/img/shop/commodity/shop2/15.jpg"),img:require("@/assets/img/shop/commodity/shop2/16.jpg"),title:'bilibili小电视泡面碗',price:'￥109',IP:'bilibili',path:'/cmdPage?id=19'},
            {cover:require("@/assets/img/shop/commodity/shop2/17.jpg"),img:require("@/assets/img/shop/commodity/shop2/18.jpg"),title:'bilibili小电视 黑色马克杯',price:'￥59',IP:'bilibili',path:'/cmdPage?id=20'},
            {cover:require("@/assets/img/shop/commodity/shop2/19.jpg"),img:require("@/assets/img/shop/commodity/shop2/20.jpg"),title:'bilibili小电视 方块U盘',price:'￥79',IP:'bilibili',path:'/cmdPage?id=21'},
            {cover:require("@/assets/img/shop/commodity/shop2/21.jpg"),img:require("@/assets/img/shop/commodity/shop2/22.jpg"),title:'bilibili 斜挎包',price:'￥122',IP:'bilibili',path:'/cmdPage?id=22'},

        ],
        shop3:[
            {cover:require("@/assets/img/shop/Pic/1.jpg"),img:require("@/assets/img/shop/Pic/1.jpg"),title:'【手办美图】从零开始的异世界生活',IP:'bilibili'},
            {cover:require("@/assets/img/shop/Pic/2.png"),img:require("@/assets/img/shop/Pic/2.png"),title:'【手办美图】从零开始的异世界生活 拉姆雷姆女仆装',IP:'bilibili'},
            {cover:require("@/assets/img/shop/Pic/3.jpg"),img:require("@/assets/img/shop/Pic/3.jpg"),title:'【手办美图】万圣节 22娘',IP:'夏目友人帐'},
            {cover:require("@/assets/img/shop/Pic/4.jpg"),img:require("@/assets/img/shop/Pic/4.jpg"),title:'【手办美图】万圣节 33娘',IP:'bilibili'},

        ],
        shop4:[
            {cover:require("@/assets/img/shop/commodity/shop4/9.jpg"),img:require("@/assets/img/shop/commodity/shop4/10.jpg"),title:'高达 拼装模型',price:'￥129',IP:'高达',path:'/cmdPage?id=23'},
            {cover:require("@/assets/img/shop/commodity/shop4/7.jpg"),img:require("@/assets/img/shop/commodity/shop4/8.jpg"),title:'海贼王 海盗船黄金梅丽号 拼装模型',price:'￥200',IP:'海贼王',path:'/cmdPage?id=24'},
            {cover:require("@/assets/img/shop/commodity/shop4/5.jpg"),img:require("@/assets/img/shop/commodity/shop4/5.jpg"),title:'海贼王 雷德·佛斯号 拼装模型',price:'￥217',IP:'海贼王',path:'/cmdPage?id=25'},
            {cover:require("@/assets/img/shop/commodity/shop4/3.jpg"),img:require("@/assets/img/shop/commodity/shop4/4.jpg"),title:'高达00潜行者 拼装模型',price:'￥55',IP:'高达',path:'/cmdPage?id=26'},
            {cover:require("@/assets/img/shop/commodity/shop4/2.jpg"),img:require("@/assets/img/shop/commodity/shop4/2.jpg"),title:'HG 机动战士高达0079 量产型扎古|| 拼装模型',price:'￥59',IP:'高达',path:'/cmdPage?id=27'},
            {cover:require("@/assets/img/shop/commodity/shop4/1.jpg"),img:require("@/assets/img/shop/commodity/shop4/1.jpg"),title:'MG 机动战士高达0079 铁球 卡版 拼装模型',price:'￥109',IP:'高达',path:'/cmdPage?id=28'},

        ],

        // playNum:1,
        fansNum:0,
        isPlay:false,
        //带index数据
        detailData:'',
        animeData:'',
        animeDataCN:'',
        animeDataAll:'',
        movieDataAll:'',
        //影视
        movieData:'',
        docuData:'',
        TVData:'',
        //推荐内容
        recData:'',
        recDataCN:'',
        recMovieData:'',
        recDocuData:'',
        recTVData:'',
        //加载更多
        loadMoreData:0,
        loadShopData:0,
        loadShop1Data:0,
        //购物车
        cartArr:[],
        //我的收藏
        collectVideo:[],
        followAnimeArr:[],
        followMovieArr:[],
        //热门榜单页
        hlData:'',
        rankData:[],
        animeType:[],
        zoneData:[],
        channelType:'',
        channel:[
            {img:require('@/assets/img/classify/channel_03.png'),title:'全部频道',path:'/allChannel',cover:require('@/assets/img/classify/channel/LOL.jpg')},
            {img:require('@/assets/img/classify/channel_05.png'),title:'英雄联盟',path:'/channelPage',cover:require('@/assets/img/classify/channel/LOL.jpg')},
            {img:require('@/assets/img/classify/channel_07.png'),title:'互动视频',path:'/channelPage',cover:require('@/assets/img/classify/channel/HDSP.jpg')},
            {img:require('@/assets/img/classify/channel_09.png'),title:'鬼畜',path:'/channelPage',cover:require('@/assets/img/classify/channel/GC.jpg')},
            {img:require('@/assets/img/classify/channel_11.png'),title:'搞笑',path:'/channelPage',cover:require('@/assets/img/classify/channel/GX.jpg')},
        ],
        channel2:[
            {img:require('@/assets/img/classify/channel_18.png'),title:'新宝岛',path:'/channelPage',cover:require('@/assets/img/classify/channel/XBD.jpg')},
            {img:require('@/assets/img/classify/channel_19.png'),title:'数据可视化',path:'/channelPage',cover:require('@/assets/img/classify/channel/SJKSH.jpg')},
            {img:require('@/assets/img/classify/channel_20.png'),title:'手书',path:'/channelPage',cover:require('@/assets/img/classify/channel/SS.jpg')},
            {img:require('@/assets/img/classify/channel_21.png'),title:'喵星人',path:'/channelPage',cover:require('@/assets/img/classify/channel/MXR.jpg')},
            {img:require('@/assets/img/classify/channel_22.png'),title:'定格动画',path:'/channelPage',cover:require('@/assets/img/classify/channel/DGDH.jpg')},
        ],
        history:[]
        
    },
    getters:{
        Channel:state=>{
            return state.channel.concat(state.channel2)
        },
        AnimeSlide:state=>{
            const animeSlideData = state.animeAll.slice(4,6).concat(state.animeAll.slice(13,15))
            // .concat(state.documentary.slice(2,3))
            // .concat(TVSlide.splice())
            return animeSlideData
        },
        AnimeSlideCN:state=>{
            const animeSlideDataCN = state.animeCN.slice(1,5)
            // .concat(state.documentary.slice(2,3))
            // .concat(TVSlide.splice())
            return animeSlideDataCN
        },
        MovieSlide:state=>{
            const movieSlideData = state.movie.slice(1,2).concat(state.documentary.slice(2,3))
            // .concat(TVSlide.splice())
            return movieSlideData
        },
        //热门排行
        hotList:state=>{
            const hotList = JSON.parse(JSON.stringify(state.anime))
            function compare(key){
                return function(a,b) {
                    return b[key] - a[key]
                }
            }
            return hotList.sort(compare("hotNum"))
        },
        hotListCN:state=>{
            const hotListCN = JSON.parse(JSON.stringify(state.animeCN))
            function compare(key){
                return function(a,b) {
                    return b[key] - a[key]
                }
            }
            return hotListCN.sort(compare("hotNum"))
        },
        bloodList:state=>{
            const animeList = JSON.parse(JSON.stringify(state.anime))
            const bloodList = []
            for(let i = 0;i<animeList.length;i++){
                if(animeList[i].type.indexOf("热血")!==-1){
                    bloodList.push(animeList[i])
                }
            }
            function compare(key){
                return function(a,b) {
                        return b[key] - a[key]
                }
            }
            
            return bloodList.sort(compare("hotNum"))

        },
        fantasyList:state=>{
            const animeList = JSON.parse(JSON.stringify(state.anime))
            const fantasyList = []
            for(let i = 0;i<animeList.length;i++){
                if(animeList[i].type.indexOf("奇幻")!==-1){
                    fantasyList.push(animeList[i])
                }
            }
            function compare(key){
                return function(a,b) {
                        return b[key] - a[key]
                }
            }
            
            return fantasyList.sort(compare("hotNum"))

        },
        shop123(state){
            return state.shop1.slice(0,6).concat(state.shop3.slice(1,4)).concat(state.shop2).concat(state.shop4).concat(state.shop1.slice(6,12))
        },
        shopAll(state){
            return state.shop1.concat(state.shop2).concat(state.shop4)
        },
        Dshop1:state=>{
            const Dshop1 = JSON.parse(JSON.stringify(state.shop1))
            return state.shop1.concat(state.shop1).concat(Dshop1.reverse()).concat(Dshop1.slice(0,3))
        },
        Dshop2:state=>{
            const Dshop2 = JSON.parse(JSON.stringify(state.shop2))
            return state.shop2.concat(state.shop2).concat(Dshop2.reverse()).concat(Dshop2.slice(0,3))
        },
        Dshop4:state=>{
            const Dshop4 = JSON.parse(JSON.stringify(state.shop4))
            return state.shop4.concat(state.shop4).concat(Dshop4.reverse()).concat(Dshop4.slice(0,3))
        },
        docuList:state=>{
            const docuList = JSON.parse(JSON.stringify(state.documentary))
            function compare(key){
                return function(a,b){
                    return b[key] - a[key]
                }
            }
            return docuList.sort(compare("hotNum"))
        },
        filmsList:state=>{
            const filmsList = JSON.parse(JSON.stringify(state.movie))
            function compare(key){
                return function(a,b){
                    return b[key] - a[key]
                }
            }
            return filmsList.sort(compare("hotNum"))
        },
        TVList:state=>{
            const TVList = JSON.parse(JSON.stringify(state.TV))
            function compare(key){
                return function(a,b){
                    return b[key] - a[key]
                }
            }
            return TVList.sort(compare("hotNum"))
        },
        jpList:state=>{
            const jpList = JSON.parse(JSON.stringify(state.anime))
            function compare(key){
                return function(a,b){
                    return b[key] - a[key]
                }
            }
            return jpList.sort(compare("hotNum"))
        },
        cnList:state=>{
            const cnList = JSON.parse(JSON.stringify(state.animeCN))
            function compare(key){
                return function(a,b){
                    return b[key] - a[key]
                }
            }
            return cnList.sort(compare("hotNum"))
        },
        allList:state=>{
            const allList = JSON.parse(JSON.stringify(state.animeAll))
            function compare(key){
                return function(a,b){
                    return b[key] - a[key]
                }
            }
            return allList.sort(compare("hotNum"))
        },
        // LOL:state=>{
        //     for(let i = 0;i < state.previews.length;i++){
        //         if(i%2==0){
        //             LOL.push(state.previews[i])
        //         }
        //     }
        //     return LOL
        // }
        
    },
    mutations:{
        switchMine(){
            this.state.ismine = !this.state.ismine
        },
        isPlayReset(){
            this.state.isPlay = true
        },
        sendData(state,index){
            this.state.detailData = this.state.previews[index]
            this.state.docuData = this.state.documentary[index]
            this.state.movieData = this.state.movie[index]
            this.state.TVData = this.state.TV[index]
            this.state.movieDataAll = this.state.movieAll[index]
        },
        sendAnimeData(state,index){
            this.state.animeData = this.state.anime[index]
            this.state.animeDataCN = this.state.animeCN[index]
            this.state.animeDataAll = this.state.animeAll[index]
        },
        //当前页面封面与推荐区域封面不重复显示
        useRecData(state,index){
            //深拷贝
            this.state.recData = JSON.parse(JSON.stringify(this.state.anime))
            this.state.recDataCN = JSON.parse(JSON.stringify(this.state.animeCN))
            this.state.recMovieData = JSON.parse(JSON.stringify(this.state.movie))
            this.state.recDocuData = JSON.parse(JSON.stringify(this.state.documentary))
            this.state.recTVData = JSON.parse(JSON.stringify(this.state.TV))
            // this.state.recSpliceData = this.state.recData.splice(index,1)
            this.state.recData.splice(index,1)
            this.state.recDataCN.splice(index,1)
            this.state.recMovieData.splice(index,1)
            this.state.recDocuData.splice(index,1)     
            this.state.recTVData.splice(index,1)        
        },
        loadMore(state){
            if(this.state.loadMoreData == 0){
                this.state.loadMoreData=this.state.previews
            }else{
                //模拟无限加载
                this.state.loadMoreData=this.state.loadMoreData.concat(this.state.previews)
                // this.commit('loadMore',--times)
            }        
        },
        //收藏collectVideo
        addCollect(state,item){
            this.state.collectVideo.push(item)
        },
        //取消收藏
        removeCollect(state,item){            
            for(let i = 0; i < this.state.collectVideo.length; i++){
                if(this.state.collectVideo[i].av == item){
                    this.state.collectVideo.splice(i,1)
                }
            }
        },
        addToFollowAnime(state,item){
            this.state.followAnimeArr.push(item)
        },
        //取消追番
        deleteFollowAnime(state,item){            
            for(let i = 0; i < this.state.followAnimeArr.length; i++){
                if(this.state.followAnimeArr[i].av == item){
                    this.state.followAnimeArr.splice(i,1)
                }
            }
        },
        //添加数据到我的追剧
        addToFollowMovie(state,item){
            this.state.followMovieArr.push(item)


        },
        //取消追剧
        deleteFollowMovie(state,item){
            
            for(let i = 0; i < this.state.followMovieArr.length; i++){
                if(this.state.followMovieArr[i].av == item){
                    this.state.followMovieArr.splice(i,1)
                }
            }

            // delete this.state.cartArr[index]
        },
        //添加数据到购物车
        addToCart(state,payload){
            // item = new Array(item)
            // item.push('isCheck:false')
            // for(i=0,i<payload.buyNums,i++){
            payload.item.isCheck = false
            payload.item.cmdNums = payload.buyNums
            this.state.cartArr.push(payload.item)
            for(let i = 0; i < this.state.cartArr.length; i++){
                this.state.cartArr[i].index = i
                // console.log(this.state.cartArr);
            }
        },
        //删除购物车数据
        deleteFromCart(state,index){
            this.state.cartArr.splice(index,1)
            for(let i = 0; i < this.state.cartArr.length; i++){
                // console.log(this.state.cartArr[i]);
                
                this.state.cartArr[i].index = i
            }
            // delete this.state.cartArr[index]
        },
        //价格
        priceChange(state,index){
            this.state.cartArr[index].isCheck = !this.state.cartArr[index].isCheck
            // console.log(this.state.cartArr[index].isCheck);
            
        },
        
        setIsWant(state,index){
            for(let i=0;i<this.getters.shopAll.length;i++){
                this.getters.shopAll[i].iswant = false
            }
            // if(this.getters.shop123[index].iswant){
            //     this.getters.shop123[index].iswant
            // }else{
            //     this.getters.shop123[index].iswant = false
            //     console.log(this.getters.shop123[index]);
            
            // }
        },
        iswanted(state,index){
            this.getters.shopAll[index].iswant = true
            console.log(this.getters.shopAll);
            
        },
        //基本操作
        setZoneData(state,item){
            this.state.zoneData = []
            for(let i = 0;i<this.state.previews.length;i++){
                if(this.state.previews[i].upname == item){
                    this.state.zoneData.push(this.state.previews[i])
                }
            }
        },
        setBasic(state,index){
            for(let i=0;i<this.state.previews.length;i++){
                this.state.previews[i].playNums = 0
                this.state.previews[i].comments = []
                this.state.previews[i].OTO = false
                this.state.previews[i].cai = false
                this.state.previews[i].like = false
                this.state.previews[i].poin = false
                this.state.previews[i].collect = false
            }
        },
        setAnimeBasic(state,index){
            for(let i=0;i<this.state.animeAll.length;i++){
                this.state.animeAll[i].comments = []
                this.state.animeAll[i].touch = false
                this.state.animeAll[i].follow = true

            }

        },
        setMovieBasic(state,index){
            for(let i=0;i<this.state.movieAll.length;i++){
                this.state.movieAll[i].comments = []
                this.state.movieAll[i].touch = false
                this.state.movieAll[i].follow = true

            }

        },
        //播放次数
        isplayed(state){
            this.state.detailData.playNums++
            
        },
        //点赞栏状态设置
        isOT(){
            this.state.detailData.like = true
            this.state.detailData.cai = false
            this.state.detailData.collect = true
            this.state.detailData.poin = true
        },
        islike(state,index){
            // this.state.previews[index].like = true
            this.state.detailData.like = !this.state.detailData.like 
            this.state.detailData.cai = false
            
        },
        iscai(){
            this.state.detailData.cai = !this.state.detailData.cai
            this.state.detailData.like = false
        },
        iscollect(){
            this.state.detailData.collect = !this.state.detailData.collect
        },
        ispoin(){
            this.state.detailData.poin = true
        },
        //anime页
        isTouch(){
            this.state.animeDataAll.touch = !this.state.animeDataAll.touch
        },
        isFollow(){
            this.state.animeDataAll.follow = !this.state.animeDataAll.follow

        },
        //movie页
        movieTouch(){
            this.state.movieDataAll.touch = !this.state.movieDataAll.touch
        },
        movieFollow(){
            this.state.movieDataAll.follow = !this.state.movieDataAll.follow

        },
        // isplayed1(state){
        //     this.state.detailData.playNums++
        //     // this.state.f5++
        // },
        // commentComit(state,newComment){
        //     // this.state.detailData.comments.push(newComment)
        //     // this.state.detailData.comments += newComment 
        //     console.log(this.state.detailData);
            
        // },
        //热门榜单方法
        sethlData(state,payload){
            this.state.hlData = ''
            this.state.hlData = payload
        },
        setrankData(state,index){
            if(index == 0){
                // console.log('already');
                this.state.rankData = this.getters.docuList
            }else if(index == 1){
                // console.log('already');
                this.state.rankData = this.getters.filmsList
            }else if(index == 2){
                this.state.rankData = this.getters.TVList
            }
        },
        setArankData(state,index){
            if(index == 0){
                // console.log('already');
                this.state.rankData = this.getters.jpList
            }else if(index == 1){
                // console.log('already');
                this.state.rankData = this.getters.cnList
            }else if(index == 2){
                this.state.rankData = this.getters.allList
            }
        },
        //索引
        setAnimeType(state,index){
            const animeAll = JSON.parse(JSON.stringify(this.state.animeAll))
            this.state.animeType = []
            if(index == 1){
                for(let i = 0;i < animeAll.length;i++){
                    if(animeAll[i].type.indexOf('热血')!==-1){
                        this.state.animeType.push(animeAll[i])
                    }
                }
            }else if(index == 2){
                for(let i = 0;i < animeAll.length;i++){
                    if(animeAll[i].type.indexOf('战斗')!==-1){
                        this.state.animeType.push(animeAll[i])
                    }
                }
            }else if(index == 3){
                for(let i = 0;i < animeAll.length;i++){
                    if(animeAll[i].type.indexOf('奇幻')!==-1){
                        this.state.animeType.push(animeAll[i])
                    }
                }                
            }else if(index == 4){
                for(let i = 0;i < animeAll.length;i++){
                    if(animeAll[i].type.indexOf('冒险')!==-1){
                        this.state.animeType.push(animeAll[i])
                    }
                }                
            }else if(index == 5){
                for(let i = 0;i < animeAll.length;i++){
                    if(animeAll[i].type.indexOf('架空')!==-1){
                        this.state.animeType.push(animeAll[i])
                    }
                }                
            }else if(index == 6){
                for(let i = 0;i < animeAll.length;i++){
                    if(animeAll[i].type.indexOf('科幻')!==-1){
                        this.state.animeType.push(animeAll[i])
                    }
                }                
            }else if(index == 7){
                for(let i = 0;i < animeAll.length;i++){
                    if(animeAll[i].type.indexOf('搞笑')!==-1){
                        this.state.animeType.push(animeAll[i])
                    }
                }                
            }else if(index == 8){
                for(let i = 0;i < animeAll.length;i++){
                    if(animeAll[i].type.indexOf('日常')!==-1){
                        this.state.animeType.push(animeAll[i])
                    }
                }                
            }else if(index == 9){
                for(let i = 0;i < animeAll.length;i++){
                    if(animeAll[i].type.indexOf('治愈')!==-1){
                        this.state.animeType.push(animeAll[i])
                    }
                }                
            }else if(index == 10){
                for(let i = 0;i < animeAll.length;i++){
                    if(animeAll[i].type.indexOf('智斗')!==-1){
                        this.state.animeType.push(animeAll[i])
                    }
                }                
            }else if(index == 11){
                for(let i = 0;i < animeAll.length;i++){
                    if(animeAll[i].type.indexOf('恋爱')!==-1){
                        this.state.animeType.push(animeAll[i])
                    }
                }               
            }else if(index == 12){
                for(let i = 0;i < animeAll.length;i++){
                    if(animeAll[i].type.indexOf('萌系')!==-1){
                        this.state.animeType.push(animeAll[i])
                    }
                }                
            }else if(index == 13){
                for(let i = 0;i < animeAll.length;i++){
                    if(animeAll[i].type.indexOf('穿越')!==-1){
                        this.state.animeType.push(animeAll[i])
                    }
                }                
            }else{
                this.state.animeType = animeAll
            }
        },
        toChannelPage(state,index){
            this.state.channelType = this.getters.Channel[index]
        },
        setHistory(state,item){
            const hisItem = JSON.parse(JSON.stringify(item))
            hisItem.Date = Date()            
            if(this.state.history.indexOf(hisItem) == -1){
                // const hisItem = JSON.parse(JSON.stringify(item))
                // hisItem.Date = Date()   
                this.state.history.unshift(hisItem)
            }
        }

    },
    actions:{
        isCheckChange(context,index) {
            context.commit('isCheckChange',index)

            
        },
        sendHistory(context,item){
            context.commit('setHistory',item)
        }
    }

})
export default store