<template>
  <div class="nin_index">
    <nin-header></nin-header>
    <nin-carousel></nin-carousel>
    <nin-card></nin-card>
  </div>
</template>

<script>
import NinHeader from '../components/NinHeader.vue';
import NinCarousel from '../components/NinCarousel.vue';
import NinCard from '../components/NinCard.vue'
export default {
  data(){
    return{

    }
  },
  components:{
    'nin-header':NinHeader,
    'nin-carousel':NinCarousel,
    'nin-card':NinCard
  }
}
</script>