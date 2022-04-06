<template>
    <div class="site-container">
        <div class="site-body">
            <section class="site-menu side-nav">
                <div>
                    <h1 class="mb-3">
                        <strong>
                            Portofolio
                        </strong>
                    </h1>
                </div>
                <nav class="p-2">
                    <NavLinks />
                </nav>
                <div class="responsive logo mb-2 mt-2">
                    <img alt="YFS logo" src="../assets/logo.png" />
                </div>
                <SocialLinks additionalClass="white-icon" />
                <div class="pt-3 pb-3">
                    <h4>Currently open for job opportunities</h4>
                </div>
            </section>
            <section class="page-container light-bg">
                <div class="page-body p-4">
                    <div class="mb-4">
                        <h1>Companies Projects</h1>
                        <hr>
                    </div>
                    <template v-if="dataReceived === null">
                        <Loading />
                    </template>
                    <template v-else-if="dataReceived === false">
                        <div>
                            <h2 class="text-danger">Could not fetch data</h2>
                        </div>
                    </template>
                    <template v-else>
                        <div v-for="portofolio in company_portofolios" :key="portofolio.id" class="mb-4">
                            <h2 class="heading">{{ portofolio.title }}</h2>
                            <hr>
                            <div class="responsive-flex p-3">
                                <div class="portofolio-img">
                                    <PortofolioImageList :portofolioImages="portofolio.portofolio_images" :ndaStatus="portofolio.nda" :portofolioId="portofolio.id" :showModal="this.showModal" @imageClicked="imageClicked"/>
                                </div>
                                <div class="portofolio-text">
                                    <p>{{portofolio.description}}</p>
                                    <p>
                                        <span v-for="(detail_item,detail_key,detail_index) in portofolio.detail" :key="detail_index">
                                            <strong>{{detail_key}} :</strong> <a target="_blank" v-if="detail_key=='Link'" :href="detail_item">{{detail_item}}</a> <span v-else>{{detail_item}}</span>
                                            <br>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </template>
                    <div class="mb-4">
                        <h1>Personal Projects</h1>
                        <hr>
                    </div>
                    <template v-if="dataReceived === null">
                        <Loading />
                    </template>
                    <template v-else-if="dataReceived === false">
                        <div>
                            <h2 class="text-danger">Could not fetch data</h2>
                        </div>
                    </template>
                    <template v-else>
                        <div v-for="portofolio in personal_portofolios" :key="portofolio.id" class="mb-4">
                            <h2 class="heading">{{ portofolio.title }}</h2>
                            <hr>
                            <div class="responsive-flex p-3">
                                <div class="portofolio-img">
                                    <PortofolioImageList :portofolioImages="portofolio.portofolio_images" :ndaStatus="portofolio.nda" :portofolioId="portofolio.id" :showModal="this.showModal" @imageClicked="imageClicked"/>
                                </div>
                                <div class="portofolio-text">
                                    <p>{{portofolio.description}}</p>
                                    <p>
                                        <span v-for="(detail_item,detail_key,detail_index) in portofolio.detail" :key="detail_index">
                                            <strong>{{detail_key}} :</strong> <a target="_blank" v-if="detail_key=='Link'" :href="detail_item">{{detail_item}}</a> <span v-else>{{detail_item}}</span>
                                            <br>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </section>
        </div>
    </div>
    <ImageModal v-if="showModal" @close="showModal = false" :imgSrc="imgSrc"/>
</template>
<script>
import NavLinks from "./NavLinks.vue";
import SocialLinks from "./SocialLinks.vue";
import ImageModal from "./ImageModal.vue";
import PortofolioImageList from "./PortofolioImageList.vue";
import Loading from "./Loading.vue";
export default {
    components: {
        NavLinks,
        SocialLinks,
        ImageModal,
        PortofolioImageList,
        Loading
    },
    data (){
        return {
            showModal: false,
            imgSrc:"",
            imgAlt:"",
            company_portofolios:[],
            personal_portofolios:[],
            dataReceived:null
        }
    },
    mounted(){
        fetch(import.meta.env.VITE_ROOT_API+'/portofolio')
            .then((res) => res.json())
            .then(data => {
                this.company_portofolios = data.company_portofolios;
                this.personal_portofolios = data.personal_portofolios;
                this.dataReceived = true;
            })
            .catch(err => this.dataReceived = false)
    },
    methods:{
        imageClicked: function(e){
            this.showModal = e.showModal;
            this.imgSrc = e.imgSrc;
            this.imgAlt = e.imgAlt;
        }
    }
}
</script>
<style scoped>
    .site-container {
    	max-width: 100vw;
      	height: 100vh;
      	display: flex;
      	flex-direction: column;
    }
    
    .site-body {
      	flex: 1;
      	min-height: 0;
      	display: flex;
        flex-direction: column;
    }
    
    .site-menu {
      	flex: 0 25vw;
    }
    
    .page-container {
    	flex: 1;
      	display: flex;
      	flex-direction: column;
    }
    
    .page-body {
      	flex: 1;
      	overflow-y: auto;
    }
    .side-nav{
        color: #F1FAEE;
        background-color: #E63946;
        padding: 1em;
        text-align: center;
    }
    .responsive-flex{
        display: flex;
        flex-direction: column;
    }
    .page-body .heading{
        text-align: center;
    }
    @media (min-width:1200px) {
        .side-nav{
            width: 25vw;
        }
        .page-container{
            min-height: 0;
        }
        .site-body {
            flex-direction: row;
        }
        .responsive-flex{
            display: flex;
            flex-direction: row;
        }
        .page-body .heading{
            text-align: left;
        }
    }
</style>
<style>
.logo img{
    width: 45%;
    max-width: 350px;
}
.portofolio-text{
    width: 100%;
    word-wrap: break-word;
}
.portofolio-img{
    width: 100%;
    text-align: center;
}
.portofolio-img img{
    width: 70%;
    border-radius: 0.5rem;
    filter: drop-shadow(0 0 0.25rem black);
}
.image-popup{
    flex: 1;
    flex-basis: 30%;
    margin: 5px;
    max-width: 30%;
}
.gallery{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
@media (min-width:1200px) {
    .portofolio-text{
        width: 50%;
        padding-left: 1rem;
        word-wrap: break-word;
    }
    .portofolio-img{
        width: 50%;
        padding-right: 1.5rem;
    }
    .portofolio-img img{
        width: 100%;
        border-radius: 0.5rem;
        filter: drop-shadow(0 0 0.25rem black);
    }
}
</style>