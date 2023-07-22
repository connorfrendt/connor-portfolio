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

            <div class="text-white flex sm:max-md:flex-col items-center md:max-xl: flex-row">
                <div id="box" class="bg-stone-500">
                    Full Stack JavaScript
                    <br />
                    <div class="line-through">Duveloper</div>
                    <div class="line-through">Developr</div>
                    <div class="line-through">Develupr</div>
                    <div>I'm good at making stuff</div>
                </div>
    
                <div id="about-me">
                    After graduating with a B.S. in Mathematics, I eagerly plunged in head first into the tech world, becoming a Full Stack JavaScript Developer. Complex puzzles and head-scratchers are what I thrive off of. Looking for companies that are driven and have a positive atmosphere. With the knowledge of both front and back end, I am able to see many different perspectives and easily adapt accordingly. My ambition to help others and my craving for more knowledge is what drives me.
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
    min-height: 700px;
}

#parallax-two {
    background-image: url('../assets/img/mt_hood_gorge.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    min-height: 700px;
}

.title {
    color: white;
    text-align: center;
    font-size: 40px;
    font-family: 'Playfair', serif;
    padding: 5px;
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

#about-me {
    padding: 10px;
    font-size: 20px;
    /* text-align: center; */
}

@media screen and (max-width: 640px) {
    #pic-title {
        padding: 20px;
        height: 100%;
    }

    #name {
        color: white;
        font-size: 40px;
        text-align: center;
    }

    .title {
        font-size: 32px;
    }

    .picture {
        border-radius: 10px;
        height: 225px;
        width: 168.75px;
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

@media screen and (min-width: 641px) {
    #title-bg {
        background-color: rgba(120, 113, 108, 0.5);
        border-radius: 0px 10px 10px 0px;
        height: 300px;
        display: flex;
        flex-direction: column;
        padding: 0 100px;
    }
    
    #name {
        font-size: 60px;
        color: white;
        text-align: center;
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