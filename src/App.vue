<template>
  <link href="https://fonts.googleapis.com/css2?family=Myanmar+MN&display=swap" rel="stylesheet">
  <indexVue></indexVue>
</template>

<script>
import indexVue from './components/Index.vue'


export default {
  name: 'App',
  components: {
    indexVue,
  }
  

}
</script>
<style>
/* Import du fichier CSS depuis assets */
@import '@/assets/css/style.css';
</style>
