<template>
    <Navbar></Navbar>
    
    <div class="banner-success">
        <div class="banner-success2 d-flex align-items-center">
            <div class="container d-flex flex-column justify-content-center align-items-center" style="margin-top: -20vh;">
                <p class="text-white mb-0" id="sub-text">Félicitation</p>
        <h1 class="text-white mb-3" id="payment-success">Votre paiement a été validé avec succès.</h1>
      </div>
    </div>
  </div>
      
</template>


<script>
  import LazyLoad from 'vanilla-lazyload';
    import Navbar from '../Navbar.vue'
  
  
  export default {
    name: 'PaymentSuccess',
    mounted() {
      new LazyLoad({
        elements_selector: '.lazyload',
      });
    },
    components: {
        Navbar
    }
  }
  </script>