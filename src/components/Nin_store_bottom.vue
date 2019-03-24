<template>
    <div class='nin_store_bottom'>
        <div>
            <a href=""><h6 v-for='(item,index) of title' :key='index'>
                {{item}}</h6></a>
            <p style='height:20px'></p>
            <p>©Nintendo</p>
            <p>China</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            title:[
                '任天堂账户隐私政策',
                '任天堂账户使用条款',
                '根据特定商业交易法显示',
                '任天堂网站政策'
                ]
        }
    }
}
</script>

<style lang="scss">
    .nin_store_bottom{
        div{
            height: 300px;
            background: #e60012;
            a{
                text-decoration-line: none
            }
            h6{
                color: #e8e8e8;
                line-height: 35px;
                text-align: center;
                position: relative;
                left: -24rem;
                top:1rem;
            }
            p{
                color: #fff;
                text-align: center;
                font-weight: bolder;
                font-size: 15px;
                font-style: oblique;
            }
        }
    }
</style>
