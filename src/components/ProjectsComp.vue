<template>
    <div>
        <div>

            <ul>

                <li v-for="myWork in myWorks" :key="id" class="section-title">
                    {{ myWork.sectionTitle }}
                </li>
    
                <div>
    
                    <ul class="website-grid">
                        <li v-for="site in websites" :key="website.id" class="proj-div">
    
                            <div class="proj-container">
                                <a class="" :href="website.link" target="_blank">
                                    <div class="img-container">
                                        <img :src="website.img" class="proj-img" />
                                    </div>
                                </a>
    
                                <div class="proj-text">
                                    <div class="proj-desc-tech">
                                        <div class="proj-title" :href="website.link">
                                            {{ website.title }}
                                        </div>
        
                                        <div class="proj-desc">
                                            {{ website.description }}
                                        </div>
    
                                    </div>
                                    
                                    <div class="proj-desc-tech">
                                        <div class="tech-title">
                                            Technologies Used:
                                        </div>
                                        <div class="tech-used">
                                            {{ website.tech }}
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                        </li>
                    </ul>
        
                </div>
            </ul>


            </div>


            <!-- <div class="section">

                <div class="section-title">
                    PERSONAL PROJECTS
                </div>

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
                                            <div class="proj-title">
                                                {{ project.title }}
                                            </div>

                                        </a>
                                        <div class="proj-desc">
                                            {{ project.description }}
                                        </div>
                                    </div>
                                    
                                    <div class="proj-desc-tech">
                                        <div class="tech-title">
                                            Technologies Used:
                                        </div>
                                        <div class="tech-used">
                                            {{ project.tech }}
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </li>
                    </ul>

                </div>

            </div> -->

            
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
            myWorks: [
                {
                    id: 1,
                    sectionTitle: 'WEBSITES',
                    websites: [
                        {
                            id: 'sea-esta',
                            img: seaEstaImage,
                            title: 'Sea Esta Cabo',
                            link: "https://seaestacabo.com/",
                            description: 'A luxury, private catamaran touring website, letting people book tours.',
                            tech: 'HTML, CSS, PeekAPI, etc.//////'
                        },
                        {
                            id: 'la-gringa',
                            img: laGringaImage,
                            title: 'La Gringa Cabo',
                            link: "https://lagringacabo.com/",
                            description: 'A powered catamaran tour, with whale watching, snorkeling, and sunset tours.',
                            tech: 'HTML, Tailwind CSS, PeekAPI, etc.//////'
                        }
                    ]
                },
                {
                    id: 2,
                    sectionTitle: 'PROJECTS',
                    projects: [
                        {
                            id: 'pokedex',
                            img: pokeLogo,
                            title: 'Pokedex',
                            link: "https://return-of-pokedex.netlify.app",
                            description: 'A front-end Pokedex application with a psuedo-API with a filter to search for any Pokemon that fits within the given criteria.',
                            tech: 'HTML, CSS, VueJS'
                        }
                    ]
                }
            ]
        }
    }

}
</script>

<style scoped>
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
    display: inline-block;
    width: 100%;
}

.website-grid {
    text-align: center;
}


.proj-div {
    margin: 20px 0;
}

.proj-container {
    display: flex;
    width: 100%;
    border-radius: 5px;
}

.proj-text {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 300px;
}

.proj-title {
    color: rgb(120 113 108);
    font-weight: bold;
    font-size: 50px;
}

.proj-desc {
    color: white;
    min-height: 48px;
}



.img-container {
    overflow: hidden;
    width: 100%;
}

.proj-img {
    object-fit: cover;
    transition: transform 0.25s ease;
    height: 300px;
}

.proj-img:hover {
    transform: scale(1.2);
}

.proj-desc-tech {
    background-color: rgb(55, 65, 81);
    width: 100%;
    height: 100%;
    padding: 20px;
}

.tech-title {
    color: rgb(168 162 158);
}


.tech-used {
    color: white;
}

@media screen and (max-width: 1250px) {
    
}

@media screen and (max-width: 900px) {
    .proj-container {
        display: flex;
        flex-direction: column;
        margin: 10px 0; /*Top/Bottom Left/Right */
    }
    
}
</style>