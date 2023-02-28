<template>
    <div>
        <!--Header-->
        <div id="header" class="flex bg-gray-700 text-white sm:max-md:hidden">
            <RouterLink to="/" class="header-btn p-[10px] hover:bg-stone-500 ease-in duration-150">HOME</RouterLink>
            <RouterLink to="/resume" class="header-btn p-[10px] hover:bg-stone-500 ease-in duration-150">RESUME</RouterLink>
            <RouterLink to="/projects" class="header-btn p-[10px] hover:bg-stone-500 ease-in duration-150">PROJECTS</RouterLink>
            <RouterLink to="/aboutme" class="header-btn p-[10px] hover:bg-stone-500 ease-in duration-150">ABOUT ME</RouterLink>
        </div>
    
        <!--Mobile Header-->
        <div class="md:hidden">
            <div class="w-full bg-gray-700 text-center relative">
                <button @click="open = !open" class="p-3 w-full text-gray-400">
                    <font-awesome-icon icon="fa-solid fa-bars" class="pr-[10px]" />
                    <font-awesome-icon icon="fa-solid fa-caret-down" class="" />
                </button>
    
                <div v-if="open" class="w-full text-white absolute bg-gray-700">
                    <RouterLink to="/"><div @click="open = !open" class="p-[10px] m-[10px] bg-stone-500 rounded-[5px]">HOME</div></RouterLink>
                    <RouterLink to="/resume"><div @click="open = !open" class="p-[10px] m-[10px] bg-stone-500 rounded-[5px]">RESUME</div></RouterLink>
                    <RouterLink to="/projects"><div @click="open = !open" class="p-[10px] m-[10px] bg-stone-500 rounded-[5px]">PROJECTS</div></RouterLink>
                    <RouterLink to="/aboutme"><div @click="open = !open" class="p-[10px] m-[10px] bg-stone-500 rounded-[5px]">ABOUT ME</div></RouterLink>
                </div>
            </div>
        </div>
        

    </div>
</template>

<script>
export default {
    data() {
        return {
            open: false,
        }
    }
}
</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap'); */

/*HEADER BUTTONS*/
/* @media screen and (0px <= width <= 500px) {
    #header {
        background-color: red;
    }
}

@media screen and (501px <= width <= 20000px) {
    #header {
        display: flex;
        background-color: #03034C;
    }
    
    .header-btn {
        padding: 10px;
        font-size: 20px;
        font-family: 'Poppins', sans-serif;
        text-decoration: none;
        color: lightgrey;
    }
    .header-btn:hover {
        background-color: #10107B;
        transition: 0.15s ease-in-out;
    }
} */

</style>