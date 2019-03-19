<template>
  <div class="nin_index">
    <nin-header></nin-header>
    <nin-carousel></nin-carousel>
    <nin-card></nin-card>
    <nin-topics></nin-topics>
    <nin-games></nin-games>
  </div>
</template>

<script>
import NinHeader from '../components/NinHeader.vue';
import NinCarousel from '../components/NinCarousel.vue';
import NinCard from '../components/NinCard.vue';
import NinTopics from '../components/NinTopics.vue';
import NinGames from '../components/NinGames.vue';

export default {
  data(){
    return{

    }
  },
  components:{
    'nin-header':NinHeader,
    'nin-carousel':NinCarousel,
    'nin-card':NinCard,
    'nin-topics':NinTopics,
    'nin-games':NinGames
  }
}
</script>