<template>
    <section>
        <div class="d-flex flex-row top-nav">
            <router-link to="/" class="nav-links" tag="a">Home</router-link>
            <router-link to="/" class="nav-links" tag="a">Contact</router-link>
            <router-link to="/" class="nav-links" tag="a">Portofolio</router-link>
        </div>
    </section>
</template>
<script>
</script>
<style>
    .top-nav{
        position: fixed;
        top: 0;
        color: #F1FAEE;
        background-color: #E63946;
        width: 100%;
    }
    .top-nav a{
        color: #F1FAEE;
        text-decoration: none;
    }
    .nav-links{
        width: -moz-available;
        width: -webkit-fill-available;
        width: fill-available;
        padding: 0.5em;
        text-align: center;
    }
    .nav-links:hover{
        background-color: #BD323D;
        transition-duration: 0.15s, 0.15s, 0.15s;
    }
</style>