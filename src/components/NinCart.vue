<template>
    <div class="nin_cart">
        <div class="nin_mydiv">
        <p>购物车</p>
        <p>{{cart_num}}列</p>  <!--后续 需要实现双向数据绑定-->
        <hr>
        <i @click="cart_delete" class="el-icon-error"></i>
        <div class="nin_img_cart">
            <img :src="nin_img_cart"/>
            <p>{{game_name}}</p>
            <span>{{game_money}}</span>
            <p>
                <img :src="img_lorry"/>
                {{game_lorry}}
            </p>
        </div>
        <div>
            <p>·关于送货方法</p>
            <p>👥 您订购的更换号码将在购买产品后通过“退款号码信息电子邮件”发送给您。但是，对于预购商品，我们会在送货开始日期前一天通过电子邮件通知您。</p>
            <p>👥 兑换号码的有效期限（16个字母数字字符）在发送兑换号码指导邮件之日起最多150天。</p>
        </div>
        <hr>
        </div>
        <div class="right_card">
            <span>总计</span>
            <span>￥{{game_total}}</span>  <!--后续实现双向数据绑定-->
            <p>结算/订购</p>
            <p>继续购物</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            cart_num:'1',
            nin_img_cart:'',
            game_name:'ASTRAL CHAIN',
            game_money:'￥525.00人民币',
            img_lorry:require('../assets/img/lorry.png'),
            game_lorry:'预定于2019年8月20日交付*仅限国内送货',
            game_total:'525.00'
        }
    },
    methods:{
        cart_delete(){
            alert('123456')
        },
        handleChange(){

        }
    },
    created(){
        this.$axios.get(this.$store.state.globalSettings.apiUrl+'about_games').then((res)=>{
            // console.log(res.data[5])
            this.nin_img_cart=res.data[5].gameUrl
        }).catch((err)=>{
            console.log(err)
        })
    },
    mounted(){
        console.log(this.$route.params.id);
        
    }
}
</script>


<style lang="scss">
    .nin_cart{
        .nin_mydiv{
            width: 500px;
            position: relative;
            left: 280px;
            top:45px;
            :nth-child(1){
                font-size: 25px;
                margin-bottom: 95px;
            }
            :nth-child(2){
                font-size: 14px;
                margin-top: 25px;
            }
            hr{
                height: 1px;
                border: none;
                background-color: #e8e8e8;
            }
            :nth-child(4){
                float: right;
                cursor: pointer;
                margin-top: 10px;
            }
            :nth-child(5){
                width:120px;
                height: 120px;
                margin-top: 45px;
                border: 0;
                :nth-child(1){
                    width:100%;
                }
                :nth-child(2){
                    position: relative;
                    left: 120px;
                    top: -232px;
                }
                :nth-child(3){
                    position: relative;
                    left: 115px;
                    top: -215px;
                    font-size: 20px;
                    font-weight: bolder;
                    margin-top: 5px;
                    background:none;
                    width: 220px ;
                    display: inline-block;   
                }
                :nth-child(4){
                    position: relative;
                    left: 145px;
                    top: -165px;
                    width:242px;
                    display: inline-block;
                    :nth-child(1){
                        width: 18px;
                        margin: 0;
                    }
                }
            }
            :nth-child(6){
                margin-top: -20px;
                :nth-child(1){
                    font-size: 12px;
                    font-weight: bold;
                    position: relative;
                    top: 88px;
                }
            }
            :nth-child(7){
                position: relative;
                top: 20px;
                height: 1px;
                border: none;
                background-color: #d7d7d7;
                margin-bottom: -20px;
            }
            
        }
    }
    .right_card{
    background: #fff;
    width: 300px;
    height: 240px;
    position: relative;
    top: -245px;
    left:810px;
    :nth-child(1){
        font-size: 20px;
        margin-left: 20px;
    }
    :nth-child(2){
        font-weight: bolder;
        margin-left: 105px;
        font-size: 30px;
    }
    :nth-child(3){
        width: 200px;
        height: 45px;
        text-align: center;
        font-size: 18px;
        background: #e60012;
        opacity: 1;
        color: #fff;
        line-height:45px;
        margin: 0 auto; 
        margin-top: 30px;
        margin-bottom: 15px;
        border-radius: 6px;
    }
    :nth-child(4){
        width: 200px;
        height: 45px;
        text-align: center;
        font-size: 18px;
        background: #fff;
        color: #e60012;
        border: 2px solid #e60012;
        opacity: 1;
        line-height:45px; 
        margin: 0 auto; 
        border-radius: 6px;
    }
 }
</style>
