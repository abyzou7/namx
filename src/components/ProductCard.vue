<template>
  <div class="card">
    <img :src="product.image" class="card-img-top" :alt="product.name">
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">{{ product.description }}</p>
      <p class="card-text"><small class="text-muted">{{ product.price }} €</small></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
/* Styles spécifiques au composant */
.card {
  width: 18rem;
  margin-bottom: 2rem;
}
</style>
