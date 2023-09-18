<template>
    <div class="overall-contact">

        <div id="contact-description">
            <div>Hey there!  Thank you for taking the time to look through my portfolio!</div>
            <div>Always looking for a good team to join that does great work.  I love what I do, and I'm a fast learner!</div>
            <div>If you have any questions, please don't hesitate to reach out!</div>
        </div>

        <div class="email-icons">
            <div class="icon-and-link">
                <font-awesome-icon icon="fa-solid fa-envelope" class="icons" />
                <div>connorfrendt@gmail.com</div>
            </div>

            <div class="icon-and-link">
                <a href="https://www.linkedin.com/in/connorfrendt/" target="_blank">
                    <font-awesome-icon icon="fa-brands fa-linkedin" class="icons"/>
                </a>

                <a class="link" href="https://www.linkedin.com/in/connorfrendt/" target="_blank">
                    linkedin.com/in/connorfrendt/
                </a>
            </div>

            <div class="icon-and-link">
                <a href="https://github.com/connorfrendt" target="_blank">
                    <font-awesome-icon icon="fa-brands fa-github" class="icons" />
                </a>

                <a class="link" href="https://github.com/connorfrendt" target="_blank">
                    github.com/connorfrendt
                </a>
            </div>
            
        </div>

    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.overall-contact {
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
}

#contact-description {
    margin: 80px;
    padding: 20px;
    border-radius: 5px;
    background-color: rgba(120, 113, 108, 0.5);
}

.email-icons {
    padding: 100px;
}

#contact-description {
    text-align: center;
}

.icon-and-link {
    display: flex;
    padding: 15px 0;
}

.link {
    text-decoration: underline;
    color: lightblue;
}

.icons {
    margin-right: 20px;
    font-size: 35px;
}

@media screen and (max-width: 640px) {
    #contact-description {
        font-size: 20px;
        margin: 20px;
    }
    
    .email-icons {
        padding: 150px 5px 5px 5px;
        font-size: 20px;
    }

    .icons {
        margin-right: 0;
    }

    .icon-and-link {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>