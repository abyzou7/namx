<template>
    <nav class="navbar navbar-expand-lg navbar-transparent bg-transparent">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="../assets/images/logo-white.png" alt="Logo NamX">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#section-company">Notre Vision</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#section-design">Notre Design</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#section-vehicles">Nos Modèles</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#capsules">Hydrogène</a>
            </li>
          </ul>
        </div>
        <div class="ml-auto">
          <button class="btn-custom-navbar">Acheter</button>
        </div>
      </div>
    </nav>
  </template>
  
<script>
export default {
  name: 'NavigationBar'
}
</script>
