<template>
    <div>
        <div>
            <div class="section">
                <div class="section-title">WEBSITES</div>
                <div class="website-grid grid sm:max-md:grid-cols-1 grid-cols-3">
        
                    <div class="proj-div">
                        <a class="website-link" href="https://seaestacabo.com/" target="_blank">
                            <div id="sea-esta-title-div">
                                <img src="../assets/img/slide_sailboat_on_rocks.jpg" class="proj-img"/>
                                <p class="proj-title">Sea Esta Cabo Website</p>
                            </div>
                        </a>
                    </div>
            
                    <div class="proj-div">
                        <a class="website-link" href="https://lagringacabo.com/" target="_blank">
                            <div id="la-gringa-title-div">
                                <img src="../assets/img/lagringa-catamaran.jpg" class="proj-img" />
                                <p class="proj-title">La Gringa Cabo Website</p>
                            </div>
                        </a>
                    </div>
    
                </div>

            </div>

            <div class="section">
                <div class="section-title">PERSONAL PROJECTS</div>
                <div>
                    <div>PROJECT 1</div>
                </div>
                <div>
                    <div>PROJECT 2</div>
                </div>
                <div>
                    <div>PROJECT 3</div>
                </div>
            </div>

            
        </div>
        
    </div>
</template>

<script>
export default {}
</script>

<style>
.section {
    padding: 20px;
}

.section-title {
    color: white;
    text-align: center;
    background-color: rgb(120 113 108);
    padding: 10px;
    margin: 0 5px;
    border-radius: 5px;
    letter-spacing: 2px;
    font-weight: bold;
}

.website-grid {
    text-align: center;
}

.proj-div {
    margin: 20px;
}

.website-link {
    display: inline-block;
}

#sea-esta-title-div,
#la-gringa-title-div {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
}

.proj-img {
    height: 250px;
    width: 400px;
    object-fit: cover;
    transition: transform 0.3s ease;
}

#sea-esta-title-div:hover .proj-img,
#la-gringa-title-div:hover .proj-img {
    transform: scale(1.2);
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