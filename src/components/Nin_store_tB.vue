<template>
    <div class="detail">
        <p v-for="(item,index) in items" :key="index">{{item.g_msg1}}</p>
        <p v-for="(item,index) in items" :key="index+1">{{item.g_msg2}}</p>
        <p v-for="(item,index) in items" :key="index+2">{{item.g_msg3}}</p>
        <p v-for="(item,index) in items" :key="index+3">{{item.g_msg4}}</p>
        <p v-for="(item,index) in items" :key="index+4">{{item.g_msg5}}</p>
        <p v-for="(item,index) in items" :key="index+5">{{item.g_msg6}}</p>
        <p v-for="(item,index) in items" :key="index+6">{{item.g_msg7}}</p>
        <p v-for="(item,index) in items" :key="index+7">{{item.g_msg8}}</p>
        <table v-for="(item,index) in items" :key="index+8">
            <tr>
                <td>平台</td>
                <td>{{item.g_platform}}</td>
            </tr>
             <tr>
                <td>发布日期</td>
                <td>{{item.g_date}}</td>
            </tr>
             <tr>
                <td>类型</td>
                <td>{{item.g_style}}</td>
            </tr>
        </table>
        <p>※订货完成时我们会保留库存。请注意，放入购物车时我们不保证库存。</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            items:[]
        }
    },
     created(){
            this.$axios.get(this.$store.state.globalSettings.apiUrl+'about_games_msg').then((res)=>{
                this.items=res.data;
            }).catch((err)=>{
                console.log(err)
            })
        }
}
</script>

<style lang="scss">
    .detail{
        width: 500px;
        position: relative;
        left: 275px;
       :nth-child(1){
               color: #3c3c3c;
               font-weight: bolder;
               font-size: 17px;
               opacity: 1;
       }
       :nth-child(2){
               color: #3c3c3c;
               font-weight: bolder;
               font-size: 17px;
               opacity: 1;
               margin-bottom:60px;
           }
        :nth-child(3){
            color: #000;
            font-size: 12px;
        }
        :nth-child(4){
            color: #000;
            font-size: 12px;
            margin-bottom: 20px;
        }
        :nth-child(5){
            color: #000;
            font-size: 12px;
        }
        :nth-child(6){
            color: #000;
            font-size: 12px;
            margin-bottom: 20px;
        }
        :nth-child(7){
            color: #000;
            font-size: 12px;
        }
        :nth-child(8){
            color: #000;
            font-size: 12px;
            margin-bottom: 40px;
        }
        :nth-child(9){
                width: 500px;
                border-collapse: separate;
                border-spacing: 15px;
            :nth-child(1){
                display: inline;
                :nth-child(1){
                    color: #000;
                    font-size: 12px;
                    font-weight:bold; 
                    opacity: 0.5;
                    float: left;
                }
                :nth-child(2){
                    color: #000;
                    font-size: 12px;
                    font-weight:bold; 
                    opacity: 0.5;
                    float: right;
                    margin: 0;
                }
            }
            :nth-child(2){
                :nth-child(1){
                    color: #000;
                    font-size: 12px;
                    font-weight:bold; 
                    opacity: 0.5;
                    float: left;
                }
                :nth-child(2){
                    color: #000;
                    font-size: 12px;
                    font-weight:bold; 
                    opacity: 0.5;
                    float: right;
                    margin: 0;
                }
            }
            :nth-child(3){
                 :nth-child(1){
                    color: #000;
                    font-size: 12px;
                    font-weight:bold; 
                    opacity: 0.5;
                    float: left;
                }
                :nth-child(2){
                    color: #000;
                    font-size: 12px;
                    font-weight:bold; 
                    opacity: 0.5;
                    float: right;
                    margin: 0;
                }
            }
        }
        :nth-child(10){
            margin-top: 15px;
            margin-bottom: 90px;
        }
    }
</style>
