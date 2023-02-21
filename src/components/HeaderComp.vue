<template>
    <div>
        <!--Header-->
        <div id="header">
            <RouterLink to="/" class="header-btn">HOME</RouterLink>
            <RouterLink to="/resume" class="header-btn">RESUME</RouterLink>
            <RouterLink to="/projects" class="header-btn">PROJECTS</RouterLink>
            <RouterLink to="/aboutme" class="header-btn">ABOUT ME</RouterLink>
        </div>
    
        <!--Mobile Header-->
        <div class="">
            Mobile
        </div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

/*HEADER BUTTONS*/
@media screen and (0px <= width <= 500px) {
    #header {
        background-color: red;
    }
}

@media screen and (501px <= width <= 20000px) {
    #header {
        display: flex;
        background-color: #03034C;
    }
    
    .header-btn {
        padding: 10px;
        font-size: 20px;
        font-family: 'Poppins', sans-serif;
        text-decoration: none;
        color: lightgrey;
    }
    .header-btn:link {
        text-decoration: none;
    }
    .header-btn:visited {
        text-decoration: none;
    }
    .header-btn:hover {
        background-color: #10107B;
        transition: 0.15s ease-in-out;
    }
    .header-btn:active {
        text-decoration: none;
    }
}

</style>