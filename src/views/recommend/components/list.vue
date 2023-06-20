<template>
  <div class="list-container">
    <h1 class="title">推荐歌单</h1>
    <div class="list">
      <div class="list-item" v-for="(item, key) in recommendList" :key="key">
        <div class="img-wrapper">
          <div class="decorate"></div>
          <img
            :src="item.picUrl + '?param=300X300'"
            width="100%"
            height="100%"
            alt="music"
          />
          <div class="play-count">
            <i class="iconfont play">&#xe885;</i>
            <span class="count">{{ getCount(item.playCount) }}</span>
          </div>
        </div>
        <div class="desc">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getCount } from '../../../utils/common'
const props = defineProps(["recommendList"]);
</script>

<style lang="scss" scoped>
$font-size-s: 12px;
$font-color-light: #f1f1f1;
$font-color-desc: #2e3030;

.list-container {
  max-width: 100%;
  .title {
    font-weight: 700;
    padding-left: 6px;
    font-size: 14px;
    line-height: 60px;
  }

  .list {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    .list-item {
      position: relative;
      width: 32%;

      .img-wrapper {
        .decorate {
          position: absolute;
          top: 0;
          width: 100%;
          height: 35px;
          border-radius: 3px;
          background: linear-gradient(
            hsla (0, 0%, 43%, 0.4),
            hsla (0, 0%, 100%, 0)
          );
        }

        position: relative;
        height: 0;
        padding-bottom: 100%;

        .play-count {
          position: absolute;
          right: 2px;
          top: 2px;
          font-size: $font-size-s;
          line-height: 15px;
          color: $font-color-light;
          .play {
            vertical-align: top;
          }
        }
        img {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 3px;
        }
      }
      .desc {
        overflow: hidden;
        margin-top: 2px;
        padding: 0 2px;
        height: 50px;
        text-align: left;
        font-size: $font-size-s;
        line-height: 1.4;
        color: $font-color-desc;
      }
    }
  }
}
</style>
