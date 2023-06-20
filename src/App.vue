<template>
  <div class="top">
    <span class='iconfont menu'>&#xe65c;</span>
    <span class="title">云音悦</span>
    <span class='iconfont search'>&#xe62b;</span>
  </div>
  <div class="tab">
    <router-link v-for="item in mainRoutes" :to="item.path">
      <div :class="[`tab-item`, { selected: item.active }]">
        <span>{{ item.name }}</span>
      </div>
    </router-link>
  </div>

  <router-view />
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

let mainRoutes = ref([
  {
    path: `/recommend`,
    active: true,
    name: '推荐'
  },
  {
    path: `/singers`,
    active: false,
    name: '歌手'
  },
  {
    path: `/rank`,
    active: false,
    name: '排行榜'
  }
])

let route = useRoute()

watch(
  () => route,
  () => mainRoutes.value.forEach(v => (v.active = v.path === route.fullPath)),
  {
    immediate: true,
    deep: true
  }
)

</script>
<style lang='scss' scoped>

$theme-color: #d44439;

.top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px;
  background: $theme-color;
  position: relative;
  z-index: 1;
  span {
    line-height: 40px;
    color: #f1f1f1;
    font-size: 20px;
    &.iconfont {
      font-size: 25px;
    }
  }
}

.tab {
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: $theme-color;
  a {
    flex: 1;
    padding: 2px 0;
    font-size: 14px;
    color: #e4e4e4;
  }
  .tab-item {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    &.selected {
      span {
        padding: 3px 0;
        font-weight: 700;
        color: #f1f1f1;
        border-bottom: 2px solid #f1f1f1;
      }
    }
  }
}
</style>