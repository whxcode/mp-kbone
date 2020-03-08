<template>
    <li class="list_item">
        <div class="left_face">
            <img :src="data.face" alt="" />
        </div>
        <div class="right_text">
            <strong class="name">
                {{ data.name }}
            </strong>
            <p> {{ data.lastChat }} </p>
        </div>
    </li>
</template>

<script>
    export default {
        name: "list_item",
        props:{
            data:{
                type:Object,
                required:true,
            }
        }
    }
</script>

<style lang="less">
    .list_item {
        display: flex;
        list-style: none;
        padding: 1vw 3vw;
        align-items: center;
        .left_face {
            position: relative;
            overflow: hidden;
            width: 15vw;
            border-radius: 50%;
            height: 15vw;
            img {
                width: 15vw;
                height:15vw;
                position: absolute;
                top:50%;
                left:50%;
                transform: translate(-50%,-50%);
            }


        }
        .right_text {
            flex:1;
            margin-left: 2vw;
            height: 100%;
            strong {
                font-size: 4.5vw;
                color : #666;
            }
            p {
                font-size: 3vw;
                color: #999;
            }
        }
    }
</style>