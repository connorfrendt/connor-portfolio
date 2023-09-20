<template>
    <div>
        <!--Header-->
        <div class="z-10 box-shadow flex bg-gray-700 text-white fixed top-0 w-full sm:max-md:hidden">
            <RouterLink to="/" class="header-btn p-[10px] hover:bg-stone-500 ease-in duration-150">HOME</RouterLink>
            <RouterLink to="/resume" class="header-btn p-[10px] hover:bg-stone-500 ease-in duration-150 border-cls">RESUME</RouterLink>
            <RouterLink to="/projects" class="header-btn p-[10px] hover:bg-stone-500 ease-in duration-150 border-cls">PROJECTS</RouterLink>
            <RouterLink to="/aboutme" class="header-btn p-[10px] hover:bg-stone-500 ease-in duration-150 border-cls">ABOUT ME</RouterLink>
            
            <div class="flex items-center ml-auto">
                <RouterLink to="/contactme" class="header-btn p-[10px] hover:bg-stone-500 ease-in duration-150">Contact Me</RouterLink>

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
        <div class="md:hidden fixed top-0 w-full box-shadow z-10" ref="mobileHeader">
            <div class="w-full bg-gray-700 text-center relative">
                <button @click="open = !open" class="p-[12px] w-full text-gray-400">
                    <font-awesome-icon icon="fa-solid fa-bars" class="pr-[10px]" />
                    <font-awesome-icon icon="fa-solid fa-caret-down" />
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
    },
    mounted() {
        // Add a click event listener to the document
        document.addEventListener("click", this.handleDocumentClick);
    },
    beforeDestroy() {
        // Remove the click event listener when the component is destroyed
        document.removeEventListener("click", this.handleDocumentClick);
    },
    methods: {
        handleDocumentClick(event) {
            // Check if the click occured outide of the mobile header
            const mobileHeader = this.$refs.mobileHeader
            
            if(this.open && mobileHeader && !mobileHeader.contains(event.target)) {
                this.open = false;
            }
        }
    }
}
</script>

<style scoped>
/* .foobar {
    z-index: 1;
} */
.socials {
    font-size: 30px;
}

.socials-mobile {
    margin-top: 20px;
    font-size: 25px;
}

#linkedin {
    border-right: 1px solid gray;
}


.social-links {
    color: lightgray;
    padding: 0 15px;
}

.social-links:visited,
.social-links:active {
    text-decoration: none;
}

.box-shadow {
    box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.3);
}

.border-cls {
    border-left: 2px solid rgb(31, 41, 55);
}
</style>