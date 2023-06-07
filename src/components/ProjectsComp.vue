<template>
    <div>
        <div id="proj-title">
            Projects
        </div>
        <div id="sea-esta">
            <a id="sea-esta-link" href="https://seaestacabo.com/" target="_blank">
                <div class="sea-esta-title-div">
                    <p id="sea-esta-title">Sea Esta Cabo Website</p>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#proj-title {
    color: white;
    text-align: center;
    text-decoration: underline;
    font-size: 35px;
    margin: 20px;
}

#sea-esta {
    margin: 20px;
}

#sea-esta-link {
    display: inline-block;
}
.sea-esta-title-div {
    background-image: url("../assets/img/slide_sailboat_on_rocks.jpg");
    height: 250px;
    width: 400px;
    background-size: cover;
    position: relative;
    margin: 40px 0 0 0;
    border-radius: 12px;
}

#sea-esta-title {
    padding: 10px;
    color: rgb(0, 0, 0);
    background-color: orange;
    text-align: justify;
    position: absolute;
    bottom: 0;
    margin: 0;
    line-height: 28px;
    width: 100%;
    text-align: center;
    border-radius: 0 0 10px 10px;
}

</style>