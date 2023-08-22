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
            
            <div id="parallax-one"></div>

            <div class="text-white projects-div">
                <div class="proj-wrapper">
                    <div class="proj-title">Projects?</div>
                    <RouterLink to="/projects">
                        <div class="proj-sub-text">
                            <div class="">Let's &lt;div&gt; into the code!</div>
                            <font-awesome-icon class="arrow" icon="fa-solid fa-arrow-right" beat />
                        </div>
                    </RouterLink>
                </div>
            </div>

            <div id="parallax-two"></div>

            <div class="text-white resume-div">
                <div>You can "resume"</div>
                <div class="resume-div-sub-text">
                    <div>looking at my</div>
                    <RouterLink to="/resume" class="resume-link">
                        résumé
                        <font-awesome-icon class="arrow" icon="fa-solid fa-arrow-right" beat />
                    </RouterLink>
                </div> 
                
            </div>

            <div id="parallax-two"></div>

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
    
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair&display=swap');


#parallax-one {
    background-image: url('../assets/img/spacetime1.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    min-height: 200px;
}

#parallax-two {
    background-image: url('../assets/img/mt_hood_gorge.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    min-height: 200px;
}

#pic-title {
    padding: 30px 20px;
    height: 100vh;
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

#box {
    border-radius: 5px;
    color: white;
    width: 250px;
    text-align: center;
    padding: 10px;
    margin: 20px;
    font-size: 20px;
    min-width: 250px;
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

.resume-div-sub-text {
    text-align: right;
}

.resume-link {
    background-color: rgb(120 113 108);
    padding: 10px;
    white-space: nowrap;
    font-size: 30px;
    height: 65px;
}

.arrow {
    margin-left: 50px;
}

#quote {
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

@media screen and (max-width: 520px) {
    .resume-div-sub-text {
        display: flex;
        flex-direction: column;
    }
}


#linkedin {
    border-right: 1px solid gray;
}

.social-links {
    color: lightgray;
    padding: 0 15px;
}

.social-links:visited,
.social-links:active {
    text-decoration: none;
}
</style>