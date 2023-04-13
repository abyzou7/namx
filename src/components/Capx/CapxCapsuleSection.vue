<template>
    <section class="section-capsule" id="capsule">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-md-6 h-100 d-flex align-items-center justify-content-center" style="overflow:hidden;">
              <img src="@/assets/images/cap.webp" alt="Front design of the car" id="img-design" class="img-fluid lazyload" style="object-fit: cover;">          
            </div>
            <div class="col-md-6 d-flex align-items-center ml-lg-5" id="capsule" style="padding-left:5%;">
              <div class="mx-auto text-left">
                <p class="mb-4" id="green-sub">Recharge</p>
                <h2 class="lead mb-4" id="white-title-company">Des capsules d'hydrogène pour une autonomie inédite</h2>
                <p class="mb-4" id="white-p-company">L'hydrogène comme alternative aux voitures électriques se développe. Le HUV NamX utilise un système de pile à combustible avec un set de capsules intégré pour plus d'autonomie. Accessibilité limitée des pompes à hydrogène.
                </p>
              </div>
            </div>              
          </div>
        </div>
      </section>   
</template>

<script>
  import LazyLoad from 'vanilla-lazyload';
  
  
  export default {
    name: 'CapxCapsuleSection',
    mounted() {
      new LazyLoad({
        elements_selector: '.lazyload',
      });
    }
  }
  </script>