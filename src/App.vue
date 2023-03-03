<script>
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',

  components: {
    AppHeader,
  },
}

</script>

<template>
  <AppHeader />
  <main class="p-3">
    <router-view></router-view>
  </main>
  <!-- <AppMain /> -->
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use 'bootstrap/scss/bootstrap' as *;
</style>
