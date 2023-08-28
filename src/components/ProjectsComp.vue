<template>
    <div>
        <div id="wrapper">
            <!-- Websites-->
            <div class="section">
                <div class="section-title">WEBSITES</div>
                <div>
                    <ul class="website-grid">
                        <li v-for="website in websites" :key="website.id" class="proj-div">
                            <div class="proj-container">
                                <a class="" :href="website.link" target="_blank">
                                    <div class="img-container">
                                        <img :src="website.img" class="proj-img" />
                                    </div>
                                </a>
                                <div class="proj-text">
                                    <div class="proj-desc-tech">
                                        <div class="proj-title">
                                            <a :href="website.link" target="_blank">
                                                {{ website.title }}
                                            </a>
                                        </div>
                                        <div class="proj-desc">{{ website.description }}</div>
                                    </div>
                                    <div class="proj-desc-tech tech-used-div">
                                        <div class="tech-title">TECHNOLOGIES USED:</div>
                                        <ul>
                                            <li v-for="language in website.tech" :key="language.id" class="tech-used">
                                                {{ language.name }}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <!--Projects-->
            <div class="section">
                <div class="section-title">PERSONAL PROJECTS</div>
                <div>
                    <ul class="website-grid">
                        <li v-for="project in projects" :key="project.id" class="proj-div">
                            <div class="proj-container">
                                <a class="website-grid" :href="project.link" target="_blank">
                                    <div class="img-container">
                                        <img :src="project.img" class="proj-img" />
                                    </div>
                                </a>
                                <div class="proj-text">
                                    <div class="proj-desc-tech">
                                        <a :href="project.link" target="_blank">
                                            <div class="proj-title">{{ project.title }}</div>
                                        </a>
                                        <div class="proj-desc">{{ project.description }}</div>
                                    </div>
                                    <div class="proj-desc-tech tech-used-div">
                                        <div class="tech-title">TECHNOLOGIES USED:</div>
                                        <ul>
                                            <li v-for="language in project.tech" :key="language.id" class="tech-used">
                                                {{ language.name }}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import seaEstaImage from "@/assets/img/sea-esta-cabo-resize.jpg";
import laGringaImage from "@/assets/img/lagringa-catamaran-resize.jpg";
import pokeLogo from "@/assets/img/Pokemon-Logo-resize.jpg";

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
                        {
                            id: 'html',
                            name: 'HTML'
                        },
                        {
                            id: 'css',
                            name: 'TailwindCSS'
                        },
                        {
                            id: 'peek',
                            name: 'Peek API'
                        }
                    ]
                },
                {
                    id: 2,
                    img: laGringaImage,
                    title: 'La Gringa Cabo',
                    link: "https://lagringacabo.com/",
                    description: 'A powered catamaran tour, with whale watching, snorkeling, and sunset tours.',
                    tech: [
                        {
                            id: 'html',
                            name: 'HTML'
                        },
                        {
                            id: 'css',
                            name: 'TailwindCSS'
                        },
                        {
                            id: 'peek',
                            name: 'Peek API'
                        }
                    ]
                }
            ],
            projects: [
                {
                    id: 1,
                    img: pokeLogo,
                    title: 'Pokédex',
                    link: "https://return-of-pokedex.netlify.app",
                    description: 'A front-end Pokedex application with a psuedo-API and a filter to search for any Pokemon that fits within the given criteria.',
                    tech: [
                        {
                            id: 'html',
                            name: 'HTML'
                        },
                        {
                            id: 'css',
                            name: 'CSS'
                        },
                        {
                            id: 'api',
                            name: 'Simulated API'
                        },
                        {
                            id: 'vue',
                            name: 'VueJS'
                        }
                    ]
                }
            ]
        }
    }

}
</script>

<style scoped>
#wrapper {
    width: 100%;
}

.section {
    padding: 10px;
}

.section-title {
    color: white;
    text-align: center;
    background-color: rgb(120 113 108);
    padding: 10px;
    margin: 5px 0;
    border-radius: 5px;
    letter-spacing: 2px;
    font-weight: bold;
}

.website-grid {
    text-align: center;
}


.proj-div {
    margin: 20px 0;
}

.proj-container {
    display: grid;
    grid-template-columns: 1fr 4fr;
    border-radius: 5px;
}

.proj-text {
    width: 100%;
    display: grid;
    grid-template-columns: 3fr 1fr;
}

.proj-title {
    color: rgb(120 113 108);
    font-weight: bold;
    font-size: 50px;
    text-align: center;
}

.proj-desc {
    color: white;
    min-height: 48px;
}

.img-container {
    overflow: hidden;
}

.proj-img {
    object-fit: cover;
    transition: transform 0.25s ease;
}

.proj-img:hover {
    transform: scale(1.2);
}

.proj-desc-tech {
    background-color: rgb(55, 65, 81);
    padding: 20px;
}

.tech-title {
    color: rgb(168 162 158);
    font-weight: bold;
    border-bottom: 1px solid white;
}



.tech-used {
    color: white;
    padding: 10px;
}

@media screen and (min-width: 1071px) {
    .proj-img {
        height: 300px;
    }
    .img-container {
        min-width: 400px;
    }
    .tech-used-div {
        margin-left: 5px;
    }
}

@media screen and (max-width: 1070px) {
    #wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .section {
        max-width: 500px;
    }
    .proj-container {
        display: flex;
        flex-direction: column;
    }
    .proj-title {
        font-size: 45px;
    }
    .proj-text {
        display: flex;
        flex-direction: column;
    }
    .tech-used-div {
        margin-top: 5px;
    }

}

@media screen and (max-width: 900px) {
    .proj-container {
        margin: 10px 0; /*Top/Bottom Left/Right */
    }
}

@media screen and (max-width: 600px) {
    .img-container {
        width: 100%;
    }
}

@media screen and (max-width: 500px) {
    .proj-title {
        font-size: 30px;
    }
}
</style>