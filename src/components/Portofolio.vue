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
                    <div class="mb-4">
                        <h2 class="heading">PT. Onklas Prima Indonesia</h2>
                        <hr>
                        <div class="responsive-flex p-3">
                            <div class="portofolio-img">
                                <img src="/img/onklas.jpg" alt="onklas" @click="toggleModal">
                                <div class="text-center mt-4 mb-4">
                                    <h5>* Internal project. Under the NDA</h5>
                                </div>
                            </div>
                            <div class="portofolio-text">
                                <p>Onklas is a company that makes one stop solution for school management system. It's products include student registration management, payment management, presence management, book management, etc.</p>
                                <p>
                                    <strong>Role :</strong> Backend developer
                                    <br>
                                    <strong>Responsibilities :</strong> Develop RESTful APIs for new or existing product. Add more features to a product as requested. Fix bugs found on a product. Create or modify database for a product.
                                    <br>
                                    <strong>Languages :</strong> PHP.
                                    <br>
                                    <strong>Frameworks/Libs :</strong> Laravel.
                                    <br>
                                    <strong>Other technologies :</strong> MySql.
                                    <br>
                                    <strong>Status :</strong> Internal project. Is online. Under the NDA.
                                    <br>
                                    <a href="https://onklas.id/">https://onklas.id/</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="mb-4">
                        <h2 class="heading">The Edge Singapore</h2>
                        <hr>
                        <div class="responsive-flex p-3">
                            <div class="portofolio-img mb-4">
                                <img src="/img/theedgesingapore.jpg" alt="the edge singapore" @click="toggleModal">
                            </div>
                            <div class="portofolio-text">
                                <p>The Edge Singapore is a product owned by someone in Edgeprop.sg at the time I was there. The Edge Singapore, TES for short, is an news publication website. There is also a mobile app version of it. It uses drupal as its Content Management System. It uses module feature, which is like wordpress plugin, to customize the website as desired. My job usually takes place around making or modifying custom module to add more feature in the website such as creating a custom import function.</p>
                                <p>
                                    <strong>Role :</strong> Backend engineer
                                    <br>
                                    <strong>Responsibilities :</strong> Maintain the main website’s system to be free of bugs. Add more features to the website as requested. Participate in development and maintenance for company web application using drupal.
                                    <br>
                                    <strong>Languages :</strong> PHP.
                                    <br>
                                    <strong>Frameworks/Libs :</strong> Drupal.
                                    <br>
                                    <strong>Other technologies :</strong> MySql.
                                    <br>
                                    <strong>Status :</strong> Is online.
                                    <br>
                                    <a href="https://www.theedgesingapore.com/">https://www.theedgesingapore.com/</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="mb-4">
                        <hr>
                        <h1 class="heading">Personal / Freelance Projects</h1>
                        <hr>
                    </div>
                    <div class="mb-4">
                        <h2 class="heading">Wix API Integration with Wix App</h2>
                        <hr>
                        <div class="responsive-flex p-3">
                            <div class="portofolio-img">
                                <img src="/img/WixApp.jpg" alt="wix app integration" @click="toggleModal">
                                <div class="gallery mt-3">
                                    <img class="image-popup" src="/img/WixManageAppPage.jpg" alt="wix app integration" @click="toggleModal">
                                    <img class="image-popup" src="/img/WixAppProduct.jpg" alt="wix app integration" @click="toggleModal">
                                    <img class="image-popup" src="/img/WixAppProductMedia.jpg" alt="wix app integration" @click="toggleModal">
                                    <img class="image-popup" src="/img/WixProduct.jpg" alt="wix app integration" @click="toggleModal">
                                </div>
                            </div>
                            <div class="portofolio-text">
                                <p>This is a freelance job I got to integrate Wix API to the user's website. The user want to be able to manage his products in his own database and wixsite from one place. Wix API uses OAuth 2.0 as authentication for the APIs. The website itself uses native PHP.</p>
                                <p>
                                    <strong>Role :</strong> Full-stack Developer
                                    <br>
                                    <strong>Responsibilities :</strong> Integrate Wix API with the website.
                                    <br>
                                    <strong>Languages :</strong> PHP.
                                    <br>
                                    <strong>Frameworks/Libs :</strong> Wix API, Guzzle.
                                    <br>
                                    <strong>Other technologies :</strong> MySql, OAtuh 2.0
                                    <br>
                                    <strong>Status :</strong> Is online. Private wix app.
                                    <br>
                                </p>
                            </div>
                        </div>
                    </div>
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
export default {
    components: {
        NavLinks,
        SocialLinks,
        ImageModal
    },
    data (){
        return {
            showModal: false,
            imgSrc:"",
            imgAlt:"",
        }
    },
    methods:{
        toggleModal: function(e){
            this.showModal = !this.showModal;
            this.imgSrc = e.currentTarget.getAttribute('src');
            this.imgAlt = e.currentTarget.getAttribute('alt');
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
    .responsive-flex{
        display: flex;
        flex-direction: column;
    }
    .page-body .heading{
        text-align: center;
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
        .page-body .heading{
            text-align: left;
        }
    }
</style>