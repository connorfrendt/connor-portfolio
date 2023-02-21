<template>
    <div id="home">
        <div id="home-body">
            Home
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

}
</script>

<style>
#home {
    height: 100%;
    background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
}

#home-body {
    height: 100%;
}

#footer-links {
    display: flex;
    justify-content: center;
}

.socials {
    padding: 10px;
    font-size: 30px;
}

#linkedin {
    /* border-right: 1px solid gray; */
}

.social-links {
    color: black;
}
.social-links:visited {
    text-decoration: none;
}

.social-links:active {
    text-decoration: none;
}
</style>