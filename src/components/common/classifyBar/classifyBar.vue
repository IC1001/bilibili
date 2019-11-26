<template>
<div class="classifyBar">
<slot></slot>
</div>
</template>

<script>

export default {
    components:{

    }

}
</script>

<style>
.classifyBar{
    display: flex;
    justify-content: space-around;
    /* align-items: center; */
    /* margin-top: 5.6rem; */
    padding-bottom: 0.5rem;
    height: 3rem;
    background-color: white;
    margin-bottom: 1rem;

}


</style>