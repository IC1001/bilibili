<template>
<div>
    <div class="hotListItem">
        <slot name="hot1"></slot>
        <img src="@/assets/img/images/iconfont/fire.png" id="fire">
        <span class="hotRank first" id="first"><i class="el-icon-s-platform" ><div>1</div></i></span>
    </div>
    <div class="hotListItem">
        <slot name="hot2"></slot>
        <img src="@/assets/img/images/iconfont/fire.png" id="fire">
        <span class="hotRank" id="second"><i class="el-icon-s-platform" ><div>2</div></i></span>
    </div>
    <div class="hotListItem">
        <slot name="hot3"></slot>
        <img src="@/assets/img/images/iconfont/fire.png" id="fire">
        <span class="hotRank" id="third"><i class="el-icon-s-platform" ><div>3</div></i></span>
    </div>

</div>
</template>

<script>
export default {

}
</script>

<style>
@import url('../../../assets/css/123.css');
.hotListItem{
    position: relative;
    /* height: 6rem; */
    /* line-height: 5rem; */
}
.hotListItem > div{
    font-size: 0.98rem;
    display: flex;
}
.hotListItem > div > img{
    width: 8rem;
    height: 5rem;
    border-radius: 8%;
    padding: 0.6rem 0 0.5rem 0;
    border-radius: 6%;
    
}
.hotListItem > div > div{
    line-height: 2.1rem;
    margin-left: 0.55rem;
}
.hotListItem > div > div > div{

    margin: 2rem 0 0 1rem ;
    color: red;
    font-size: 0.8rem;
    
}
.hotRank{
    right: 1.7rem;
    top: 0.5rem;
    position: absolute;

}
.hotRank > i{
    font-size: 1.8rem;
    position: absolute;
    color: gray;
}
.hotRank > i > div{
    font-size: 0.8rem;
    font-weight: 600;
    color: gainsboro;
    position: absolute;
    right: 0.65rem;
    top: 0.35rem;    

}
#fire{
    position: absolute;
    width: 1rem;
    height: 1rem;
    right: 6.2rem;
    bottom: 0.5rem;
}


</style>