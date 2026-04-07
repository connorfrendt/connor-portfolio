<template>
    <div class="projects-page">

        <!-- Websites -->
        <section class="projects-section" v-animate>
            <div class="section-header">
                <span class="section-eyebrow">Live work</span>
                <h2 class="section-heading">Websites</h2>
            </div>
            <ul class="projects-list">
                <li
                    v-for="(website, index) in websites"
                    :key="website.id"
                    class="project-card glass"
                    v-animate
                    :data-animate-delay="index * 120"
                >
                    <a :href="website.link" target="_blank" rel="noopener noreferrer" class="project-img-wrap">
                        <img :src="website.img" :alt="website.title" class="project-img" />
                        <div class="project-img-overlay">
                            <font-awesome-icon icon="fa-solid fa-up-right-from-square" class="overlay-icon" />
                        </div>
                    </a>
                    <div class="project-body">
                        <div class="project-top">
                            <a :href="website.link" target="_blank" rel="noopener noreferrer" class="project-title">
                                {{ website.title }}
                            </a>
                            <p class="project-desc">{{ website.description }}</p>
                        </div>
                        <div class="project-tech">
                            <span v-for="lang in website.tech" :key="lang.id" class="tech-tag">{{ lang.name }}</span>
                        </div>
                    </div>
                </li>
            </ul>
        </section>

        <!-- Personal Projects -->
        <section class="projects-section" v-animate>
            <div class="section-header">
                <span class="section-eyebrow">Side work</span>
                <h2 class="section-heading">Personal Projects</h2>
            </div>
            <ul class="projects-list">
                <li
                    v-for="(project, index) in projects"
                    :key="project.id"
                    class="project-card glass"
                    v-animate
                    :data-animate-delay="index * 120"
                >
                    <a :href="project.link" target="_blank" rel="noopener noreferrer" class="project-img-wrap">
                        <img :src="project.img" :alt="project.title" class="project-img" />
                        <div class="project-img-overlay">
                            <font-awesome-icon icon="fa-solid fa-up-right-from-square" class="overlay-icon" />
                        </div>
                    </a>
                    <div class="project-body">
                        <div class="project-top">
                            <a :href="project.link" target="_blank" rel="noopener noreferrer" class="project-title">
                                {{ project.title }}
                            </a>
                            <p class="project-desc">{{ project.description }}</p>
                        </div>
                        <div class="project-tech">
                            <span v-for="lang in project.tech" :key="lang.id" class="tech-tag">{{ lang.name }}</span>
                        </div>
                    </div>
                </li>
            </ul>
        </section>

    </div>
</template>

<script>
import seaEstaImage from "@/assets/img/sea-esta-cabo-resize.jpg";
import laGringaImage from "@/assets/img/lagringa-catamaran-resize.jpg";
import pokeLogo from "@/assets/img/Pokemon-Logo-resize.jpg";
import dogPic from "@/assets/img/cute-dog-resize.jpg"

export default {
    data() {
        return {
            websites: [
                {
                    id: 1,
                    img: seaEstaImage,
                    title: 'Sea Esta Cabo',
                    link: "https://seaestacabo.com/",
                    description: 'A luxury, private catamaran touring website, letting people book tours.',
                    tech: [
                        { id: 'html', name: 'HTML' },
                        { id: 'css', name: 'TailwindCSS' },
                        { id: 'peek', name: 'Peek API' }
                    ]
                },
                {
                    id: 2,
                    img: laGringaImage,
                    title: 'La Gringa Cabo',
                    link: "https://lagringacabo.com/",
                    description: 'A powered catamaran tour, with whale watching, snorkeling, and sunset tours.',
                    tech: [
                        { id: 'html', name: 'HTML' },
                        { id: 'css', name: 'TailwindCSS' },
                        { id: 'peek', name: 'Peek API' }
                    ]
                }
            ],
            projects: [
                {
                    id: 1,
                    img: pokeLogo,
                    title: 'Pokédex',
                    link: "https://return-of-pokedex.netlify.app",
                    description: 'A front-end Pokédex with a pseudo-API and filter to search any Pokémon by criteria.',
                    tech: [
                        { id: 'html', name: 'HTML' },
                        { id: 'css', name: 'CSS' },
                        { id: 'api', name: 'Simulated API' },
                        { id: 'vue', name: 'VueJS' }
                    ]
                },
                {
                    id: 2,
                    img: dogPic,
                    title: 'Dog Picture Gallery',
                    link: "https://doggypics.netlify.app/#/",
                    description: 'A SPA image gallery with a self-made API for uploading to albums. Uses localStorage as the database.',
                    tech: [
                        { id: 'html', name: 'HTML' },
                        { id: 'css', name: 'CSS' },
                        { id: 'api', name: 'Self-made API' },
                        { id: 'vue', name: 'VueJS' }
                    ]
                }
            ]
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.$el.querySelectorAll('[data-animate-delay]').forEach(el => {
                const delay = el.getAttribute('data-animate-delay');
                if (delay) el.style.transitionDelay = delay + 'ms';
            });
        });
    }
}
</script>

<style scoped>
.projects-page {
    padding: 60px 24px 80px;
    max-width: 1100px;
    margin: 0 auto;
}

/* ── Section ── */
.projects-section {
    margin-bottom: 72px;
}

.section-header {
    margin-bottom: 32px;
}

.section-eyebrow {
    display: block;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgb(120, 113, 108);
    margin-bottom: 6px;
}

.section-heading {
    font-size: clamp(28px, 4vw, 42px);
    font-weight: 700;
    color: white;
    margin: 0;
    line-height: 1.1;
}

/* ── Projects list ── */
.projects-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

/* ── Project card ── */
.project-card {
    border-radius: 16px;
    overflow: hidden;
    display: grid;
    grid-template-columns: 320px 1fr;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.4);
}

/* Image */
.project-img-wrap {
    position: relative;
    overflow: hidden;
    display: block;
    aspect-ratio: 16 / 10;
}

.project-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
    display: block;
}

.project-card:hover .project-img {
    transform: scale(1.06);
}

.project-img-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.project-img-wrap:hover .project-img-overlay {
    opacity: 1;
}

.overlay-icon {
    font-size: 28px;
    color: white;
}

/* Body */
.project-body {
    padding: 28px 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
}

.project-title {
    display: inline-block;
    font-size: clamp(20px, 2.5vw, 28px);
    font-weight: 700;
    color: white;
    text-decoration: none;
    margin-bottom: 10px;
    transition: color 0.2s ease;
}

.project-title:hover {
    color: rgb(120, 113, 108);
}

.project-desc {
    font-size: 15px;
    color: rgba(255,255,255,0.5);
    line-height: 1.65;
    font-weight: 300;
    margin: 0;
}

.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.tech-tag {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.06em;
    color: rgba(255,255,255,0.6);
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    padding: 4px 12px;
    border-radius: 100px;
}

/* ── Responsive ── */
@media screen and (max-width: 900px) {
    .project-card {
        grid-template-columns: 1fr;
    }

    .project-img-wrap {
        aspect-ratio: 16 / 7;
    }
}

@media screen and (max-width: 600px) {
    .projects-page {
        padding: 40px 16px 60px;
    }

    .project-img-wrap {
        aspect-ratio: 16 / 8;
    }

    .project-body {
        padding: 20px;
    }
}
</style>
