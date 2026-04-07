<template>
    <div class="resume-page">

        <!-- Experience -->
        <section class="resume-section" v-animate>
            <div class="section-header">
                <span class="section-eyebrow">Work history</span>
                <h2 class="section-heading">Experience</h2>
            </div>
            <ul class="timeline">
                <li
                    v-for="(job, index) in experience"
                    :key="job.id"
                    class="timeline-item glass"
                    v-animate
                    :data-animate-delay="index * 80"
                >
                    <div class="timeline-meta">
                        <span class="timeline-duration">{{ job.duration }}</span>
                        <span class="timeline-type">{{ job.type }}</span>
                    </div>
                    <div class="timeline-body">
                        <div class="timeline-title">{{ job.title }}</div>
                        <div class="timeline-company">{{ job.company }} &mdash; {{ job.place }}</div>
                        <p class="timeline-desc">{{ job.description }}</p>
                    </div>
                </li>
            </ul>
        </section>

        <!-- Technical Skills -->
        <section class="resume-section" v-animate>
            <div class="section-header">
                <span class="section-eyebrow">What I work with</span>
                <h2 class="section-heading">Technical Skills</h2>
            </div>
            <div class="skills-grid">
                <div
                    v-for="(skill, index) in techSkills"
                    :key="skill.id"
                    class="skill-card glass"
                    v-animate
                    :data-animate-delay="index * 60"
                >
                    <div class="skill-card-title">{{ skill.title }}</div>
                    <ul class="skill-list">
                        <li v-for="s in skill.names" :key="s.id" class="skill-item">{{ s.skillName }}</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Education -->
        <section class="resume-section" v-animate>
            <div class="section-header">
                <span class="section-eyebrow">Background</span>
                <h2 class="section-heading">Education</h2>
            </div>
            <ul class="timeline">
                <li
                    v-for="(school, index) in schools"
                    :key="school.id"
                    class="timeline-item glass"
                    v-animate
                    :data-animate-delay="index * 80"
                >
                    <div class="timeline-meta">
                        <span class="timeline-duration">{{ school.place }}</span>
                    </div>
                    <div class="timeline-body">
                        <div class="timeline-title">{{ school.program }}</div>
                        <div class="timeline-company">{{ school.institution }}</div>
                        <p class="timeline-desc">{{ school.description }}</p>
                    </div>
                </li>
            </ul>
        </section>

    </div>
</template>

