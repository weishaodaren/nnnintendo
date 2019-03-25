<template>
  <div class="block">
         <el-carousel indicator-position="outside" :interval="5000">
             <el-carousel-item v-for="(item,index) in nin_games.slice(0,5)" :key="index">
                <img :src="item.gameUrl"/>
         </el-carousel-item>
         </el-carousel>
         <div class="game_p" v-for="(item,index) in items" :key="index">
             <span>商店限量</span>
             <p class="g_title">{{item.gameTitle}}</p>
             <p>任天堂</p>
             <p>￥{{item.gameMoney}}</p>
             <p>根据预订接受免运费</p>
             <p>
                 <img class='lorry' :src="img_url"/>
                 <span>预定于2019年8月20日交付*仅限国内送货</span>
             </p>
             <p>我们将在交货开始日前一天通过电子邮件通知您更换号码。 要下载内容，您需要Nintendo Switch和Internet环境。</p>
             <el-input-number size="mini" :min="1" :max="5" v-model="num"></el-input-number>
            <a @click="jump_cart" class="cart">购买/添加购物车</a>  <!--后续 路由传参-->
            <img :src="fav"/>
         </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            nin_games:[],
            img_url:require('../assets/img/lorry.png'),
            fav:require('../assets/img/fav.png'),
            num:1,
            items:[]

        }
    },
    methods:{
        jump_cart(){
            this.$router.push({path:'/cart'})
        }
    },
    created(){
        this.$axios.get(this.$store.state.globalSettings.apiUrl+'about_games').then((res)=>{
            // console.log(res);
            this.nin_games=res.data;
        }).catch((err)=>{
            console.log(err);
        });
        this.$axios.get(this.$store.state.globalSettings.apiUrl+'about_games_msg').then((res)=>{
            // console.log(res.data);
            this.items=res.data;
        }).catch((err)=>{
            console.log(err);
        })
    }
}
</script>

<style lang='scss'>
    .block{
        width: 500px;
        height: 520px;
        position: relative; 
        left: 275px;
        top: 100px; 
        img{
            width: 100%;
            height:256px;
            opacity: 1;
        }
        div{
            span{
                background: #e60012;
                color: white;
                font-weight: bolder;
                display: inline-block;
                font-size: 10px;
                padding: 7px;    //会影响按钮状态
                line-height: 13px;
                border-radius: 4px;
            }
            .g_title{
                font-size: 30px;
                line-height: 50px;
            }
            :nth-child(3){
                color: gray;
                font-size: 14px;
                font-weight: bolder;
                line-height: 10px;
            }
            :nth-child(4){
                font-weight: bold;
                font-size: 28px;
                color: #000;
                opacity: 0.7;
                line-height: 75px;
            }
            :nth-child(5){
                font-size: 16px;
                line-height: 20px;
                margin-bottom: 20px;
            }
            :nth-child(6){
                .lorry{
                    width: 4%;
                    height: 4%;
                    vertical-align: baseline;
                }
                :nth-child(2){
                    color: #000;
                    background: #fff;
                    font-size: 13px;
                }
            }
            :nth-child(8){
                margin-top: 40px;
            }
            :nth-child(10){
                    width: 4%;
                    height: 4%;
                    vertical-align: baseline;
                    margin-left: 20px;
            }
        }
    }
    .game_p{
        position: relative;
        left: 555px;
        bottom: 335px;
    }
    .cart{
        width: 250px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background: #e60012;
        text-decoration-line: none;
        color: #fff;
        display: inline-block;
        margin-left: 50px;
        font-weight: bolder;
        cursor: pointer;
    }
</style>