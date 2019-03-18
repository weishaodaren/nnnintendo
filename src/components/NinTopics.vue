<template>
    <div class="nin_topics">
      <h2>最新话题</h2>
        <h1>-</h1>
        <el-row>
<el-col :sm="12" :md="8" :lg="6"><div class="grid-content bg-purple"></div></el-col>             <el-col :sm="12" :md="8" :lg="6"><div class="grid-content bg-purple-light"></div></el-col>
<el-col :sm="12" :md="8" :lg="6"><div class="grid-content bg-purple"></div></el-col>
<el-col :sm="12" :md="8" :lg="6"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .nin_topics{
        margin-top: 2rem;
        h2{
            text-align: center;
            opacity: 0.8;
        }
        h1{
            text-align: center;
            color: #e60012;
        }
    }

 .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
    .bg-purple {
    background: red;
  }
  .bg-purple-light {
    background: blue;
  }
   .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
