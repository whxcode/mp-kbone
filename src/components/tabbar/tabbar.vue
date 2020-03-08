<template>
        <footer class="bottom_bar">
            <router-link class="bottom_bar_item" tag="div" :to="ix.path" v-for="(ix,i) in barList" :key="i" @click.native="_handleClick(i)">
                <i class="iconfont" :class="ix.click ? ix.clickIcon : ix.icon" />
                <span class="desc">{{ ix.desc }}</span>
            </router-link>
        </footer>
</template>

<script>
    export default {
        name: "tabbar",
        data() {
            return {
                barList : [
                {
                    desc:'消息',
                    path:'/home',
                    icon:'icon-fukuan1',
                    clickIcon:'icon-fukuan',
                    click:false,
                },
                {
                    desc:'联系人',
                    path:'/list',
                    icon:'icon-wode1',
                    clickIcon: 'icon-wode',
                    click:false,
                },
                {
                    desc:'动态',
                    path:'/mine',
                    icon:'icon-yuanxingweixuanzhong',
                    clickIcon: 'icon-yuanxingweixuanzhong',
                    click:false,

                },
            ],
                prevIndex:0,
            }
        },
        mounted() {
            const eles = document.querySelectorAll('.bottom_bar_item')
            eles.forEach((v,i) => {
                const classText  = v.getAttribute('class')
                if(classText.includes('active')) {
                    this.barList[i].click = true
                    console.log('jin ru last')
                    this.prevIndex = i
                }
            })
        },
        methods:{
            _handleClick(i) {
                this.barList[this.prevIndex].click = false
                this.prevIndex = i
                this.barList[i].click = true
                // console.log(this.barList[i])
            }

        }
    }
</script>
<style  lang="less">
.bottom_bar{
            position: fixed;
            width:100%;
            bottom: 0;
            height:13.515vw;
            background: #fff;
            border-top :.5Px solid #efefef;
            display :flex;
            align-items: center;
            font-size: 3vw;
            color: #666;

            .bottom_bar_item {
                flex :1;
                display :flex;
                align-items: center;
                flex-flow :column;
            }
                .iconfont {
                    font-size: 5.5vw;
                    margin-top: 1vw;
                    display :block;
                    width :6vw;
                    height: 6vw;
                }
                .desc {
                    margin-top :1vw;
                }
            .router-link-active {
                .iconfont {
                    -webkit-text-fill-color: transparent;
                    -webkit-background-clip: text;
                    background-image: -webkit-linear-gradient(top, #ff4040, #ff7f73);
                }
            }
}
</style>
