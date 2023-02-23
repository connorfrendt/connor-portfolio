<template>
    <div>
        <!--Header-->
        <div id="header" class="flex bg-[#03034C] text-white sm:max-md:hidden">
            <RouterLink to="/" class="header-btn p-[10px] hover:bg-[#10107B] ease-in duration-150">HOME</RouterLink>
            <RouterLink to="/resume" class="header-btn p-[10px] hover:bg-[#10107B] ease-in duration-150">RESUME</RouterLink>
            <RouterLink to="/projects" class="header-btn p-[10px] hover:bg-[#10107B] ease-in duration-150">PROJECTS</RouterLink>
            <RouterLink to="/aboutme" class="header-btn p-[10px] hover:bg-[#10107B] ease-in duration-150">ABOUT ME</RouterLink>
        </div>
    
        <!--Mobile Header-->
        <div class="md:hidden">
            <div class="text-left inline-flex flex-col w-full">
                <button @click="open = !open" class="p-3 bg-white w-full">
                    MENU
                    <font-awesome-icon icon="fa-solid fa-bars" />
                </button>
    
                <div v-if="open" class="bg-white border-t border-gray-300">
                    <div class="">Link 1</div>
                    <div class="">Link 1</div>
                    <div class="">Link 1</div>
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