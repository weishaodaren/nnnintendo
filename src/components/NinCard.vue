<template>
    <div class="nin_xz_card">
        <table>
            <tr>
                <td v-for="(item,index) of nin_card" :key="index">
                    <a href="#">
                    <img :src="item.imgUrl"/>
                    <span>{{item.aname}}</span>
                    </a>
                </td>
            </tr>
        </table>
    </div>
</template>

 <script>
export default {
    data(){
        return{
            nin_card:[]
        }
    },
    created(){
        this.$axios.get(this.$store.state.globalSettings.apiUrl+'index_top').then((res)=>{
            console.log(res.data)
            this.nin_card=res.data
        }).catch((err)=>{
            console.log(err)
        })
    }
}
</script>

<style lang="scss">
   .nin_xz_card{
       table{
            position: relative;
               top:-10px;
               left:0px;
           tr{
               width:100%;
               td{
                text-align: center;
                width:250px;
                border-right: 3px dotted #e8e8e8;
                border-left: 3px dotted #e8e8e8;
                padding:1%;
                 border-bottom:1px solid #e8e8e8;
                a{
                    text-decoration-line: none;
                   img{
                    width:10%;
                    cursor: pointer;
                   }
                   span{
                       position: relative;
                       top:-10px;
                       font-size:1px;
                       font-weight: bolder;
                       color: #000;
                    
                    //    hover{
                    //        color:red;
                    //    }
                       }
                   }
                   :hover{
                        //   text-decoration-line: none;
                       color:#e60012;
                   }
               }
           }
       }
   }
</style>