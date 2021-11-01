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
</style>