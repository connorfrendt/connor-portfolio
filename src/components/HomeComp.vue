<template>
    <div id="home">
        <!-- Hero -->
        <div id="hero">
            <div id="hero-content" v-animate>
                <img src="../assets/img/pfp.jpg" class="hero-photo" alt="Connor Frendt" />
                <div id="hero-text">
                    <div id="hero-name">Connor Frendt</div>
                    <div id="hero-title">Full Stack JavaScript Developer</div>
                    <div id="hero-sub">Building clean, performant web experiences.</div>
                    <div id="hero-actions">
                        <RouterLink to="/projects" class="hero-btn hero-btn--primary">View Projects</RouterLink>
                        <RouterLink to="/resume" class="hero-btn hero-btn--secondary">Résumé</RouterLink>
                    </div>
                </div>
            </div>
        </div>

        <div class="section-divider"><span class="section-divider-dot"></span></div>

        <!-- Projects CTA -->
        <div class="cta-section cta-section--tinted">
            <div class="cta-inner" v-animate>
                <div class="cta-label">Explore</div>
                <div class="cta-heading">Projects</div>
                <p class="cta-desc">A collection of websites and apps I've built — real clients, real code.</p>
                <RouterLink to="/projects" class="cta-link">
                    Let's &lt;div&gt; into the code
                    <font-awesome-icon class="cta-arrow" icon="fa-solid fa-arrow-right" />
                </RouterLink>
            </div>
        </div>

        <div class="section-divider"><span class="section-divider-dot"></span></div>

        <!-- Resume CTA -->
        <div class="cta-section cta-section--right">
            <div class="cta-inner cta-inner--right" v-animate>
                <div class="cta-label">Career</div>
                <div class="cta-heading">Résumé</div>
                <p class="cta-desc">Experience, skills, and education — all in one place.</p>
                <RouterLink to="/resume" class="cta-link">
                    You can "resume" looking
                    <font-awesome-icon class="cta-arrow" icon="fa-solid fa-arrow-right" />
                </RouterLink>
            </div>
        </div>

        <!-- <div class="section-divider"><span class="section-divider-dot"></span></div> -->

        <!-- Quote -->
        <div id="quote" v-animate>
            <font-awesome-icon icon="fa-solid fa-quote-left" class="quote-icon quote-icon--left" />
            <p id="quote-text">
                There are 10 types of people in the world —<br />
                those that understand binary, and those that don't.
            </p>
            <font-awesome-icon icon="fa-solid fa-quote-right" class="quote-icon quote-icon--right" />
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&display=swap');

/* ── Hero ── */
#hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 24px 40px;
}

#hero-content {
    display: flex;
    align-items: center;
    gap: 40px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    padding: 48px 56px;
    max-width: 860px;
    width: 100%;
}

.hero-photo {
    width: 160px;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    flex-shrink: 0;
}

#hero-text {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

#hero-name {
    font-family: 'Playfair Display', serif;
    font-size: clamp(36px, 5vw, 60px);
    font-weight: 700;
    color: white;
    line-height: 1.1;
    letter-spacing: -0.02em;
}

#hero-title {
    font-size: clamp(14px, 2vw, 18px);
    font-weight: 500;
    color: rgb(120, 113, 108);
    letter-spacing: 0.12em;
    text-transform: uppercase;
}

#hero-sub {
    font-size: 15px;
    color: rgba(255, 255, 255, 0.45);
    font-weight: 300;
    margin-top: 4px;
}

#hero-actions {
    display: flex;
    gap: 12px;
    margin-top: 12px;
    flex-wrap: wrap;
}

.hero-btn {
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    padding: 10px 22px;
    border-radius: 8px;
    transition: all 0.25s ease;
    letter-spacing: 0.04em;
}

.hero-btn--primary {
    background: rgba(120, 113, 108, 0.35);
    border: 1px solid rgba(120, 113, 108, 0.6);
    color: white;
}

