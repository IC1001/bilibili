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
const animePage = () => import ('@/views/Home/animePage/page/animePage.vue')
//纪录片页面
const docu = () => import ('@/views/Home/moviePage/page/docu.vue')
//电影页面
const films = () => import ('@/views/Home/moviePage/page/films.vue')
//shop页面子路由
//推荐页
const shopRec = () => import ('@/views/Shop/shopPage/shopRec.vue')





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
			{path:'',redirect:'推荐'}
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
	{path:'/animePage/:av',name:'animePage',component:animePage},
	{path:'/docu/:av',name:'docu',component:docu},
	{path:'/films/:av',name:'films',component:films},
	{path:'/slidePage/:uid',name:'slide',component:slidePage}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
