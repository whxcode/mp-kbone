<template>
    <header class="m_header">
            <span class="back" v-if="isBack" @click="_back">
                <i class="iconfont  icon-zuojiantou"></i>

            </span>
        <slot name="face"/>
        <span class="title">{{ title }}</span>
        <span class="manage" v-if="desc" @click="_handleDesc">{{ '' }}</span>
    </header>
</template>

<script >
    export default  {
        name:'my-head',
        props:{
          title:{
              type:String,
              required:true,
          },
          isBack:{
              type:Boolean,
              default:false,
          },
          desc:{
              type:String,
              default:'--',
          }
        },
        data() {
            return {
            }
        },
        methods:{
            _back()  {
                const {history} = this.$router
                history.go(-1)
            },
            _handleDesc() {
                this.$emit('')
            }
        }
    }
</script>

<style lang="less">
    .m_header /deep/ {
        color :#fff;
        display: flex;
        justify-content: center;
        align-items :center;
        padding :2.722vw 3.704vw;
        background :linear-gradient(90deg, #ff7f73,#ff4040);
        .iconfont {
            font-size :6vw;
        }
        .title {
            font-size: 5vw;
            flex: 1;
            text-align: center;
        }
        .manage {
            font-size:4vw;
            }
        }
</style>
