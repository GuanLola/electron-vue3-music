<template>
  <div class="content">
    <div class="scrollContainer" ref="scrollContainerRef">
      <div class="total">
        <Slider :bannerList="bannerList" />
        <List :recommendList="recommendList" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { getBanner, getRecommendList } from "../../api/recommend/index.js";
import Slider from "./components/slider.vue";
import List from "./components/list.vue";
import { onMounted, ref, watch, nextTick } from "vue";
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";

const bannerList = ref([]);
const getBannerList = async () => {
  const res = await getBanner();
  bannerList.value = res.banners;
};
getBannerList();

const recommendList = ref([]);
const geRecommendList = async () => {
  const res = await getRecommendList();
  recommendList.value = res.result;
};
geRecommendList();

BScroll.use(Pullup);

const scrollContainerRef = ref(null);

const bScroll = ref(null)

onMounted(() => {
  bScroll.value = new BScroll(scrollContainerRef.value, {
    scrollY: true,
    probeType: 3,
    click: true,
    bounce: {
      top: true,
      bottom: true,
    }
  });
});

watch(recommendList, () => {
  nextTick(() => {
    bScroll.value && bScroll.value.refresh()
  })
}, {
  deep: true
})
</script>
<style lang="scss" scoped>
.scrollContainer {
  position: fixed;
  top: 94px;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .total {
    padding-bottom: 90px;
  }
}
</style>
