import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
// 主路由懒加载
const home = () => import ('@/views/Home/home.vue')
const classify = () => import ('@/views/Classify/classify.vue')
const show = () => import ('@/views/Show/show.vue')
const shop = () => import ('@/views/Shop/shop.vue')
const mine = () => import ('@/views/mine.vue')
//首页路由
const OLshow = () => import ('@/views/Home/OLshowPage/OLshow.vue')
const recommend = () => import ('@/views/Home/recommendPage/recommend.vue')
const hot = () => import ('@/views/Home/hotPage/hot.vue')
const anime = () => import ('@/views/Home/animePage/anime.vue')
const movie = () => import ('@/views/Home/moviePage/movie.vue')
//视频页面路由
const videoPage = () => import ('@/views/Detail/video/videoPage.vue')
// const detail = () => import ('@/views/Home/detailPage/detailPage.vue')
// const intro = () => import('@/views/Home/detailPage/intro.vue')
// const comment = () => import('@/views/Home/detailPage/comment.vue')
//轮播图页
const slidePage = () => import ('@/views/slidePage.vue')
//热门页面
// const rankPage  = () => import ('@/views/Home/hotPage/rankPage.vue')
const weekHot  = () => import ('@/views/Detail/hot/weekHot.vue')
const mustHot  = () => import ('@/views/Detail/hot/mustHot.vue')
//番剧页面
const animePage = () => import ('@/views/Detail/anime/animePage.vue')
const animePageCN = () => import ('@/views/Detail/anime/animePageCN.vue')
//番剧
const animeJPN = () => import ('@/views/Detail/anime/animeJPN/animeJPN.vue')
const animeCN = () => import ('@/views/Detail/anime/animeCN/animeCN.vue')
//影视页
const moviePage = () => import ('@/views/Detail/movie/moviePage.vue')
const Movie = () => import ('@/views/Detail/movie/movieChildren/Movie.vue')
const docuPage = () => import ('@/views/Detail/movie/movieChildren/docuPage.vue')
const filmsPage = () => import ('@/views/Detail/movie/movieChildren/filmsPage.vue')
const TVPage = () => import ('@/views/Detail/movie/movieChildren/TVPage.vue')
//纪录片页面
const docu = () => import ('@/views/Home/moviePage/page/docu.vue')
//电影页面
const films = () => import ('@/views/Home/moviePage/page/films.vue')
//电视剧页面
const TV = () => import ('@/views/Home/moviePage/page/TV.vue')
//热门榜单页
const hotListPage = () => import ('@/views/Detail/common/home/hotListPage.vue')
//索引
const animeIndex = () => import ('@/views/Detail/anime/index/animeIndex.vue')

//shop分类栏路由
const shop1 = () => import ('@/views/Detail/shop/shop1.vue')
const shop2 = () => import ('@/views/Detail/shop/shop2.vue')
const shop3 = () => import ('@/views/Detail/shop/shop3.vue')
const shop4 = () => import ('@/views/Detail/shop/shop4.vue')
const allClass = () => import ('@/views/Detail/shop/allClass.vue')
//购物车与客服页
const cart = () => import ('@/views/Detail/shop/cart.vue')
const service = () => import ('@/views/Detail/shop/service.vue')
//shop页面子路由
const shopRec = () => import ('@/views/Shop/shopPage/shopRec.vue')
const shopCom = () => import ('@/views/Shop/shopPage/shopCom.vue')
const shopPic = () => import ('@/views/Shop/shopPage/shopPic.vue')
const shopNews = () => import ('@/views/Shop/shopPage/shopNews.vue')
//商品详情页
const cmdPage = () => import ('@/views/Detail/shop/cmdPage.vue')

//频道
const allChannel = () => import ('@/views/Classify/detail/allChannel.vue')
const partPage = () => import ('@/views/Classify/detail/partPage.vue')
const channelPage = () => import ('@/views/Classify/detail/channelPage.vue')

