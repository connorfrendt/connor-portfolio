<template>
    <div>
        <!--Desktop Header-->
        <nav class="header-nav z-10 fixed top-0 w-full sm:max-md:hidden">
            <div class="header-inner">
                <div class="nav-links">
                    <RouterLink to="/" class="nav-link" exact-active-class="nav-link--active">Home</RouterLink>
                    <RouterLink to="/resume" class="nav-link" active-class="nav-link--active">Resume</RouterLink>
                    <RouterLink to="/projects" class="nav-link" active-class="nav-link--active">Projects</RouterLink>
                    <RouterLink to="/aboutme" class="nav-link" active-class="nav-link--active">About Me</RouterLink>
                </div>

                <div class="nav-right">
                    <RouterLink to="/contactme" class="contact-btn" active-class="contact-btn--active">Contact Me</RouterLink>

                    <a class="social-link" href="https://www.linkedin.com/in/connorfrendt" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <font-awesome-icon icon="fa-brands fa-linkedin" />
                    </a>
                    <a class="social-link" href="https://www.github.com/connorfrendt" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <font-awesome-icon icon="fa-brands fa-github" />
                    </a>
                </div>
            </div>
        </nav>

        <!--Mobile Header-->
        <div class="mobile-header md:hidden fixed top-0 w-full z-10" ref="mobileHeader">
            <div class="mobile-bar">
                <button @click="open = !open" class="mobile-toggle" aria-label="Toggle menu">
                    <font-awesome-icon icon="fa-solid fa-bars" />
                    <font-awesome-icon :icon="open ? 'fa-solid fa-caret-up' : 'fa-solid fa-caret-down'" class="ml-2" />
                </button>
            </div>

            <transition name="menu-slide">
                <div v-if="open" class="mobile-menu">
                    <RouterLink to="/" exact-active-class="mobile-link--active" @click.native="open = false" class="mobile-link">Home</RouterLink>
                    <RouterLink to="/resume" active-class="mobile-link--active" @click.native="open = false" class="mobile-link">Resume</RouterLink>
                    <RouterLink to="/projects" active-class="mobile-link--active" @click.native="open = false" class="mobile-link">Projects</RouterLink>
                    <RouterLink to="/aboutme" active-class="mobile-link--active" @click.native="open = false" class="mobile-link">About Me</RouterLink>
                    <RouterLink to="/contactme" active-class="mobile-link--active" @click.native="open = false" class="mobile-link">Contact Me</RouterLink>

                    <div class="mobile-socials">
                        <a class="social-link" href="https://www.linkedin.com/in/connorfrendt" target="_blank" rel="noopener noreferrer">
                            <font-awesome-icon icon="fa-brands fa-linkedin" />
                        </a>
                        <a class="social-link" href="https://www.github.com/connorfrendt" target="_blank" rel="noopener noreferrer">
                            <font-awesome-icon icon="fa-brands fa-github" />
                        </a>
                    </div>
                </div>
            </transition>
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
        document.addEventListener('click', this.handleDocumentClick);
    },
    beforeDestroy() {
        document.removeEventListener('click', this.handleDocumentClick);
    },
    methods: {
        handleDocumentClick(event) {
            const mobileHeader = this.$refs.mobileHeader;
            if (this.open && mobileHeader && !mobileHeader.contains(event.target)) {
                this.open = false;
            }
        }
    }
}
</script>

<style scoped>
.header-nav {
    background: rgba(17, 24, 39, 0.7);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    height: 64px;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 4px;
}

.nav-link {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.05em;
    padding: 6px 14px;
    border-radius: 6px;
    transition: color 0.2s ease, background 0.2s ease;
    position: relative;
}

.nav-link:hover {
    color: white;
    background: rgba(255, 255, 255, 0.07);
}

.nav-link--active {
    color: white !important;
}

.nav-link--active::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 14px;
    right: 14px;
    height: 2px;
    background: rgb(120, 113, 108);
    border-radius: 2px;
}

.nav-right {
    display: flex;
    align-items: center;
    gap: 8px;
}

.contact-btn {
    color: rgba(255, 255, 255, 0.75);
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    padding: 7px 16px;
    border-radius: 6px;
    border: 1px solid rgba(120, 113, 108, 0.4);
    transition: all 0.2s ease;
    margin-right: 8px;
}

.contact-btn:hover,
.contact-btn--active {
    background: rgba(120, 113, 108, 0.2);
    border-color: rgba(120, 113, 108, 0.7);
    color: white;
}

.social-link {
    color: rgba(255, 255, 255, 0.5);
    font-size: 20px;
    padding: 8px 10px;
    border-radius: 6px;
    transition: color 0.2s ease, background 0.2s ease;
    text-decoration: none;
    display: flex;
    align-items: center;
}

.social-link:hover {
    color: white;
    background: rgba(255, 255, 255, 0.07);
}

/* Mobile */
.mobile-header {
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
}

.mobile-bar {
    background: rgba(17, 24, 39, 0.85);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.mobile-toggle {
    width: 100%;
    padding: 14px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 16px;
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.2s ease;
}

.mobile-toggle:hover {
    color: white;
}

.mobile-menu {
    background: rgba(17, 24, 39, 0.95);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
    padding: 8px 16px 16px;
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.mobile-link {
    display: block;
    color: rgba(255, 255, 255, 0.65);
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
    padding: 10px 14px;
    border-radius: 8px;
    transition: all 0.2s ease;
}

.mobile-link:hover {
    color: white;
    background: rgba(255, 255, 255, 0.07);
}

.mobile-link--active {
    color: white !important;
    background: rgba(120, 113, 108, 0.2) !important;
}

.mobile-socials {
    display: flex;
    gap: 4px;
    padding: 8px 4px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    margin-top: 8px;
}

/* Menu slide transition */
.menu-slide-enter-active,
.menu-slide-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
}
.menu-slide-enter,
.menu-slide-leave-to {
    opacity: 0;
    transform: translateY(-8px);
}
</style>
