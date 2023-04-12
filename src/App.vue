<template>
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
