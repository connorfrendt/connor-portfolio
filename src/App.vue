<template>
    <div id="app">
        <HeaderComp></HeaderComp>
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
}

#app {
    height: 100vh;
}
</style>