<template>
    <div>
        <!--Header-->
        <div class="flex bg-gray-700 text-white fixed top-0 w-full sm:max-md:hidden">
            <RouterLink to="/" class="header-btn p-[10px] hover:bg-stone-500 ease-in duration-150">HOME</RouterLink>
            <RouterLink to="/resume" class="header-btn p-[10px] hover:bg-stone-500 ease-in duration-150">RESUME</RouterLink>
            <RouterLink to="/projects" class="header-btn p-[10px] hover:bg-stone-500 ease-in duration-150">PROJECTS</RouterLink>
            <RouterLink to="/aboutme" class="header-btn p-[10px] hover:bg-stone-500 ease-in duration-150">ABOUT ME</RouterLink>
            <RouterLink to="/contactme" class="header-btn p-[10px] hover:bg-stone-500 ease-in duration-150">CONTACT ME</RouterLink>
            
            <div class="flex items-center ml-auto">
                <div id="linkedin" class="socials hover:bg-[#0077b5] ease-in duration-150">
                    <a class="social-links" href="https://www.linkedin.com/in/connorfrendt" target="_blank">
                        <font-awesome-icon icon="fa-brands fa-linkedin" />
                    </a>
                </div>
                <div id="github" class="socials hover:bg-black ease-in duration-150">
                    <a class="social-links" href="https://www.github.com/connorfrendt" target="_blank">
                        <font-awesome-icon icon="fa-brands fa-github" />
                    </a>
                </div>
            </div>
        </div>
    
        <!--Mobile Header-->
        <div class="md:hidden fixed top-0 w-full box-shadow z-10">
            <div class="w-full bg-gray-700 text-center relative">
                <button @click="open = !open" class="p-[12px] w-full text-gray-400">
                    <font-awesome-icon icon="fa-solid fa-bars" class="pr-[10px]" />
                    <font-awesome-icon icon="fa-solid fa-caret-down" class="" />
                </button>
    
                <div v-if="open" class="w-full text-white absolute bg-gray-700 box-shadow">
                    <RouterLink to="/"><div @click="open = !open" class="p-[10px] m-[10px] bg-stone-500 rounded-[5px]">HOME</div></RouterLink>
                    <RouterLink to="/resume"><div @click="open = !open" class="p-[10px] m-[10px] bg-stone-500 rounded-[5px]">RESUME</div></RouterLink>
                    <RouterLink to="/projects"><div @click="open = !open" class="p-[10px] m-[10px] bg-stone-500 rounded-[5px]">PROJECTS</div></RouterLink>
                    <RouterLink to="/aboutme"><div @click="open = !open" class="p-[10px] m-[10px] bg-stone-500 rounded-[5px]">ABOUT ME</div></RouterLink>
                    <RouterLink to="/contactme"><div @click="open = !open" class="p-[10px] m-[10px] bg-stone-500 rounded-[5px]">CONTACT ME</div></RouterLink>
                    
                    <div class="flex justify-center">
                        <div id="linkedin" class="socials-mobile">
                            <a class="social-links" href="https://www.linkedin.com/in/connorfrendt" target="_blank">
                                <font-awesome-icon icon="fa-brands fa-linkedin" />
                            </a>
                        </div>
                        <div id="github" class="socials-mobile">
                            <a class="social-links" href="https://www.github.com/connorfrendt" target="_blank">
                                <font-awesome-icon icon="fa-brands fa-github" />
                            </a>
                        </div>
                    </div>

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
.socials {
    font-size: 30px;
}

.socials-mobile {
    margin-top: 20px;
    font-size: 25px;
}

.box-shadow {
    box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.3);
}
</style>