<script>
export default {
    data() {
        return {
            experience: [
                {
                    id: 7,
                    title: 'Full Stack Developer',
                    type: 'Part Time',
                    company: 'DESI Telephone Labels',
                    place: 'Fully Remote',
                    duration: 'Oct 2024 – Present',
                    description: 'Developed a web application to transition the company\'s Windows-only software to cross-platform access. Implemented user authentication via a custom-built API and extension-based phone label customization. Created a user-friendly printing system that generates PDFs through RESTful APIs.'
                },
                {
                    id: 6,
                    title: 'Full Stack Developer',
                    type: 'Part Time Contract',
                    company: 'Open Function Computers',
                    place: 'Fully Remote',
                    duration: 'Sep 2024 – Present',
                    description: 'Improved and maintained the KinderCare website, optimizing UX and functionality using JavaScript and PHP.'
                },
                {
                    id: 5,
                    title: 'Frontend Developer',
                    type: 'Part Time',
                    company: 'Bridgesense',
                    place: 'Fully Remote',
                    duration: 'Dec 2022 – Feb 2023',
                    description: 'Built 2 websites from the ground up for clients using HTML, TailwindCSS, Bootstrap, and Peek API.'
                },
                {
                    id: 4,
                    title: 'Software Developer II',
                    type: 'Full Time',
                    company: 'Novacoast',
                    place: 'Fully Remote',
                    duration: 'May 2022 – Aug 2022',
                    description: 'Learning and using TypeScript and Composition API within Vue to redesign the internal portal.'
                },
                {
                    id: 3,
                    title: 'Administration Specialist',
                    type: 'Contract',
                    company: 'Vetsource',
                    place: 'Portland, OR',
                    duration: 'Oct 2021 – Dec 2021',
                    description: 'Called 5–10 veterinary practices per day, maintained data in Salesforce, and sent documents via Salesforce and DocuSign.'
                },
                {
                    id: 2,
                    title: 'Database / Software Developer',
                    type: 'Full Time',
                    company: 'Pollinate',
                    place: 'Portland, OR',
                    duration: 'Dec 2019 – Aug 2020',
                    description: 'Transitioned from Database Developer to Software Engineer. Assisted with projects for clients including Carhartt and Life is Good. Responsible for making data human-readable for front-end output across 100+ Under Armour garments per month.'
                },
                {
                    id: 1,
                    title: 'Database Developer',
                    type: 'Contract',
                    company: 'Pollinate',
                    place: 'Portland, OR',
                    duration: 'Jun 2019 – Dec 2019',
                    description: 'Learned the interrelations of all Pollinate databases, expanded SQL knowledge, and assisted with data for Under Armour garments.'
                }
            ],
            techSkills: [
                {
                    id: 'languages',
                    title: 'Languages',
                    names: [
                        { id: 'html', skillName: 'HTML' },
                        { id: 'css', skillName: 'CSS' },
                        { id: 'js', skillName: 'JavaScript' },
                        { id: 'python', skillName: 'Python' },
                        { id: 'sql', skillName: 'SQL' }
                    ]
                },
                {
                    id: 'front-end',
                    title: 'Front End',
                    names: [
                        { id: 'vanillajs', skillName: 'VanillaJS' },
                        { id: 'vjs', skillName: 'VueJS' },
                        { id: 'grid', skillName: 'CSS Grid' },
                        { id: 'flex', skillName: 'CSS Flexbox' },
                        { id: 'tailwind', skillName: 'Tailwind CSS' },
                        { id: 'bootstrap', skillName: 'Bootstrap' },
                    ]
                },
                {
                    id: 'back-end',
                    title: 'Back End',
                    names: [
                        { id: 'node', skillName: 'NodeJS' },
                        { id: 'express', skillName: 'ExpressJS' }
                    ]
                },
                {
                    id: 'databases',
                    title: 'Databases',
                    names: [
                        { id: 'sql', skillName: 'SQL' },
                        { id: 'psql', skillName: 'PostgreSQL' },
                        { id: 'mdb', skillName: 'MongoDB / Mongoose' },
                        { id: 'pktbase', skillName: 'PocketBase' }
                    ]
                },
                {
                    id: 'testing-suites',
                    title: 'Testing',
                    names: [
                        { id: 'jest', skillName: 'Jest' },
                        { id: 'tdd', skillName: 'Test Driven Development' }
                    ]
                },
                {
                    id: 'tools',
                    title: 'Tools',
                    names: [
                        { id: 'git', skillName: 'Git' },
                        { id: 'github', skillName: 'GitHub' },
                        { id: 'heroku', skillName: 'Heroku' },
                        { id: 'pman', skillName: 'Postman' },
                        { id: 'slack', skillName: 'Slack' },
                        { id: 'jira', skillName: 'Jira' },
                        { id: 'atlassian', skillName: 'Atlassian' },
                        { id: 'bb', skillName: 'BitBucket' },
                        { id: 'sf', skillName: 'Salesforce' },
                    ]
                },
                {
                    id: 'other',
                    title: 'Other',
                    names: [
                        { id: 'api', skillName: 'RESTful APIs' },
                        { id: 'rwb', skillName: 'Responsive Web Design' },
                        { id: 'agile', skillName: 'Agile' },
                        { id: 'oauth', skillName: 'OAuth' },
                        { id: 'jwt', skillName: 'JSON Web Token' },
                    ]
                },
                {
                    id: 'os',
                    title: 'OS',
                    names: [
                        { id: 'windows', skillName: 'Windows' },
                        { id: 'mac', skillName: 'MacOS' },
                        { id: 'linux', skillName: 'Linux' }
                    ]
                }
            ],
            schools: [
                {
                    id: 'cyber',
                    institution: 'Google',
                    program: 'Google Cybersecurity Program',
                    place: 'Remote',
                    description: '250 hours covering SIEM tools, the NIST framework, packet sniffers, Python task automation, and other cybersecurity fundamentals.'
                },
                {
                    id: 'alchemy',
                    institution: 'Alchemy Code Lab',
                    program: 'Full Stack Software Engineering',
                    place: 'Portland, OR',
                    description: '5–6 months of 60–70 hour work weeks learning Full Stack JavaScript end to end.'
                },
                {
                    id: 'wwu',
                    institution: 'Western Washington University',
                    program: 'B.S. in Mathematics',
                    place: 'Bellingham, WA',
                    description: '5 years of single and multivariable calculus, linear algebra, systems of partial differential equations, and Fourier analysis.'
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
.resume-page {
    color: white;
    padding: 60px 24px 80px;
    max-width: 1000px;
    margin: 0 auto;
}

/* ── Section ── */
.resume-section {
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

/* ── Timeline ── */
.timeline {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.timeline-item {
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 0;
    border-radius: 14px;
    overflow: hidden;
    transition: transform 0.25s ease;
}

.timeline-item:hover {
    transform: translateX(4px);
}

.timeline-meta {
    padding: 24px 20px;
    border-right: 1px solid rgba(255,255,255,0.06);
    display: flex;
    flex-direction: column;
    gap: 6px;
    background: rgba(120, 113, 108, 0.06);
}

.timeline-duration {
    font-size: 13px;
    font-weight: 500;
    color: rgba(255,255,255,0.55);
    line-height: 1.4;
}

.timeline-type {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(120, 113, 108, 0.8);
    border: 1px solid rgba(120, 113, 108, 0.3);
    padding: 2px 8px;
    border-radius: 100px;
    width: fit-content;
}

.timeline-body {
    padding: 24px 28px;
}

.timeline-title {
    font-size: 18px;
    font-weight: 600;
    color: white;
    margin-bottom: 4px;
}

.timeline-company {
    font-size: 14px;
    color: rgba(255,255,255,0.45);
    margin-bottom: 12px;
    font-style: italic;
}

.timeline-desc {
    font-size: 14px;
    color: rgba(255,255,255,0.5);
    line-height: 1.7;
    margin: 0;
    font-weight: 300;
}

/* ── Skills grid ── */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 12px;
}

.skill-card {
    border-radius: 14px;
    padding: 20px;
    transition: transform 0.25s ease, background 0.25s ease;
}

.skill-card:hover {
    transform: translateY(-3px);
    background: rgba(255,255,255,0.08);
}

.skill-card-title {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgb(120, 113, 108);
    padding-bottom: 10px;
    margin-bottom: 12px;
    border-bottom: 1px solid rgba(255,255,255,0.07);
}

.skill-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.skill-item {
    font-size: 13px;
    color: rgba(255,255,255,0.6);
    font-weight: 400;
    text-align: center;
}

/* ── Responsive ── */
@media screen and (max-width: 700px) {
    .resume-page {
        padding: 40px 16px 60px;
    }

    .timeline-item {
        grid-template-columns: 1fr;
    }

    .timeline-meta {
        border-right: none;
        border-bottom: 1px solid rgba(255,255,255,0.06);
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;
        padding: 14px 20px;
    }

    .timeline-body {
        padding: 16px 20px 20px;
    }

    .skills-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (max-width: 400px) {
    .skills-grid {
        grid-template-columns: 1fr;
    }
}
</style>
