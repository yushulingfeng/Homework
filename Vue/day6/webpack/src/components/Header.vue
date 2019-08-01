<template>
    <header v-text="title"></header>
</template>

<script>
export default {
    data() {
        return {
            title:'头部组件'
        };
    }
}
</script>

<style scoped>
    header {
        width: 100%;
        height: 50px;
        text-align: center;
        line-height: 50px;
        color: #fff;
        background: red;
    }
</style>


