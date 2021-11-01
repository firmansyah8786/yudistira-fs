<template>
    <teleport to="body">
        <div class="modal" @click="$emit('close')">
            <div>
                <img class="image" :src="imgSrc" :alt="imgAlt" @click="$emit('close')">
            </div>
        </div>
    </teleport>
</template>
<script>
export default {
    props: ['imgSrc','imgAlt'],
    emits:['close']
}
</script>
<style scoped>
    .modal{
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.3);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal > div {
        background-color: white;
        /* padding: 10px; */
        border-radius: 10px;
        max-width: 90%;
    }
    .image{
        width: -moz-available;
        width: -webkit-fill-available;
        width: fill-available;
        border-radius: 0.5rem;
        filter: drop-shadow(0 0 0.25rem black);
    }
</style>