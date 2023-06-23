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

            <div id="quote">
                <i>
                    "There are 10 types of people in the world -
                    <br />
                    those that understand binary, and those that don't."</i>
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

.fade-in-active {
    opacity: 1;
}

@media screen and (max-width: 640px) {
    #pic-title {
        padding: 20px;
        height: 100%;
    }

    #name {
        color: white;
        font-size: 40px;
    }

    .title {
        font-size: 35px;
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
        height: 100px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 25px;
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