<template>
    <div id="resume">

        <!--Experience-->
        <div class="section">
            <div class="list-bg-title"><b>EXPERIENCE</b></div>
            <ul id="exp" class="list-bg">
                <li v-for="job in experience" :key="job.id" class="exp-and-schools-element">
                    <div class="text-[25px]"><b>{{ job.title }}</b></div>
                    <div><i>{{ job.company }}</i> - <i>{{ job.type }}</i></div>
                    <div>{{ job.duration }} | {{ job.place }}</div>
                    <div class="desc">{{ job.description }}</div>
                </li>
            </ul>
        </div>

        <!--Technical Skills-->
        <div class="section">
            <div class="list-bg-title"><b>TECHNICAL SKILLS</b></div>
            <ul class="list-bg" id="tech-skills-grid">
                <li v-for="skill in techSkills" :key="skill.id" class="skills" id="tech-skill">
                    <div>
                        <div class="skill-title text-stone-400"><b>{{ skill.title.toUpperCase() }}</b></div>
                        <ul v-for="skillName in skill.names" :key="skillName.id">
                            <li class="skill-name">{{ skillName.skillName }}</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>

        <!--Education-->
        <div id="edu-section" class="section">
            <div class="list-bg-title"><b>EDUCATION</b></div>
            <ul id="education" class="list-bg">
                <li v-for="school in schools" :key="school.id" class="exp-and-schools-element">
                    <div class="school-program-title"><b>{{ school.program }}</b></div>
                    <div><i>{{ school.gradDate }}</i></div>
                    <div>{{ school.institution }} | {{ school.place }}</div>
                    <div class="desc">{{ school.description }}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            experience: [
                {
                    id: 5,
                    title: 'Frontend Developer',
                    type: 'Part Time',
                    company: 'Bridgesense',
                    place: 'Fully Remote',
                    duration: 'December 2022 - February 2023',
                    description: 'Built websites from the ground up for clients using HTML, TailwindCSS, Bootstrap, & Peek API.'
                },
                {
                    id: 4,
                    title: 'Software Developer II',
                    type: 'Full Time',
                    company: 'Novacoast',
                    place: 'Fully Remote',
                    duration: 'May 2022 - August 2022',
                    description: 'In the process of learning and using TypeScript and Composition API within the Vue framework to redesign the internal portal.'
                },
                {
                    id: 3,
                    title: 'Administration Specialist',
                    type: 'Contract',
                    company: 'Vetsource',
                    place: 'Portland, OR',
                    duration: 'October 2021 - December 2021',
                    description: 'I called 5 - 10 veterinary practices per day, I used Salesforce to keep the data up to date for those practices, and I sent out documents via Salesforce & Docusign.'
                },
                {
                    id: 2,
                    title: 'Database/Software Developer',
                    type: 'Full Time',
                    company: 'Pollinate',
                    place: 'Portland, OR',
                    duration: 'December 2019 - August 2020',
                    description: 'As a Database Developer, I was transitioning to a Software Engineer within the company.  I assisted with software development projects for clients (e.g. Carhartt, Life is Good), as well as maintained their databases.  I was responsible for making data that\'s human readable to get output to the front-end. I manipulated the data behind 100+ Under Armour garments per month, as well as helped out with the data for JBL speakers, Astro Headsets, and Bauer Hockey equipment, among others.'
                },
                {
                    id: 1,
                    title: 'Database Developer',
                    type: 'Contract',
                    company: 'Pollinate',
                    place: 'Portland, OR',
                    duration: 'June 2019 - December 2019',
                    description: 'As a Database Developer, I got to learn the interrelations of all of Pollinate\'s databases, expand my SQL knowledge, and help with the data behind building out Under Armour garments.'
                }
            ],
            techSkills: [
                {
                    id: 'languages',
                    title: 'Languages',
                    names: [
                        {
                            id: 'html',
                            skillName: 'HTML',
                        },
                        {
                            id: 'css',
                            skillName: 'CSS'
                        },
                        {
                            id: 'js',
                            skillName: 'JavaScript'
                        },
                        {
                            id: 'python',
                            skillName: 'Python'
                        },
                        {
                            id: 'sql',
                            skillName: 'SQL'
                        }
                    ]
                },
                {
                    id: 'front-end',
                    title: 'Front End',
                    names: [
                        {
                            id: 'vanillajs',
                            skillName: 'VanillaJS'
                        },
                        {
                            id: 'vjs',
                            skillName: 'VueJS'
                        },
                        {
                            id: 'grid',
                            skillName: 'CSS Grid'
                        },
                        {
                            id: 'flex',
                            skillName: 'CSS Flexbox'
                        },
                        {
                            id: 'tailwind',
                            skillName: 'Tailwind CSS'
                        },
                        {
                            id: 'bootstrap',
                            skillName: 'Bootstrap'
                        },
                    ]
                },
                {
                    id: 'back-end',
                    title: 'Back End',
                    names: [
                        {
                            id: 'node',
                            skillName: 'NodeJS'
                        },
                        {
                            id: 'express',
                            skillName: 'ExpressJS'
                        }
                    ]
                },
                {
                    id: 'databases',
                    title: 'Databases',
                    names: [
                        {
                            id: 'sql',
                            skillName: 'SQL'
                        },
                        {
                            id: 'psql',
                            skillName: 'PostgreSQL'
                        },
                        {
                            id: 'mdb',
                            skillName: 'Mongoose &\n MongoDB'
                        }
                    ]
                },
                {
                    id: 'testing-suites',
                    title: 'Testing',
                    names: [
                        {
                            id: 'jest',
                            skillName: 'Jest'
                        },
                        {
                            id: 'tdd',
                            skillName: 'Test Driven Development'
                        }
                    ]
                },
                {
                    id: 'tools',
                    title: 'Tools',
                    names: [
                        {
                            id: 'git',
                            skillName: 'Git'
                        },
                        {
                            id: 'github',
                            skillName: 'GitHub'
                        },
                        {
                            id: 'heroku',
                            skillName: 'Heroku'
                        },
                        {
                            id: 'pman',
                            skillName: 'Postman'
                        },
                        {
                            id: 'slack',
                            skillName: 'Slack'
                        },
                        {
                            id: 'jira',
                            skillName: 'Jira'
                        },
                        {
                            id: 'atlassian',
                            skillName: 'Atlassian'
                        },
                        {
                            id: 'bb',
                            skillName: 'BitBucket'
                        },
                        {
                            id: 'sf',
                            skillName: 'Salesforce'
                        },
                    ]
                },
                {
                    id: 'other',
                    title: 'Other',
                    names: [
                        {
                            id: 'api',
                            skillName: 'REST APIs'
                        },
                        {
                            id: 'rwb',
                            skillName: 'Responsive Web Design'
                        },
                        {
                            id: 'agile',
                            skillName: 'Agile'
                        },
                        {
                            id: 'oauth',
                            skillName: 'OAuth'
                        },
                        {
                            id: 'jwt',
                            skillName: 'JSON Web Token'
                        },
                    ]
                },
                {
                    id: 'os',
                    title: 'OS',
                    names: [
                        {
                            id: 'windows',
                            skillName: 'Windows'
                        },
                        {
                            id: 'mac',
                            skillName: 'MacOS'
                        },
                        {
                            id: 'linux',
                            skillName: 'Linux'
                        }
                    ]
                }
            ],
            schools: [
                {
                    id: 'alchemy',
                    institution: 'Alchemy Code Lab',
                    gradDate: 'Feb 2019',
                    program: 'Full Stack Software Engineering',
                    place: 'Portland, OR',
                    description: '5-6 months of 60-70 hour work weeks learning Full Stack JavaScript'
                },
                {
                    id: 'wwu',
                    institution: 'Western Washington University',
                    gradDate: 'Dec 2017',
                    program: 'B.S. in Mathematics',
                    place: 'Bellingham, WA',
                    description: '5 years of single and multivariable calculus, with linear algebra, systems of partial differential equations, and forier analysis.'
                }
            ]
        }
    }
}
</script>

