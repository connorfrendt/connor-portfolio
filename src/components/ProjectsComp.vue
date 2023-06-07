<template>
    <div>
        <div class="proj-div">
            <a class="website-link" href="https://seaestacabo.com/" target="_blank">
                <div id="sea-esta-title-div">
                    <p class="proj-title">Sea Esta Cabo Website</p>
                </div>
            </a>
        </div>

        <div class="proj-div">
            <a class="website-link" href="https://lagringacabo.com/" target="_blank">
                <div id="la-gringa-title-div">
                    <p class="proj-title">La Gringa Cabo Website</p>
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
.proj-div {
    margin: 20px;
}

.website-link {
    display: inline-block;
}
#sea-esta-title-div {
    background-image: url("../assets/img/slide_sailboat_on_rocks.jpg");
    height: 250px;
    width: 400px;
    background-size: cover;
    position: relative;
    border-radius: 12px;
}

#la-gringa-title-div {
    background-image: url("../assets/img/lagringa-catamaran.jpg");
    height: 250px;
    width: 400px;
    background-size: cover;
    position: relative;
    border-radius: 12px;
}

.proj-title {
    padding: 10px;
    color: rgb(255, 255, 255);
    font-size: 22px;
    background-color: rgba(0, 0, 0, .6);
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