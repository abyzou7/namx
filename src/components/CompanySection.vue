<template>
    <section class="section-company">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-md-6 d-flex align-items-center ml-lg-5">
              <div class="mx-auto text-left">
                <p class="mb-4" id="green-sub">Notre Vision</p>
                <h2 class="lead mb-4" id="black-title-company">New Automotive Mobility Exploration</h2>
                <p class="mb-4" id="black-p-company">Promouvoir un avenir durable grâce à notre technologie. NamX HUV révolutionne l'industrie de la mobilité en offrant un véhicule à hydrogène propre et puissant sans compromettre les performances.
                </p>
                <button class="btn-custom">Acheter</button>
              </div>
            </div>              
            <div class="col-md-6 h-100 d-flex align-items-center justify-content-center" style="overflow:hidden;">
              <img src="../assets/images/about.webp" alt="Back of the car" id="img-company" class="img-fluid lazyload">          
            </div>
          </div>
        </div>
    </section>      
</template>
<script>
  import LazyLoad from 'vanilla-lazyload';
  
  
  export default {
    name: 'SectionCompany',
    mounted() {
      new LazyLoad({
        elements_selector: '.lazyload',
      });
    }
  }
  </script>