<template>
    <navbar></navbar>
    <div class="banner-capx">
          <div class="banner2-capx d-flex align-items-center">
        <div class="container flex-column justify-content-start" style="margin-top: -20vh;">
          <p class="text-white mb-0" id="sub-text">CapX Store</p>
          <h1 class="text-white mb-3" id="main-text">LA RECHARGE HYDROGÈNE, LA STATION DU FUTUR</h1>
        </div>
      </div>
    </div>
    <capxSection></capxSection>
    <capxCapsuleSection></capxCapsuleSection>
    <Footer></Footer>
</template>

<script>
import Navbar from '../Navbar.vue'
import CapxSection from './CapxSection.vue'
import CapxCapsuleSection from './CapxCapsuleSection.vue'
import Footer from '../Footer.vue'

export default {
    name: 'CapxIndex',
    components: {
        Navbar, CapxSection, CapxCapsuleSection, Footer
    }
}

</script>