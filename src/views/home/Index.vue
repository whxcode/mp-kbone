<template>
  <article class="home">
      <header class="header">
          <Head :title="'消息'" />
          <Search @add="_add"/>
      </header>

       <main class="main">
           <ul class="list">
               <list-item v-for="(data,index) in list" :data="data" :key="index" @click.native="_del(index)"/>
             <!--  <li class="list_item">

               </li>-->
           </ul>
       </main>
      <Tabbar />
  </article>
</template>

<script>
import Vue from 'vue'
import  Tabbar from '@/components/tabbar/tabbar.vue'
import Head from '@/components/head/head.vue'
import ListItem from '@/components/list_item/list_item.vue'
import Search from '@/components/search/search.vue'
export default Vue.extend({
  name: 'Home',
  data() {
      return {
            list:[
                {
                    face:'https://bkimg.cdn.bcebos.com/pic/14ce36d3d539b600bfaaf185e250352ac65cb798?x-bce-process=image/watermark,g_7,image_d2F0ZXIvYmFpa2U4MA==,xp_5,yp_5',
                    name:'xxx-x',
                    lastChat:'xxx',
                },
                {
                    face:'https://bkimg.cdn.bcebos.com/pic/14ce36d3d539b600bfaaf185e250352ac65cb798?x-bce-process=image/watermark,g_7,image_d2F0ZXIvYmFpa2U4MA==,xp_5,yp_5',
                    name:'xxx-x',
                    lastChat:'xxx',
                },
                {
                    face:'https://bkimg.cdn.bcebos.com/pic/14ce36d3d539b600bfaaf185e250352ac65cb798?x-bce-process=image/watermark,g_7,image_d2F0ZXIvYmFpa2U4MA==,xp_5,yp_5',
                    name:'xxx-x',
                    lastChat:'xxx',
                },
                {
                    face:'https://bkimg.cdn.bcebos.com/pic/14ce36d3d539b600bfaaf185e250352ac65cb798?x-bce-process=image/watermark,g_7,image_d2F0ZXIvYmFpa2U4MA==,xp_5,yp_5',
                    name:'xxx-x',
                    lastChat:'xxx',
                },
                {
                    face:'https://bkimg.cdn.bcebos.com/pic/14ce36d3d539b600bfaaf185e250352ac65cb798?x-bce-process=image/watermark,g_7,image_d2F0ZXIvYmFpa2U4MA==,xp_5,yp_5',
                    name:'xxx-x',
                    lastChat:'xxx',
                },
                {
                    face:'https://bkimg.cdn.bcebos.com/pic/14ce36d3d539b600bfaaf185e250352ac65cb798?x-bce-process=image/watermark,g_7,image_d2F0ZXIvYmFpa2U4MA==,xp_5,yp_5',
                    name:'xxx-x',
                    lastChat:'xxx',
                },
                {
                    face:'https://bkimg.cdn.bcebos.com/pic/14ce36d3d539b600bfaaf185e250352ac65cb798?x-bce-process=image/watermark,g_7,image_d2F0ZXIvYmFpa2U4MA==,xp_5,yp_5',
                    name:'xxx-x',
                    lastChat:'xxx',
                },
                {
                    face:'https://bkimg.cdn.bcebos.com/pic/14ce36d3d539b600bfaaf185e250352ac65cb798?x-bce-process=image/watermark,g_7,image_d2F0ZXIvYmFpa2U4MA==,xp_5,yp_5',
                    name:'xxx-x',
                    lastChat:'xxx',
                },
                {
                    face:'https://bkimg.cdn.bcebos.com/pic/14ce36d3d539b600bfaaf185e250352ac65cb798?x-bce-process=image/watermark,g_7,image_d2F0ZXIvYmFpa2U4MA==,xp_5,yp_5',
                    name:'xxx-x',
                    lastChat:'xxx',
                },
            ],
      }
  },
  components: {
    Tabbar,
    Head,
    ListItem,
    Search,
  },
  created() {

  },
  methods: {
      _add(data) {
          this.list.unshift(data)
      },
      _del(index) {
        this.list.splice(index,1)
      }
  },
})
</script>

<style lang="less">
.home {
    .header {
        position: sticky;
        top:0;
        z-index: 333;
    }
    .main {
         background: #fff;
        .list {
            margin: 0;
            padding: 0;
        }
    }
    .face {
        position: relative;
        border-radius: 50%;
        overflow: hidden;
        width: 10vw;
        height: 10vw;
        img  {
            position: absolute;
            top:50%;
            left:50%;
            transform: translate(-50%,-50%);
            width: 15vw;
        }
    }
}
</style>
