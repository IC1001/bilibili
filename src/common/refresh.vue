<template>
<div  @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" class="refreshBG">
	<transition name="refresh">
            <i class="el-icon-loading pullRefresh" v-show="isPull"></i> 
	</transition>
            <!-- <div v-show="isalert" class="refreshText">无更新内容</div>   -->

    <slot></slot>
</div>
</template>

<script>
export default {
    name:'pull-refresh',
    data(){
        return{
			startY:'',
			nowY:'',
			distance:'',
            isPull:false,
  
        }
    },
	methods:{
		touchStart(e){
            this.startY = e.targetTouches[0].clientY
		},
		touchMove(e){
			this.nowY = e.targetTouches[0].clientY
			if(this.startY < this.nowY){
				this.distance = this.nowY - this.startY 
			}
			let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
			if(scrollTop==0 && this.distance>=40){
				this.isPull = true
			}else if(this.distance < 40){
				this.isPull = false
			}
			
		},
		touchEnd(e){
			let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
			if(scrollTop==0 && this.distance>=40){
                this.isPull = true
                //回调   
                this.$emit('refresh')
				setTimeout(()=>{
                    this.isPull = false                                  
				},800)
			}else if(this.distance < 40){
                this.isPull = false
                

            }
			setTimeout(()=>{
                this.isPull = false
                this.startY=''
                this.nowY=''
                this.distance=''
			},800)
		}
	},
}
</script>

<style>
.pullRefresh{
	position: fixed;
	top:6rem;
	z-index: 1;
	margin-left: 48%;
	font-size: 1.4rem;
	color: #fa7298;
	background-color: white;
	border-radius: 50%;
	padding: 0.5rem;

}

.refresh-enter-active,.refresh-leave-active{
	transition: all 0.7s ease;
}
.refresh-enter,.refresh-leave-to{
	top: 0;
	opacity: 0;
}
</style>