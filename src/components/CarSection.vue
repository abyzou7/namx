<template>
    <section class="section-vehicules" id="section-vehicles">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6">
              <div class="vehicle-info">
                <h3 id="green-sub">Nos modèles</h3>
                <h2 class="vehicle-title">VERSION GTH</h2>
                <h3 class="subtitle"> 95 990 €</h3>
                <div class="vehicle-table">
                  <div class="row">
                    <div class="col-6">
                      <div class="vehicle-feature">
                        <h4 class="feature-title">Autonomie</h4>
                        <p class="feature-text">800 KM avec un réservoir de 500 KM composé de 6 capsules (50KM chacune).</p>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="vehicle-feature">
                        <h4 class="feature-title">Accélération</h4>
                        <p class="feature-text">4,3 secondes pour atteindre 0-60 mph*.</p>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <div class="vehicle-feature">
                        <h4 class="feature-title">RECHARGE ULTRA-RAPIDE</h4>
                        <p class="feature-text">Le véhicule peut être complètement rechargé en seulement 3 minutes.</p>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="vehicle-feature">
                        <h4 class="feature-title">VITESSE MAXIMALE</h4>
                        <p class="feature-text">155 mph </p>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <div class="vehicle-feature">
                        <h4 class="feature-title">Émissions de CO2</h4>
                        <p class="feature-text">0 %</p>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="vehicle-feature">
                        <h4 class="feature-title">Puissance</h4>
                        <p class="feature-text">550 chevaux</p>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            <div class="col-md-6">
              <img src="../assets/images/car-front.webp" alt="NamX HUV from Front" class="vehicle-image img-fluid" id="presentation-car">
            </div>
          </div>
        </div>
    </section>

    <section class="section-vehicules section-vehicules-reverse">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 order-md-2">
              <div class="vehicle-info">
                <h3 id="green-sub">Nos modèles</h3>
                <h2 class="vehicle-title">VERSION GT</h2>
                <h3 class="subtitle"> 60 990 €</h3>
                <div class="vehicle-table">
                  <div class="row">
                    <div class="col-6">
                      <div class="vehicle-feature">
                        <h4 class="feature-title">Autonomie</h4>
                        <p class="feature-text">600 KM avec un réservoir de 300 KM composé de 6 capsules (50KM chacune).</p>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="vehicle-feature">
                        <h4 class="feature-title">Accélération</h4>
                        <p class="feature-text">6,5 secondes pour atteindre 0-60 mph*.</p>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <div class="vehicle-feature">
                        <h4 class="feature-title">RECHARGE ULTRA-RAPIDE</h4>
                        <p class="feature-text">Le véhicule peut être complètement rechargé en seulement 3 minutes.</p>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="vehicle-feature">
                        <h4 class="feature-title">VITESSE MAXIMALE</h4>
                        <p class="feature-text">125 mph </p>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <div class="vehicle-feature">
                        <h4 class="feature-title">Émissions de CO2</h4>
                        <p class="feature-text">0 %</p>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="vehicle-feature">
                        <h4 class="feature-title">Puissance</h4>
                        <p class="feature-text">350 chevaux</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 order-md-1">
              <img src="../assets/images/car-behind.webp" alt="NamX HUV from Behind" class="vehicle-image img-fluid" id="presentation-car">
            </div>
          </div>
        </div>
      </section>
      
    
    
      
</template>

<script>
  import LazyLoad from 'vanilla-lazyload';
  
  
  export default {
    name: 'SectionCar',
    mounted() {
      new LazyLoad({
        elements_selector: '.lazyload',
      });
    }
  }
  </script>