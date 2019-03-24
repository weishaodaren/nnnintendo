<template>
  <div class="block">
         <el-carousel indicator-position="outside" :interval="5000">
             <el-carousel-item v-for="(item,index) in nin_games" :key="index">
                <img :src="item.gameUrl"/>
         </el-carousel-item>
         </el-carousel>
         <div class="game_p">
             <span>{{game_status}}</span>
             <p class="g_title">{{game_title}}</p>
             <p>{{game_compy}}</p>
             <p>{{game_money}}</p>
             <p>{{game_cost}}</p>
             <p>
                 <img class='lorry' :src="img_url"/>
                 <span>{{game_date}}</span>
             </p>
             <p>我们将在交货开始日前一天通过电子邮件通知您更换号码。 要下载内容，您需要Nintendo Switch和Internet环境。</p>
             <el-input-number size="mini" :min="1" :max="3" v-model="num"></el-input-number>
            <a href="javascript:;" class="cart">购买/添加购物车</a>
            <img :src="fav"/>
         </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            nin_games:[],
            game_status:'商店限量',
            game_title:'ASTRAL CHAIN下载版（带包）',
            game_compy:'任天堂',
            game_money:'￥525.00 人民币',
            game_cost:'根据预订接受免运费',
            img_url:require('../assets/img/lorry.png'),
            fav:require('../assets/img/fav.png'),
            game_date:'预定于2019年8月20日交付*仅限国内送货',
            num:1

        }
    },
    created(){
        this.$axios.get(this.$store.state.globalSettings.apiUrl+'about_games').then((res)=>{
            // console.log(res);
            this.nin_games=res.data;
        }).catch((err)=>{
            console.log(err);
        });
    }
}
</script>

<style lang='scss'>
    .block{
        width: 500px;
        position: relative; 
        left: 275px;
        top: 100px; 
        img{
            width: 100%;
            height:256px;
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
    }
</style>