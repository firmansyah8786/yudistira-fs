<template>
    <section>
        <nav class="d-flex top-nav">
            <NavLinks />
        </nav>
    </section>
</template>
<script>
import NavLinks from "./NavLinks.vue";
export default {
    components: {
        NavLinks
    }
}
</script>
<style>
    .top-nav{
        position: fixed;
        top: 0;
        color: #F1FAEE;
        background-color: #E63946;
        width: 100%;
    }
</style>