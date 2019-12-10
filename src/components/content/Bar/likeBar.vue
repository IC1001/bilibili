<template>
       <!-- 点赞栏 -->
    <div class="likeBar">
        <slot></slot>

    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    beforeUpdate(){
 
        
    }

}
</script>

<style>
/* 点赞栏 */
.likeBar{
    display:flex;
    justify-content: space-around;
    margin-top: 1.56rem;
    border-bottom: 1px solid rgba(120, 120, 120, 0.2);
    padding-bottom:1rem;
    position: relative;
    
}
.likeBar > img {
    /* width: 1.875rem;
    height: 1.875rem; */
    width: 6.5%;
    height: 6.5%;
}

.F5{
    display: none;
}

</style>