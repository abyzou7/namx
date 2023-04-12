<template>
  <navbar></navbar>
  <div class="banner">
        <div class="banner d-flex align-items-center" style="background-image: url('@/assets/banner-bg.jpg');">
      <div class="container flex-column justify-content-start" style="margin-top: -20vh;">
        <p class="text-white mb-0" id="sub-text">NamX</p>
        <h1 class="text-white mb-3" id="main-text">une voiture écologique et innovante</h1>
      </div>
    </div>
  </div>
  <companySection></companySection>
  <designSection></designSection>
  <CarSection></CarSection>
  <CapsulesSection></CapsulesSection>
  <VideoSection></VideoSection>
  <Footer></Footer>
  
</template>

<script>
import Navbar from './Navbar.vue'
import CompanySection from './CompanySection.vue'
import DesignSection from './DesignSection.vue'
import CarSection from './CarSection.vue'
import CapsulesSection from './CapsulesSection.vue'
import VideoSection from './VideoSection.vue'
import Footer from './Footer.vue'

export default {
  name: 'indexVue',
  components: {
    Navbar, CompanySection, DesignSection, CarSection, CapsulesSection, VideoSection, Footer
  }
}
</script>