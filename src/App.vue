<template>
    <div id="app">
        <HeaderComp></HeaderComp>
        <div id="space"></div>
        <RouterView></RouterView>
    </div>
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";

export default {
    components: {
        HeaderComp
    }
}
</script>

<style>
body {
    margin: 0;
    background-color: rgb(31, 41, 55);
}

#app {
    height: 100vh;
}

#space {
    height: 46px;
}
</style>