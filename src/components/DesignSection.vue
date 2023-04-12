<template>
    <section class="section-design" id="section-design">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-md-6 h-100 d-flex align-items-center justify-content-center" style="overflow:hidden;">
              <img src="../assets/images/design.webp" alt="Front design of the car" id="img-design" class="img-fluid lazyload">          
            </div>
            <div class="col-md-6 d-flex align-items-center ml-lg-5" id="design-section">
              <div class="mx-auto text-left">
                <p class="mb-4" id="green-sub">notre design</p>
                <h2 class="lead mb-4" id="white-title-company">Un HUV futuriste aux performances solides, avec style.</h2>
                <p class="mb-4" id="white-p-company">Fruit d'une collaboration entre NamX et Pininfarina, la conception de la voiture reflète une attention ferme aux détails et à la pureté du design.
                </p>
                <RouterLink to="/car">
                  <button class="btn-custom">Acheter</button>
                </RouterLink>
              </div>
            </div>              
          </div>
        </div>
      </section>
</template>
<script>
  import LazyLoad from 'vanilla-lazyload';
  
  
  export default {
    name: 'SectionDesign',
    mounted() {
      new LazyLoad({
        elements_selector: '.lazyload',
      });
    }
  }
  </script>