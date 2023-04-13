<template>
    <NavbarBlack></NavbarBlack>
    <div class="mt-5 container">
        <div class="row">
          <div class="col-md-6">
            <div id="carousselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div id="carousselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators mt-4">
                        <button type="button" data-bs-target="#carousselExampleIndicators" data-bs-slide-to="0" class="active btn-dark" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carousselExampleIndicators" data-bs-slide-to="1" class="btn-dark" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carousselExampleIndicators" data-bs-slide-to="2" class="btn-dark" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carousselExampleIndicators" data-bs-slide-to="3" class="btn-dark" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carousselExampleIndicators" data-bs-slide-to="4" class="btn-dark" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carousselExampleIndicators" data-bs-slide-to="5" class="btn-dark" aria-label="Slide 6"></button>
                        <button type="button" data-bs-target="#carousselExampleIndicators" data-bs-slide-to="6" class="btn-dark" aria-label="Slide 7"></button>
                        <button type="button" data-bs-target="#carousselExampleIndicators" data-bs-slide-to="7" class="btn-dark" aria-label="Slide 8"></button>
                      </div>
                      
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="@/assets/images/Namx1.webp" class="d-block w-100" alt="Namx Rotate 1">
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/images/Namx2.webp" class="d-block w-100" alt="Namx Rotate 2">
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/images/Namx3.webp" class="d-block w-100" alt="Namx Rotate 3">
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/images/Namx4.webp" class="d-block w-100" alt="Namx Rotate 4">
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/images/Namx5.webp" class="d-block w-100" alt="Namx Rotate 5">
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/images/Namx6.webp" class="d-block w-100" alt="Namx Rotate 6">
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/images/Namx7.webp" class="d-block w-100" alt="Namx Rotate 7">
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/images/Namx8.webp" class="d-block w-100" alt="Namx Rotate 8">
                    </div>
                    </div>
                    <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carousselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carousselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                    </button> -->
                </div>
            </div>
            

        </div>
        <div class="col-md-6 overflow-auto">
            <p class="mb-4" id="green-sub">Soyez unique avec notre modèle exclusif !</p>
            <h2 class="lead mb-4" id="model-choose">NamX HUV Historical Edition</h2>
            <button class="btn-custom-model" id="showButton">
                <span class="left-text">Version GTH</span>
                <span class="right-text">95 990€</span>
            </button>
            <button class="btn-custom-model" id="showButton2">
                <span class="left-text">Version GT</span>
                <span class="right-text">60 990€</span>
            </button>

            <div id="myDiv" class="hidden">
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
                  <div class="text-center">
                    <p id="green-sub">Commandez votre version GTH</p>
                    <RouterLink to="/paymentgth">
                        <button class="btn-custom">Acheter maintenant</button>
                    </RouterLink>
                  </div>
            </div>
        
            <div id="myDiv2" class="hidden2">
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
                
                <div class="text-center">
                    <p id="green-sub">Commandez votre version GT</p>
                    <RouterLink to="/paymentgt">
                        <button class="btn-custom">Acheter maintenant</button>
                    </RouterLink>
                  </div>
                </div>
        </div>
      </div>
    </div>
	<Footer></Footer>
  </template>

<style>
.hidden {
    display: none;
}
.hidden2 {
    display: none;
}
</style>
  
<script>
import NavbarBlack from '../Car/NavbarBlack.vue'
import Footer from '../Footer.vue'
    export default {
      name: 'CarIndex',
      components: {
        NavbarBlack, Footer
    },
    mounted() {
        const showButton = document.getElementById('showButton');
        const myDiv = document.getElementById('myDiv');
        const showButton2 = document.getElementById('showButton2');
        const myDiv2 = document.getElementById('myDiv2');
        showButton2.addEventListener('click', () => {
            showButton2.style.opacity = "1";
            showButton.style.opacity = "0.4";
            myDiv2.classList.remove('hidden2');
            myDiv.classList.add('hidden');
        });


        showButton.addEventListener('click', () => {
            showButton.style.opacity = "1";
            showButton2.style.opacity = "0.4";
            myDiv.classList.remove('hidden');
            myDiv2.classList.add('hidden2');
        });
    },
    };
</script>