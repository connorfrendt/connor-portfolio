<template>
    <div id="home">
        <div id="home-body">
            <img />
            <p id="quote">
                "Sometimes life is like a dark tunnel.  You can't always see the light at the end of the tunnel, but if you just keep moving, you will come to a better place."
            </p>
        </div>

        <div id="footer">
            <div id="footer-links">
                <div id="linkedin" class="socials">
                    <a class="social-links" href="https://www.linkedin.com/in/connorfrendt" target="_blank">
                        <font-awesome-icon icon="fa-brands fa-linkedin" />
                    </a>
                </div>
                <div id="github" class="socials">
                    <a class="social-links" href="https://www.github.com/connorfrendt" target="_blank">
                        <font-awesome-icon icon="fa-brands fa-github" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            technologies: [
                {
                    id: 1,

                }
            ]
        }
    }
}
</script>

<style>
#home {
    height: 100%;
}

#home-body {
    height: 100%;
    padding: 20px;
    color: white;
}

#quote {
    text-align: center;
    padding: 10px;
}

#technologies {
    display: flex;

}

#footer-links {
    display: flex;
    justify-content: center;
    padding: 10px;
}

.socials {
    /* padding: 10px; */
    font-size: 30px;
}

#linkedin {
    border-right: 1px solid gray;
}

.social-links {
    color: lightgray;
    padding: 0 15px;
}
.social-links:visited {
    text-decoration: none;
}

.social-links:active {
    text-decoration: none;
}
</style>