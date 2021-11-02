<template>
    <router-link to="/" class="nav-links" tag="a"><strong>Home</strong></router-link>
    <router-link to="/#skills" class="nav-links" tag="a"><strong>Skills</strong></router-link>
    <router-link to="/portofolio" class="nav-links" tag="a"><strong>Portofolio</strong></router-link>
</template>
<script>
</script>
<style scoped>
.nav-links{
    width: -moz-available;
    width: -webkit-fill-available;
    width: fill-available;
    padding: 0.5em;
    text-align: center;
    color: #F1FAEE;
    text-decoration: none;
}
.nav-links a{
    color: #F1FAEE;
    text-decoration: none;
}
.nav-links:hover{
    background-color: #BD323D;
    transition-duration: 0.15s, 0.15s, 0.15s;
}
</style>