//mine
const myCollect = () => import ('@/views/mine/myCollect.vue')
const DownLoad = () => import ('@/views/mine/DownLoad.vue')
const News = () => import ('@/views/mine/News.vue')
const history = () => import ('@/views/mine/history.vue')
//friends
const myFriends = () => import ('@/views/mine/myFriends.vue')
const zone = () => import ('@/views/mine/zone.vue')
const routes = [
	{
		path: '',
		redirect:'/home'
	},
	{
		path: '/home',
		name: 'home',
		component: home,
		children:[
			{path:'直播',component:OLshow},
			// {path:'',redirect:'推荐'},
			{path:'推荐',component:recommend},
			{path:'热门',component:hot},
			{path:'追番',component:anime},
			{path:'影视',component:movie}		
		],

	},
	// 热门页面
	{
		path: '/weekHot',
		name: 'weekHot',
		component: weekHot
	},
	{
		path: '/mustHot',
		name: 'mustkHot',
		component: mustHot
	},
	// 频道页
	{
		path: '/classify',
		name: 'classify',
		component: classify
	},
	{
		path: '/show',
		name: 'show',
		component: show
	},
	{
		path: '/shop',
		name: 'shop',
		component: shop,
		children:[
			{path:'推荐',component:shopRec},
			// {path:'',redirect:'推荐'},
			{path:'商品',component:shopCom},
			{path:'美图',component:shopPic},
			{path:'情报',component:shopNews},
			
			// {path:'commodity',component:shopRec},
			// {path:'meitu',component:shopRec},
		]
	},
	{
		path: '/mine',
		name: 'mine',
		component: mine
	},
	//detailPage路由
	{path:'/videoPage/:av',name:'videoPage',component:videoPage,meta:{keepAlive:true }},
	//番剧页
	{path:'/animePage/:av',name:'animePage',component:animePage},
	{path:'/animePageCN/:av',name:'animePageCN',component:animePageCN},
	{path:'/animeJPN',name:'animeJPN',component:animeJPN},
	{path:'/animeCN',name:'animeCN',component:animeCN},
	//影视
	{path:'/docu/:av',name:'docu',component:docu},
	{path:'/films/:av',name:'films',component:films},
	{path:'/TV/:av',name:'TV',component:TV},
	{path:'/movie',name:'movie',component:moviePage,
	 children:[
		{path:'推荐',component:Movie},
		{path:'纪录片',component:docuPage},
		// {path:'',redirect:'推荐'},
		{path:'电影',component:filmsPage},
		{path:'电视剧',component:TVPage},
	]
	},
	{path:'/hotListPage/:titles',name:'hotListPage',component:hotListPage},
	{path:'/animeIndex',name:'animeIndex',component:animeIndex},
	{path:'/slidePage',name:'slide',component:slidePage},
	{path:'/cmdPage',name:'cmdPage',component:cmdPage},
	{path:'/shop1/:title',name:'shop1',component:shop1},
	{path:'/shop2/:title',name:'shop2',component:shop2},
	{path:'/shop3/:title',name:'shop3',component:shop3},
	{path:'/shop4/:title',name:'shop4',component:shop4},
	{path:'/allClass/:title',name:'allClass',component:allClass},
	//购物车与客服
	{path:'/cart',name:'cart',component:cart},
	{path:'/service',name:'service',component:service},

	//频道
	{path:'/allChannel/:title',name:'allChannel',component:allChannel},
	{path:'/partPage/:title',name:'partPage',component:partPage},
	{path:'/channelPage/:title',name:'channelPage',component:channelPage},
	//
	{path:'/myCollect/:mine',name:'myCollect',component:myCollect},
	{path:'/DownLoad/:mine',name:'DownLoad',component:DownLoad},
	{path:'/News',name:'News',component:News},
	{path:'/history/:mine',name:'history',component:history},
	{path:'/myFriends/:num',name:'myFriends',component:myFriends},
	{path:'/zone',name:'zone',component:zone},
	
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
