<template>
  <div>
    <NavbarBlack></NavbarBlack>
    <div id="contentCar" class="container my-5">
      <div class="row">
        <!-- Première colonne -->
        <div class="col-md-6">
          <!-- Slider avec images -->
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="@/assets/images/Namx_R2.webp" class="d-block w-100" alt="Namx_R2">
              </div>
              <div class="carousel-item">
                <img src="@/assets/images/Namx_R3.webp" class="d-block w-100" alt="Namx_R3">
              </div>
              <div class="carousel-item">
                <img src="@/assets/images/Namx_R4.webp" class="d-block w-100" alt="Namx_R3">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
      </div>

      <!-- Deuxième colonne -->
      <div class="col-md-6">
        <!-- Texte avec titre, description et prix -->
        <p id="black-p-company">NAMX HUV Historical Edition</p>
        <p id="green-sub">Modèle</p>
        <p>Prix de la voiture</p>
      </div>
    </div>
  </div>
  </div>
</template>



<script>
import NavbarBlack from '../Car/NavbarBlack.vue'
export default {
  name: 'CarIndex',
  components: {
    NavbarBlack
  }
}
</script>

<style>
#contentCar {
  padding-top: 60px; /* ou toute autre valeur de votre choix */
}
</style>