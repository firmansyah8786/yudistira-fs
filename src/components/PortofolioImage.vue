<template>
    <template v-if="this.imageUrl == ''">
        <Loading :additionalClass="customClass"/>
    </template>
    <template v-else >
        <img :class="customClass" :src="this.imageUrl" :alt="imageData.alt" @click="$emit('imageClicked',{showModal:!showModal, imgSrc:this.imageUrl, imgAlt:imageData.alt})">
    </template>
</template>
<script>
import Loading from "./Loading.vue";
export default {
    props: ['imageData','portofolioId','customClass','showModal'],
    emits:['imageClicked'],
    components: {
        Loading
    },
    data (){
        return {
            imageUrl: '',
        }
    },
    mounted(){
        fetch(import.meta.env.VITE_ROOT_API+'/portofolio/'+this.portofolioId+'/image/'+this.imageData.id+'/url')
            .then((res) => res.json())
            .then(data => {
                this.imageUrl = data.image_url;
            })
    },
}
</script>
<style scoped>
/* .image-popup{
    flex: 1;
    flex-basis: 30%;
    margin: 5px;
    max-width: 30%;
} */
</style>