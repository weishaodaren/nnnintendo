<template>
    <div class="detail">
        <p>{{g_name}}</p>
        <p>{{g_tit}}</p>
        <p>{{g_msg}}</p>
        <p>{{g_msg2}}</p>
        <p>{{g_msg3}}</p>
        <p>{{g_msg4}}</p>
        <p>{{g_msg5}}</p>
        <p>{{g_msg6}}</p>
        <table>
            <tr>
                <td>平台</td>
                <td>{{g_platform}}</td>
            </tr>
             <tr>
                <td>发布日期</td>
                <td>{{g_date}}</td>
            </tr>
             <tr>
                <td>类型</td>
                <td>{{g_style}}</td>
            </tr>
        </table>
        <p>{{g_notice}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            g_name:'白金游戏全新！',
            g_tit:'Nintendo Switch上出现了一款充分利用双方双重战斗的全新感知动作游戏。',
            g_msg:'作为警察的一个特殊单位，面对外来物种。许多伤害人类的事件。',
            g_msg2:'舞台是不久的将来的一个城市。突然出现在地球上的外来物种污染了地球，造成了许多伤害人类的事件。为了对抗普通警察中不寻常的生物，主人用人类创造的特殊武器“军团”将开始作为特种部队成员解决案件。',
            g_msg3:'与特种武器“军团”合作打击敌人。',
            g_msg4:'“双重行动”是这项工作的主要特色。主角和军团巧妙地配合各种风格，如“主角与军团同时攻击同一敌人”，“攻击不同的敌人”，“对军团进行攻击并以主角支持物品”等。我会战斗。',
            g_msg5:'发展是白金游戏。一个强大的制作团队，在角色设计中欢迎“Kasakazu Katsura”。',
            g_msg6:'最初的计划是Takahisa Taura，他被称为“NieR：Automata”的游戏设计师，监督的是Hideki Kamiya，他参与了“Beyonetta系列”，并且游戏的角色设计熟悉漫画“ZETMAN”和“博士”的创作者。 Masakazu Katsura负责。这是一款具有全新游戏感的动作游戏，因为它是“触摸是最好的感觉”操作的白金游戏风格。',
            g_platform:'Nintendo Switch',
            g_date:'2019年8月30日',
            g_style:'双重行动',
            g_notice:'※订货完成时我们会保留库存。请注意，放入购物车时我们不保证库存。'

        }
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
            margin-bottom: 30px;
        }
    }
</style>
