<template>
  <div class="footer">
    <tabbar class="tab-bar">
      <tabbar class="tab-bar-border"></tabbar>
      <tabbar v-for="(item, index) in list" class="tab-bar-item" @click="switchTab(index, item.pagePath)">
        <img :src="selected === index ? item.selectedIconPath : item.iconPath">
        <!-- <cover-image :src="selected === index ? item.selectedIconPath : item.iconPath"></cover-image> -->
        <tabbar :style="'color: ' + (selected === index ? selectedColor : color)">{{item.text}}</tabbar>
        <!-- <cover-view style="color: {{selected === index ? selectedColor : color}}">{{item.text}}</cover-view> -->
      </tabbar>
    </tabbar>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      selected: 0,
      color: "#cdcdcd",
      selectedColor: '#39cffc',
      list: [{
        pagePath: 'home',
        text: '首页',
        iconPath: require('../static/icon/index.png'),
        selectedIconPath: require('../static/icon/index1.png'),
      }, {
        pagePath: 'user',
        text: '我的',
        iconPath: require('../static/icon/user.png'),
        selectedIconPath: require('../static/icon/user1.png'),
      }]
    }
  },
  methods: {
    switchTab(index, url) {
      // console.log(index)
      this.selected = index
      window.location.href = url
    }
  },
  props:["selected"],
}
</script>

<style lang="less">
.footer {
  // margin-top: 10px;
  margin-left: -8px;
  width: 100%;
  text-align: center;
  position: fixed;
  bottom: 0;
  height: 50px;
  z-index: 100;
}

.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 48px;
  background: white;
  display: flex;
  padding-bottom: env(safe-area-inset-bottom);
}

.tab-bar-border {
  background-color: rgba(0, 0, 0, 0.33);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  transform: scaleY(0.5);
}

.tab-bar-item {
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.tab-bar-item img {
  width: 25px;
  height: 25px;
}

.tab-bar-item tabbar {
  font-size: 10px;
}
</style>
