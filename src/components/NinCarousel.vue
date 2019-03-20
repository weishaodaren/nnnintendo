<template>
  <el-carousel :interval="3500" height="500px">
    <el-carousel-item v-for="(item,index) in nin_carousel" :key="index">
      <img :src="item.imgUrl"/>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
    data(){
        return{
            nin_carousel:[]
        }
    },
    created(){
        this.$axios.get(this.$store.state.globalSettings.apiUrl+'index').then((res)=>{
            this.nin_carousel=res.data;
        }).catch((err)=>{
            console.log(err);
        })
    }
}
</script>

<style lang="scss">
  .el-carousel__item {
    opacity: 0.95;
    line-height: 200px;
    margin: 0;
    img{
        width:100%;
    }
  }
</style>