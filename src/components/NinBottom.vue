<template>
    <div class='nin-bottom'>
        <table>
            <tr>
                <td>
                   <span>通知</span>
                    <a href="javascript:;">
                    任天堂维修服务中心农历年休事宜
                    </a>
                </td>
            </tr>
        </table>
            <div>
                <img :src='nin_logo'/>
            </div>
            <table class="nin_ad">
                <tr>
                    <td class='nin_head_name'>{{name}}</td>
                    <td v-for="(i,o) in social.slice(3)" :key='o'>
                        <img :src="i.imgUrl"/>
                        <span>{{i.toolName}}</span>
                    </td>
                </tr>
            </table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            nin_logo:'',
            social:[],
            name:'社交网络'
        }
    },
    mounted(){
        this.$axios.get(this.$store.state.globalSettings.apiUrl+'index_bottom').then((res)=>{
            // console.log(res.data[2].imgUrl);
            this.nin_logo=res.data[2].imgUrl;
        }).catch((err)=>{
            console.log(err);
        }),
         this.$axios.get(this.$store.state.globalSettings.apiUrl+'index_bottom').then((res)=>{
            // console.log(res.data);
            this.social=res.data;
        }).catch((err)=>{
            console.log(err);
        })
    }
}
</script>

<style lang="scss">
    .nin-bottom{
        margin-top: 10rem;
        border-top: 2px solid #e8e8e8;
        // border: 2px solid #e8e8e8;
        table{
            tr{
                td{
                    height: 60px;
                    span{
                        color:#000;
                        opacity: 0.5;
                        font-size:18px;
                        font-weight: bolder;
                        margin-left: 11rem
                    }
                    a{
                        text-decoration-line: none;
                        color:#000;
                        opacity: 0.7;
                        font-size: 12px;
                        margin-left: 10rem;
                    }:hover{
                        color: #e60012;
                    }
                }
            }
        }
        div{
            height: 25px;
            width:100%;
            padding-top:35px;
            padding-bottom:35px;
            background:#e60012;
            img{
               height: 30px;
                width:22%;

            }
        }
    }
    .nin_ad{
        tr{
            td{
                img{
                    width:40px;
                    height:40px;
                    position: relative;
                    left: 165px;
                    top: 15px;
                    border-radius: 8px;
                }
            }
        }
    }
    .nin_head_name{
        // font-weight: bolder;
        color:#000;
        margin-left: 25px;
        position: relative;
        left: 88px;
        top: 10px;
    }
</style>
