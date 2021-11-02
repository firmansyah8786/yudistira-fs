<template>
    <header class="intro dark-bg align-items-center justify-center">
        <div>
            <h2 class="p-5 border-5 bdr-light">YUDISTIRA FIRMAN SYAH</h2>
        </div>
    </header>
    <main>
        <section>
            <SocialLinks additionalClass="links light-bg" />
        </section>
        <section class="light-bg">
            <div class="text-block">
                <h1 class="text-center mb-3">Hi, My name is Yudistira Firman Syah</h1>
                <p>
                    I am a backend PHP web developer, but I can also do full-stack development. I have 2 years experience in web-development. My current interest is JavaScript web development, because in my previous positions I needed to use PHP based framework. I also currently learning about advanced front-end development. This website is built using Vue 3 as my learning experience.
                </p>
                <p>
                    <strong>PHP</strong> is my favorite for creating APIs, especially using <strong>Laravel</strong> framework. For front-end, I've used <strong>blade</strong>, <strong>ejs</strong>, and <strong>vue</strong> so far. I can also do integration with external API in your website.
                </p>
                <p>
                    I've worked remotely with fixed working hours and flexible hours before. So I can adapt to various working hours policy. I can also do freelance job with reasonably fast progress.
                </p>
            </div>
        </section>
        <section class="dark-bg">
            <div class="text-block">
                <h1 class="text-center mb-3">APIs</h1>
                <p>
                    My experience with APIs is varied. I have created many kind of APIs. Ranging from simple CRUD API for data management, to a more complex API that use third party APIs. So, I can deliver an API that matches the need of the job or the given criteria.
                </p>
                <p>
                    Most of the APIs I made before was in <strong>PHP</strong> using <strong>Laravel</strong> framework. Some of third party APIs I've used before are courier tracking API <strong>Rajaongkir</strong> and <strong>Wix API</strong> for OAuth 2.0 and product management. It took me a little time to learn about those APIs. I am confident I can do third party API integration when needed.
                </p>
            </div>
        </section>
        <section class="light-bg">
            <div class="text-block">
                <h1 id="skills" class="text-center mb-3">Skills</h1>
                <div class="wrap justify-content-center">
                    <div class="skill">
                        <img class="skill-item" src="/img/php.png" alt="php">
                        PHP
                    </div>
                    <div class="skill">
                        <img class="skill-item" src="/img/laravel.png" alt="laravel">
                        Laravel
                    </div>
                    <div class="skill">
                        <img class="skill-item" src="/img/html5.png" alt="html5">
                        HTML
                    </div>
                    <div class="skill">
                        <img class="skill-item" src="/img/javascript.png" alt="javascript">
                        JavaScript
                    </div>
                    <div class="skill">
                        <img class="skill-item" src="/img/css.png" alt="css">
                        CSS
                    </div>
                    <div class="skill">
                        <img class="skill-item" src="/img/bootstrap.png" alt="bootstrap">
                        Bootstrap
                    </div>
                    <div class="skill">
                        <img class="skill-item" src="/img/jquery.png" alt="jquery">
                        jQuery
                    </div>
                    <div class="skill">
                        <img class="skill-item" src="/img/git.png" alt="git">
                        Git
                    </div>
                </div>
            </div>
        </section>
        <section class="dark-bg">
            <div class="d-flex justify-content-center pt-4">
                <h4>Contact me :</h4>
            </div>
            <SocialLinks additionalClass="links light-icon" />
        </section>
        <TopNav />
    </main>
</template>
<script>
import TopNav from "./TopNav.vue";
import SocialLinks from "./SocialLinks.vue";
export default {
    components: {
        TopNav,
        SocialLinks
    }
}
</script>
<style scoped>
    .intro{
        min-height: 82vh;
        text-align: center;
    }
    .intro h2{
        border-radius: 1em;
        border-color: #A8DADC;
    }
    .links{
        height: 18vh;
    }
    .skill-item{
        width: 100%;
        height: auto;
    }
    .skill{
        flex: 1;
        flex-basis: 23%;
        margin: 5px;
        max-width: 23%;
        padding: 1rem;
        align-self: center;
        text-align: center;
        font-weight: bold;
    }
</style>