<style scoped>
#resume {
    color: white;
}

.list-bg-title {
    border-radius: 5px;
    background-color: rgb(120 113 108);
    padding: 10px;
    text-align: center;
    letter-spacing: 2px;
    margin: 0 5px;
}
.list-bg {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

#tech-skills-grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
}

#tech-skill {
    /* min-height: 400px; */
}

.exp-and-schools-element {
    background-color: rgb(55, 65, 81);
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
}

.desc {
    color: rgb(156, 163, 175);
}

.skills {
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
    background-color: rgb(55, 65, 81);
}
.skill-title {
    text-align: center;
    padding: 10px;
    border-bottom: 1px solid white;
    letter-spacing: 2px;
    font-size: 20px;
}
.skill-name {
    padding: 15px;
    text-align: center;
    font-size: 16.5px;
}

.school-program-title {
    font-size: 22px;
}

#edu-section {
    padding-bottom: 12px;
}

@media screen and (max-width: 5000px) {
    .section {
        padding: 20px;
    }
}

@media screen and (max-width: 1523px) {
    #tech-skills-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media screen and (max-width: 1000px) {
    .section {
        margin: 12px 0; /*NS EW*/
    }
    #tech-skills-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media screen and (max-width: 767px) {
    #tech-skills-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (max-width: 500px) {
    #tech-skills-grid {
        grid-template-columns: 1fr;
    }

    .skill-name{
        font-size: 20px;
    }
}
</style>