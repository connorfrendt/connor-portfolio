<template>
    <div id="home">
        <div id="home-body">

            <div id="pic-title">
                <div>
                    <img src="../assets/img/pfp.jpg" class="picture" />
                </div>
                
                <div id="title-bg">
                    <div id="name"><b>CONNOR FRENDT</b></div>
                    <div class="title">
                        <div>FULL STACK</div>
                        <div>JAVASCRIPT DEVELOPER</div>
                    </div>
                </div>
                
            </div>
            
            <div id="parallax-one" class="parallax" v-if="desktop"></div>
            <div id="para-one-sub" class="para-sub" v-if="mobile"></div>

            <div class="text-white projects-div">
                <div class="proj-wrapper">
                    <div class="proj-title">Projects?</div>
                    <RouterLink to="/projects">
                        <div class="proj-sub-text">
                            <div>Let's &lt;div&gt; into the code!</div>
                            <font-awesome-icon class="arrow" icon="fa-solid fa-arrow-right" beat />
                        </div>
                    </RouterLink>
                </div>
            </div>

            <div id="parallax-two" class="parallax" v-if="desktop"></div>
            <div id="para-two-sub" class="para-sub" v-if="mobile"></div>

            <div class="text-white resume-div">
                <div class="resume-wrapper">
                    <div>You can "resume"</div>
                    <div>looking at my</div>
                    <RouterLink to="/resume">
                        <div class="resume-link">
                            <span>résumé</span>
                            <font-awesome-icon class="arrow" icon="fa-solid fa-arrow-right" beat />
                        </div>
                    </RouterLink>
                </div>
                
            </div>

            <div id="parallax-three" class="parallax" v-if="desktop"></div>
            <div id="para-three-sub" class="para-sub" v-if="mobile"></div>

            <div id="quote">
                <font-awesome-icon icon="fa-solid fa-quote-left" id="quote-left"/>
                <i>
                    There are 10 types of people in the world -
                    <br />
                    those that understand binary, and those that don't.
                </i>
                <font-awesome-icon icon="fa-solid fa-quote-right" id="quote-right" />
            </div>
            
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            width: window.innerWidth
        }
    },
    computed: {
        desktop() {
            return this.width > 800;
        },
        mobile() {
            return this.width <= 800;
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair&display=swap');

.skills {
    background-color: rgba(120, 113, 108, 0.5);
    border-radius: 5px;
    font-size: 25px;
    text-align: center;
}

#parallax-one {
    background-image: url('../assets/img/bg1.jpg');
    background-repeat: no-repeat;
}
#para-one-sub {
    background-image: url('../assets/img/bg1-mobile.jpg');
    background-position: center;
}

#parallax-two {
    background-image: url('../assets/img/bg2.png');
    background-repeat: no-repeat;
}
#para-two-sub {
    background-image: url('../assets/img/bg2-mobile.jpg');
    background-position: center;
}

#parallax-three {
    background-image: url('../assets/img/bg3.jpg');
    background-repeat: no-repeat;
}
#para-three-sub {
    background-image: url('../assets/img/bg3-mobile.jpg');
    background-position: center;
}

.parallax {
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    min-height: 200px;
}
.para-sub {
    background-size: cover;
    min-height: 200px;
}


#pic-title {
    padding: 30px 20px;
    height: 100vh;
    min-height: 600px;
}

.picture {
    border-radius: 5px 0px 0px 5px; /* tl tr br bl (clockwise) */
    display: block;
    margin: 0 auto;
    height: 300px;
    min-width: 225px;
}

.title {
    color: white;
    text-align: center;
    font-size: 40px;
    font-family: 'Playfair', serif;
    padding: 20px 5px;
    letter-spacing: 5px;
}

#name {
    font-size: 60px;
    color: white;
    text-align: center;
    padding: 20px 0;
}

#about-me {
    padding: 10px;
    font-size: 20px;
}

.projects-div {
    height: 100vh;
    display: flex;
    align-items: center;
    padding: 20px;
}

.proj-title {
    font-size: 60px;
    text-align: left;
}

.proj-sub-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(120 113 108);
    padding: 10px;
    font-size: 30px;
    height: 65px;
}

.resume-div {
    height: 100vh;
    font-size: 60px;
}

.resume-wrapper {
    text-align: right;
}

.resume-link {
    display: inline-block;
    text-align: right;
    background-color: rgb(120 113 108);
    padding: 10px;
    white-space: nowrap;
    font-size: 30px;
    height: 65px;
}

.arrow {
    margin-left: 50px;
    font-size: 25px;
}

#quote {
    background-color: rgb(31, 41, 55);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 25px;
    padding: 50px;
}

#quote-left,
#quote-right {
    font-size: 40px;
    margin: 10px;
}

@media screen and (min-width: 1021px) {
    #title-bg {
        background-color: rgba(120, 113, 108, 0.5);
        border-radius: 0px 10px 10px 0px;
        height: 300px;
        display: flex;
        flex-direction: column;
        padding: 0 100px;
    }

    .title {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }


    #pic-title {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .proj-wrapper {
        padding-left: calc(10vw);
    }

    .resume-div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: end;
        padding-right: calc(10vw);
    }
}

@media screen and (801px <= width <= 1020px) {
    .title {
        padding: 0;
    }

    .picture {
        height: 300px;
        width: 225px;
        border-radius: 5px;
    }

    .proj-wrapper {
        padding-left: calc(10vw);
    }

    .resume-wrapper {
        padding-right: calc(10vw);
    }

    .resume-div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: end;
        padding-right: calc(10vw);
    }
}

@media screen and (max-width: 800px) {
    #name {
        font-size: 40px;
    }

    .title {
        font-size: 32px;
    }

    .projects-div {
        justify-content: center;
    }
    .proj-wrapper {
        display: flex;
        flex-direction: column;
    }
    .proj-title {
        font-size: 50px;
        text-align: center;
    }
    .proj-sub-text {
        font-size: 20px;
    }
    .arrow {
        margin-left: 50px;
    }

    .resume-div {
        font-size: 35px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .resume-wrapper {
        padding: 10px;
        text-align: center;
    }
    
    .resume-link {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgb(120 113 108);
        padding: 10px;
        font-size: 30px;
        height: 65px;
    }

    .picture {
        border-radius: 5px;
        height: 225px;
        min-width: 168.75px;
        margin: 0 auto;
    }

    #quote {
        padding: 10px;
        color: white;
        text-align: center;
        font-size: 25px;
        display: flex;
        align-items: center;
        height: 200px;
    }

    #quote-left {
        font-size: 40px;
        display: flex;
        align-self: start;
        margin-top: 10px;
    }

    #quote-right {
        font-size: 40px;
        display: flex;
        align-self: end;
        margin-bottom: 10px;
    }
}

@media screen and (max-width: 454px) {
    #quote-left,
    #quote-right {
        font-size: 20px;
        padding: 0;
        margin: 0;
    }

    #quote {
        font-size: 20px;
    }
}
</style>