<template>
    <footer class="bg-white text-dark pt-4 pb-2" style="margin-top: 10vh;">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="text-left">
                <img src="../assets/images/logo-black.png" alt="Logo NamX" width="200">
                <p class="my-5" style="font-family:'Myanmar MN';">Obtenez votre HUV Premium</p>
                <RouterLink to="/car">
                  <button class="btn-custom">Acheter</button>
                </RouterLink>
              </div>
            </div>
            <div class="col-md-4" id="about-us">
              <h5 class="text-uppercase mb-3">À propos de nous</h5>
              <ul class="list-unstyled">
                <li><a href="#">Notre vision</a></li>
                <li><a href="#">Notre design</a></li>
                <li><a href="#">Nos modèles</a></li>
                <li><a href="#">CapX Store</a></li>

              </ul>
            </div>
            <div class="col-md-4">
              <h5 class="text-uppercase mb-3">Fondateurs</h5>
              <p class="mb-2">NamX est une marque de voiture fondée par Faouzi ANNAJAH et Thomas de LUSSAC. </p>
            </div>
          </div>
        </div>
        <div class="container-fluid text-center text-dark py-2">
          <p class="mb-0">&copy; Site développé pour un projet pédagogique.</p>
        </div>
      </footer>
      
      
</template>

<script>
    export default {
        name: 'FooterSection',
    }
</script>