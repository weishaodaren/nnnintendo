<template>
    <div class="nin_games">
        <div 
        @click="nin_status"
        :class="{'nin_title':isActive,'nin_title_reverse':''}"> 
          TOPICS
        </div>
    </div>
</template>

<script>
export default {
    data(){
        isActive:false
    },
    methods:{
        nin_status(){
            this.isActive=true
        }
    }
}
</script>

<style lang="scss">
.nin_games{
    width: 200px;
    margin:0 auto;
    .nin_title{
         color:#fff;
        font-weight: bolder;
        text-align: center;
        line-height: 50px;
         border-radius:46px;
         width:200px;
         height:50px;
         background: #e60012;
         float:left;
         @media screen and (min-width:800px) {
             margin-left:-17rem;
            margin-bottom: 3rem;
         }
    }
    .nin_title_reverse{
        color:#e60012;
        font-weight: bolder;
        text-align: center;
        line-height: 50px;
         border-radius:46px;
         width:200px;
         height:50px;
         background: #fff;
         float:left;
         @media screen and (min-width:800px) {
             margin-left:-17rem;
            margin-bottom: 3rem;
}
}
}
</style>
