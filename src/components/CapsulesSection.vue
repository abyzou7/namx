<template>
<section class="section-capsules" id="capsules">
    <div class="container">
        <div class="row align-items-center">
        <div class="col-md-12 text-center">
            <h3 id="green-sub">Recharge</h3>
            <h2 class="caps-title">Système de recharge innovant</h2>
            <p id="black-p-company">La NAMX HUV est la première voiture au monde alimentée en partie par un système de réservoir amovible breveté qui promet un accès facile à l'hydrogène. Le réservoir principal est complété par un ensemble de six capsules pour une autonomie totale allant jusqu'à 800 kilomètres. Ces capsules peuvent être remplacées en 30 secondes.</p>
        </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-6">
              <img src="../assets/images/capsule.webp" alt="Capsule de carburant" class="img-fluid">
              <div class="text-center mt-3">
                <RouterLink to="/capx">
                  <button class="btn-custom">Découvrir</button>
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
    name: 'SectionCapsules',
    mounted() {
      new LazyLoad({
        elements_selector: '.lazyload',
      });
    }
  }
  </script>