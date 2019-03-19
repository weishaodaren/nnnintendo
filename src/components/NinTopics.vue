<template>
    <div class="nin_topics">
      <h2>最新话题</h2>
        <h1>-</h1>
        <h5>TOPICS</h5>
        <el-row>
          <el-col :sm=12 :md=8 :lg=6 
          v-for='(i,index) of items.slice(5,13)' :key='index'
          @mousemove="nin_move(index)" 
          :class="{'nin_bind_style':isA==index}">
            <div>
              <img :src="i.imgUrl"/>
               <h6>{{i.tname}}</h6> 
               <br><br>
               <p>{{Gamer}}</p>
               <p>{{i.publishTime}}</p>
            </div>
          </el-col>             
        </el-row>
        <!-- <p class="nin_title"> 
          TOPICS 
        </p> -->
        <hr>
    </div>
</template>

<script>
export default {
    data(){
      return{
        items:[],
        Gamer:'Nintendo Switch',
        isA:''
      }
    },
    methods:{
      nin_move:function(index){
      
      }
    },
    created(){
      this.$axios.get(this.$store.state.globalSettings.apiUrl+'index_middle').then((res)=>{
        console.log(res.data);
        this.items=res.data;
      }).catch((err)=>{
        console.log(err);
      })
    }
}
</script>

<style lang="scss">
    .nin_topics{
        margin-top: 40px;
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
          img{
            width:95%;
            height:140px;
            border-radius: 16px;
          }
          h6{
            font-weight: bolder;
          }
          p{
            opacity: 0.7;
            font-size: 10px;
          }
        }
    }
.nin_bind_style{
  img{
    opacity: 0.5;
  }
  h6{
    color:#e60012;
  }
}
</style>
