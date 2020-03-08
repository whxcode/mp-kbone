<template>
    <article class="search">
        <input type="text" name="name" id="name" placeholder="添加" v-model="account" />
        <button @click="_add">btn</button>
    </article>
</template>

<script>
    export default {
        name: "search",
        data() {
            return {
                account:'',
            }
        },
        methods:{
            _add() {
                if(!this.account) {
                    alert('添加失败')
                }
                this.$emit('add',{
                    face:'https://bkimg.cdn.bcebos.com/pic/14ce36d3d539b600bfaaf185e250352ac65cb798?x-bce-process=image/watermark,g_7,image_d2F0ZXIvYmFpa2U4MA==,xp_5,yp_5',
                    name:this.account,
                    lastChat:'xxx',
                })
                this.account = ''
            }
        }
    }
</script>

<style lang="less">
.search {
    background: rgba(248, 249, 251,.7);
    padding: 2vw 3vw;
    display: flex;
    align-items: center;
    backdrop-filter: blur(10px);
    height: 14vw;
    input {
        background: #fff;
        font-size: 3vw;
        height: 10vw;
        padding-left:5vw;
        border-radius: 20px;
        border: none;
        outline: none;
        flex:1;
    }
    button {
        margin-left: 10px;
        outline: none;
        border:none;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 12vw;
        border-radius: 50%;
        font-size: 3vw;
        height: 10vw;
        color:#fff;
        background :linear-gradient(90deg, #ff7f73,#ff4040);
    }
}
</style>