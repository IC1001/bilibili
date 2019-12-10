<template>
<div>
    <div class="classShop">
        
        <div class="classTitle"><slot name="title">手办</slot></div>
        <div class="classShop1">
            <div class="classShop1Item">
                <slot name="x1">
 
                </slot>
            </div>
            <div class="classShop1Item">
                <slot name="x2">
  
                </slot>
            </div>
            <div class="classShop1Item">
                <slot name="x3">  

                </slot>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {

}
</script>

<style>
.classShop{
    height: 10rem;
    margin-left: 6rem;
    padding:0.6rem;
}
.classTitle{
    font-size: 0.9rem;
    margin-top: 0.5rem;
    font-weight: 600;

}
.classShop1{
    display: flex;

    
 
}
.classShop1Item {
    width: 5.8rem;
    height: 6rem;
    text-align: center;
    color: darkgrey;
    font-size: 0.8rem;
    font-weight: 500;

    
}
.classShop1Item > div > img{
    margin-bottom: 0.3rem;
    width: 5rem;
    height: 5rem;
    padding: 0.2rem;
    margin-top: 0.5rem;
    
}
.classShop1Item > div > div{

   /* 多出变省略号   */
    overflow:hidden; 
    display: -webkit-box;
    -webkit-line-clamp:1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
}

</style>