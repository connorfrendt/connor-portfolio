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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');

body {
    margin: 0;
    background-color: rgb(17, 24, 39);
    font-family: 'Inter', sans-serif;
}

#app {
    min-height: 100vh;
}

#space {
    height: 64px;
}

/* Glassmorphism utility */
.glass {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.08);
}

.glass-warm {
    background: rgba(120, 113, 108, 0.15);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(120, 113, 108, 0.3);
}

/* Scroll animation */
.animate-hidden {
    opacity: 0;
    transform: translateY(32px);
    transition: opacity 0.65s ease, transform 0.65s ease;
}

.animate-visible {
    opacity: 1;
    transform: translateY(0);
}
</style>