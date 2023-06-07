<template>
    <div id="home">
        <div id="home-body">

            <div id="pic-title">
                <div>
                    <img src="../assets/img/pfp.jpg" class="picture" />
                </div>
                
                <div id="title">
                    <div id="">FULL STACK</div>
                    <div>JAVASCRIPT DEVELOPER</div>
                </div>
            </div>
            
            <div id="parallax">
                <div id="quote">
                    "Sometimes life is like a dark tunnel.
                    <!-- <br /> -->
                    You can't always see the light
                    <!-- <br /> -->
                    at the end of the tunnel,
                    <!-- <br /> -->
                    but if you just keep moving,
                    <!-- <br /> -->
                    you will come to a better place."
                </div>
            </div>

        </div>

        <!--Footer-->
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
        
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair&display=swap');

#parallax {
    background-image: url('../assets/img/mt_hood_gorge.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    min-height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
}

#home-body {
    /* background-image: url('../assets/img/mt_hood_gorge.jpg');
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; */
}

#title {
    color: white;
    text-align: center;
    font-size: 40px;
    font-family: 'Playfair', serif;
    padding: 10px;
    letter-spacing: 5px;
}

@media screen and (0px <= width <= 640px) {
    #pic-title {
        padding: 20px;
        height: 100%;
    }

    .picture {
        border-radius: 10px;
        height: 300px;
        width: 225px;
        margin: 0 auto;
    }

    #quote {
        padding: 5px;
        margin: 10px;
        background-color: rgba(120, 113, 108, 0.5);
        color: white;
        border-radius: 10px 10px 10px 10px;
        text-align: center;
        font-size: 25px;
        display: flex;
        align-items: center;
        height: 200px;

    }
}

@media screen and (641px <= width <= 5000px) {
    #title {
        background-color: rgba(120, 113, 108, 0.5);
        border-radius: 0px 10px 10px 0px;
        height: 300px;
        text-align: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
        justify-content: space-evenly;
    }

    #pic-title {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        height: 100%;
    }

    .picture {
        border-radius: 10px 0px 0px 10px; /* tl tr br bl (clockwise) */
        display: block;
        margin: 0 auto;
        height: 300px;
        width: 225px;
    }

    #quote {
        background-color: rgba(120, 113, 108, 0.5);
        border-radius: 10px;
        height: 300px;
        text-align: center;
        display: flex;
        align-items: center;
        padding: 10px;
        margin: 100px;
        color: white;
        font-size: 25px;
    }
}



#footer-links {
    display: flex;
    justify-content: center;
    padding: 10px;
}

.socials {
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