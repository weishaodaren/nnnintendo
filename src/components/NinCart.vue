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
                <img class="img_lorry" :src="img_lorry"/>
                {{game_lorry}}
            </p>
        </div>
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
            game_lorry:'预定于2019年8月20日交付*仅限国内送货'
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
            :nth-child(3){
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
            }
            :nth-child(6){
                position: relative;
                left: 12px;
                top: 12px;
                width:120px;
                .img_lorry{
                    width: 100%;
                }
            }
        }
    }
</style>
