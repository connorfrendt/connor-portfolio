<template>
    <div class="about-page">

        <!-- Intro block -->
        <div class="about-hero" v-animate>
            <div class="about-hero-badge glass-warm">
                Full Stack JavaScript Developer
            </div>
            <p class="about-bio">
                After graduating with a B.S. in Mathematics, I eagerly plunged in head first into the tech world.
                Complex puzzles and head-scratchers are what I thrive off of. With knowledge of both front and back end,
                I see many different perspectives and adapt accordingly. My ambition to help others and my craving for
                more knowledge is what drives me.
            </p>
        </div>

        <!-- Why / How -->
        <div class="about-split" v-animate>
            <div class="about-split-label glass">
                <span class="split-eyebrow">Philosophy</span>
                <div class="split-heading">But why?<br /><span class="split-heading--muted">…How?</span></div>
            </div>
            <div class="about-split-body">
                These two questions are how I understand most everything. I don't just sit idly by and think
                "okay this works and I don't know why" — I get into the nitty gritty. Whenever there's a new concept,
                I ask "why does it work?" and "how does it work?" Sure, 2&nbsp;+&nbsp;2&nbsp;=&nbsp;4, but if I don't
                have an intuitive understanding of what "2" is, it'll be hard to understand why those add up, and even
                harder to understand why d/dx&nbsp;[e<sup>x</sup>]&nbsp;=&nbsp;e<sup>x</sup>, or why
                e<sup>iπ</sup>&nbsp;+&nbsp;1&nbsp;=&nbsp;0. Once I figure out how something works, I can apply it
                across a much broader scope.
            </div>
        </div>

        <!-- Patterns -->
        <div class="about-split about-split--reverse" v-animate>
            <div class="about-split-body">
                I could jump into the deep end of a language I've never touched, figure out how it works, break it,
                fix it, and build on it — because every language and application follows some sort of pattern.
                I once jumped into a JavaScript project with zero JS knowledge, poked around, and fixed a broken
                piece because I understood the pattern — all in a language I didn't know yet.
            </div>
            <div class="about-split-label glass">
                <span class="split-eyebrow">Learning style</span>
                <div class="split-heading">
                    Patterns,<br />
                    <span class="split-heading--muted">patterns,</span><br />
                    <span class="split-heading--dimmer">patterns…</span>
                </div>
            </div>
        </div>

        <!-- Hobbies -->
        <div class="hobbies-section">
            <div class="section-eyebrow" v-animate>Outside the code</div>
            <h2 class="section-heading" v-animate :data-animate-delay="100">Interests</h2>
            <p class="section-sub" v-animate :data-animate-delay="150">It's more a question of what I <em>don't</em> like to do.</p>

            <ul class="hobbies-grid">
                <li
                    v-for="(hobby, index) in hobbies"
                    :key="hobby.id"
                    class="hobby-card glass"
                    v-animate
                    :data-animate-delay="index * 80"
                >
                    <div class="hobby-title">{{ hobby.title }}</div>
                    <div class="hobby-desc">{{ hobby.description }}</div>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            hobbies: [
                {
                    id: 1,
                    title: "Martial Arts",
                    description: "I've been practicing martial arts since I was 9 years old. It is hands down one of my favorite things to do. I love being able to protect myself and others."
                },
                {
                    id: 2,
                    title: "Gymnastics",
                    description: "I started gymnastics in high school and never wanted to stop. Being able to do a back flip is a cool party trick!"
                },
                {
                    id: 3,
                    title: "Learning Languages",
                    description: "I'm currently learning Spanish and Portuguese at the same time! I'm also learning other programming languages — patterns make them all click faster."
                },
                {
                    id: 4,
                    title: "Guitar, Piano, Ukulele & Drums",
                    description: "I've been playing music sporadically throughout my life. I have a decent ear for transposing songs across instruments."
                },
                {
                    id: 5,
                    title: "Fusion & West Coast Swing",
                    description: "Dancing was a hidden passion until college. Once I found the community, music, and style I was hooked. Being able to connect with others on the floor is one of my favorite things."
                },
                {
                    id: 6,
                    title: "Big Videogame Nerd",
                    description: "Pretty sure I was born with a controller in my hand. Big into MMOs, RPGs, and strategic puzzle games. Also hugely into D&D and tabletop — I love building stories with others."
                },
            ]
        }
    },
    mounted() {
        // Handle staggered delay from data attribute
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
.about-page {
    color: white;
    padding: 60px 24px 80px;
    max-width: 1000px;
    margin: 0 auto;
}

/* ── Hero ── */
.about-hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 24px;
    padding: 60px 0 80px;
}

.about-hero-badge {
    display: inline-block;
    padding: 8px 20px;
    border-radius: 100px;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.08em;
    color: rgba(255,255,255,0.8);
}

.about-bio {
    font-size: clamp(16px, 2vw, 19px);
    color: rgba(255,255,255,0.6);
    line-height: 1.75;
    max-width: 680px;
    margin: 0;
    font-weight: 300;
}

/* ── Split sections ── */
.about-split {
    display: flex;
    gap: 32px;
    align-items: flex-start;
    padding: 48px 0;
    border-top: 1px solid rgba(255,255,255,0.06);
}

.about-split--reverse {
    flex-direction: row-reverse;
}

.about-split-label {
    flex-shrink: 0;
    width: 220px;
    border-radius: 14px;
    padding: 24px;
}

.split-eyebrow {
    display: block;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgb(120,113,108);
    margin-bottom: 12px;
}

.split-heading {
    font-size: clamp(26px, 3.5vw, 36px);
    font-weight: 700;
    line-height: 1.2;
    color: white;
}

.split-heading--muted {
    color: rgba(255,255,255,0.5);
}

.split-heading--dimmer {
    color: rgba(255,255,255,0.25);
}

.about-split-body {
    flex: 1;
    font-size: 16px;
    color: rgba(255,255,255,0.6);
    line-height: 1.75;
    font-weight: 300;
    padding-top: 4px;
}

/* ── Hobbies ── */
.hobbies-section {
    padding-top: 64px;
    border-top: 1px solid rgba(255,255,255,0.06);
}

.section-eyebrow {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgb(120,113,108);
    margin-bottom: 8px;
}

.section-heading {
    font-size: clamp(32px, 5vw, 52px);
    font-weight: 700;
    color: white;
    margin: 0 0 8px;
    line-height: 1.1;
}

.section-sub {
    font-size: 16px;
    color: rgba(255,255,255,0.4);
    font-weight: 300;
    margin: 0 0 40px;
}

.hobbies-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px;
    list-style: none;
    padding: 0;
    margin: 0;
}

.hobby-card {
    border-radius: 14px;
    padding: 24px;
    transition: transform 0.25s ease, background 0.25s ease;
    cursor: default;
}

.hobby-card:hover {
    transform: translateY(-4px);
    background: rgba(255,255,255,0.08);
}

.hobby-title {
    font-size: 17px;
    font-weight: 600;
    color: white;
    margin-bottom: 8px;
}

.hobby-desc {
    font-size: 14px;
    color: rgba(255,255,255,0.5);
    line-height: 1.65;
    font-weight: 300;
}

/* ── Responsive ── */
@media screen and (max-width: 700px) {
    .about-page {
        padding: 40px 16px 60px;
    }

    .about-split,
    .about-split--reverse {
        flex-direction: column;
        gap: 20px;
    }

    .about-split-label {
        width: 100%;
    }

    .hobbies-grid {
        grid-template-columns: 1fr;
    }
}
</style>
