<template>
    <template v-if="portofolioImages.length">
        <PortofolioImage :portofolioId="portofolioId" :imageData="portofolioImages[0]" :showModal="showModal" @imageClicked="(imageClicked)=>$emit('imageClicked',imageClicked)" />
        <!-- <img :src="portofolioImages[0].image_url" :alt="portofolioImages[0].alt" @click="toggleModal"> -->
        <div class="gallery mt-3">
            <template v-for="(image,key,data_index) in portofolioImages" :key="data_index">
                <template v-if="image.index > 1">
                    <PortofolioImage :customClass="'image-popup'" :portofolioId="portofolioId" :imageData="image" :showModal="showModal" @imageClicked="(imageClicked)=>$emit('imageClicked',imageClicked)" />
                </template>
                <!-- <img  class="image-popup" :src="image.image_url" :alt="image.alt" @click="toggleModal"> -->
            </template>
        </div>
        <div v-if="ndaStatus" class="text-center mt-4 mb-4">
            <h5>* Internal project. Under the NDA</h5>
        </div>
    </template>
</template>
<script>
import Loading from "./Loading.vue";
import PortofolioImage from "./PortofolioImage.vue";
export default {
    emits:['imageClicked'],
    components: {
        Loading,
        PortofolioImage
    },
    props: ['portofolioImages','ndaStatus','portofolioId','showModal']
}
</script>