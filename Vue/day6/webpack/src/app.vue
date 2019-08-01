<template>
    <div>
        <Header></Header>
        <Search></Search>
        <Panel></Panel>
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import Header from './components/Header.vue';
import Search from './components/Search.vue';
import Panel from './components/Panel.vue';
import Tabbar from './components/Tabbar.vue';
export default {
     components: {
        Header,
        Search,
        Panel,
        Tabbar
    }
}
</script>

