<template>
  <div class="nin_cart">
    <nin-store-head></nin-store-head>
    <nin-cart></nin-cart>
    <nin-store-bottom></nin-store-bottom>
  </div>
</template>

<script>
import ninStoreHead from '../components/Nin_store_head.vue'
import ninStoreBottom from '../components/Nin_store_bottom.vue'
import ninCart from '../components/NinCart.vue'
export default {
  data(){
    return{

    }
  },
  components:{
    'nin-store-head':ninStoreHead,
    'nin-store-bottom':ninStoreBottom,
    'nin-cart':ninCart
  }
}
</script>