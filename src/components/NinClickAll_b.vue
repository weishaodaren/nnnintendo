<template>
    <div class="nin_tit_bottom">
        <a href='javascript:;' class='nin_title_all'> 
            {{infomation}}
            <!-- {{name}} -->
        </a>
    </div>
</template>

<script>
export default {
    data(){
        return{
            infomation:'Nintendo Switch 游戏软体'
        }
    }
   
}
</script>

<style lang="scss">
.nin_tit_bottom{
    text-align: center;
    .nin_title_all{
        margin: 0,auto;
        position: relative;
        top:80px;
        left:1px;
        display: inline-block;
        text-decoration-line: none;
        // border-radius:46px;
        width:290px;
        height:50px;
        background: #e60012;
        color:#fff;
        font-weight: bolder;
        text-align: center;
        line-height: 50px;
        margin-bottom: 65px;
    }
}
</style>
