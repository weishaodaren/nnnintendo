<template>
    <div class='nin_bread'> 
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item></el-breadcrumb-item>
            <el-breadcrumb-item></el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">公司简介</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">店铺一览</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">利用条款</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">Global Site</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<style lang="scss">
.nin_bread{
    margin-top: 2rem;
    margin-bottom: 1rem;
    border-top: 2px solid #e8e8e8;
    padding-top: 2rem;
}
</style>

