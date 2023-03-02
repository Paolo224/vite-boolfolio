<script>
import { store } from './store.js';
import axios from 'axios';
import AppMain from './components/AppMain.vue';

export default {
  name: 'App',

  components: {
    AppMain,
  },

  data() {
    return {
      store,
      urlAddress: 'http://127.0.0.1:8000/api/projects',
    }
  },

  methods: {
    getProjects() {
      axios.get(this.urlAddress, {
        params: {
        }
      })
        .then((response) => {
          this.store.projects = response.data.results;
        })
        .catch(function (error) {
          console.warn(error);
        });
    }
  },

  created() {
    this.getProjects();
  },
}

</script>

<template>
  <AppMain />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use 'bootstrap/scss/bootstrap' as *;
</style>