.hero-btn--primary:hover {
    background: rgba(120, 113, 108, 0.55);
    border-color: rgba(120, 113, 108, 0.9);
    transform: translateY(-2px);
}

.hero-btn--secondary {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: rgba(255, 255, 255, 0.65);
}

.hero-btn--secondary:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.25);
    color: white;
    transform: translateY(-2px);
}

/* ── Section images ── */
#parallax-one   { background-image: url('../assets/img/bg1.jpg'); }
#parallax-two   { background-image: url('../assets/img/bg2.png'); }
#parallax-three { background-image: url('../assets/img/bg3.jpg'); }

.parallax-img {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 260px;
}

/* ── Dividers ── */
.section-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 48px;
    gap: 0;
    position: relative;
}

.section-divider::before,
.section-divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(120, 113, 108, 0.35));
}

.section-divider::after {
    background: linear-gradient(to left, transparent, rgba(120, 113, 108, 0.35));
}

.section-divider-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(120, 113, 108, 0.6);
    margin: 0 16px;
    flex-shrink: 0;
}

/* ── CTA sections ── */
.cta-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 60px 24px;
}

.cta-section--tinted {
    background: rgba(255, 255, 255, 0.02);
}

.cta-section--right {
    justify-content: flex-end;
}

.cta-inner {
    max-width: 480px;
    padding-left: clamp(24px, 10vw, 120px);
}

.cta-inner--right {
    padding-left: 0;
    padding-right: clamp(24px, 10vw, 120px);
    text-align: right;
}

.cta-label {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgb(120, 113, 108);
    margin-bottom: 8px;
}

.cta-heading {
    font-family: 'Playfair Display', serif;
    font-size: clamp(48px, 7vw, 80px);
    font-weight: 700;
    color: white;
    line-height: 1;
    margin-bottom: 16px;
}

.cta-desc {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.45);
    font-weight: 300;
    line-height: 1.6;
    margin: 0 0 24px;
}

.cta-link {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
    color: white;
    background: rgba(120, 113, 108, 0.2);
    border: 1px solid rgba(120, 113, 108, 0.4);
    padding: 12px 22px;
    border-radius: 8px;
    transition: all 0.25s ease;
}

.cta-link:hover {
    background: rgba(120, 113, 108, 0.4);
    border-color: rgba(120, 113, 108, 0.7);
    transform: translateX(4px);
}

.cta-inner--right .cta-link:hover {
    transform: translateX(-4px);
}

.cta-arrow {
    font-size: 14px;
    transition: transform 0.25s ease;
}

.cta-link:hover .cta-arrow {
    transform: translateX(4px);
}

/* ── Quote ── */
#quote {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 80px 40px;
    background: rgba(255, 255, 255, 0.02);
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

#quote-text {
    font-size: clamp(16px, 2vw, 22px);
    font-style: italic;
    color: rgba(255, 255, 255, 0.65);
    text-align: center;
    line-height: 1.7;
    margin: 0;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
}

.quote-icon {
    font-size: 32px;
    color: rgba(120, 113, 108, 0.5);
    flex-shrink: 0;
}

.quote-icon--left { align-self: flex-start; }
.quote-icon--right { align-self: flex-end; }

/* ── Responsive ── */
@media screen and (max-width: 800px) {
    #hero-content {
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 36px 28px;
        gap: 28px;
    }

    .hero-photo {
        width: 160px;
    }

    #hero-actions {
        justify-content: center;
    }

    .cta-section--right {
        justify-content: center;
    }

    .cta-inner--right {
        padding-right: 0;
        padding-left: clamp(16px, 8vw, 80px);
        text-align: left;
    }

    #quote {
        padding: 48px 20px;
        gap: 12px;
    }

    .quote-icon {
        font-size: 22px;
    }
}

@media screen and (max-width: 480px) {
    .cta-inner {
        padding-left: 16px;
    }
}
</style>
