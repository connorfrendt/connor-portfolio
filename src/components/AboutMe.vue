<template>
    <div class="text-white about-me-section">
        <div class="text-white flex flex-col items-center">
            <div id="box" class="bg-stone-500">
                Full Stack JavaScript
                <br />
                <div class="line-through">Duveloper</div>
                <div class="line-through">Developr</div>
                <div class="line-through">Develupr</div>
                <div>I'm good at making stuff</div>
            </div>

            <div id="about-me" class="text-[20px]">
                After graduating with a B.S. in Mathematics, I eagerly plunged in head first into the tech world, becoming a Full Stack JavaScript Developer. Complex puzzles and head-scratchers are what I thrive off of. Looking for companies that are driven and have a positive atmosphere. With the knowledge of both front and back end, I am able to see many different perspectives and easily adapt accordingly. My ambition to help others and my craving for more knowledge is what drives me.
            </div>
        </div>

        <hr class="hr-line" />
        <hr class="hr-line" />

        <div class="text-[20px] text-white flex sm:max-md:flex-col items-center">
            <div class="big-text" id="why-how">
                <div>But why?</div>
                <div>...How?</div>
            </div>

            <div>
                These two questions are how I understand most everything.  I don't just sit idly by and think "okay this works and I don't know why" and move on, I get into the nitty gritty of why it works.  Whenever there's a new concept, I'm always asking "why does it work?", and "how does that work?". Sure, 2 + 2 = 4, but if I don't have an intuitive understanding of what "2" is, it'll be hard to understand why those add up, and even harder to understand why d/dx [e^x] = e ^x, or why e^(iπ) + 1 = 0 (how can something with an imaginary number be equal to a real integer?  It's true though!).  Once I figure out how something works, I can use that knowledge over a broader scope and apply it to many different things, much like patterns...
            </div>
        </div>

        <hr class="hr-line" />
        <hr class="hr-line" />

        <div class="text-[20px] flex sm:max-md:flex-col-reverse items-center">
            
            <div class="desc">
                Another process on how I learn is with patterns.  I could jump into the deep end of a programming language that I have zero knowledge on, figure out how it works, break it, fix it, and then add on to it - all because every programming language and application resorts to some sort of pattern.  For example, I once jumped into a Javascript project (back when I had no idea on what Javascript even was), poked around the code and figured out that it was comprised of three different parts - all behaving the same way.  I was able to see a couple working pieces, and a broken piece, and fix what was broken because I understood the pattern and how it worked - all in a language I didn't know!
            </div>

            <div class="big-text" id="patterns">
                <div>Patterns,</div>
                <div>patterns,</div>
                <div>patterns...</div>
            </div>
        </div>

        <hr class="hr-line" />
        <hr class="hr-line" />

        <div>
            <div class="extra">
                Interests!
            </div>

            <div>
                <div class="text-center">
                    <div class="text-[20px]">
                        It's more a question of what I <i>don't</i> like to do!
                    </div>
                    <div class="text-[20px]">
                        Some of my hobbies include:
                    </div>
                </div>

                <ul>
                    <li v-for="hobby in hobbies" :key="hobby.id" class="my-[10px] p-[10px] bg-stone-500 hobby">
                        <div class="hobby-title">{{ hobby.title }}</div>
                        <div class="hobby-desc">{{ hobby.description }}</div>
                    </li>
                </ul>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hobbies: [
                {
                    id: 1,
                    title: "Martial Arts",
                    description: "I've been practicing martial arts since I was 9 years old.  It is hands down one of my favorite things to do.  I love being able to protect myself and others."
                },
                {
                    id: 2,
                    title: "Gymnastics",
                    description: "I started gymnastics in high school and never wanted to stop.  Being able to do a back flip is a cool party trick!"
                },
                {
                    id: 3,
                    title: "Learning Languages",
                    description: "In terms of spoken languages, I'm currently learning Spanish and Portuguese at the same time!  In addition, I'm also learning other programming languages.  Languages in general have generally come easier to me, because of the patterns that I mentioned earlier!"
                },
                {
                    id: 4,
                    title: "Playing Guitar, Piano, Ukulele, and the Drums",
                    description: "I've been playing music sporadically througout my life.  I have a decent ear for being able to transpose a song from one instrument to the other!"
                },
                {
                    id: 5,
                    title: "Fusion & West Coast Swing",
                    description: "Dancing was a hidden passion of mine until college.  Once I found the community, the music, and the dance style, I was hooked.  The community has some of the nicest people you will ever meet, and everything is so welcoming.  Being able to dance and connect with others is one of my favorite things to do."
                },
                {
                    id: 6,
                    title: "Big Videogame Nerd!",
                    description: "Pretty sure I was born with a controller in my hand.  Big into MMOs and RPGs, and I love me some strategic puzzle games."
                },
            ]
        }
    }
}
</script>

<style>
.about-me-section {
    padding: 50px;
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

.big-text {
    font-size: 40px;
    background-color: rgb(55 65 81);
    padding: 20px;
    border-radius: 5px;
}

.extra {
    margin: 20px 0;
    font-size: 40px;
    background-color: rgb(55 65 81);
    padding: 10px;
    border-radius: 5px;
    text-align: center;
}

@media screen and (min-width: 768px) {
    #why-how {
        margin: 20px 20px 20px 0px;
    }

    #patterns {
        margin: 20px 0px 20px 20px;
    }
}

@media screen and (max-width: 545px) {
    .extra {
        margin: 10px 0;
        padding: 10px;
    }
}

.hr-line {
    margin: 10px 0;
}

.hobby {
    border-radius: 5px;
}

.hobby-title {
    font-size: 25px;
    
}

.hobby-desc {
    font-size: 20px;
    color: rgb(31, 41, 55);
}

@media screen and (max-width: 545px) {
    .about-me-section {
        padding: 25px;
    }
}
</style>