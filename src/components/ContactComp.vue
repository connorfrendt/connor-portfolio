<template>
    <div class="contact-page">
        <div class="contact-card glass" v-animate>
            <div class="contact-header">
                <span class="contact-eyebrow">Get in touch</span>
                <h1 class="contact-heading">Let's Talk</h1>
                <p class="contact-sub">
                    Thank you for taking the time to look through my portfolio!
                    Always looking for a great team doing great work.
                    Don't hesitate to reach out.
                </p>
            </div>

            <div class="contact-links">
                <a href="mailto:connorfrendt@gmail.com" class="contact-link" v-animate :data-animate-delay="100">
                    <div class="contact-link-icon">
                        <font-awesome-icon icon="fa-solid fa-envelope" />
                    </div>
                    <div class="contact-link-body">
                        <div class="contact-link-label">Email</div>
                        <div class="contact-link-value">connorfrendt@gmail.com</div>
                    </div>
                    <font-awesome-icon icon="fa-solid fa-arrow-right" class="contact-link-arrow" />
                </a>

                <a href="https://www.linkedin.com/in/connorfrendt/" target="_blank" rel="noopener noreferrer" class="contact-link" v-animate :data-animate-delay="180">
                    <div class="contact-link-icon contact-link-icon--linkedin">
                        <font-awesome-icon icon="fa-brands fa-linkedin" />
                    </div>
                    <div class="contact-link-body">
                        <div class="contact-link-label">LinkedIn</div>
                        <div class="contact-link-value">linkedin.com/in/connorfrendt</div>
                    </div>
                    <font-awesome-icon icon="fa-solid fa-arrow-right" class="contact-link-arrow" />
                </a>

                <a href="https://github.com/connorfrendt" target="_blank" rel="noopener noreferrer" class="contact-link" v-animate :data-animate-delay="260">
                    <div class="contact-link-icon contact-link-icon--github">
                        <font-awesome-icon icon="fa-brands fa-github" />
                    </div>
                    <div class="contact-link-body">
                        <div class="contact-link-label">GitHub</div>
                        <div class="contact-link-value">github.com/connorfrendt</div>
                    </div>
                    <font-awesome-icon icon="fa-solid fa-arrow-right" class="contact-link-arrow" />
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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
.contact-page {
    min-height: calc(100vh - 64px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 24px;
}

.contact-card {
    width: 100%;
    max-width: 560px;
    border-radius: 20px;
    padding: 48px;
}

.contact-header {
    margin-bottom: 40px;
}

.contact-eyebrow {
    display: block;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgb(120, 113, 108);
    margin-bottom: 8px;
}

.contact-heading {
    font-size: clamp(36px, 6vw, 56px);
    font-weight: 700;
    color: white;
    margin: 0 0 16px;
    line-height: 1.05;
}

.contact-sub {
    font-size: 15px;
    color: rgba(255,255,255,0.45);
    line-height: 1.7;
    font-weight: 300;
    margin: 0;
}

/* ── Links ── */
.contact-links {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.contact-link {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px 20px;
    border-radius: 12px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.07);
    text-decoration: none;
    color: white;
    transition: all 0.25s ease;
}

.contact-link:hover {
    background: rgba(255,255,255,0.08);
    border-color: rgba(255,255,255,0.14);
    transform: translateX(4px);
}

.contact-link:hover .contact-link-arrow {
    transform: translateX(4px);
}

.contact-link-icon {
    width: 44px;
    height: 44px;
    border-radius: 10px;
    background: rgba(255,255,255,0.06);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: rgba(255,255,255,0.6);
    flex-shrink: 0;
    transition: background 0.25s ease;
}

.contact-link:hover .contact-link-icon {
    background: rgba(255,255,255,0.1);
}

.contact-link-icon--linkedin {
    color: #0a66c2;
}

.contact-link-icon--github {
    color: rgba(255,255,255,0.8);
}

.contact-link-body {
    flex: 1;
    min-width: 0;
}

.contact-link-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.35);
    margin-bottom: 2px;
}

.contact-link-value {
    font-size: 15px;
    font-weight: 400;
    color: rgba(255,255,255,0.75);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.contact-link-arrow {
    font-size: 14px;
    color: rgba(255,255,255,0.25);
    transition: transform 0.25s ease, color 0.25s ease;
    flex-shrink: 0;
}

.contact-link:hover .contact-link-arrow {
    color: rgba(255,255,255,0.6);
}

@media screen and (max-width: 500px) {
    .contact-card {
        padding: 32px 24px;
    }
}
</style>
