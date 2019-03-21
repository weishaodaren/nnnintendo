<template>
  <div class="nin_index">
    <nin-header></nin-header>
    <nin-carousel></nin-carousel>
    <nin-card></nin-card>
    <nin-topics></nin-topics>
    <nin-click-all></nin-click-all>
    <nin-tinyTitle></nin-tinyTitle>
    <nin-lastest></nin-lastest>
    <nin-clickAll-b></nin-clickAll-b>
    <nin-bottom></nin-bottom>
  </div>
</template>

<script>
import NinHeader from '../components/NinHeader.vue';
import NinCarousel from '../components/NinCarousel.vue';
import NinCard from '../components/NinCard.vue';
import NinTopics from '../components/NinTopics.vue';
// import NinGames from '../components/NinGames.vue';
import NinTinyTitle  from '../components/Nin_tinyTitle.vue';
import NinLastest  from '../components/NinLastest.vue';
import NinLastestVue from '../components/NinLastest.vue';
import NinClickAll from '../components/NinClickAll.vue';
import NinClickAll_b from '../components/NinClickAll_b.vue';
import NinBottom from '../components/NinBottom.vue';

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
    // 'nin-games':NinGames,
    'nin-tinyTitle':NinTinyTitle,
    'nin-lastest':NinLastestVue,
    'nin-click-all':NinClickAll,
    'nin-clickAll-b':NinClickAll_b,
    'nin-bottom':NinBottom
  }
}
</script>