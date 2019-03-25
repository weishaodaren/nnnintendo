<template>
    <div class="nin_topics">
      <h2>最新话题</h2>
        <h1>-</h1>
        <h5>TOPICS</h5>
        <el-row>
          <el-col :sm=12 :md=8 :lg=6 
          v-for='(i,index) of items.slice(5,13)' :key='index'>
            <div> 
              <a href="javascript:;">
              <img :src="i.imgUrl" @click='gogogogo' :data-lid="i.lid"/>
               <h6>{{i.tname}}</h6> 
               </a>
               <br><br>
               <p>{{i.Gamer}}</p>
               <p>{{i.publishTime}}</p>
            </div>
          </el-col>             
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
      return{
        items:[]
      }
    },
    methods:{
      gogogogo:function(e){
        var id =e.target.dataset.lid
        this.$router.push({path:'about/'+id});
      }
    },
    created(){
      this.$axios.get(this.$store.state.globalSettings.apiUrl+'index_middle').then((res)=>{
        this.items=res.data;
      }).catch((err)=>{
        console.log(err);
      })
    }
}
</script>

<style lang="scss">
    .nin_topics{
        margin-top: 80px;
        h2{
            text-align: center;
            opacity: 0.8;
            font-weight: bolder;
            font-size: 30px;
        }
        h1{
            text-align: center;
            color: #e60012;
        }
        h5{
          text-align:center;
          margin-bottom: 50px;
          opacity: 0.8;
          color:gray
        }
        div{
          height: 300px;
          padding-left:20px;
          padding-right:10px; 
          a{
            text-decoration-line: none;
            color: #000;
          img{
            width:95%;
            height:140px;
            border-radius: 16px;
          }
          h6{
            font-weight: bolder;
          }
          }:hover{
             color:#e60012;
              opacity: 0.9;
          }
         
        }
    }
    div p{
            opacity: 0.7;
            font-size: 10px;
            color:black
    }
</style>
