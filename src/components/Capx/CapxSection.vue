<template>
    <section class="section-capx" id="capx">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-md-6 d-flex align-items-center ml-lg-5" id="capx-section">
              <div class="mx-auto text-left">
                <p class="mb-4" id="green-sub">CapX Store</p>
                <h2 class="lead mb-4" id="black-title-capx">La nouvelle ère de la mobilité</h2>
                <p class="mb-4" id="black-p-company">Les voitures à hydrogène fonctionnent avec une pile à combustible alimentée par un réservoir d'hydrogène. La recharge se fait à la pompe, dans des stations spéciales implantées en Europe.
                </p>
               
              </div>
            </div>              
            <div class="col-md-6 h-100 d-flex align-items-center justify-content-center" style="overflow:hidden;">
              <img src="@/assets/images/store.webp" alt="CapX Store" id="img-capx" class="img-fluid lazyload">          
            </div>
          </div>
        </div>
    </section>      
</template>
<script>
  import LazyLoad from 'vanilla-lazyload';
  
  
  export default {
    name: 'CapxSection',
    mounted() {
      new LazyLoad({
        elements_selector: '.lazyload',
      });
    }
  }
  </script>