<template>
    <div id="header">
        <RouterLink to="/" class="header-btn">
            HOME
        </RouterLink>
        <RouterLink to="/resume" class="header-btn">
            RESUME
        </RouterLink>
        <RouterLink to="/projects" class="header-btn">
            PROJECTS
        </RouterLink>
        <RouterLink to="/aboutme" class="header-btn">
            ABOUT ME
        </RouterLink>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

#header {
    display: flex;
    /* justify-content: space-around; */
}

.header-btn {
    padding: 10px;
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
}
.header-btn:hover {
    background-color: lightblue;
    transition: 0.25s ease-in-out;
}
</style>