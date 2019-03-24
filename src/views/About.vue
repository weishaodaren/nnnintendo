<template>
  <div class="nin_about">
    <nin-store-head></nin-store-head>
    <nin-store></nin-store>
    <nin-store-detail></nin-store-detail>
    <!-- <nin-store-bottom></nin-store-bottom> -->
  </div>
</template>

<script>
import ninStoreHead from '../components/Nin_store_head.vue'
import ninStoreBottom from '../components/Nin_store_bottom.vue'
import ninStore from '../components/Nin_store_test.vue'
import ninDetail from '../components/Nin_store_tB.vue'
export default {
  data(){
    return{

    }
  },
  components:{
    'nin-store-head':ninStoreHead,
    'nin-store-bottom':ninStoreBottom,
    'nin-store':ninStore,
    'nin-store-detail':ninDetail
  }
}
</script>