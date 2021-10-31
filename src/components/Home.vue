<template>
    <header class="intro dark-bg align-items-center justify-center">
        <div>
            <h2 class="p-5 border border-5">YUDISTIRA FIRMAN SYAH</h2>
        </div>
    </header>
    <main>
        <section class="links light-bg justify-center align-items-center">
            <div>
                <a class="social" href="https://github.com/firmansyah8786" rel="nofollow noopener noreferrer" target="_blank" title="Yudistira FS's GitHub account">
                    <em class="social-icon">
                        <svg height="36" viewBox="0 0 1792 1792" width="36" xmlns="http://www.w3.org/2000/svg"><path d="m1664 896q0 251-146.5 451.5t-378.5 277.5q-27 5-39.5-7t-12.5-30v-211q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-121-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-86-13.5q-44 113-7 204-79 85-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-40 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 89t.5 54q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path></svg>
                    </em>
                </a>
            </div>
            <div>
                <a class="social" href="https://www.linkedin.com/in/yudistira-firman-syah-29b456193" rel="nofollow noopener noreferrer" target="_blank" title="Yudistira FS's linkedin">
                    <em class="social-icon">
                        <svg height="36" viewBox="0 0 1792 1792" width="36" xmlns="http://www.w3.org/2000/svg"><path d="m477 625v991h-330v-991zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path></svg>
                    </em>
                </a>
            </div>
            <div>
                <a class="social" href="mailto:firmansyah8786@gmail.com" title="Yudistira FS's email">
                    <em class="social-icon">
                        <svg height="36" viewBox="0 0 1792 1792" width="36" xmlns="http://www.w3.org/2000/svg"><path d="m1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path></svg>
                    </em>
                </a>
            </div>
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
export default {
    components: {
        TopNav
    }
}
</script>
<style>
    .dark-bg{
        background-color: #1D3557;
        color: #A8DADC;
    }
    .light-bg{
        background-color: #F1FAEE;
        color: #1D3557;
    }
    .intro{
        min-height: 82vh;
        text-align: center;
    }
    .intro h2{
        border-radius: 1em;
        border-color: #A8DADC;
    }
    .justify-center {
        display: flex;
        justify-content: center;
    }
    .column {
        display: flex;
        flex-direction: column;
    }
    .wrap {
        display: flex;
        flex-wrap: wrap;
    }
    .social-icon{
        color: #E63946;
        fill: currentColor;
        margin-left: 0.5em;
        margin-right: 0.5em;
    }
    .links{
        height: 18vh;
    }
    @media (max-width: 799px) {
        .text-block{
            padding: 1rem 10% 0;
        }
    }
    @media (min-width:800px) and (max-width: 1199px) {
        .text-block{
            padding: 1rem 15% 0;
        }
    }
    @media (min-width: 1200px) {
        .text-block{
            padding: 1rem 20% 0;
        }
    }
</style>