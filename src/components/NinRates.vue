<template>
    <div class='nin_select'>
        <el-autocomplete
            v-model="state4" :fetch-suggestions="querySearchAsync" placeholder="可以搜索游戏想要的游戏"
            @select="handleSelect">
        </el-autocomplete>
    </div>
</template>

<style lang="scss">
    .nin_select{
        float: right;
        margin-right: 6rem;
        margin-top: 3rem;
        border-right: 2px solid #e60012;
        border-left: 2px solid #e60012;
        border-radius: 12px;
    }
</style>


<script>
  export default {
    data() {
      return {
        restaurants: [],
        state4: '',
        timeout:  null
      };
    },
    methods: {
      loadAll() {
        this.$axios.get(this.$store.state.globalSettings.apiUrl+'index_select').then((res)=>{
          console.log(res.data);
          this.restaurants=res.data;
        }).catch((err)=>{
          console.log(err);
        })
      },
      querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  };
</script>