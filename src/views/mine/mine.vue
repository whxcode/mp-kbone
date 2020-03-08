<template>
    <article class="home">
        <Head :title="'动态'"/>
        <Tabbar />
    </article>
</template>

<script>
    import Vue from 'vue'
    import  Tabbar from '@/components/tabbar/tabbar.vue'
    import Head from '@/components/head/head.vue'

    export default Vue.extend({
        name: 'Home',
        components: {
            Tabbar,
            Head,
        },
        created() {

        },
        methods: {

        },
    })
</script>

<style lang="less">

</style>
