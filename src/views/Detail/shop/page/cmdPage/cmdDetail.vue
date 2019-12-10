<template>
<div>
    <div class="ill">
        <span>运费说明：</span>
        不满足包邮条件的订单，江浙沪地区10元运费，其他地区15元。
        可配送区域为中国大陆地区(除特殊边远地区)，收件地址在此外的地区请勿下单。
    </div>
    <div class="cmdDetailImg">
        <img :src="cmdDetailData.cover" alt="">
        <img :src="cmdDetailData.img" alt="">
    </div>
</div>
</template>

<script>
export default {
    props:{
        cmdDetailData:{
            default(){
                return ''
            }
        }
    }

}
</script>

<style>
.ill{
    padding: 0.5rem;
    margin: 0.3rem;
    border:grey 1px solid;
    border-radius: 0.5rem;
    font-size: 0.8rem;
    color: grey;
    letter-spacing: 0.1rem;
    line-height: 1rem;
}
.ill > span{
    font-size: 0.95rem;
    color: black;
}
.cmdDetailImg{
    width: 100%;
    height:100%;
    text-align: center;
}
.cmdDetailImg > img{
    width: 22rem;
    height: 18rem;
    margin-bottom: 1rem;

}
</style>