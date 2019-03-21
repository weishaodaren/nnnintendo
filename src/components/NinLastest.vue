<template>
    <div class='nin-lastest'>
        <el-carousel :interval="2000" type="card" height="180px">
            <el-carousel-item v-for="(item,index) in items_bottom" :key="index">
                <img :src="item.imgUrl"/>
                <h3>{{item.recoName}}</h3>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    data(){
        return{
            items_bottom:[]
        }
    },
    created(){
        this.$axios.get(this.$store.state.globalSettings.apiUrl+'index_reco').then((res)=>{
            console.log(res.data);
            this.items_bottom=res.data;
        }).catch((err)=>{
            console.log(err);
        });
    }
}
</script>


<style lang="scss">
    .nin-lastest{
        img{
            width:45%;
            opacity: 1;
        }
    }
</style>
