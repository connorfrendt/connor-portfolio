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
        <div class="md:hidden fixed top-0 w-full z-20">
            <!-- Top bar -->
            <div class="mobile-bar">
                <span class="mobile-bar-name">Connor Frendt</span>
                <button @click="open = !open" class="mobile-toggle" :aria-label="open ? 'Close menu' : 'Open menu'">
                    <transition name="icon-swap" mode="out-in">
                        <font-awesome-icon v-if="!open" key="bars" icon="fa-solid fa-bars" />
                        <font-awesome-icon v-else key="x" icon="fa-solid fa-xmark" />
                    </transition>
                </button>
            </div>
        </div>

        <!-- Full-screen overlay -->
        <transition name="overlay">
            <div v-if="open" class="mobile-overlay md:hidden" @click.self="open = false">
                <nav class="mobile-overlay-nav">
                    <RouterLink to="/" exact-active-class="overlay-link--active" @click.native="open = false" class="overlay-link">
                        Home
                    </RouterLink>
                    <RouterLink to="/resume" active-class="overlay-link--active" @click.native="open = false" class="overlay-link">
                        Resume
                    </RouterLink>
                    <RouterLink to="/projects" active-class="overlay-link--active" @click.native="open = false" class="overlay-link">
                        Projects
                    </RouterLink>
                    <RouterLink to="/aboutme" active-class="overlay-link--active" @click.native="open = false" class="overlay-link">
                        About Me
                    </RouterLink>
                    <RouterLink to="/contactme" active-class="overlay-link--active" @click.native="open = false" class="overlay-link">
                        Contact Me
                    </RouterLink>

                    <div class="overlay-socials">
                        <a class="overlay-social" href="https://www.linkedin.com/in/connorfrendt" target="_blank" rel="noopener noreferrer">
                            <font-awesome-icon icon="fa-brands fa-linkedin" />
                        </a>
                        <a class="overlay-social" href="https://www.github.com/connorfrendt" target="_blank" rel="noopener noreferrer">
                            <font-awesome-icon icon="fa-brands fa-github" />
                        </a>
                    </div>
                </nav>
            </div>
        </transition>
    </div>
</template>

<script>
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faXmark);

export default {
    data() {
        return {
            open: false,
        }
    },
    watch: {
        open(val) {
            document.body.style.overflow = val ? 'hidden' : '';
        }
    },
    beforeDestroy() {
        document.body.style.overflow = '';
    }
}
</script>

<style scoped>
/* ── Desktop nav ── */
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

/* ── Mobile top bar ── */
.mobile-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    height: 56px;
    background: rgba(17, 24, 39, 0.85);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.mobile-bar-name {
    font-size: 15px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.75);
    letter-spacing: 0.04em;
}

.mobile-toggle {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.75);
    font-size: 20px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    z-index: 30;
    position: relative;
}

.mobile-toggle:hover {
    color: white;
    background: rgba(255, 255, 255, 0.1);
}

/* ── Full-screen overlay ── */
.mobile-overlay {
    position: fixed;
    inset: 0;
    z-index: 15;
    background: rgba(10, 15, 25, 0.97);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    display: flex;
    align-items: center;
    justify-content: center;
}

.mobile-overlay-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 0 32px;
}

.overlay-link {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 28px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.55);
    text-decoration: none;
    padding: 14px 0;
    border-radius: 12px;
    letter-spacing: 0.02em;
    transition: color 0.2s ease, background 0.2s ease;
}

.overlay-link:hover {
    color: white;
    background: rgba(255, 255, 255, 0.05);
}

.overlay-link--active {
    color: white !important;
    background: rgba(120, 113, 108, 0.15) !important;
}

.overlay-socials {
    display: flex;
    gap: 16px;
    margin-top: 32px;
    padding-top: 24px;
    border-top: 1px solid rgba(255, 255, 255, 0.07);
    width: 100%;
    justify-content: center;
}

.overlay-social {
    color: rgba(255, 255, 255, 0.4);
    font-size: 26px;
    padding: 10px 16px;
    border-radius: 8px;
    text-decoration: none;
    transition: color 0.2s ease, background 0.2s ease;
}

.overlay-social:hover {
    color: white;
    background: rgba(255, 255, 255, 0.07);
}

/* ── Transitions ── */
.overlay-enter-active,
.overlay-leave-active {
    transition: opacity 0.3s ease;
}
.overlay-enter,
.overlay-leave-to {
    opacity: 0;
}

.icon-swap-enter-active,
.icon-swap-leave-active {
    transition: opacity 0.15s ease, transform 0.15s ease;
}
.icon-swap-enter {
    opacity: 0;
    transform: rotate(-90deg) scale(0.7);
}
.icon-swap-leave-to {
    opacity: 0;
    transform: rotate(90deg) scale(0.7);
}
</style>
