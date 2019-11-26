<template>
<div class="hotList">
    <div><slot></slot></div>
    <!-- <slot></slot> -->
</div>
</template>

<script>
export default {

}
</script>

<style>
.hotList{
    /* display: flex; */
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    background-color: #F5F5F5;
    background-image: linear-gradient(#F5F5F5,white);
    margin: 0.5rem 1rem 0rem 0rem;

    padding: 1rem 0.7rem;
    font-size: 1rem;
    border-radius: 5%;
    width: 15.625rem;
}
.hotList::-webkit-scrollbar{
    display: none;
}

</style>