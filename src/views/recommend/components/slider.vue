<template>
  <div class="recommend">
    <div class="before"></div>
    <div class="swiper">
      <swiper
        class="swiper-div"
        :modules="modules"
        :slides-per-view="1"
        :space-between="0"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :pagination="true"
        :loop="true"
        :rewind="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
      >
        <swiper-slide
          class="swiper-slide"
          v-for="(item, index) in bannerList"
          :key="index"
        >
          <img class="banner-img" :src="item.imageUrl" alt="" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";
import "swiper/css";
import "swiper/css/pagination";

const modules = ref([Pagination, Autoplay]);

const props = defineProps(['bannerList'])

const onSwiper = (swiper) => {
  // console.log("swiper", swiper);
};

const onSlideChange = () => {
  // console.log("slide change");
};
</script>
<style lang="scss" scoped>
$theme-color: #d44439;

.recommend {
  .before {
    position: absolute;
    background: $theme-color;
    height: 80px;
    width: 100%;
  }
  .swiper {
    width: 98%;
    border-radius: 6px;
    position: relative;
    .swiper-div {
      width: 100%;
      height: 100%;
      .swiper-slide {
        width: 100%;
        height: 100%;
        .banner-img {
          width: 100%;
        }
      }
    }
  }
}
</style>
