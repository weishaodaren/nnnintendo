<template>
  <div class="nin-index">
  <header>
  <table>
    <tr>
      <td>
        <img :src="nin_logo" class="nin_logo"/>
      </td>  
      <td v-for="(i,index) of items" :key="index" @click="show1 = !show1"  @mousemove="addClass" @mouseleave="addClass1">
     {{i}}
      </td>  
      <td><a href="http://www.nintendo.com">英语</a>
        </td>
    </tr>  
  </table>
  <!-- 标题栏 -->
   <el-collapse-transition>
        <div v-show="show1">
          <div class="transition-box">
            <img v-for="(item,index) of nin_title" :src="item" :key="index" class="nin_title"/>
            <p v-for="(item,index) of nin_msg" :key="'A'+index" class="nin_msg">{{item}}</p>
          </div>
        </div>
      </el-collapse-transition> 
  </header> 
    </div>
</template>

<script>
export default {
  data(){
    return{
      nin_logo:"",
      items:[
        "主机·amiibo",
        "游戏软件",
        "TOPICS",
        "Nintendo eShop",
        "客户服务"
      ],
      nin_svg:[],
      show1:false,
      nin_title:[],
      nin_msg:[
        "Nintendo Switch",
        "Nintendo 3Ds",
        "ammiibo"
      ],
    }
  },
  methods:{
   addClass(e){
     e.stopPropagation();
     e.target.className='clickNow';
   },
   addClass1(e){
     e.target.className='';
    //  console.log(e.target);
   },
  },
  created(){
    this.$axios.get(this.$store.state.globalSettings.apiUrl+'index_bottom').then((result)=>{
      this.nin_logo=result.data[2].imgUrl;
    }).catch((err)=>{
      console.log(err);
    }),
    this.$axios.get(this.$store.state.globalSettings.apiUrl+'index_middle').then((result)=>{
      this.nin_title.push(result.data[0].imgUrl);
      this.nin_title.push(result.data[1].imgUrl);
      this.nin_title.push(result.data[2].imgUrl);
    }).catch((err)=>{
      console.log(err);
    })
  }
}
</script>

<style lang="scss">
*{margin:0px;padding:0px;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
}
  .nin-index{
    margin:0px;
    padding:0px;
    header{
      table{
        tr{
          background: #fff;
          height:100px;
          cursor: pointer;
          td{
            &:first-of-type{
              background:#e60012 ;
            } 
            width:200px;
            color:#000;
            text-align: center;
            font-size: 14px;
            font-weight: bold;
          }
          a{
            text-decoration-line: none;
            color: #000;
            &:hover{
              color: #e60012;
            }
          }
        }
      }
    }
  }
  .nin_logo{
    width:50%;
    height:50%;
    overflow: hidden;
  }
  .nin_title{
    width:200px;
    height:120px;
    cursor: pointer;
    @media screen and(min-width:885px){
        margin-right:30px;
        position: relative;
        left: 300px;
    }
  }
  .nin_msg{
    display:inline-block;
    margin-right: 80px;
    margin-left: 20px;
    @media screen and(min-width:885px) {
    position: relative;
    top:30px;
    right:350px;
    }
  }
  .clickNow{
    border-bottom: 5px solid #e60012;
  }
  .transition-box {
    width: 100%;
    height: 200px;
    border-radius: 4px;
    background-color: #fff;
    text-align: center;
    color: #000;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 30px;
  }
</style>
